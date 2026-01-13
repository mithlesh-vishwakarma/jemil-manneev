// import React, { useMemo } from 'react';
import ProductShowcase from "../../components/ProductShowcase";
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
          image: "glossy001.webp",
          images: ["glossy001.webp", "glossy002.webp", "glossy003.webp"],
          color: "Brown Light",
        },
        {
          id: 2,
          code: "Sirico Gold",
          image: "glossy002.webp",
          images: ["glossy002.webp", "glossy004.webp", "glossy005.webp"],
          color: "Gold",
        },
        {
          id: 3,
          code: "Swan Sky",
          image: "glossy003.webp",
          images: ["glossy003.webp", "glossy004.webp", "glossy005.webp"],
          color: "Sky",
        },
        {
          id: 4,
          code: "Patron Mud Light",
          image: "glossy004.webp",
          images: ["glossy004.webp", "glossy005.webp", "glossy006.webp"],
          color: "Mud Light",
        },
        {
          id: 5,
          code: "ATLANTIS",
          image: "glossy005.webp",
          images: ["glossy005.webp", "glossy006.webp", "glossy007.webp"],
          color: "White",
        },
        {
          id: 6,
          code: "Florence Pearl",
          image: "glossy006.webp",
          images: ["glossy006.webp", "glossy007.webp", "glossy008.webp"],
          color: "Pearl",
        },
        {
          id: 7,
          code: "Himaliya White",
          image: "glossy007.webp",
          images: ["glossy007.webp", "glossy008.webp", "glossy009.webp"],
          color: "White",
        },
        {
          id: 8,
          code: "NIKOLIA BIANCO",
          image: "glossy008.webp",
          images: ["glossy008.webp", "glossy009.webp", "glossy010.webp"],
          color: "Bianco",
        },
        {
          id: 9,
          code: "Ester Mix",
          image: "glossy009.webp",
          images: ["glossy009.webp", "glossy010.webp", "glossy011.webp"],
          color: "Mix",
        },
        {
          id: 10,
          code: "Aquarius Onyx Grey",
          image: "glossy010.webp",
          images: ["glossy010.webp", "glossy011.webp", "glossy012.webp"],
          color: "Onyx Grey",
        },
        {
          id: 11,
          code: "Indigo Statuario Brown",
          image: "glossy011.webp",
          images: ["glossy011.webp", "glossy012.webp", "glossy013.webp"],
          color: "Statuario Brown",
        },
        {
          id: 12,
          code: "Magnetic Natural",
          image: "glossy012.webp",
          images: ["glossy012.webp", "glossy013.webp", "glossy014.webp"],
          color: "Natural",
        },
        {
          id: 13,
          code: "ALT 1054",
          image: "glossy013.webp",
          images: ["glossy013.webp", "glossy014.webp", "glossy015.webp"],
          color: "Not specified",
        },
        {
          id: 14,
          code: "Sky Onyx Beige",
          image: "glossy014.webp",
          images: ["glossy014.webp", "glossy015.webp", "glossy016.webp"],
          color: "Onyx Beige",
        },
        {
          id: 15,
          code: "FLORET-101 LT",
          image: "glossy015.webp",
          images: ["glossy015.webp", "glossy016.webp", "glossy017.webp"],
          color: "Light (LT)",
        },
        {
          id: 16,
          code: "FLORET-101 DK",
          image: "glossy016.webp",
          images: ["glossy016.webp", "glossy017.webp", "glossy018.webp"],
          color: "Dark (DK)",
        },
        {
          id: 17,
          code: "102 SATVARIO",
          image: "glossy017.webp",
          images: ["glossy017.webp", "glossy018.webp", "glossy019.webp"],
          color: "White/Light",
        },
        {
          id: 18,
          code: "103 SILK ONYX",
          image: "glossy018.webp",
          images: ["glossy018.webp", "glossy019.webp", "glossy020.webp"],
          color: "Dark/Black",
        },
        {
          id: 19,
          code: "113 SATVARIO WHITE",
          image: "glossy019.webp",
          images: ["glossy019.webp", "glossy020.webp", "glossy021.webp"],
          color: "White",
        },
        {
          id: 20,
          code: "132 MARFIL",
          image: "glossy020.webp",
          images: ["glossy020.webp", "glossy021.webp", "glossy022.webp"],
          color: "Cream/Ivory",
        },
        {
          id: 21,
          code: "133 ONISTA IVORY",
          image: "glossy021.webp",
          images: ["glossy021.webp", "glossy022.webp", "glossy023.webp"],
          color: "Ivory/Off-white",
        },
        {
          id: 22,
          code: "151 NATURAL BEIGE",
          image: "glossy022.webp",
          images: ["glossy022.webp", "glossy023.webp", "glossy024.webp"],
          color: "Beige",
        },
        {
          id: 23,
          code: "381 BRECCIA OLIVE",
          image: "glossy023.webp",
          images: ["glossy023.webp", "glossy024.webp", "glossy025.webp"],
          color: "Olive",
        },
        {
          id: 24,
          code: "1674 ITALIAN GOLD",
          image: "glossy024.webp",
          images: ["glossy024.webp", "glossy025.webp", "glossy026.webp"],
          color: "Gold",
        },
        {
          id: 25,
          code: "GREY MURA PEARL",
          image: "glossy025.webp",
          images: ["glossy025.webp", "glossy026.webp", "glossy027.webp"],
          color: "Grey",
        },
        {
          id: 26,
          code: "1808 THUNDER BOLT",
          image: "glossy026.webp",
          images: ["glossy026.webp", "glossy027.webp", "glossy028.webp"],
          color: "Grey",
        },
        {
          id: 27,
          code: "1813 ANGELO WHITE",
          image: "glossy027.webp",
          images: ["glossy027.webp", "glossy028.webp", "glossy029.webp"],
          color: "White",
        },
        {
          id: 28,
          code: "1930 VIGA SILVER",
          image: "glossy028.webp",
          images: ["glossy028.webp", "glossy029.webp", "glossy030.webp"],
          color: "Silver",
        },
        {
          id: 29,
          code: "1934 PAZERO REX",
          image: "glossy029.webp",
          images: ["glossy029.webp", "glossy030.webp", "glossy031.webp"],
          color: "Earth Tones",
        },
        {
          id: 30,
          code: "25142 ONYX SIENNA",
          image: "glossy030.webp",
          images: ["glossy030.webp", "glossy031.webp", "glossy032.webp"],
          color: "Reddish-Brown",
        },
        {
          id: 31,
          code: "40118 RYNESTONE",
          image: "glossy031.webp",
          images: ["glossy031.webp", "glossy032.webp", "glossy033.webp"],
          color: "Neutral",
        },
        {
          id: 32,
          code: "1984 MODULAR GREEN",
          image: "glossy032.webp",
          images: ["glossy032.webp", "glossy033.webp", "glossy034.webp"],
          color: "Green",
        },
        {
          id: 33,
          code: "1989 MODULAR BLACK",
          image: "glossy033.webp",
          images: ["glossy033.webp", "glossy034.webp", "glossy035.webp"],
          color: "Black",
        },
        {
          id: 34,
          code: "2107 RODRIO GOLD",
          image: "glossy034.webp",
          images: ["glossy034.webp", "glossy035.webp", "glossy036.webp"],
          color: "Gold",
        },
      ],
    },
    slate: {
      title: "Slate Finish",
      products: [
        {
          id: 1,
          code: "AIRSLATE BEIGE",
          image: "slate001.webp",
          images: ["slate001.webp", "slate002.webp", "slate003.webp"],
          color: "Beige",
        },
        {
          id: 2,
          code: "AIRSLATE CREMA LIGHT",
          image: "slate002.webp",
          images: ["slate002.webp", "slate003.webp", "slate004.webp"],
          color: "Crema Light",
        },
        {
          id: 3,
          code: "AIRSLATE MULTY",
          image: "slate003.webp",
          images: ["slate003.webp", "slate004.webp", "slate005.webp"],
          color: "Multy",
        },
        {
          id: 4,
          code: "AIRSLATE YELLOW",
          image: "slate004.webp",
          images: ["slate004.webp", "slate005.webp", "slate006.webp"],
          color: "Yellow",
        },
        {
          id: 5,
          code: "CHIPS GREY",
          image: "slate005.webp",
          images: ["slate005.webp", "slate006.webp", "slate007.webp"],
          color: "Grey",
        },
        {
          id: 6,
          code: "DARENA CHOCO",
          image: "slate006.webp",
          images: ["slate006.webp", "slate007.webp", "slate008.webp"],
          color: "Choco",
        },
        {
          id: 7,
          code: "DARENA DOVE",
          image: "slate007.webp",
          images: ["slate007.webp", "slate008.webp", "slate009.webp"],
          color: "Dove",
        },
        {
          id: 8,
          code: "SIMENDE GRIS",
          image: "slate008.webp",
          images: ["slate008.webp", "slate009.webp", "slate001.webp"],
          color: "Gris",
        },
        {
          id: 9,
          code: "SIMENDE WHITE",
          image: "slate009.webp",
          images: ["slate009.webp", "slate001.webp", "slate002.webp"],
          color: "White",
        },
      ],
    },
    carving: {
      title: "Carving Finish",
      products: [
        {
          id: 1,
          code: "704 ASTER WHITE",
          image: "carving001.webp",
          color: "WHITE",
        },
        {
          id: 2,
          code: "706 PIETRA ASH",
          image: "carving002.webp",
          images: ["carving002.webp", "carving003.webp", "carving004.webp"],
          color: "ASH",
        },
        {
          id: 3,
          code: "709 PIETRA NERO",
          image: "carving003.webp",
          images: ["carving003.webp", "carving004.webp", "carving005.webp"],
          color: "NERO",
        },
        {
          id: 4,
          code: "716 FLORENCIA BEIGE S",
          image: "carving004.webp",
          images: ["carving004.webp", "carving005.webp", "carving006.webp"],
          color: "BEIGE",
        },
        {
          id: 5,
          code: "743 SOL BLUE S",
          image: "carving005.webp",
          images: ["carving005.webp", "carving006.webp", "carving007.webp"],
          color: "BLUE",
        },
        {
          id: 6,
          code: "763 VALVET CREMA S",
          image: "carving006.webp",
          images: ["carving006.webp", "carving007.webp", "carving008.webp"],
          color: "CREMA",
        },
        {
          id: 7,
          code: "766 CYRENE BROWN S",
          image: "carving007.webp",
          images: ["carving007.webp", "carving008.webp", "carving009.webp"],
          color: "BROWN",
        },
        {
          id: 8,
          code: "767 CYRENE CREMA S",
          image: "carving008.webp",
          images: ["carving008.webp", "carving009.webp", "carving010.webp"],
          color: "CREMA",
        },
        {
          id: 9,
          code: "768 CYRENE GRIS",
          image: "carving009.webp",
          images: ["carving009.webp", "carving010.webp", "carving001.webp"],
          color: "GRIS",
        },
        {
          id: 10,
          code: "17013 CROWN",
          image: "carving010.webp",
          images: ["carving010.webp", "carving001.webp", "carving002.webp"],
          color: "CROWN",
        },
      ],
    },
    sinker: {
      title: "Sinker Finish",
      products: [
        {
          id: 1,
          code: "12 BEATNIK BASE",
          image: "sinker001.webp",
          color: "Beige",
        },
        {
          id: 2,
          code: "11 BEATNIK DECOR",
          image: "sinker002.webp",
          images: ["sinker002.webp", "sinker003.webp", "sinker004.webp"],
          color: "Multi-tone",
        },
        {
          id: 3,
          code: "81 NINJO GREY",
          image: "sinker003.webp",
          images: ["sinker003.webp", "sinker004.webp", "sinker005.webp"],
          color: "Grey",
        },
        {
          id: 4,
          code: "80 NINJO GREY DECOR",
          image: "sinker004.webp",
          images: ["sinker004.webp", "sinker005.webp", "sinker006.webp"],
          color: "Grey",
        },
        {
          id: 5,
          code: "22 SWIM NATURAL",
          image: "sinker005.webp",
          images: ["sinker005.webp", "sinker006.webp", "sinker001.webp"],
          color: "Warm Neutral",
        },
        {
          id: 6,
          code: "53 SWIM MULTI DECOR",
          image: "sinker006.webp",
          images: ["sinker006.webp", "sinker001.webp", "sinker002.webp"],
          color: "Multi-color",
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
