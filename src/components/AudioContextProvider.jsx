// AudioContextProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    // Initialize audio context on user interaction
    const initAudio = () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(ctx);
      window.removeEventListener('click', initAudio);
    };

    window.addEventListener('click', initAudio, { once: true });

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const createAudioSource = (element) => {
    if (!audioContext) return null;
    const source = audioContext.createMediaElementSource(element);
    return source;
  };

  return (
    <AudioContext.Provider value={{ audioContext, createAudioSource }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);