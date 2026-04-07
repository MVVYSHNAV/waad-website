import Image from "next/image";

const team = [
  { name: "ALEX RIVERA", role: "Creative Director", image: "/t1.png" },
  { name: "SOPHIA CHEN", role: "Art Director", image: "/t2.png" },
  { name: "MARCUS THORPE", role: "Lead Developer", image: "/t1.png" },
  { name: "ELENA VANCE", role: "Brand Strategist", image: "/t2.png" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold">
          [THE BRAINS]
        </label>
        
        <h2 className="text-5xl md:text-8xl mb-24 leading-none tracking-tight text-foreground inline-flex items-center gap-6">
          TEAM OF EXPERT <span className="text-lime">★</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 w-full">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-10 overflow-hidden rounded-full border-2 border-border transition-all duration-500 group-hover:border-lime group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl md:text-4xl text-foreground font-bebas mb-2 group-hover:text-lime transition-colors">
                {member.name}
              </h3>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
