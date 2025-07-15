import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galactecho",
  description: "Build Your business from scratch | We help you Grwo your business",
   icons: {
    icon: "/icon.png", // or "/your-icon.png"
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <Video />
      <AboutSectionOne />
      <Testimonials />
      <Contact />
    </>
  );
}
