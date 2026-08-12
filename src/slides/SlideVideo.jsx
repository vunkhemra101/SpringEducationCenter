import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipForward } from 'lucide-react';

export default function SlideVideo({ onNext }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center gap-0"
    >
      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-8 py-4 absolute top-0 left-0 z-30"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }}
      >
        <span className="text-white/80 text-sm font-semibold tracking-wide uppercase">📽 Video</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Skip Video <SkipForward size={15} />
        </motion.button>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        playsInline
        muted
        className="w-full h-full object-contain"
        src="/bg-video.mp4"
      />

      {/* Bottom controls */}
      <div
        className="w-full absolute bottom-0 left-0 z-30 flex flex-col gap-3 px-8 pb-6 pt-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
      >
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* Mute */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Time */}
            <span className="text-white/70 text-xs font-mono">
              {formatTime(elapsed)} / {formatTime(duration)}
            </span>
          </div>

          {/* Skip button bottom-right */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <SkipForward size={14} /> Skip
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
