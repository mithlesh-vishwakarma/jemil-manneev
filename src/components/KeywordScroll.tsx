import React from "react";

const KeywordScroll: React.FC = () => {
  const keywords = [
    "Luxury",
    "Premium Quality",
    "Innovation",
    "Sustainability",
    "Craftsmanship",
    "Elegance",
    "Performance",
    "Comfort",
    "Durability",
    "Design Excellence",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#1C1C1C] h-[56px] flex items-center">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        {[...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="flex items-center text-[#D4AF37] text-[20px] font-semibold leading-none mx-4"
          >
            <span className="mx-3 text-[#D4AF37]/60">✦</span>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordScroll;
