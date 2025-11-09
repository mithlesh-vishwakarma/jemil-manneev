import React from "react";
// import introVideo from "./assets/intro.mp4"; 

const BuildingMaterialsLanding: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="https://media.istockphoto.com/id/2187673046/video/bathroom-with-shower.mp4?s=mp4-640x640-is&k=20&c=DSEjCMJCVp7SnKg9hF9kPR0h6nMJrciDAw3Wv96lNFc="
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text / CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-purple-400">MANNEEV</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mb-8">
          Building the future with strength, quality, and trust.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default BuildingMaterialsLanding;
