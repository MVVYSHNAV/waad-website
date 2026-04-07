import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen md:max-w-screen-2xl md:mx-auto md:border-x border-border shadow-2xl bg-background">
      <CustomCursor />
      <Noise />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Awards />
      <Team />
      <Testimonials />
      <Blog />
      <CTAFooter />
      <Footer />
    </main>
  );
}
