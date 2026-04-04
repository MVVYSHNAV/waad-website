import Image from "next/image";

const skills = [
  { name: "Successful Campaign Launches", percentage: "90%" },
  { name: "Innovative Design", percentage: "69%" },
  { name: "Unique Project", percentage: "90%" },
];

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-60 px-6 lg:px-12 bg-black overflow-hidden reveal">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-12 animate-fade-up">
          <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime block font-bold">
            [CREATIVITY MEETS STRATEGY]
          </label>
          
          <h2 className="text-6xl md:text-8xl leading-none tracking-tight text-white mb-6">
            WE ARE <span className="text-outline text-white/20">A DESIGN-DRIVEN</span> CREATIVE LAB.
          </h2>

          <p className="font-dm text-white/60 text-xl leading-relaxed max-w-xl">
            At WAAD, we don't just build websites; we create experiences that break the mold. Our philosophy is rooted in neobrutalism, where raw energy meets meticulous strategy.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex justify-between items-center font-mono text-[13px] uppercase tracking-widest">
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-lime">{skill.percentage}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-lime transition-all duration-[2s] ease-out"
                    style={{ width: skill.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-lime/10 flex items-center justify-center text-lime text-2xl border border-lime/20">
                <span>★</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bebas text-white">Over 10 Years</span>
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">Of Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center text-blue text-2xl border border-blue/20">
                <span>✦</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bebas text-white">Trusted by</span>
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">Global Brands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Photo */}
        <div className="relative group p-10 flex items-center justify-center">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue/10 -z-10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-lime/10 -z-10 blur-3xl rounded-full" />
          
          <div className="relative aspect-[3/4] w-full max-w-[500px] bg-card p-4 neobrutal-shadow group-hover:neobrutal-shadow-blue transition-all duration-500 overflow-hidden rounded-[40px]">
            <Image
              src="/about_portrait.png"
              alt="Creative Professional"
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 rounded-[40px]"
            />
          </div>
          
          {/* Overlay text cutout thing */}
          <div className="absolute -bottom-10 -right-10 bg-lime p-8 w-48 h-48 rounded-full flex items-center justify-center text-black font-bebas text-3xl leading-none rotate-12 transition-transform duration-500 group-hover:-rotate-6">
            <span>DRIVEN BY PASSION</span>
          </div>
        </div>
      </div>

      {/* Client Logo Strip */}
      <div className="mt-40 border-y border-white/5 py-12 flex justify-between items-center gap-12 overflow-hidden opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="text-4xl font-bebas text-outline tracking-widest text-white shrink-0 uppercase select-none">
            [BRAND-{i + 1}]
          </div>
        ))}
      </div>
    </section>
  );
}
