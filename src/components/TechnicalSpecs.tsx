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
    { icon: Palette, text: "Colors", color: "text-[#1c1c1c]" },
    { icon: Droplets, text: "Easy Clean", color: "text-[#1c1c1c]" },
    { icon: Ruler, text: "Accurate Size", color: "text-[#1c1c1c]" },
    { icon: Shield, text: "Anti-Skid", color: "text-[#1c1c1c]" },
    { icon: CloudRain, text: "Weather Proof", color: "text-[#1c1c1c]" },
    { icon: Spline, text: "Splash Proof", color: "text-[#1c1c1c]" },
    { icon: FlaskRound, text: "Chemical Resistant", color: "text-[#1c1c1c]" },
    { icon: Flame, text: "Fire Resistant", color: "text-[#1c1c1c]" },
    { icon: Dumbbell, text: "High Strength", color: "text-[#1c1c1c]" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#88876d] py-10 border border-[#1c1c1c]">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...specifications, ...specifications].map((spec, i) => (
          <span
            key={i}
            className="flex items-center text-[#1c1c1c] text-xl font-semibold mx-8"
          >
            <spec.icon
              size={24}
              className={`mr-3 ${spec.color}`}
            />
            {spec.text}
            <span className="mx-8 text-[#D4AF37]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnicalTermsScroll;
