import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

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
      products: [
        { id: 1, code: "102 SATVARIO", image: glossy102, color: "White" },
        { id: 2, code: "103 SILK ONYX", image: glossy103, color: "Beige" },
        { id: 3, code: "113 SATVARIO WHITE", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "White" },
        { id: 4, code: "132 MARFIL", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Cream" },
        { id: 5, code: "133 ONISTA IVORY", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", color: "Ivory" },
        { id: 6, code: "151 NATURAL BEIGE", image: "https://images.pexels.com/photos/1447801/pexels-photo-1447801.jpeg", color: "Beige" },
        { id: 7, code: "381 BRECCIA OLIVE", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg", color: "Olive" },
        { id: 8, code: "1674 ITALIAN GOLD", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg", color: "Gold" },
        { id: 9, code: "GREY MURA PEARL", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", color: "Grey" },
        { id: 10, code: "1808 THUNDER BOLT", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", color: "Dark Grey" },
        { id: 11, code: "1813 ANGELO WHITE", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "White" },
        { id: 12, code: "1930 VIGA SILVER", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Silver" },
        { id: 13, code: "1934 PAZERO REX", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", color: "Brown" },
        { id: 14, code: "25142 ONYX SIENNA", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg", color: "Sienna" },
        { id: 15, code: "40118 RYNESTONE", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg", color: "Stone" },
        { id: 16, code: "1984 MODULAR GREEN", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", color: "Green" },
        { id: 17, code: "1989 MODULAR BLACK", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "Black" },
        { id: 18, code: "2107 RODRIO GOLD", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Gold" },
      ],
    },
    carving: {
      title: "Carving Finish",
      products: [
        { id: 19, code: "704 ASTER WHITE", image: carving704, color: "White" },
        { id: 20, code: "706 PIETRA ASH", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "Ash" },
        { id: 21, code: "709 PIETRA NERO", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Nero" },
        { id: 22, code: "716 FLORENCIA BEIGE", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", color: "Beige" },
        { id: 23, code: "743 SOL BLUE", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg", color: "Blue" },
        { id: 24, code: "763 VALVET CREMA", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg", color: "Crema" },
        { id: 25, code: "766 CYRENE BROWN", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", color: "Brown" },
        { id: 26, code: "767 CYRENE CREMA", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "Crema" },
        { id: 27, code: "768 CYRENE GRIS", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Gris" },
        { id: 28, code: "17013 CROWN", image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", color: "Gold" },
      ],
    },
    sinker: {
      title: "Sinker Finish",
      products: [
        { id: 29, code: "12 BEATNIK BASE", image: sinker12, color: "Base" },
        { id: 30, code: "11 BEATNIK DECOR", image: "https://images.pexels.com/photos/430211/pexels-photo-430211.jpeg", color: "Decor" },
        { id: 31, code: "81 NINJO GREY", image: "https://images.pexels.com/photos/1722193/pexels-photo-1722193.jpeg", color: "Grey" },
        { id: 32, code: "80 NINJO GREY DECOR", image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg", color: "Grey Decor" },
        { id: 33, code: "22 SWIM NATURAL", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", color: "Natural" },
        { id: 34, code: "53 SWIM MULTI DECOR", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "Multi" },
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


function Tiles() {
  // Flatten all products
  const allProducts = useMemo(() => Object.entries(productData.finishes).flatMap(([key, finish]) =>
    finish.products.map((product) => ({
      ...product,
      surface: finish.title,
      size: productData.size
    }))
  ), []);

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

