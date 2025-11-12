import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from '@heroicons/react/24/solid';
import TechnicalSpecsCard from '../../components/TechnicalSpecsCards';

// ==== LOCAL IMAGES (you can add more here) ====
import glossy102 from '../../assets/bg-main (1).webp';
import glossy103 from '../../assets/bg-main (1).webp';
import carving704 from '../../assets/bg-main (1).webp';
import sinker12 from '../../assets/bg-main (1).webp';

// ==== PRODUCT DATA ====
const productData = {
  brand: "Manneev Premium Tiles",
  size: "4' x 2' ft (1200 x 600 mm)",
  finishes: {
    glossy: {
      title: "Glossy Finish",
      description:
        "Discover the epitome of modern elegance with our Glossy finish tiles. Known for their sleek, polished surface, these tiles are designed to reflect light, instantly making your spaces feel brighter and more open.",
      products: [
        { id: 1, code: "102 SATVARIO", image: glossy102 },
        { id: 2, code: "103 SILK ONYX", image: glossy103 },
        { id: 3, code: "113 SATVARIO WHITE", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
        { id: 4, code: "132 MARFIL", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
      ],
    },
    carving: {
      title: "Carving Finish",
      description:
        "Make a bold statement with our Carving finish tiles. Designed with raised, detailed patterns, this finish provides a unique, three-dimensional effect that adds a profound artistic touch to any surface.",
      products: [
        { id: 9, code: "704 ASTER WHITE", image: carving704 },
        { id: 10, code: "706 PIETRA ASH", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
      ],
    },
    sinker: {
      title: "Sinker Finish",
      description:
        "Experience the perfect blend of form and function with our Sinker finish tiles. This finish features a textured, matte surface with subtle indentations, offering enhanced slip resistance.",
      products: [
        { id: 14, code: "12 BEATNIK BASE", image: sinker12 },
        { id: 15, code: "11 BEATNIK DECOR", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
      ],
    },
  },
};

// ==== TYPES ====
type FinishSectionProps = {
  finishKey: keyof typeof productData.finishes;
  finish: typeof productData.finishes[keyof typeof productData.finishes];
  isExpanded: boolean;
  onToggle: () => void;
};

// ==== REUSABLE SECTION ====
const FinishSection: React.FC<FinishSectionProps> = ({ finishKey, finish, isExpanded, onToggle }) => {

  const getBadgeColor = (finishKey: string): string => {
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
    <div className="bg-[#1c1c1c] rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-200">
      {/* Header */}
      <div
        className="p-6 cursor-pointer flex items-center justify-between transition-colors hover:bg-[#2a2a2a]"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBadgeColor(finishKey)}`}>
            <StarIcon className={`w-6 h-6 ${getIconColor(finishKey)}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#D4AF37]">{finish.title}</h2>
            <p className="text-gray-400 mt-1">{productData.brand} • {productData.size}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#D4AF37]">
            {finish.products.length} Products
          </span>
          {isExpanded ? (
            <ChevronUpIcon className="w-6 h-6 text-gray-400" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          {/* Description */}
          <div className="mt-6 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">{finish.description}</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {finish.products.map((product) => (
              <div key={product.id} className="tile-card rounded-lg overflow-hidden border border-gray-600">
                <div className="aspect-square relative group">
                  <img
                    src={product.image}
                    alt={product.code}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-[#D4AF37] text-lg">{product.code}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-400">{productData.size}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getBadgeColor(finishKey)}`}>
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

// ==== MAIN APP ====
function Tiles() {
  const [expandedSections, setExpandedSections] = useState({
    glossy: true,
    carving: false,
    sinker: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-[#d1c1a4]">
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Intro */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4AF37] rounded-full px-6 py-4 shadow-lg mb-6">
            <span className="text-[#1c1c1c] font-semibold">✨ Premium Quality Tiles ✨</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Our Exclusive Collection</h2>
          <p className="text-xl text-[#424242] max-w-3xl mx-auto">
            Explore our three distinct finishes — each designed to bring unique character and functionality to your spaces.
          </p>
        </div>

        {/* Finishes */}
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

        {/* Technical Specs */}
        <TechnicalSpecsCard />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-300 mb-6">Contact us for samples and professional consultation</p>
          <button className="bg-[#D4AF37] hover:bg-[#c7a030] text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Samples
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Tiles;
