import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "ITALIAN CARRARA", image: "https://images.pexels.com/photos/11053644/pexels-photo-11053644.jpeg", color: "White", surface: "Polished", size: "8' x 5' ft" },
    { id: 2, code: "STATUARIO", image: "https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg", color: "White", surface: "Polished", size: "10' x 6' ft" },
    { id: 3, code: "BOTTOCHINO", image: "https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg", color: "Beige", surface: "Honed", size: "9' x 5' ft" },
    { id: 4, code: "GREY WILLIAM", image: "https://images.pexels.com/photos/4553279/pexels-photo-4553279.jpeg", color: "Grey", surface: "Polished", size: "8' x 4' ft" },
    { id: 5, code: "BLACK MARQUINA", image: "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg", color: "Black", surface: "Polished", size: "7' x 3' ft" },
    { id: 6, code: "TRAVERTINE", image: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg", color: "Beige", surface: "Unpolished", size: "8' x 4' ft" },
  ]
};

const slides = [
  {
    image: "https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg",
    title: "Luxurious Marbles",
    subtitle: "Transform your home with the timeless elegance of Italian and exotic marbles.",
  },
  {
    image: "https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg",
    title: "Art of Stone",
    subtitle: "Each slab is a masterpiece of nature, adding sophistication to any space.",
  },
];

function Marbles() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Marble Collection"
      subtitle="Experience the luxury of premium marble."
      products={allProducts}
      slides={slides}
    />
  );
}

export default Marbles;
