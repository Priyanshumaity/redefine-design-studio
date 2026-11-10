"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  caption?: string;
  title?: string;
}

export default function ArchitecturalVideoPlayer({
  src = "/videos/dialogue-with-nature.mp4",
  poster = "/images/nature/nature-hero.jpg",
  caption = "Salient Architectural Motion Study",
  title = "Living Architecture in Motion",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const startPlayback = () => {
    setShouldLoadVideo(true);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const togglePlay = () => {
    if (!shouldLoadVideo) {
      startPlayback();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className="relative w-full aspect-video border border-[#E7E3DA] bg-[#F4F1EA] overflow-hidden group select-none shadow-2xl"
    >
      {/* Optimized Poster Image when video is not activated */}
      {!shouldLoadVideo ? (
        <Image
          src={poster}
          alt={title}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          className="w-full h-full object-cover"
          onClick={togglePlay}
        />
      )}

      {/* Subtle Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none transition-opacity duration-300" />

      {/* Top Header Tag */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-1 bg-[#FBFBFA]/85 backdrop-blur-md border border-[#9E7D2D]/60 text-[10px] font-mono uppercase tracking-[0.2em] text-[#9E7D2D]">
          <Sparkles className="w-3 h-3 text-[#9E7D2D]" />
          <span>{caption}</span>
        </div>

        <div className="hidden sm:inline-block px-2.5 py-0.5 bg-[#FBFBFA]/80 backdrop-blur-md border border-[#E7E3DA] text-[10px] font-mono text-[#68635A]">
          16 : 9 CINEMATIC ASPECT RATIO
        </div>
      </div>

      {/* Floating Center Play/Pause Indicator (Shown when hovered or paused) */}
      <div
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 z-10 ${
          !isPlaying || showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FBFBFA]/80 backdrop-blur-md border border-[#9E7D2D] flex items-center justify-center text-[#141311] hover:scale-105 hover:bg-[#9E7D2D] hover:text-[#FBFBFA] transition-all shadow-2xl"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <Play className="w-6 h-6 sm:w-8 sm:h-8 translate-x-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Architectural HUD Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 via-black/55 to-transparent flex flex-col gap-3 transition-opacity duration-300 z-20 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0 sm:opacity-0"
        }`}
      >
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-1 bg-[#E7E3DA] cursor-pointer group/bar rounded-full overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 bottom-0 bg-[#9E7D2D] rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#4D4942]">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="text-[#141311] hover:text-[#9E7D2D] transition-colors focus:outline-none"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleMute}
              className="text-[#141311] hover:text-[#9E7D2D] transition-colors focus:outline-none flex items-center gap-1.5"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#7A746B]" />
                  <span className="text-[10px] font-mono text-[#827C72] uppercase hidden sm:inline">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#9E7D2D]" />
                  <span className="text-[10px] font-mono text-[#9E7D2D] uppercase hidden sm:inline">Sound On</span>
                </>
              )}
            </button>

            <span className="text-xs font-serif text-[#3D3933] hidden md:inline">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="text-[#68635A] hover:text-[#141311] transition-colors p-1"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
