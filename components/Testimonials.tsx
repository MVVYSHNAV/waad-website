const testimonials = [
  {
    name: "JESSICA LEE",
    role: "CEO at TechFlow",
    text: "WAAD took our brand to an entirely different level. Their neobrutalist approach was exactly what we needed to stand out in a saturated market.",
    rating: 5,
  },
  {
    name: "DANIEL PARK",
    role: "Marketing Director",
    text: "The energy and passion this team brings is infectious. The results speak for themselves — our engagement increased by 150% in three months.",
    rating: 5,
  },
  {
    name: "AMANDA SMITH",
    role: "Founder of Aura",
    text: "Unrivaled creativity. They don't just follow trends; they set them. Highly recommended for any brand looking to make a serious impact.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 bg-[#050A1A]">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold">
          [CLIENT LOVE]
        </label>
        
        <h2 className="text-5xl md:text-8xl mb-24 leading-none tracking-tight text-white mb-20 text-center animate-fade-up">
          WHAT OUR <span className="text-outline text-white/50">CLIENT</span> SAYS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full animate-fade-up [animation-delay:0.2s]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-card p-12 border border-white/5 flex flex-col justify-between group hover:border-lime/30 hover:neobrutal-shadow transition-all duration-300 rounded-[40px]`}
            >
              <div className="text-8xl font-bebas text-lime/10 leading-none mb-1 group-hover:text-lime transition-colors">
                "
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-lime text-xl">★</span>
                ))}
              </div>

              <p className="font-dm text-white/80 text-lg leading-relaxed mb-12">
                {t.text}
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-lime/20 to-blue/20" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bebas text-xl text-white tracking-tight">{t.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
