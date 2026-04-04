"use client";

import { useState } from "react";

const awards = [
  { year: "2024", title: "Awwwards SOTD", category: "Web Design" },
  { year: "2023", title: "Cannes Lion Gold", category: "Brand Identity" },
  { year: "2023", title: "CSS Design Award", category: "Best UX" },
  { year: "2022", title: "The Webby Winner", category: "Digital Marketing" },
  { year: "2021", title: "Pentaward Bronze", category: "Packaging" },
];

export default function Awards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="pages" className="py-20 lg:py-32 px-6 lg:px-12 bg-black clip-diagonal reveal relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <label className="font-mono text-[9px] md:text-xs uppercase tracking-[0.4em] text-lime block font-bold">
            [PROUD MOMENTS]
          </label>
          <span className="font-pinyon text-xl md:text-3xl text-white/30 lowercase mt-1">
            dream that achievs
          </span>
        </div>

        <h2 className="text-5xl md:text-8xl mb-24 leading-[0.9] tracking-tight text-white max-w-4xl uppercase">
          CELEBRATING <br /> <span className="text-lime">ENGINEERING</span> DISRUPTION.
        </h2>

        <div className="flex flex-col border-t border-white/5">
          {awards.map((award, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-white/5 transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Year */}
              <div className="font-mono text-lime font-bold text-xs uppercase tracking-[0.3em] mb-4 md:mb-0 transition-opacity group-hover:opacity-100 opacity-40">
                {award.year}
              </div>

              {/* Title with 3D Barrel Roll (Grilling) Animation */}
              <div className="flex-1 md:px-20">
                <div className="relative h-[48px] md:h-[72px] overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
                  <h3 className="text-4xl md:text-6xl text-white font-bebas tracking-tight transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:rotate-x-[-90deg] origin-top select-none">
                    {award.title}
                  </h3>
                  <h3 className="absolute top-0 left-0 w-full text-4xl md:text-6xl text-lime font-bebas tracking-tight transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full rotate-x-[90deg] group-hover:translate-y-0 group-hover:rotate-x-0 origin-bottom select-none">
                    {award.title}
                  </h3>
                </div>
              </div>

              {/* SPINOFF STAR - GHOST BACKGROUND ANIMATION */}
              <div className="absolute left-[15%] md:left-[10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 scale-0 group-hover:opacity-10 group-hover:scale-[2.5] group-hover:rotate-[360deg] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] -z-10 mix-blend-screen">
                <span className="text-lime text-9xl blur-sm md:blur-none opacity-20">✦</span>
              </div>

              {/* Category */}
              <div className="font-mono text-white/30 text-[10px] md:text-xs uppercase tracking-widest transition-colors group-hover:text-white/60">
                {award.category}
              </div>

              {/* Arrow Spinoff */}
              <div className="hidden md:flex ml-12 opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-[45deg] transition-all duration-500">
                <span className="text-6xl text-lime">↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row - Subtle Footer */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 border-t border-white/5 pt-16">
          {[
            { val: "300+", label: "Total Awards" },
            { val: "200+", label: "Global Brands" },
            { val: "15Y", label: "Industry Exp" },
            { val: "24/7", label: "Client Support" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-4 group/stat">
              <span className="text-5xl md:text-7xl font-bebas text-white/20 leading-none group-hover/stat:text-lime transition-colors">
                {stat.val}
              </span>
              <span className="font-mono text-[9px] md:text-xs uppercase tracking-widest text-white/20 group-hover/stat:text-white/60 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
