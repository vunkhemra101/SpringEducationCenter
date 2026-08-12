import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipForward } from 'lucide-react';

export default function SlideVideo({ onNext }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // React bug: muted prop must be set via ref on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;

    const onTimeUpdate = () => setProgress((video.currentTime / video.duration) * 100 || 0);
    const onLoadedMetadata = () => setDuration(video.duration);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  // Auto-hide controls after 3s when playing
  useEffect(() => {
    if (!playing) { setShowControls(true); return; }
    const t = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(t);
  }, [playing, progress]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) { video.pause(); } else { video.play(); }
    setPlaying(!playing);
    setShowControls(true);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  const elapsed = videoRef.current ? (progress / 100) * duration : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 z-20 bg-black"
      onClick={() => setShowControls(true)}
    >
      {/* Video fills the entire container */}
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'contain' }}
        src="/bg-video.mp4"
      />

      {/* Center play button — always visible when paused */}
      <AnimatePresence>
        {!playing && (
          <motion.button
            key="play-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center z-30"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          >
            <Play size={36} className="text-white ml-1" fill="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Controls overlay — fade in on tap */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            key="controls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex flex-col justify-between pointer-events-none"
          >
            {/* Top bar */}
            <div
              className="w-full flex items-center justify-between px-5 pt-4 pb-10 pointer-events-auto"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
            >
              <span className="text-white font-semibold text-base">📽 Video</span>
              <button
                onClick={onNext}
                className="flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-bold px-5 py-2.5 rounded-full active:bg-white/40"
              >
                Skip <SkipForward size={16} />
              </button>
            </div>

            {/* Bottom bar */}
            <div
              className="w-full flex flex-col gap-3 px-5 pt-10 pb-5 pointer-events-auto"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
            >
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${progress}%`, transition: 'width 0.2s linear' }}
                />
              </div>

              {/* Buttons row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white active:bg-white/40"
                  >
                    {playing ? <Pause size={22} /> : <Play size={22} fill="white" />}
                  </button>

                  {/* Mute */}
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white active:bg-white/40"
                  >
                    {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                  </button>

                  {/* Time */}
                  <span className="text-white/80 text-sm font-mono">
                    {formatTime(elapsed)} / {formatTime(duration)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
