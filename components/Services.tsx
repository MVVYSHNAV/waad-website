import Image from "next/image";

const services = [
  {
    title: "Brand Building & Strategy",
    description: "Crafting unique identities that resonate with your audience and define your market presence through strategic deep dives.",
    image: null,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Creative Digital Solution",
    description: "Building immersive digital experiences with cutting-edge tech and neobrutalist design philosophy.",
    image: "/service_digital.png",
    className: "md:col-span-1 md:row-span-2 h-full min-h-[400px]",
  },
  {
    title: "Marketing & Campaign",
    description: "Data-driven campaigns that hit hard and deliver measurable growth across all digital touchpoints.",
    image: null,
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-[#050A1A] clip-diagonal reveal">
      <div className="max-w-screen-2xl mx-auto">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold">
          [WHAT WE DO]
        </label>
        
        <h2 className="text-5xl md:text-8xl mb-16 max-w-3xl leading-[0.85] tracking-tight text-white mb-20 animate-fade-up">
          DESIGNING FOR SEAMLESS AND ENJOYABLE INTERACTIONS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-card p-10 border border-white/5 transition-all duration-500 hover:border-lime/50 hover:neobrutal-shadow flex flex-col justify-between ${service.className}`}
            >
              {service.image && (
                <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl mb-6 tracking-tight group-hover:text-lime transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-dm text-white/50 text-[18px] max-w-md leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex justify-end mt-12">
                <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-lime group-hover:text-black transition-all duration-300 transform group-hover:rotate-45 group-hover:scale-110">
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
