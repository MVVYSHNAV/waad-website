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
    <section id="pages" className="py-20 lg:py-40 px-6 lg:px-12 bg-black clip-diagonal reveal relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold">
          [PROUD MOMENTS]
        </label>
        
        <h2 className="text-5xl md:text-8xl mb-24 leading-none tracking-tight text-white max-w-4xl">
          CELEBRATING EXCELLENCE IN <span className="text-blue">CREATIVITY.</span>
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
              <div className="font-mono text-lime font-bold text-xs uppercase tracking-[0.3em] mb-4 md:mb-0">
                {award.year}
              </div>

              {/* Title */}
              <div className="flex-1 md:px-20">
                <h3 className="text-4xl md:text-6xl text-white font-bebas tracking-tight transition-all duration-300 group-hover:text-lime group-hover:pl-4">
                  {award.title}
                </h3>
              </div>

              {/* Category */}
              <div className="font-mono text-white/30 text-xs uppercase tracking-widest">
                {award.category}
              </div>

              {/* Arrow */}
              <div className="hidden md:flex ml-12 opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-6xl text-lime">↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 border-t border-white/5 pt-32">
          {[
            { val: "300+", label: "Total Awards" },
            { val: "200+", label: "Global Brands" },
            { val: "15Y", label: "Industry Exp" },
            { val: "24/7", label: "Client Support" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="text-7xl font-bebas text-white leading-none group-hover:text-lime">
                {stat.val}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
