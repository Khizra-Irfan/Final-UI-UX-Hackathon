"use client"

import Hero from "@/components/hero-banner";
import Features from "@/components/features-section";
import News from "@/components/newsletter-section";
import Hero2 from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Hero2 />
      <News />
    </>
  );
}
