"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Jessica Lee",
    role: "CEO at TechFlow",
    text: "WAAD took our brand to an entirely different level. Their strategic engineering was exactly what we needed to dominate the market.",
    id: "01"
  },
  {
    name: "Daniel Park",
    role: "Lead Architect",
    text: "The mechanical precision this team brings is infectious. The results speak for themselves — 150% growth in three months.",
    id: "02"
  },
  {
    name: "Amanda Smith",
    role: "Founder of Aura",
    text: "Unrivaled logic. They don't just follow trends; they set them. Highly recommended for any brand looking to make a serious impact.",
    id: "03"
  },
  {
    name: "Marcus Thorne",
    role: "Product Head",
    text: "Engineered for excellence. The cleanest codebase and most provocative design I've seen in a decade. Truly unique.",
    id: "04"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" }
      );
    }
  }, [activeIndex]);

  const t = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#060608] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bebas text-white/[0.02] pointer-events-none select-none uppercase italic">
        {t.id}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center mb-12">
          <label className="font-mono text-[10px] uppercase tracking-[0.5em] text-lime mb-6 block font-bold">
            [INTERNAL REPORT // {t.id}]
          </label>
          <h2 className="text-4xl md:text-6xl text-white font-bebas tracking-tighter text-center uppercase">
            STRATEGIC <span className="text-lime italic">REVIEWS.</span>
          </h2>
        </div>

        {/* Featured Testimonial Card */}
        <div 
          ref={cardRef}
          className="bg-zinc-900/50 border-2 border-white/10 p-8 md:p-20 relative neobrutal-shadow group hover:border-lime/40 transition-all duration-500 rounded-[20px] md:rounded-[40px]"
        >
          <div className="absolute top-8 left-8 text-7xl font-bebas text-lime/20 leading-none">
            &ldquo;
          </div>

          <div ref={contentRef} className="relative z-10">
            <p className="font-dm text-white text-xl md:text-4xl leading-snug tracking-tight mb-16 md:mb-20 italic">
              {t.text}
            </p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/5 pt-10">
              <div className="flex flex-col">
                <span className="font-pinyon text-4xl md:text-6xl text-lime leading-none">
                  {t.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-3">
                  {t.role}
                </span>
              </div>

              {/* Pagination Controls */}
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-black hover:border-lime transition-all duration-300 group/btn"
                >
                  <span className="text-3xl rotate-180">↗</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-black hover:border-lime transition-all duration-300 group/btn"
                >
                  <span className="text-3xl">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 ${i === activeIndex ? 'w-12 bg-lime' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
