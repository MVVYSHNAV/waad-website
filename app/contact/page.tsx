"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="relative flex flex-col w-full min-h-screen md:max-w-screen-2xl md:mx-auto md:border-x border-white/10 shadow-2xl bg-black selection:bg-lime selection:text-black">
      <CustomCursor />
      <Noise />
      <Navbar />
      
      <section className="pt-40 lg:pt-56 pb-24 px-6 lg:px-12 flex flex-col items-center max-w-screen-xl mx-auto w-full relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lime/10 blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue/10 blur-[120px] -z-10 opacity-30" />

        <div className="flex flex-col gap-12 w-full text-left md:text-center items-center mb-24 reveal active">
          <label className="font-mono text-[11px] uppercase tracking-[0.5em] text-lime font-bold block">
            [INITIATE DISRUPTION]
          </label>
          <h1 className="text-7xl md:text-[clamp(4.5rem,11vw,12rem)] font-bebas leading-[0.8] tracking-tighter text-white uppercase italic">
            READY TO <span className="text-outline text-white/20">REDEFINE</span> EVERYTHING?
          </h1>
          <p className="font-dm text-white/50 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            Whether you are a startup with a vision or an enterprise in need of disruption, we engineer the elite software that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full mt-10 items-start">
          {/* Left Column: Direct Contact */}
          <div className="flex flex-col gap-24 reveal active [animation-delay:0.3s]">
            <div className="flex flex-col gap-10">
              <h3 className="font-bebas text-5xl text-white tracking-widest uppercase border-l-4 border-lime pl-6">
                DIRECT CHANNELS
              </h3>
              <div className="flex flex-col gap-12">
                <div className="group">
                  <p className="font-mono text-[10px] text-white/30 tracking-[0.4em] uppercase mb-1">GENERAL INQUIRIES</p>
                  <a href="mailto:hello@waad.agency" className="text-3xl md:text-5xl font-bebas text-white hover:text-lime transition-all decoration-1 underline underline-offset-8 decoration-white/10 hover:decoration-lime">
                    HELLO@WAAD.AGENCY
                  </a>
                </div>
                <div className="group">
                  <p className="font-mono text-[10px] text-white/30 tracking-[0.4em] uppercase mb-1">SCHEDULING</p>
                  <a href="#" className="text-3xl md:text-5xl font-bebas text-white hover:text-lime transition-all decoration-1 underline underline-offset-8 decoration-white/10 hover:decoration-lime">
                    BOOK A MEET.EXE ↘
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="font-bebas text-5xl text-white tracking-widest uppercase border-l-4 border-blue/40 pl-6">
                SOCIAL NODES
              </h3>
              <div className="flex flex-wrap gap-x-14 gap-y-8">
                {["INSTAGRAM", "LINKEDIN", "TWITTER", "DRIBBBLE"].map(sm => (
                  <a key={sm} href="#" className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40 hover:text-lime transition-colors">
                    /{sm}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-14 rounded-[50px] border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] backdrop-blur-3xl relative overflow-hidden reveal active [animation-delay:0.5s]">
            <div className="absolute top-0 right-0 w-full h-1/2 bg-lime/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue/5 blur-[100px] -z-10" />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
