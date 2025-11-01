"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Particles from "@/components/ui/Particles";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {theme } = useTheme()
  return (
    <main className="relative  min-h-screen flex-col items-center overflow-x-clip">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Doctors />
      <Contact />
      <Footer />
      {
        theme == "dark" &&
      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#00A9A5"}
        refresh
      />
      }
    </main>
  );
}
