"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Website Developing",
    description: "High-speed, conversion-focused web architecture that turn browsers into lifelong brand ambassadors.",
    image: "/service_digital.png",
    className: "md:col-span-2 md:row-span-1",
    tags: ["Next.js", "Web3", "Tailwind"],
  },
  {
    title: "App Developing (iOS & Android)",
    description: "Multi-platform dominance through native-feel architecture designed for infinite scale.",
    image: null,
    className: "md:col-span-1 md:row-span-2",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    title: "Billing Software",
    description: "Bulletproof financial infrastructure that automates complex revenue flows with zero friction.",
    image: null,
    className: "md:col-span-1 md:row-span-1",
    tags: ["Automated", "Secure", "Real-time"],
  },
  {
    title: "ERP & CRM Solutions",
    description: "The central nervous system for your enterprise, unifying operations and customer intelligence.",
    image: "/service_digital.png",
    className: "md:col-span-2 md:row-span-1",
    tags: ["Data Analytics", "CRM", "SAP Integration"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Smooth Staggered Entrance
    gsap.fromTo(
      cardsRef.current,
      {
        y: 100,
        opacity: 0,
        rotateX: -20,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    // 2. 3D Tilt Effect & Background Number Parallax
    const cards = cardsRef.current;
    cards.forEach((card) => {
      if (!card) return;
      const indexNum = card.querySelector(".index-num");
      const tags = card.querySelectorAll(".service-tag");

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = -(x - centerX) / 25;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out",
        });

        if (indexNum) {
          gsap.to(indexNum, {
            x: (centerX - x) * 0.1,
            y: (centerY - y) * 0.1,
            duration: 0.5,
          });
        }

        if (tags) {
          gsap.to(tags, {
            x: (x - centerX) * 0.05,
            y: (y - centerY) * 0.05,
            duration: 0.5,
            stagger: 0.02,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        if (indexNum) gsap.to(indexNum, { x: 0, y: 0, duration: 0.5 });
        if (tags) gsap.to(tags, { x: 0, y: 0, duration: 0.5 });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="services" className="pt-32 lg:pt-40 pb-20 lg:pb-24 px-6 lg:px-12 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-screen-2xl mx-auto">
        <label className="font-mono text-xs uppercase tracking-[0.5em] text-lime mb-12 block font-bold">
          [ARCHITECTURE / SOLUTIONS]
        </label>
        
        <h2 className="text-6xl md:text-8xl mb-24 max-w-4xl leading-[0.8] tracking-tighter text-white">
          CRAFTING DIGITAL <span className="text-outline text-white/50">ECOSYSTEMS</span> THAT DOMINATE.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`group relative overflow-hidden bg-card p-12 border border-white/5 flex flex-col justify-between rounded-[40px] transition-all duration-500 hover:border-lime/30 hover:shadow-2xl hover:shadow-blue/10 ${service.className}`}
            >
              <div className="absolute top-0 right-0 pointer-events-none p-12 overflow-hidden">
                <span className="index-num font-bebas text-[180px] leading-none text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity select-none">
                  0{index + 1}
                </span>
              </div>

              {service.image && (
                <div className="absolute inset-0 z-0 opacity-20 filter grayscale contrast-125 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map((tag, t) => (
                    <span key={t} className="service-tag font-mono text-[9px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-5xl lg:text-6xl mb-8 tracking-tighter text-white group-hover:text-lime transition-colors">
                  {service.title}
                </h3>
                <p className="font-dm text-white/40 text-lg md:text-xl max-w-md leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex justify-end mt-16">
                <button className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-transparent group-hover:bg-lime group-hover:text-black transition-all duration-500 group-hover:scale-110 shadow-xl">
                  <span className="text-3xl transition-transform group-hover:rotate-45">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
