import React, { useState, useEffect } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle?: string;
};

type AutoCarouselProps = {
  slides: Slide[];
  interval?: number;
};

const AutoCarousel: React.FC<AutoCarouselProps> = ({ slides, interval = 4000 }) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-32 md:px-64 lg:px-98 text-white ">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl font-medium">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-110" : "bg-gray-400/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
