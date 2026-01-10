// import React, { useMemo } from 'react';
import ProductShowcase from "../../components/ProductShowcase";

import glossy102 from "../../assets/bg-main (1).webp";
import glossy103 from "../../assets/bg-main (1).webp";
import carving704 from "../../assets/bg-main (1).webp";
import sinker12 from "../../assets/bg-main (1).webp";
import { useMemo } from "react";

// ==== PRODUCT DATA ====
const productData = {
  brand: "Manneev Premium Tiles",
  size: "4' x 2' ft (1200 x 600 mm)",
  finishes: {
    glossy: {
      title: "Glossy Finish",
      products: [
        {
          id: 1,
          code: "Patron Brown Light",
          image: "glossy001.png",
          color: "Brown Light",
        },
        {
          id: 2,
          code: "Sirico Gold",
          image: "glossy002.png",
          color: "Gold",
        },
        {
          id: 3,
          code: "Swan Sky",
          image: "glossy003.png",
          color: "Sky",
        },
        {
          id: 4,
          code: "Patron Mud Light",
          image: "glossy004.png",
          color: "Mud Light",
        },
        {
          id: 5,
          code: "ATLANTIS",
          image: "glossy005.png",
          color: "White",
        },
        {
          id: 6,
          code: "Florence Pearl",
          image: "glossy006.png",
          color: "Pearl",
        },
        {
          id: 7,
          code: "Himaliya White",
          image: "glossy007.png",
          color: "White",
        },
        {
          id: 8,
          code: "NIKOLIA BIANCO",
          image: "glossy008.png",
          color: "Bianco",
        },
        {
          id: 9,
          code: "Ester Mix",
          image: "glossy009.png",
          color: "Mix",
        },
        {
          id: 10,
          code: "Aquarius Onyx Grey",
          image: "glossy010.png",
          color: "Onyx Grey",
        },
        {
          id: 11,
          code: "Indigo Statuario Brown",
          image: "glossy011.png",
          color: "Statuario Brown",
        },
        {
          id: 12,
          code: "Magnetic Natural",
          image: "glossy012.png",
          color: "Natural",
        },
        {
          id: 13,
          code: "ALT 1054",
          image: "glossy013.png",
          color: "Not specified",
        },
        {
          id: 14,
          code: "Sky Onyx Beige",
          image: "glossy014.png",
          color: "Onyx Beige",
        },
        {
          id: 15,
          code: "FLORET-101 LT",
          image: "glossy015.png",
          color: "Light (LT)",
        },
        {
          id: 16,
          code: "FLORET-101 DK",
          image: "glossy016.png",
          color: "Dark (DK)",
        },
      ],
    },
    slate: {
      title: "Slate Finish",
      products: [
        {
          id: 1,
          code: "AIRSLATE BEIGE",
          image: "slate001.png",
          color: "Beige",
        },
        {
          id: 2,
          code: "AIRSLATE CREMA LIGHT",
          image: "slate002.png",
          color: "Crema Light",
        },
        {
          id: 3,
          code: "AIRSLATE MULTY",
          image: "slate003.png",
          color: "Multy",
        },
        {
          id: 4,
          code: "AIRSLATE YELLOW",
          image: "slate004.png",
          color: "Yellow",
        },
        {
          id: 5,
          code: "CHIPS GREY",
          image: "slate005.png",
          color: "Grey",
        },
        {
          id: 6,
          code: "DARENA CHOCO",
          image: "slate006.png",
          color: "Choco",
        },
        {
          id: 7,
          code: "DARENA DOVE",
          image: "slate007.png",
          color: "Dove",
        },
        {
          id: 8,
          code: "SIMENDE GRIS",
          image: "slate008.png",
          color: "Gris",
        },
        {
          id: 9,
          code: "SIMENDE WHITE",
          image: "slate009.png",
          color: "White",
        },
      ],
    },
    carving: {
      title: "Carving Finish",
      products: [
        { id: 19, code: "704 ASTER WHITE", image: carving704, color: "White" },
        {
          id: 20,
          code: "706 PIETRA ASH",
          image:
            "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg",
          color: "Ash",
        },
        {
          id: 21,
          code: "709 PIETRA NERO",
          image:
            "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg",
          color: "Nero",
        },
        {
          id: 22,
          code: "716 FLORENCIA BEIGE",
          image:
            "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
          color: "Beige",
        },
        {
          id: 23,
          code: "743 SOL BLUE",
          image:
            "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg",
          color: "Blue",
        },
        {
          id: 24,
          code: "763 VALVET CREMA",
          image:
            "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg",
          color: "Crema",
        },
        {
          id: 25,
          code: "766 CYRENE BROWN",
          image:
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
          color: "Brown",
        },
        {
          id: 26,
          code: "767 CYRENE CREMA",
          image:
            "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg",
          color: "Crema",
        },
        {
          id: 27,
          code: "768 CYRENE GRIS",
          image:
            "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg",
          color: "Gris",
        },
        {
          id: 28,
          code: "17013 CROWN",
          image:
            "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
          color: "Gold",
        },
      ],
    },
    sinker: {
      title: "Sinker Finish",
      products: [
        { id: 29, code: "12 BEATNIK BASE", image: sinker12, color: "Base" },
        {
          id: 30,
          code: "11 BEATNIK DECOR",
          image:
            "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg",
          color: "Decor",
        },
        {
          id: 31,
          code: "81 NINJO GREY",
          image:
            "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg",
          color: "Grey",
        },
        {
          id: 32,
          code: "80 NINJO GREY DECOR",
          image:
            "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg",
          color: "Grey Decor",
        },
        {
          id: 33,
          code: "22 SWIM NATURAL",
          image:
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
          color: "Natural",
        },
        {
          id: 34,
          code: "53 SWIM MULTI DECOR",
          image:
            "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg",
          color: "Multi",
        },
      ],
    },
  },
};

const slides = [
  {
    image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg",
    title: "Glossy Finish",
    subtitle:
      "Discover the epitome of modern elegance with our Glossy finish tiles. Known for their sleek, polished surface, these tiles are designed to reflect light, instantly making your spaces feel brighter and more open.",
  },
  {
    image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
    title: "Carving Finish",
    subtitle:
      "Make a bold statement with our Carving finish tiles. Designed with raised, detailed patterns, this finish provides a unique, three-dimensional effect that adds a profound artistic touch to any surface.",
  },
  {
    image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg",
    title: "Sinker Finish",
    subtitle:
      "Experience the perfect blend of form and function with our Sinker finish tiles. This finish features a textured, matte surface with subtle indentations, offering enhanced slip resistance.",
  },
];

function Tiles() {
  // Flatten all products
  const allProducts = useMemo(
    () =>
      Object.entries(productData.finishes).flatMap(([, finish]) =>
        finish.products.map((product) => ({
          ...product,
          surface: finish.title,
          size: productData.size,
        }))
      ),
    []
  );

  return (
    <ProductShowcase
      title="Exclusive Collection"
      subtitle="Explore our diverse range of finishes and designs."
      products={allProducts}
      slides={slides}
    />
  );
}

export default Tiles;
