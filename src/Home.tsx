import React, { useState } from "react";
import KeywordScroll from "./components/KeywordScroll";
import IntroVideo from "./assets/MANNEEV ENTERPRISES.mp4";
import Video1 from "./assets/2-video-sample.mp4";
import Video2 from "./assets/3-video-sample.mp4";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatesSection";
import VideoProduct from "./components/VideoProduct";
import ProductSection from "./components/ProductSection";

const LandingPage: React.FC = () => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<"video1" | "video2">("video1");

  const handleIntroEnd = () => {
    setShowWebsite(true);
  };

  const handleVideoEnd = () => {
    // Switch between Video1 and Video2 for looping sequence
    setCurrentMedia((prev) => (prev === "video1" ? "video2" : "video1"));
  };

  return (
    <>
      {/* Intro Video Loader */}
      {!showWebsite && (
        <div className="fixed inset-0 z-[ 9999] bg-black flex items-center justify-center transition-opacity duration-700">
          <div className="relative w-[350px] sm:w-[480px] md:w-[640px] h-[ 240px] sm:h-[300px] md:h-[360px] overflow-hidden rounded-2xl shadow-2xl">
            <video
              src={IntroVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleIntroEnd}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Website Content */}
      <div
        className={`transition-opacity duration-1000 ${
          showWebsite ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <video
            src={currentMedia === "video1" ? Video1 : Video2}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text / CTA */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
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
        <ProductSection />
        <VideoProduct />
        <WhyChooseUs />
        <StatsSection />
      </div>
    </>
  );
};

export default LandingPage;
