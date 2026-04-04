import Image from "next/image";

const projects = [
  {
    title: "NEO-IDENTITY",
    category: "Branding / Identity",
    image: "/p1.png",
    className: "md:col-span-1 h-[400px]",
  },
  {
    title: "STREET CULTURE",
    category: "Web / Digital",
    image: "/p2.png",
    className: "md:col-span-1 h-[400px]",
  },
  {
    title: "VIBE CHECK",
    category: "Creative Dir / Design",
    image: "/p3.png",
    className: "md:col-span-2 h-[500px]",
  },
  {
    title: "FUTURE ARCHIVE",
    category: "Branding / Digital",
    image: "/p1.png",
    className: "md:col-span-1 h-[450px]",
  },
  {
    title: "BEYOND BORDERS",
    category: "Web / Product",
    image: "/p2.png",
    className: "md:col-span-1 h-[450px]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="max-w-screen-2xl mx-auto">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold animate-fade-up">
          [OUR LATEST WORK]
        </label>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <h2 className="text-5xl md:text-8xl flex-1 leading-none tracking-tight text-white animate-fade-up">
            OUR WORK SPEAKS <br /> FOR ITSELF.
          </h2>
          <button className="px-8 py-4 border border-white/10 font-mono text-xs uppercase tracking-widest text-white hover:bg-lime hover:text-black transition-all duration-300 transform hover:-translate-y-1">
            View All Projects ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-card border border-white/5 transition-all duration-500 hover:border-lime/40 ${project.className}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-10">
                <div className="flex flex-col items-start gap-4">
                  <span className="bg-lime text-black font-mono text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-4xl text-white font-bebas tracking-tighter">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {/* Permanent Badge (Mobile fallback or stylistic) */}
              <div className="absolute top-6 left-6 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center text-black text-xl font-bold">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
