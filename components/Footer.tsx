import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Services", links: ["Website Developing", "App Developing", "Billing Software", "ERP & CRM"] },
  { name: "Company", links: ["About Us", "Our Team", "Careers", "News & Insights"] },
  { name: "Contact", links: ["Inquiry Form", "Schedule a Meet", "Support Center", "General Email"] },
];

const socials = ["Instagram", "Twitter", "LinkedIn", "Dribbble", "Behance"];

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 lg:px-12 bg-[#0A0A0A] border-t border-white/5 relative z-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col gap-10">
          <Link href="/" className="relative h-20 w-20 group transition-transform hover:scale-110">
            <Image
              src="/waadlogo.png"
              alt="WAAD Logo"
              fill
              className="object-contain"
            />
          </Link>
          <p className="font-dm text-white/50 text-xl leading-relaxed max-w-xs">
            Pushing the boundaries of digital possibility with raw energy and meticulous design.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-[9px] uppercase tracking-widest text-[#F0F0F0] hover:text-lime transition-colors underline underline-offset-8"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Columns */}
        {navLinks.map((col, i) => (
          <div key={i} className="flex flex-col gap-10">
            <h4 className="font-bebas text-4xl text-white tracking-widest uppercase">
              {col.name}
            </h4>
            <div className="flex flex-col gap-6">
              {col.links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="font-dm text-white/40 text-lg hover:text-white transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto pt-32 mt-32 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/30 text-center md:text-left">
          © 2024 WAAD AGENCY — ALL RIGHTS RESERVED. <br /> MADE WITH PASSION IN A DISTANT FUTURE.
        </div>
        <div className="flex items-center gap-12 font-mono text-[11px] uppercase tracking-widest text-white/30">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
