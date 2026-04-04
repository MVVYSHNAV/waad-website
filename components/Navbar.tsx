"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] px-6 lg:px-12 py-6 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative h-10 w-10 md:h-12 md:w-12 group transition-all hover:scale-110">
          <Image
            src="/waadlogo.png"
            alt="WAAD Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[13px] font-mono uppercase tracking-widest text-[#F0F0F0]">
          {["About", "Services", "Portfolio", "Pages", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-lime transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="group relative inline-flex items-center gap-2 bg-lime px-6 py-2.5 rounded-full font-mono text-black text-[13px] uppercase tracking-wider transition-all duration-300 hover:pr-8 hover:neobrutal-shadow"
        >
          <span>Get Started</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </nav>
  );
}
