"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<"none" | "link" | "text">("none");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Dot - instant
      gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
      // Follower - slight lag
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("button") || target.closest("a")) {
        setHoverType("link");
      } else if (target.classList.contains("letter") || target.closest(".hero-title")) {
        setHoverType("text");
      } else {
        setHoverType("none");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-foreground/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center hidden md:flex
          ${hoverType === "link" ? "w-20 h-20 bg-foreground border-none mix-blend-difference" : ""}
          ${hoverType === "text" ? "w-20 h-20 border-2 border-lime ring-4 ring-lime/20" : ""}
        `}
      />
    </>
  );
}
