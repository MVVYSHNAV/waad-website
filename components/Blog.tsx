"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const posts = [
  {
    title: "The Rise of Neobrutalism in Web Design",
    category: "DEEP DIVE",
    date: "AUG 2024",
    image: "/p1.png",
    accentBg: "bg-lime",
    slug: "/blog/neobrutalism-web-design",
  },
  {
    title: "Why Color Contrast Matters More Than Minimalism",
    category: "INSIGHT",
    date: "SEP 2024",
    image: "/p2.png",
    accentBg: "bg-blue",
    slug: "/blog/color-contrast-matters",
  },
  {
    title: "10 Principles for Electric Branding",
    category: "STRATEGY",
    date: "OCT 2024",
    image: "/p3.png",
    accentBg: "bg-white",
    slug: "/blog/electric-branding-principles",
  },
  {
    title: "Code as a Creative Expression",
    category: "CRAFT",
    date: "NOV 2024",
    image: "/p1.png",
    accentBg: "bg-lime",
    slug: "/blog/code-creative-expression",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    const progress = progressRef.current;
    if (!section || !horizontal) return;

    const ctx = gsap.context(() => {
      const totalWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = totalWidth - viewportWidth;

      if (distance <= 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) {
              gsap.set(progress, { scaleX: self.progress });
            }
          },
        },
      });

      tl.to(horizontal, {
        x: -distance,
        ease: "none",
      });

      // Subtle card entrance — cards are always readable, just a small slide-in
      const cards = horizontal.querySelectorAll(".blog-card");
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0.7, x: 80 },
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 100%",
              end: "left 60%",
              scrub: true,
            },
          }
        );
      });
    }, section);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative bg-[#060608] overflow-hidden"
    >
      {/* Main Pinned Content — uses full viewport height */}
      <div className="h-screen flex flex-col justify-between py-8 lg:py-12 relative z-10">

        {/* Section Header — compact */}
        <div className="px-8 lg:px-16 flex-shrink-0">
          <div className="max-w-screen-2xl mx-auto flex items-end justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-10 h-[2px] bg-lime" />
              <label className="font-mono text-[10px] uppercase tracking-[0.5em] text-lime font-bold">
                JOURNAL / {String(posts.length).padStart(2, "0")} ENTRIES
              </label>
            </div>
            <button className="group font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-white flex items-center gap-3 py-3 px-6 border border-white/10 rounded-full hover:bg-lime hover:text-black hover:border-lime transition-all duration-500">
              ALL ARTICLES <span className="text-lime group-hover:text-black group-hover:translate-x-2 transition-all text-base">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Horizontal Cards Track — fills the middle */}
        <div ref={horizontalRef} className="flex gap-10 md:gap-16 lg:gap-20 px-8 lg:px-16 w-fit items-center flex-1 py-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.slug}
              className="blog-card group relative cursor-none w-[78vw] md:w-[45vw] lg:w-[38vw] max-w-[580px] flex-shrink-0 flex flex-row bg-card rounded-[32px] overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-700 h-[60vh] max-h-[480px]"
            >
              {/* LEFT: Image — takes half the card */}
              <div className="relative w-1/2 overflow-hidden flex-shrink-0">
                {/* Accent stripe */}
                <div className={`absolute top-0 left-0 w-1 h-full ${post.accentBg} z-10`} />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />

                {/* Ghost Number */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="font-bebas text-[80px] leading-none text-white/[0.06] group-hover:text-white/[0.12] transition-all duration-700 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* RIGHT: Text Content — takes the other half */}
              <div className="flex flex-col justify-between p-6 md:p-8 w-1/2">
                {/* Top: Category + Date */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-lime w-fit">
                    {post.category}
                  </span>
                  <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase">{post.date}</span>
                </div>

                {/* Middle: Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bebas leading-[0.85] tracking-tight group-hover:text-lime transition-colors duration-500 my-4">
                  {post.title}
                </h3>

                {/* Bottom: CTA + Pagination */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-[8px] text-white/25 uppercase tracking-widest">
                    {String(index + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:bg-lime group-hover:border-lime text-white group-hover:text-black flex items-center justify-center text-sm transition-all duration-500 group-hover:scale-110">
                    &nearr;
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* End Spacer */}
          <div className="w-[15vw] flex-shrink-0" />
        </div>

        {/* Scroll Progress Bar — compact at bottom */}
        <div className="px-8 lg:px-16 flex-shrink-0">
          <div className="max-w-screen-2xl mx-auto flex items-center gap-6">
            <span className="font-mono text-[8px] text-white/15 uppercase tracking-widest whitespace-nowrap hidden md:block">SCROLL</span>
            <div className="h-[2px] bg-white/5 w-full relative overflow-hidden rounded-full flex-1">
              <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full w-full bg-lime origin-left rounded-full"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
            <span className="font-mono text-[8px] text-white/15 uppercase tracking-widest whitespace-nowrap hidden md:block">EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
