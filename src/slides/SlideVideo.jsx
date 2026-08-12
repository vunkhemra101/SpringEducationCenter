import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipForward } from 'lucide-react';

export default function SlideVideo({ onNext }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Fix: React doesn't correctly apply the muted attribute on video elements
  // Must set it directly via ref
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setProgress((video.currentTime / video.duration) * 100);
    const onLoadedMetadata = () => setDuration(video.duration);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) { video.pause(); } else { video.play(); }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const elapsed = videoRef.current ? (progress / 100) * duration : 0;

  return (
    // Fixed: uses fixed positioning to escape parent overflow/padding on mobile
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-20 bg-black flex flex-col"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Top bar */}
      <div
        className="w-full flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}
      >
        <span className="text-white/80 text-sm font-semibold tracking-wide">📽 Video</span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="flex items-center gap-2 bg-white/20 active:bg-white/30 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
        >
          Skip <SkipForward size={14} />
        </motion.button>
      </div>

      {/* Video — fills all available space */}
      <video
        ref={videoRef}
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        className="w-full flex-1 min-h-0"
        style={{ objectFit: 'contain', background: '#000', display: 'block' }}
        src="/bg-video.mp4"
      />

      {/* Bottom controls */}
      <div
        className="w-full flex-shrink-0 flex flex-col gap-2 px-5 pb-5 pt-8"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}
      >
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.2s linear' }}
          />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-white/20 active:bg-white/30 border border-white/20 flex items-center justify-center text-white"
            >
              {playing ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Mute */}
            <button
              onClick={toggleMute}
              className="w-11 h-11 rounded-full bg-white/20 active:bg-white/30 border border-white/20 flex items-center justify-center text-white"
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Time */}
            <span className="text-white/70 text-xs font-mono">
              {formatTime(elapsed)} / {formatTime(duration)}
            </span>
          </div>

          {/* Skip right */}
          <button
            onClick={onNext}
            className="flex items-center gap-1 bg-white/20 active:bg-white/30 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            <SkipForward size={14} /> Skip
          </button>
        </div>
      </div>
    </motion.div>
  );
}
