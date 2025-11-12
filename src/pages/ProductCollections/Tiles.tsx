import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from '@heroicons/react/24/solid';
import TechnicalSpecsCard from '../../components/TechnicalSpecsCards';

// Sample data - in real app, this would come from API
const productData = {
  brand: "FLAVOUR GRANITO",
  size: "600 x 1200 mm",
  finishes: {
    glossy: {
      title: "Glossy Finish",
      description: "Discover the epitome of modern elegance with our Glossy finish tiles. Known for their sleek, polished surface, these tiles are designed to reflect light, instantly making your spaces feel brighter and more open.",
      products: [
        { id: 1, code: "102 SATVARIO", image: "/api/placeholder/300/300?text=102+SATVARIO" },
        { id: 2, code: "103 SILK ONYX", image: "/api/placeholder/300/300?text=103+SILK+ONYX" },
        { id: 3, code: "113 SATVARIO WHITE", image: "/api/placeholder/300/300?text=113+SATVARIO+WHITE" },
        { id: 4, code: "132 MARFIL", image: "/api/placeholder/300/300?text=132+MARFIL" },
        { id: 5, code: "133 ONISTA IVORY", image: "/api/placeholder/300/300?text=133+ONISTA+IVORY" },
        { id: 6, code: "151 NATURAL BEIGE", image: "/api/placeholder/300/300?text=151+NATURAL+BEIGE" },
        { id: 7, code: "381 BRECCIA OLIVE", image: "/api/placeholder/300/300?text=381+BRECCIA+OLIVE" },
        { id: 8, code: "1674 ITALIAN GOLD", image: "/api/placeholder/300/300?text=1674+ITALIAN+GOLD" },
      ]
    },
    carving: {
      title: "Carving Finish",
      description: "Make a bold statement with our Carving finish tiles. Designed with raised, detailed patterns, this finish provides a unique, three-dimensional effect that adds a profound artistic touch to any surface.",
      products: [
        { id: 9, code: "704 ASTER WHITE", image: "/api/placeholder/300/300?text=704+ASTER+WHITE" },
        { id: 10, code: "706 PIETRA ASH", image: "/api/placeholder/300/300?text=706+PIETRA+ASH" },
        { id: 11, code: "709 PIETRA NERO", image: "/api/placeholder/300/300?text=709+PIETRA+NERO" },
        { id: 12, code: "716 FLORENCIA BEIGE", image: "/api/placeholder/300/300?text=716+FLORENCIA+BEIGE" },
        { id: 13, code: "743 SOL BLUE", image: "/api/placeholder/300/300?text=743+SOL+BLUE" },
      ]
    },
    sinker: {
      title: "Sinker Finish",
      description: "Experience the perfect blend of form and function with our Sinker finish tiles. This finish features a textured, matte surface with subtle indentations, offering enhanced slip resistance.",
      products: [
        { id: 14, code: "12 BEATNIK BASE", image: "/api/placeholder/300/300?text=12+BEATNIK+BASE" },
        { id: 15, code: "11 BEATNIK DECOR", image: "/api/placeholder/300/300?text=11+BEATNIK+DECOR" },
        { id: 16, code: "81 NINJO GREY", image: "/api/placeholder/300/300?text=81+NINJO+GREY" },
        { id: 17, code: "80 NINJO GREY DECOR", image: "/api/placeholder/300/300?text=80+NINJO+GREY+DECOR" },
        { id: 18, code: "22 SWIM NATURAL", image: "/api/placeholder/300/300?text=22+SWIM+NATURAL" },
      ]
    }
  }
};

type FinishSectionProps = {
  finishKey: keyof typeof productData.finishes;
  finish: typeof productData.finishes[keyof typeof productData.finishes];
  isExpanded: boolean;
  onToggle: () => void;
};

const FinishSection: React.FC<FinishSectionProps> = ({ finishKey, finish, isExpanded, onToggle }) => {
  interface BadgeColorMap {
    [key: string]: string;
    glossy: string;
    carving: string;
    sinker: string;
  }

  const getBadgeColor = (finishKey: keyof BadgeColorMap | string): string => {
    switch (finishKey) {
      case 'glossy': return 'bg-blue-100 text-blue-800';
      case 'carving': return 'bg-purple-100 text-purple-800';
      case 'sinker': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconColor = (finishKey: string) => {
    switch (finishKey) {
      case 'glossy': return 'text-blue-500';
      case 'carving': return 'text-purple-500';
      case 'sinker': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-200">
      {/* Header */}
      <div
        className="p-6 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBadgeColor(finishKey)}`}>
            <StarIcon className={`w-6 h-6 ${getIconColor(finishKey)}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{finish.title}</h2>
            <p className="text-gray-600 mt-1">{productData.brand} • {productData.size}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="finish-badge bg-gray-100 text-gray-700">
            {finish.products.length} Products
          </span>
          {isExpanded ? (
            <ChevronUpIcon className="w-6 h-6 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-gray-500" />
          )}
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          {/* Description */}
          <div className="mt-6 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">{finish.description}</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {finish.products.map((product) => (
              <div key={product.id} className="tile-card bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <div className="aspect-square from-gray-200 to-gray-300 relative group">
                  <img
                    src={product.image}
                    alt={product.code}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg">{product.code}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-600">{productData.size}</span>
                    <span className={`finish-badge ${getBadgeColor(finishKey)}`}>
                      {finishKey.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const [expandedSections, setExpandedSections] = useState({
    glossy: true,
    carving: false,
    sinker: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mt-12 relative z-10">
        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-full px-6 py-4 shadow-lg mb-6">
            <span className="text-gray-700 font-semibold">✨ Premium Quality Tiles ✨</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Our Exclusive Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our three distinct finishes - each designed to bring unique character 
            and functionality to your spaces. From modern glossy elegance to textured artistic statements.
          </p>
        </div>

        {/* Finish Sections */}
        <div className="max-w-7xl mx-auto">
          {Object.entries(productData.finishes).map(([key, finish]) => (
            <FinishSection
              key={key}
              finishKey={key as keyof typeof productData.finishes}
              finish={finish}
              isExpanded={expandedSections[key as keyof typeof expandedSections]}
              onToggle={() => toggleSection(key as keyof typeof expandedSections)}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-grade materials ensuring durability and long-lasting beauty</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Finishes</h3>
            <p className="text-gray-600">Choose from glossy, carving, and sinker finishes for every need</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Slip Resistant</h3>
            <p className="text-gray-600">Safety-focused designs perfect for all environments</p>
          </div>
        </div>
      </main>
          <TechnicalSpecsCard />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-300 mb-6">Contact us for samples and professional consultation</p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Samples
          </button>
        </div>
      </footer>
    </div>
  );


}

export default App;