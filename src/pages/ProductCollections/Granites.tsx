import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

// Placeholder data - Replace with actual Granite images
import graniteImg from '../../assets/bg-main (1).webp';

const productData = {
  products: [
    { id: 1, code: "BLACK GALAXY", image: graniteImg, color: "Black", surface: "Polished", size: "10' x 6' ft" },
    { id: 2, code: "TAN BROWN", image: "https://images.pexels.com/photos/11053644/pexels-photo-11053644.jpeg", color: "Brown", surface: "Polished", size: "9' x 5' ft" },
    { id: 3, code: "CLASSIC WHITE", image: "https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg", color: "White", surface: "Leather", size: "10' x 6' ft" },
    { id: 4, code: "RAJASTHAN BLACK", image: "https://images.pexels.com/photos/4553279/pexels-photo-4553279.jpeg", color: "Black", surface: "Honed", size: "8' x 4' ft" },
    { id: 5, code: "RUBY RED", image: "https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg", color: "Red", surface: "Polished", size: "7' x 3' ft" },
    { id: 6, code: "KASHMIR WHITE", image: "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg", color: "White", surface: "Polished", size: "9' x 6' ft" },
    // Add more products here
  ]
};

const slides = [
  {
    image: "https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg",
    title: "Premium Granites",
    subtitle: "Enduring strength meets timeless beauty. Explore our exquisite collection of natural granite slabs.",
  },
  {
    image: "https://images.pexels.com/photos/4553279/pexels-photo-4553279.jpeg",
    title: "Exotic Collection",
    subtitle: "Rare and unique granite patterns sourced from the finest quarries around the world.",
  },
];

function Granites() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Granite Collection"
      subtitle="Discover the durability and elegance of our premium granite selection."
      products={allProducts}
      slides={slides}
    />
  );
}

export default Granites;
