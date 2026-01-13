import React from "react";
import {
  Palette,
  Droplets,
  Ruler,
  Shield,
  CloudRain,
  Spline,
  FlaskRound,
  Flame,
  Dumbbell
} from "lucide-react";

const TechnicalTermsScroll: React.FC = () => {
  const specifications = [
    { icon: Palette, text: "Colors", color: "text-[#F5F5F5]" },
    { icon: Droplets, text: "Easy Clean", color: "text-[#F5F5F5]" },
    { icon: Ruler, text: "Accurate Size", color: "text-[#F5F5F5]" },
    { icon: Shield, text: "Anti-Skid", color: "text-[#F5F5F5]" },
    { icon: CloudRain, text: "Weather Proof", color: "text-[#F5F5F5]" },
    { icon: Spline, text: "Splash Proof", color: "text-[#F5F5F5]" },
    { icon: FlaskRound, text: "Chemical Resistant", color: "text-[#F5F5F5]" },
    { icon: Flame, text: "Fire Resistant", color: "text-[#F5F5F5]" },
    { icon: Dumbbell, text: "High Strength", color: "text-[#F5F5F5]" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#1C1C1C] py-10 border border-[#2E2E2E]">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...specifications, ...specifications].map((spec, i) => (
          <span
            key={i}
            className="flex items-center text-[#F5F5F5] text-xl font-semibold mx-4"
          >
            <spec.icon
              size={24}
              className={`mr-3 ${spec.color}`}
            />
            {spec.text}
            <span className="mx-4 text-[#D4AF37]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnicalTermsScroll;
