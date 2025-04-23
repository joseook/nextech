import { HeroSection } from "@/components/hero-section";
import { ProductSection } from "@/components/product-section";
import { FeaturesSection } from "@/components/features-section";
import { ThreeScene } from "@/components/three-scene";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <ThreeScene />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}