"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".char-404", {
        y: 200,
        rotateX: -90,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
      })
      .from(".sub-text", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      }, "-=0.4")
      .from(".cta-404", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(".orbit-ring", {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.8");

      // 2. Continuous floating animation for orbit rings
      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".orbit-ring-3", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      // 3. Glitch flicker effect on the "4"s
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTl
        .to(".glitch-text", { skewX: 20, duration: 0.05, ease: "none" })
        .to(".glitch-text", { skewX: 0, duration: 0.05, ease: "none" })
        .to(".glitch-text", { opacity: 0.5, x: -5, duration: 0.05 })
        .to(".glitch-text", { opacity: 1, x: 0, duration: 0.05 })
        .to(".glitch-text", { skewX: -10, scaleY: 1.1, duration: 0.04 })
        .to(".glitch-text", { skewX: 0, scaleY: 1, duration: 0.04 });

    }, container);

    // 4. Mouse-reactive parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      gsap.to(".char-404", {
        x: (i: number) => x * (20 + i * 15),
        y: (i: number) => y * (20 + i * 15),
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".orbit-container", {
        x: x * -30,
        y: y * -30,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(".glow-404", {
        x: x * 50,
        y: y * 50,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060608]"
      style={{ cursor: "none" }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glowing Orbs */}
      <div className="glow-404 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="glow-404 absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Orbit Rings */}
      <div className="orbit-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="orbit-ring orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/[0.04] rounded-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime rounded-full" />
        </div>
        <div className="orbit-ring orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-white/[0.03] rounded-full">
          <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 bg-blue rounded-full" />
        </div>
        <div className="orbit-ring orbit-ring-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-white/[0.02] rounded-full">
          <div className="absolute top-1/3 right-0 w-1 h-1 bg-lime/60 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 404 Title */}
        <h1
          ref={titleRef}
          className="flex items-center gap-2 md:gap-4 select-none"
          style={{ perspective: "1000px" }}
        >
          <span className="char-404 glitch-text inline-block font-bebas text-[clamp(8rem,25vw,20rem)] leading-none text-lime drop-shadow-[0_0_40px_rgba(113,191,68,0.3)]">
            4
          </span>
          <span className="char-404 inline-block font-bebas text-[clamp(8rem,25vw,20rem)] leading-none text-outline text-white/20 relative">
            0
            {/* Spinning dot inside the 0 */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-lime rounded-full animate-pulse" />
          </span>
          <span className="char-404 glitch-text inline-block font-bebas text-[clamp(8rem,25vw,20rem)] leading-none text-lime drop-shadow-[0_0_40px_rgba(113,191,68,0.3)]">
            4
          </span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="flex flex-col items-center gap-4 max-w-lg text-center">
          <p className="sub-text font-mono text-[10px] uppercase tracking-[0.5em] text-lime">
            [PAGE NOT FOUND]
          </p>
          <p className="sub-text font-dm text-white/40 text-base md:text-lg leading-relaxed">
            The page you&apos;re looking for has been lost in the creative void.
            <br className="hidden md:block" />
            Let&apos;s get you back to something brilliant.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-404 flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link
            href="/"
            className="group flex items-center gap-4 bg-lime text-black font-bebas text-2xl uppercase tracking-wider px-10 py-5 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(113,191,68,0.3)]"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            BACK TO HOME
          </Link>
          <Link
            href="/#services"
            className="group flex items-center gap-4 border border-white/10 text-white font-mono text-[11px] uppercase tracking-[0.3em] px-8 py-5 rounded-full transition-all duration-500 hover:border-lime hover:text-lime"
          >
            OUR WORK <span className="text-lime group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-bebas text-xl tracking-widest text-white/[0.06] mx-8">
              404 ✦ PAGE NOT FOUND ✦ LOST IN THE VOID ✦ ERROR ✦
            </span>
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 font-mono text-[9px] text-white/15 uppercase tracking-widest">
        [ERR::404]
      </div>
      <div className="absolute top-8 right-8 font-mono text-[9px] text-white/15 uppercase tracking-widest">
        WAAD CREATIVE
      </div>
      <div className="absolute bottom-12 left-8 font-mono text-[9px] text-white/15 uppercase tracking-widest hidden md:block">
        STATUS: NOT_FOUND
      </div>
      <div className="absolute bottom-12 right-8 font-mono text-[9px] text-white/15 uppercase tracking-widest hidden md:block">
        {new Date().getFullYear()}
      </div>
    </div>
  );
}
