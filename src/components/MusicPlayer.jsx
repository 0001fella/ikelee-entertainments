// src/components/MusicPlayer.jsx
import { useRef, useState } from 'react';
import { useAudioContext } from './AudioContextProvider';
import AudioVisualizer from './AudioVisualizer';

const MusicPlayer = () => {
  const audioRef = useRef();
  const { audioContext, createAudioSource } = useAudioContext();
  const [audioSource, setAudioSource] = useState(null);

  const handlePlay = () => {
    if (audioRef.current && !audioSource) {
      const source = createAudioSource(audioRef.current);
      setAudioSource(source);
      audioRef.current.play();
    }
  };

  return (
    <div className="relative h-96">
      <AudioVisualizer 
        audioSource={audioSource} 
        color="#8b5cf6" 
        wireframe={false}
      />
      <audio ref={audioRef} src="/audio/track.mp3" />
      <button 
        onClick={handlePlay} 
        className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
      >
        Play
      </button>
    </div>
  );
};

export default MusicPlayer;
