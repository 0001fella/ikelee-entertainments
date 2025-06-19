import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useAudioContext } from './AudioContextProvider'; // Assume you have this context

const AudioVisualizer = ({ audioSource, color = '#ec4899', wireframe = true }) => {
  const containerRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);
  const { audioContext } = useAudioContext(); // Get audio context from provider

  // Refs for Three.js objects
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef();
  const rendererRef = useRef();
  const meshRef = useRef();
  const analyserRef = useRef();
  const dataArrayRef = useRef();
  const controlsRef = useRef();
  const rafIdRef = useRef();

  // Initialize audio analyzer
  const initAudioAnalyzer = () => {
    if (!audioSource || !audioContext) return;

    analyserRef.current = audioContext.createAnalyser();
    analyserRef.current.fftSize = 256;
    audioSource.connect(analyserRef.current);
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);
  };

  // Initialize Three.js scene
  const initThreeScene = () => {
    // Camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    cameraRef.current.position.z = 5;

    // Renderer
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Controls
    controlsRef.current = new OrbitControls(
      cameraRef.current, 
      rendererRef.current.domElement
    );
    controlsRef.current.enableZoom = false;
    controlsRef.current.enablePan = false;

    // Geometry with more detail for better visualization
    const geometry = new THREE.IcosahedronGeometry(1, 4);
    
    // Material with optional wireframe
    const material = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(color),
      wireframe,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.2,
      metalness: 0.8,
      roughness: 0.2
    });

    meshRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(meshRef.current);

    // Add ambient and directional light for better visuals
    const ambientLight = new THREE.AmbientLight(0x404040);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(directionalLight);

    // Add subtle background effect
    const bgGeometry = new THREE.SphereGeometry(5, 32, 32);
    const bgMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.2
    });
    const background = new THREE.Mesh(bgGeometry, bgMaterial);
    sceneRef.current.add(background);

    setIsInitialized(true);
  };

  // Animation loop with audio reactivity
  const animate = () => {
    rafIdRef.current = requestAnimationFrame(animate);

    if (analyserRef.current && meshRef.current) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      
      // Scale mesh based on audio frequencies
      const lowerHalfArray = Array.from(dataArrayRef.current).slice(
        0, 
        Math.floor(dataArrayRef.current.length / 2)
      );
      const lowerMax = Math.max(...lowerHalfArray) / 255;
      
      meshRef.current.scale.x = 1 + lowerMax * 0.5;
      meshRef.current.scale.y = 1 + lowerMax * 0.5;
      meshRef.current.scale.z = 1 + lowerMax * 0.5;
      
      // Pulsing effect
      meshRef.current.material.emissiveIntensity = lowerMax * 0.5;
    }

    // Auto-rotation when not interacting
    if (controlsRef.current && !controlsRef.current.enabled) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.005;
    }

    controlsRef.current.update();
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  // Handle resize
  const handleResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;
    
    cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
  };

  // Setup and cleanup
  useEffect(() => {
    initThreeScene();
    initAudioAnalyzer();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafIdRef.current);
      
      if (analyserRef.current && audioSource) {
        audioSource.disconnect(analyserRef.current);
      }
      
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  // Re-initialize analyzer when audio source changes
  useEffect(() => {
    if (isInitialized && audioSource) {
      initAudioAnalyzer();
    }
  }, [audioSource, isInitialized]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default AudioVisualizer;