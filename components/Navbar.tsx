"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
      });
      gsap.to(menuContentRef.current, {
        x: 0,
        duration: 0.8,
        ease: "expo.out",
      });
      const links = linksRef.current?.querySelectorAll(".mobile-link");
      if (links) {
        gsap.fromTo(
          links,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.2 }
        );
      }
    } else {
      document.body.style.overflow = "unset";
      gsap.to(menuContentRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "expo.in",
      });
      gsap.to(menuRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        delay: 0.4,
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["About", "Services", "Portfolio", "Pages", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] px-6 lg:px-12 py-6 transition-all duration-300 ${
          scrolled ? "bg-background/50 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent"
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
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[13px] font-mono uppercase tracking-widest text-[#F0F0F0]/80">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Contact" ? "/contact" : `/#${item.toLowerCase()}`}
                className="hover:text-lime transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Desktop */}
            <Link
              href="/contact"
              className="hidden md:group md:relative md:inline-flex items-center gap-2 bg-lime px-6 py-2.5 rounded-full font-mono text-black text-[13px] uppercase tracking-wider transition-all duration-300 hover:pr-8 hover:neobrutal-shadow"
            >
              <span>Get Started</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="flex md:hidden flex-col items-end gap-2 z-[1100] group relative w-10 h-10 justify-center"
              aria-label="Toggle Menu"
            >
              <div
                className={`h-[2px] bg-white transition-all duration-300 transform-gpu rounded-full ${
                  isOpen ? "w-8 rotate-45 translate-y-[5px] !bg-lime" : "w-8"
                }`}
              />
              <div
                className={`h-[2px] bg-white transition-all duration-300 transform-gpu rounded-full ${
                  isOpen ? "w-8 -rotate-45 -translate-y-[5px] !bg-lime" : "w-5 group-hover:w-8"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sheet (Overlay) */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[1050] md:hidden invisible opacity-0"
      >
        {/* Backdrop glassmorphism */}
        <div 
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sliding Panel */}
        <div 
          ref={menuContentRef}
          className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l border-white/5 flex flex-col translate-x-full shadow-2xl"
        >
          {/* Close Button Inside Menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-10 flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-full hover:bg-lime/10 transition-colors group/close"
            aria-label="Close Menu"
          >
            <span className="font-mono text-[9px] tracking-widest text-[#F0F0F0]/40 group-hover/close:text-lime">CLOSE [X]</span>
          </button>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-full h-1/2 bg-lime/5 blur-[80px] -z-10 pointer-events-none" />
          
          <div className="flex flex-col pt-32 px-10 gap-10 overflow-y-auto flex-1">
            <div className="font-mono text-[9px] text-lime tracking-[0.5em] mb-4 opacity-50 uppercase">
              [THE ARCHITECTURE]
            </div>
            
            <div className="flex flex-col gap-6" ref={linksRef}>
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  href={item === "Contact" ? "/contact" : `/#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="mobile-link group flex items-baseline gap-4"
                >
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-lime transition-colors">0{index + 1}</span>
                  <span className="text-5xl font-bebas text-white group-hover:text-lime transition-colors leading-[0.8] tracking-tighter">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-10 mt-auto flex flex-col gap-12">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between bg-lime text-black px-8 py-5 rounded-full font-bebas text-xl uppercase tracking-wider transition-transform active:scale-95 neobrutal-shadow"
            >
              Start Project <span>→</span>
            </Link>

            <div className="flex flex-col gap-3">
              <div className="font-mono text-[9px] text-white/20 tracking-[0.4em] uppercase">
                [CONTACT CENTER]
              </div>
              <p className="font-mono text-white/40 text-[11px] tracking-widest font-bold">HELLO@WAAD.AGENCY</p>
              <div className="flex gap-4 mt-2">
                {["IG", "LI", "TW"].map(sm => (
                  <span key={sm} className="font-mono text-[10px] text-lime/40 hover:text-lime cursor-pointer transition-colors">/{sm}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
