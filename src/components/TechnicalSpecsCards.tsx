
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
} from 'lucide-react';

const TechnicalTermsClone = () => {
  const specifications = [
    {
      icon: Palette,
      text: "colors",
      color: "text-purple-500"
    },
    {
      icon: Droplets,
      text: "easy clean", 
      color: "text-blue-500"
    },
    {
      icon: Ruler,
      text: "accurate size",
      color: "text-green-500"
    },
    {
      icon: Shield,
      text: "anti-skid", 
      color: "text-orange-500"
    },
    {
      icon: CloudRain,
      text: "weather proof",
      color: "text-gray-500"
    },
    {
      icon: Spline,
      text: "splash proof",
      color: "text-cyan-500"
    },
    {
      icon: FlaskRound,
      text: "Chemical Resistant",
      color: "text-red-500"
    },
    {
      icon: Flame,
      text: "Fire resistant", 
      color: "text-yellow-500"
    },
    {
      icon: Dumbbell,
      text: "High-Strength",
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="bg-white flex items-center justify-center p-6">
      <div className="w-full">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Technical Terms
          </h1>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: colors, easy clean, accurate size */}
          <div className="space-y-6">
            {specifications.slice(0, 3).map((spec, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className={`p-3 rounded-lg bg-white border border-gray-300 mr-4 ${spec.color}`}>
                  <spec.icon size={24} />
                </div>
                <span className="text-lg font-medium text-gray-800 capitalize">
                  {spec.text}
                </span>
              </div>
            ))}
          </div>

          {/* Column 2: anti-skid, weather proof, splash proof */}
          <div className="space-y-6">
            {specifications.slice(3, 6).map((spec, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className={`p-3 rounded-lg bg-white border border-gray-300 mr-4 ${spec.color}`}>
                  <spec.icon size={24} />
                </div>
                <span className="text-lg font-medium text-gray-800 capitalize">
                  {spec.text}
                </span>
              </div>
            ))}
          </div>

          {/* Column 3: Chemical Resistant, Fire resistant, High-Strength */}
          <div className="space-y-6">
            {specifications.slice(6, 9).map((spec, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className={`p-3 rounded-lg bg-white border border-gray-300 mr-4 ${spec.color}`}>
                  <spec.icon size={24} />
                </div>
                <span className="text-lg font-medium text-gray-800 capitalize">
                  {spec.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTermsClone;