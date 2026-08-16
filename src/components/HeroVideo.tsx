"use client";

import Image from "next/image";

export function HeroVideo() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden">
      <video
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
