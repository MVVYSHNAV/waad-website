"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="relative flex flex-col w-full min-h-screen md:max-w-screen-2xl md:mx-auto md:border-x border-border shadow-2xl bg-background selection:bg-lime selection:text-black">
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
          <h1 className="text-7xl md:text-[clamp(4.5rem,11vw,12rem)] font-bebas leading-[0.8] tracking-tighter text-foreground uppercase italic">
            READY TO <span className="text-outline text-foreground/20">REDEFINE</span> EVERYTHING?
          </h1>
          <p className="font-dm text-foreground/50 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            Whether you are a startup with a vision or an enterprise in need of disruption, we engineer the elite software that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 w-full mt-10 items-start">
          {/* Left Column: Direct Contact */}
          <div className="flex flex-col gap-24 reveal active [animation-delay:0.3s]">
            <div className="flex flex-col gap-10">
              <h3 className="font-bebas text-5xl text-foreground tracking-widest uppercase border-l-4 border-lime pl-6">
                DIRECT CHANNELS
              </h3>
              <div className="flex flex-col gap-12">
                <div className="group">
                  <p className="font-mono text-[10px] text-foreground/30 tracking-[0.4em] uppercase mb-1">GENERAL INQUIRIES</p>
                  <a href="mailto:hello@waad.agency" className="text-3xl md:text-5xl font-bebas text-foreground hover:text-lime transition-all decoration-1 underline underline-offset-8 decoration-border hover:decoration-lime">
                    HELLO@WAAD.AGENCY
                  </a>
                </div>
                <div className="group">
                  <p className="font-mono text-[10px] text-foreground/30 tracking-[0.4em] uppercase mb-1">SCHEDULING</p>
                  <a href="#" className="text-3xl md:text-5xl font-bebas text-foreground hover:text-lime transition-all decoration-1 underline underline-offset-8 decoration-border hover:decoration-lime">
                    BOOK A MEET.EXE ↘
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="font-bebas text-5xl text-foreground tracking-widest uppercase border-l-4 border-blue/40 pl-6">
                SOCIAL NODES
              </h3>
              <div className="grid grid-cols-2 gap-x-14 gap-y-10">
                {[
                  { name: "INSTAGRAM", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { name: "LINKEDIN", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                  { name: "TWITTER", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                  { name: "DRIBBBLE", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.49-6.18 7.08-15.26 8.67m13.29 1.89c-4.37-1.13-7.43-1.46-13.46.36"></path></svg> }
                ].map((sm, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:text-lime group-hover:border-lime transition-all duration-300">
                      {sm.icon}
                    </div>
                    <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/40 group-hover:text-foreground transition-colors">
                      {sm.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 md:p-14 rounded-[50px] border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] backdrop-blur-3xl relative overflow-hidden reveal active [animation-delay:0.5s]">
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
