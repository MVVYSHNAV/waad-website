import Image from "next/image";

const posts = [
  {
    title: "The Rise of Neobrutalism in Web Design",
    category: "Design Trends",
    date: "Aug 15, 2024",
    image: "/p1.png",
  },
  {
    title: "Why Color Contrast Matters More Than Minimialism",
    category: "Inspiration",
    date: "Sep 22, 2024",
    image: "/p2.png",
  },
  {
    title: "10 Principles for Electric Branding",
    category: "Strategy",
    date: "Oct 10, 2024",
    image: "/p3.png",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 lg:px-12 bg-black border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <label className="font-mono text-xs uppercase tracking-[0.4em] text-lime mb-8 block font-bold">
          [THE ARCHIVE]
        </label>
        
        <h2 className="text-5xl md:text-8xl mb-24 leading-none tracking-tight text-white inline-flex items-center gap-6 text-center animate-fade-up">
          STAY INSPIRED WITH <span className="text-blue">OUR INSIGHTS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full animate-fade-up [animation-delay:0.2s]">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-none flex flex-col gap-8 flex-1">
              <div className="relative aspect-[16/10] overflow-hidden neobrutal-shadow group-hover:neobrutal-shadow-blue transition-all duration-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-lime text-black font-mono text-[9px] px-3 py-1 uppercase tracking-widest font-bold">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  {post.date}
                </span>
                <h3 className="text-3xl lg:text-4xl text-white font-bebas leading-tight tracking-tight group-hover:text-lime transition-colors">
                  {post.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[#F0F0F0] mt-auto">
                Read Article <span className="text-lime group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
