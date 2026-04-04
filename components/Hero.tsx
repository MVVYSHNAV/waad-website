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
          onUpdate: function() {
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
    };

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
    <section ref={heroRef} className="relative min-h-[110vh] flex flex-col justify-center pt-24 overflow-hidden bg-[#060608]">
      {/* Systematic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Background Glows */}
      <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue/15 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[120px] -z-10" />
      
      {/* Floating Chips */}
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

      {/* Floating Stats - Redesigned */}
      <div ref={statsRef} className="absolute left-8 lg:left-16 bottom-32 hidden md:flex flex-col gap-10 z-30">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-0 group">
            <div className="flex items-baseline gap-2">
              <span className="stat-number font-bebas text-6xl leading-none text-white transition-colors group-hover:text-lime">0</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-lime opacity-0 group-hover:opacity-100 transition-opacity">PROVED</span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main Text Content - Asymmetrical Redesign */}
      <div className="container mx-auto px-6 relative z-10 select-none">
        <div ref={titleGroupRef} className="flex flex-col items-center md:items-start relative">
          <div className="absolute -top-12 left-0 font-mono text-[10px] text-lime tracking-[0.5em] animate-pulse">
            [EXPERIENCE THE FUTURE]
          </div>
          
          <h1 ref={line1Ref} className="hero-title text-[clamp(4.5rem,16vw,14rem)] leading-[0.75] tracking-tighter text-white">
            <SplittedText text="WE ARE" />
          </h1>
          
          <div className="md:ml-20 flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-12">
            <h1 ref={line2Ref} className="hero-title text-[clamp(4.5rem,16vw,14xl)] leading-[0.75] tracking-tighter text-lime md:text-outline md:hover:text-lime transition-all duration-700">
              <SplittedText text="WAAD★" />
            </h1>
            <p className="font-dm text-white/30 text-xs md:text-sm max-w-[200px] mb-4 md:mb-8 leading-relaxed uppercase tracking-widest hidden lg:block">
              Pushing digital boundaries through neobrutalist energy and meticulous code.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image - Tilted & Clipped */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 w-[70vw] max-w-[900px] z-[5] pointer-events-none opacity-40 mix-blend-screen overflow-hidden rotate-[-2deg] transition-transform duration-[2s] hover:rotate-0">
        <Image
          src="/hero_woman.png"
          alt="Creative Model"
          width={1200}
          height={1200}
          priority
          className="object-cover scale-125 filter grayscale"
        />
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-20 right-8 lg:right-24 z-40">
        <button 
          ref={ctaBtnRef}
          className="group relative flex items-center justify-center bg-white hover:bg-lime px-12 py-8 rounded-full text-black font-bebas text-4xl uppercase tracking-wider transition-all duration-300 hover:neobrutal-shadow-blue"
        >
          <span className="relative z-10 flex items-center gap-6">
            START PROJECT <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>

      {/* Ticker - Positioned overlapping title slightly */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/5 backdrop-blur-xl py-6 border-t border-white/5 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {["INNOVATION", "✦", "CRAFT", "✦", "ENERGY", "✦", "FUTURE", "✦"].map((item, j) => (
                <span
                  key={j}
                  className={`font-bebas text-xl md:text-3xl tracking-widest ${
                    item === "✦" ? "text-lime" : "text-white/10"
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
