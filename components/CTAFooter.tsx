import Link from "next/link";

export default function CTAFooter() {
  return (
    <section className="py-24 lg:py-40 px-6 lg:px-12 bg-background overflow-hidden relative border-t border-border">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-lime/10 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-12 block font-bold">
          [ARE YOU READY?]
        </label>
        
        <h2 className="text-[clamp(1.5rem,15vw,10rem)] leading-[0.8] tracking-tighter text-foreground mb-20 animate-fade-up">
          LET&apos;S CREATE SOMETHING <span className="text-outline text-foreground/50">EXTRAORDINARY</span> TOGETHER.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-up [animation-delay:0.3s]">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center gap-6 bg-lime px-12 py-7 rounded-full font-bebas text-black text-4xl uppercase tracking-wider transition-all duration-300 hover:scale-[1.05] hover:neobrutal-shadow"
          >
            <span>START A PROJECT</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
          
          <button className="group inline-flex items-center gap-4 border border-border px-10 py-5 rounded-full font-mono text-[13px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background hover:neobrutal-shadow-blue transition-all duration-300">
            VIEW OUR WORK ↗
          </button>
        </div>
      </div>
    </section>
  );
}
