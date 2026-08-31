"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (video.paused) {
        const p = video.play();
        if (p) {
          p.catch(() => {
            /* autoplay bloqueado (Safari/Mac) */
          });
        }
      }
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <section id="inicio" className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        src="/video/video-in-opt.mp4"
        poster="/video/poster.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="h-[calc(100dvh_-_7rem)] w-full object-cover md:h-[calc(100dvh_-_8rem)]"
      />
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Agencia Aduanera L & A"
          width={320}
          height={320}
          className="h-32 w-auto object-contain sm:h-44 lg:h-56"
          style={{ filter: "drop-shadow(0 8px 20px rgba(2, 6, 23, 0.55))" }}
        />
      </div>
    </section>
  );
}
