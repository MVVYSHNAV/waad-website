import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "125+", label: "Projects Done" },
    { value: "450+", label: "Media Featured" },
  ];

  const marqueeItems = ["Branding", "✦", "Graphic Design", "✦", "Web Design", "✦", "Digital Marketing", "✦"];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/20 rounded-full blur-[120px] -z-10" />
      
      {/* Floating Stats */}
      <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 z-20">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col border-l-2 border-lime pl-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="font-bebas text-4xl leading-none text-lime">{stat.value}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main Text Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start select-none">
          <h1 className="text-[clamp(5rem,18vw,14rem)] leading-[0.8] tracking-tighter text-white animate-fade-up">
            CREATIVE
          </h1>
          <h1 className="text-[clamp(5rem,18vw,14rem)] leading-[0.8] tracking-tighter text-outline animate-fade-up [animation-delay:0.2s]">
            AGENCY
          </h1>
        </div>
      </div>

      {/* Hero Image Cutout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 w-[60vw] max-w-[800px] z-[5] pointer-events-none opacity-90 mix-blend-screen animate-fade-up [animation-delay:0.4s]">
        <Image
          src="/hero_woman.png"
          alt="Creative Model"
          width={1200}
          height={1200}
          priority
          className="object-cover"
        />
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black py-8 border-t border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {marqueeItems.map((item, j) => (
                <span
                  key={j}
                  className={`font-bebas text-6xl md:text-8xl tracking-tight ${
                    item === "✦" ? "text-lime" : "text-white"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
