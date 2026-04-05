"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 500, label: "Happy Clients", suffix: "+" },
  { value: 125, label: "Projects Done", suffix: "+" },
  { value: 450, label: "Media Featured", suffix: "+" },
];

const floatingChips = [
  { text: "EST. 2024", x: "10%", y: "20%", speed: 0.08 },
  { text: "DIGITAL FIRST", x: "85%", y: "15%", speed: 0.12 },
  { text: "NEOBRUTAL", x: "70%", y: "60%", speed: 0.05 },
  { text: "UNCONVENTIONAL", x: "15%", y: "75%", speed: 0.15 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Kinetic Scroll Effect for Titles
    gsap.to(line1Ref.current, {
      x: -150,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(line2Ref.current, {
      x: 150,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 2. Letters Scatter on Exit
    const allLetters = heroRef.current?.querySelectorAll(".letter");
    if (allLetters) {
      gsap.to(allLetters, {
        x: () => (Math.random() - 0.5) * 800,
        y: () => (Math.random() - 0.5) * 800,
        rotation: () => (Math.random() - 0.5) * 360,
        opacity: 0,
        stagger: 0.01,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "80% top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }

    // 3. Stats Count up
    const statNumbers = statsRef.current?.querySelectorAll(".stat-number");
    statNumbers?.forEach((num, i) => {
      const target = stats[i].value;
      gsap.fromTo(num,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
          },
          onUpdate: function () {
            num.innerHTML = Math.ceil(Number(this.targets()[0].innerText)) + stats[i].suffix;
          }
        }
      );
    });

    // 4. Parallax Background Glow
    gsap.to(glowRef.current, {
      y: -250,
      scale: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: 1,
      },
    });

    // 5. Magnetic Button & Parallax Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      // Parallax layers
      gsap.to(line1Ref.current, { x: x * 40, y: y * 40, duration: 1.2, ease: "power2.out" });
      gsap.to(line2Ref.current, { x: -x * 30, y: -y * 30, duration: 1.2, ease: "power2.out" });
      gsap.to(statsRef.current, { x: x * 60, y: y * 60, duration: 0.8 });

      // Floating chips parallax
      const chips = chipsRef.current?.children;
      if (chips) {
        Array.from(chips).forEach((chip, i) => {
          const speed = floatingChips[i].speed * 800;
          gsap.to(chip, { x: x * speed, y: y * speed, duration: 2, ease: "power2.out" });
        });
      }

      // Magnetic CTA
      const rect = ctaBtnRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(clientX - centerX, clientY - centerY);
        if (distance < 150) {
          gsap.to(ctaBtnRef.current, {
            x: (clientX - centerX) * 0.5,
            y: (clientY - centerY) * 0.5,
            duration: 0.3
          });
        } else {
          gsap.to(ctaBtnRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        }
      }

      // Parallax for full-screen background image
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          x: x * -100,
          y: y * -100,
          duration: 2,
          ease: "power2.out"
        });
      }
    };

    // Background Image Scroll Zoom
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        scale: 1.6,
        rotate: 3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const SplittedText = ({ text }: { text: string }) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="letter inline-block transition-all duration-300 hover:text-lime hover:-translate-y-4 cursor-none"
      >
        {char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] md:min-h-[110vh] flex flex-col justify-center pt-20 md:pt-24 overflow-hidden bg-[#060608]">
      {/* Systematic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Background Glows */}
      <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-blue/15 rounded-full blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute top-1/4 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-lime/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      {/* Floating Chips - Desktop Only */}
      <div ref={chipsRef} className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        {floatingChips.map((chip, i) => (
          <div
            key={i}
            className="absolute px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] text-white/40 tracking-[0.2em] whitespace-nowrap backdrop-blur-md"
            style={{ left: chip.x, top: chip.y }}
          >
            [{chip.text}]
          </div>
        ))}
      </div>

      {/* Main Text Content */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-10 select-none w-full">
        <div ref={titleGroupRef} className="flex flex-col items-center md:items-start relative">
          <div className="absolute -top-10 md:-top-16 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 font-mono text-[9px] md:text-[11px] text-lime tracking-[0.5em] animate-pulse whitespace-nowrap">
            [ARCHITECTURE OF DISRUPTION]
          </div>

          <h1 ref={line1Ref} className="hero-title text-[clamp(4rem,18vw,15rem)] leading-[0.7] tracking-tighter text-white text-center md:text-left">
            <SplittedText text="WE ARE" />
          </h1>

          <div className="md:pl-44 flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-12 mt-4 md:-mt-8">
            <h1 ref={line2Ref} className="hero-title text-[clamp(4rem,18vw,15rem)] leading-[0.7] tracking-tighter text-lime md:text-outline md:hover:text-lime transition-all duration-700 text-center md:text-left">
              <SplittedText text="WAAD★" />
            </h1>
            <p className="font-dm text-white/30 text-[11px] md:text-sm max-w-[320px] mb-6 md:mb-10 leading-relaxed uppercase tracking-widest text-center md:text-left border-l border-white/5 pl-6 block">
              TRANSFORMING VISIONS INTO UNCONVENTIONAL DIGITAL REALITIES. ELITE WEB CRAFT FOR THE NEW CREATIVE ERA.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Stats - Simplified row for mobile */}
      {/* <div className="md:hidden flex justify-between px-6 mt-12 mb-8 relative z-30">
        {stats.slice(0, 3).map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-bebas text-3xl text-white">{stat.value}{stat.suffix}</span>
            <span className="font-mono text-[7px] uppercase tracking-widest text-white/40">{stat.label.split(' ')[0]}</span>
          </div>
        ))}
      </div> */}

      {/* Desktop Stats - Vertical */}
      {/* <div ref={statsRef} className="absolute left-16 bottom-32 hidden md:flex flex-col gap-10 z-30">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-0 group">
            <div className="flex items-baseline gap-2">
              <span className="stat-number font-bebas text-6xl leading-none text-white transition-colors group-hover:text-lime">0</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-lime opacity-0 group-hover:opacity-100 transition-opacity">PROVED</span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">{stat.label}</span>
          </div>
        ))}
      </div> */}

      {/* Full-Screen Interactive Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div ref={heroImageRef} className="relative w-full h-full transform-gpu">
          <Image
            src="/hero_woman.png"
            alt="Creative Model"
            fill
            priority
            className="object-cover scale-110 filter grayscale opacity-40 md:opacity-50 mix-blend-screen"
          />
          {/* Edge Fade Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent to-[#060608] opacity-40" />
        </div>
      </div>

      {/* CTA Button - Standardizing Size for a Premium Pill Shape */}
      <div className="flex justify-center md:block md:absolute md:bottom-28 md:right-24 z-40 mt-10 md:mt-0 px-8 w-full md:w-auto">
        <button
          ref={ctaBtnRef}
          className="group relative flex items-center justify-center bg-white hover:bg-lime w-full md:w-auto px-10 md:px-14 py-5 md:py-7 rounded-full text-black font-bebas text-lg md:text-2xl uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_15px_40px_-5px_rgba(200,255,0,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-4 md:gap-6">
            START PROJECT <span className="group-hover:translate-x-3 transition-transform duration-300 transform-gpu">&rarr;</span>
          </span>
          <div className="absolute inset-0 rounded-full bg-lime scale-[0.6] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 -z-10" />
        </button>
      </div>

      {/* Ticker - Corrected with actual services */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-background/80 backdrop-blur-3xl py-8 md:py-12 border-t border-white/10 z-20">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-20 px-8">
              {[
                "WEBSITES", "✦",
                "APP DEV", "✦",
                "ERP & CRM", "✦",
                "BILLING SOFTWARE", "✦",
                "UI/UX DESIGN", "✦"
              ].map((item, j) => (
                <span
                  key={j}
                  className={`font-bebas text-4xl md:text-7xl tracking-tighter transition-all duration-300 ${
                    item === "✦" 
                      ? "text-lime drop-shadow-[0_0_15px_rgba(113,191,68,0.4)]" 
                      : "text-white cursor-default"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
