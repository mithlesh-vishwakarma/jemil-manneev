import { Hero } from "./Hero";
import { NewsletterSection } from "./NewsletterSection";
import { ScheduleSection } from "./ScheduleSection";
import { ReadingTopics } from "./ReadingTopics";
import { SectorInsights } from "./SectorInsights";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <NewsletterSection />
      <ScheduleSection />
      <ReadingTopics />
      <SectorInsights />
      <Testimonials />
      <Footer />
    </div>
  );
}
