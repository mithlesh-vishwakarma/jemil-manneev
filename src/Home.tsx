import React, { useState } from "react";
import KeywordScroll from "./components/KeywordScroll";

import Video1 from "./assets/2-video-sample1.webm";
import Video2 from "./assets/3-video-sample1.webm";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatesSection";
import VideoProduct from "./components/VideoProduct";
// import ProductSection from "./components/ProductSection";

const LandingPage: React.FC = () => {
  const [currentMedia, setCurrentMedia] = useState<"video1" | "video2">("video1");

  const handleVideoEnd = () => {
    // Switch between Video1 and Video2 for looping sequence
    setCurrentMedia((prev) => (prev === "video1" ? "video2" : "video1"));
  };

  return (
    <>
      {/* Main Website Content */}
      {/* Background Video & Overlay (Fixed) */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <video
          src={currentMedia === "video1" ? Video1 : Video2}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Website Content */}
      <div className="relative pt-[140px]">
        {/* Hero Section (Content Scrolls) */}
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-bold text-white/90 mb-6 drop-shadow-lg">
              Welcome to <span className="text-[#D4AF37]">MANNEEV</span>
            </h1>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mb-8">
              Building the future with strength, quality, and trust.
            </p>
          </div>
        </section>

        {/* Scrolling Keywords Section */}
        <div id="second-section">  <KeywordScroll />  </div>
        {/* <ProductSection /> */}
        <VideoProduct />
        <WhyChooseUs />
        <StatsSection />
      </div>
    </>
  );
};

export default LandingPage;
