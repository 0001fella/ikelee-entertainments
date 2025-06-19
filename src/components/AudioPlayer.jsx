import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

const AudioPlayer = ({ audioSrc, title = "Untitled Track", artist = "Unknown Artist" }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle time updates
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Skip forward/backward
  const skip = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  // Set up event listeners
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleTimeUpdate);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleTimeUpdate);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg max-w-md w-full">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        preload="metadata"
        volume={volume}
      />

      {/* Track info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white truncate">{title}</h3>
        <p className="text-gray-400 text-sm">{artist}</p>
      </div>

      {/* Progress bar */}
      <div 
        ref={progressRef}
        className="h-2 bg-gray-700 rounded-full mb-4 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Time display */}
      <div className="flex justify-between text-xs text-gray-400 mb-6">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Volume control */}
        <div className="flex items-center space-x-2 w-1/4">
          <button onClick={toggleMute} className="text-gray-400 hover:text-white">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
          />
        </div>

        {/* Main controls */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => skip(-10)} 
            className="text-gray-400 hover:text-white p-2"
            aria-label="Skip backward 10 seconds"
          >
            <SkipBack size={20} />
          </button>
          
          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button 
            onClick={() => skip(10)} 
            className="text-gray-400 hover:text-white p-2"
            aria-label="Skip forward 10 seconds"
          >
            <SkipForward size={20} />
          </button>
        </div>

        {/* Empty div for spacing */}
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;