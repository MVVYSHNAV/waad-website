"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const posts = [
  {
    title: "The Rise of Neobrutalism in Web Design",
    category: "DEEP DIVE",
    date: "AUG 2024",
    image: "/p1.png",
    color: "bg-lime",
    textColor: "text-black",
  },
  {
    title: "Why Color Contrast Matters More Than Minimialism",
    category: "INSIGHT",
    date: "SEP 2024",
    image: "/p2.png",
    color: "bg-blue",
    textColor: "text-white",
  },
  {
    title: "10 Principles for Electric Branding",
    category: "STRATEGY",
    date: "OCT 2024",
    image: "/p3.png",
    color: "bg-white",
    textColor: "text-black",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Horizontal Scroll Parallax for Cards
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { x: (i + 1) * 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );

      // Kinetic drift on scroll
      gsap.to(card, {
        y: i % 2 === 0 ? -100 : 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="blog" 
      className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden"
    >
      {/* Background Section Title Parallax - Using faint lime instead of gray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[25vw] font-bebas leading-none whitespace-nowrap text-lime">
          THE ARCHIVE / THE ARCHIVE
        </h2>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="flex flex-col gap-8">
            <label className="font-mono text-xs uppercase tracking-[0.5em] text-lime block font-bold">
              [LATEST THOUGHTS]
            </label>
            <h2 className="text-6xl md:text-9xl leading-[0.8] tracking-tighter text-white max-w-3xl">
              BRUTAL <span className="text-outline text-white">INSIGHTS</span> ALWAYS.
            </h2>
          </div>
          
          <button className="group font-mono text-[11px] uppercase tracking-[0.3em] text-white flex items-center gap-4 py-4 px-8 border border-white/20 rounded-full hover:bg-lime hover:text-black transition-all">
            View All Articles <span className="text-lime group-hover:text-black group-hover:translate-x-2 transition-all">→</span>
          </button>
        </div>

        <div 
          className="flex overflow-x-auto gap-8 md:gap-12 pb-12 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Webkit scrollbar hide inline */}
          <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; }` }} />
          
          {posts.map((post, index) => (
            <div 
              key={index} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative flex flex-col gap-10 cursor-none min-w-[85vw] md:min-w-[40vw] max-w-[550px] snap-center flex-shrink-0"
            >
              {/* IMAGE WRAPPER WITH UNIQUE COLOR PULSE */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[40px] bg-card border border-white/10 transition-all duration-700 hover:border-lime/40">
                {/* Colored Overlay (Unique per card) */}
                <div className={`absolute inset-0 ${post.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center p-12`}>
                   <p className={`font-bebas text-5xl leading-tight text-center ${post.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-8 group-hover:translate-y-0`}>
                      EXPLORE ARTICLE <br /> ↗
                   </p>
                </div>

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 rounded-[40px]"
                />
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-lime">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-6 relative">
                 <div className="flex items-center gap-4">
                    <span className="font-mono text-[9px] text-lime tracking-widest uppercase">[{post.date}]</span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-lime/30 transition-all" />
                 </div>
                 
                 <h3 className="text-4xl lg:text-5xl text-white font-bebas leading-[0.9] tracking-tight group-hover:text-lime transition-all duration-300 min-h-[2.7em]">
                    {post.title}
                 </h3>

                 <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-mono text-[10px] text-lime uppercase tracking-widest">READ FULL STORY</span>
                    <div className="w-10 h-10 rounded-full bg-lime text-black flex items-center justify-center text-xl">
                      ↗
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
