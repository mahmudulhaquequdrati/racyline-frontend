import React from "react";
import HeroSection from "../../components/LandingComponent/HeroSection";
import { SecondSection } from "../../components/LandingComponent/SecondSection";
import ThirdSection from "../../components/LandingComponent/ThirdSection";
import FourthSection from "../../components/LandingComponent/FourthSection";
import FifthSection from "../../components/LandingComponent/FifthSection";
import SisthSection from "../../components/LandingComponent/SisthSection";
import SeventhSection from "../../components/LandingComponent/SeventhSection";
import EighthSection from "../../components/LandingComponent/EighthSection";

export default function LandingPage() {
  return (
    <section className="bg-primary">
      <div className="overflow-hidden">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SisthSection />
        <SeventhSection />
        <EighthSection />
      </div>
    </section>
  );
}
