import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from '@heroicons/react/24/solid';
import TechnicalSpecs from '../../components/TechnicalSpecs';
import { FaWhatsapp } from "react-icons/fa";
import AutoCarousel from "../../components/AutoCarousel";

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
        { id: 5, code: "133 ONISTA IVORY", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" },
        { id: 6, code: "151 NATURAL BEIGE", image: "https://images.pexels.com/photos/1447801/pexels-photo-1447801.jpeg" },
        { id: 7, code: "381 BRECCIA OLIVE", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg" },
        { id: 8, code: "1674 ITALIAN GOLD", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" },
        { id: 9, code: "GREY MURA PEARL", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" },
        { id: 10, code: "1808 THUNDER BOLT", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" },
        { id: 11, code: "1813 ANGELO WHITE", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
        { id: 12, code: "1930 VIGA SILVER", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
        { id: 13, code: "1934 PAZERO REX", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" },
        { id: 14, code: "25142 ONYX SIENNA", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg" },
        { id: 15, code: "40118 RYNESTONE", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" },
        { id: 16, code: "1984 MODULAR GREEN", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" },
        { id: 17, code: "1989 MODULAR BLACK", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
        { id: 18, code: "2107 RODRIO GOLD", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
      ],
    },
    carving: {
      title: "Carving Finish",
      description:
        "Make a bold statement with our Carving finish tiles. Designed with raised, detailed patterns, this finish provides a unique, three-dimensional effect that adds a profound artistic touch to any surface.",
      products: [
        { id: 19, code: "704 ASTER WHITE", image: carving704 },
        { id: 20, code: "706 PIETRA ASH", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
        { id: 21, code: "709 PIETRA NERO", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
        { id: 22, code: "716 FLORENCIA BEIGE", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" },
        { id: 23, code: "743 SOL BLUE", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg" },
        { id: 24, code: "763 VALVET CREMA", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" },
        { id: 25, code: "766 CYRENE BROWN", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" },
        { id: 26, code: "767 CYRENE CREMA", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
        { id: 27, code: "768 CYRENE GRIS", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
        { id: 28, code: "17013 CROWN", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" },
      ],
    },
    sinker: {
      title: "Sinker Finish",
      description:
        "Experience the perfect blend of form and function with our Sinker finish tiles. This finish features a textured, matte surface with subtle indentations, offering enhanced slip resistance.",
      products: [
        { id: 29, code: "12 BEATNIK BASE", image: sinker12 },
        { id: 30, code: "11 BEATNIK DECOR", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg" },
        { id: 31, code: "81 NINJO GREY", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg" },
        { id: 32, code: "80 NINJO GREY DECOR", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" },
        { id: 33, code: "22 SWIM NATURAL", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" },
        { id: 34, code: "53 SWIM MULTI DECOR", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg" },
      ],
    },
  },
};


const slides = [
  {
    image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg",
    title: "Glossy Finish",
    subtitle: "Discover the epitome of modern elegance with our Glossy finish tiles. Known for their sleek, polished surface, these tiles are designed to reflect light, instantly making your spaces feel brighter and more open.",
  },
  {
    image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
    title: "Carving Finish",
    subtitle: "Make a bold statement with our Carving finish tiles. Designed with raised, detailed patterns, this finish provides a unique, three-dimensional effect that adds a profound artistic touch to any surface.",
  },
  {
    image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg",
    title: "Sinker Finish",
    subtitle: "Experience the perfect blend of form and function with our Sinker finish tiles. This finish features a textured, matte surface with subtle indentations, offering enhanced slip resistance.",
  },
];


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
    <div className="bg-[#111111] rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-200">

      {/* Header */}
      <div
        className="p-6 cursor-pointer flex items-center justify-between transition-colors hover:bg-[#88876d]"
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
              <div
                key={product.id}
                className="group relative rounded-2xl overflow-hidden 
             bg-white/10 backdrop-blur-md 
             border border-white/20 
             shadow-lg hover:shadow-2xl 
             transition-all duration-300 
             hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.code}
                    className="w-full h-full object-cover 
                 transition-transform duration-500 
                 hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 
                    bg-linear-to-t 
                    from-black/50 via-black/10 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300" />
                </div>

                {/* Glass Content */}
                <div className="relative p-4">
                  <h3 className="font-semibold text-[#D4AF37] text-lg tracking-wide">
                    {product.code}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-300">
                      {productData.size}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full 
                    border border-white/30 
                    backdrop-blur-sm 
                    ${getBadgeColor(finishKey)}`}
                    >
                      {finishKey.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Subtle shine */}
                <div
                  className="pointer-events-none absolute inset-0 
               rounded-2xl 
               ring-1 ring-inset ring-white/10"
                />
              </div>

            ))}
          </div>
        </div>
      )}
    </div>

  );

};


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
      <section className="h-[75v] relative bg-[linear-gradient(180deg,#faf5ff,rgba(250,246,255,0.6))] overflow-hidden">

        <AutoCarousel slides={slides} />
      </section>
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
        <div className="max-w-full mx-auto">
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

      </main>
      <TechnicalSpecs />
      {/* Footer */}
      <footer className="bg-[#88876d] text-gray-800 py-12 mt-0">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-800 mb-6">
            Contact us for samples and professional consultation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/919326947550"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl font-semibold transition-colors border border-green-800"
            >
              <FaWhatsapp className="text-3xl" />
              Contact Us
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Tiles;
