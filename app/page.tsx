import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import CtaSection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </div>
  );
}