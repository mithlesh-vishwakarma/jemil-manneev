import React from "react";
import Button from "./ui/Button";

const VideoProduct: React.FC = () => {
  return (
    <section className="w-full bg-[#d1c1a4] text-[#1c1c1c] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-wide">
            Luxury, Crafted to Perfection
          </h2>
          <p className="text-lg lg:text-xl text-[#6e633e]">
            Our curated range of sophisticated fixtures and custom bathroom designs transforms every corner into a luxurious retreat, blending style with impeccable quality
          </p>
          <ul className="space-y-3 text-[#1c1c1c] list-disc list-inside">
            <li>Premium quality materials built to last</li>
            <li>Modern designs tailored for luxury</li>
            <li>Seamless integration into any space</li>
          </ul>
          <Button href="/products" size="md">
            Explore More
          </Button>
        </div>

        {/* Right Side Video */}
        <div className="w-full">
          <div className="overflow-hidden">
            <video
              src="https://www.shutterstock.com/shutterstock/videos/1092222915/preview/stock-footage-modern-interior-design-of-the-kitchen-stylish-interior-of-the-kitchen-countertop-breakfast-room.webm"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoProduct;
