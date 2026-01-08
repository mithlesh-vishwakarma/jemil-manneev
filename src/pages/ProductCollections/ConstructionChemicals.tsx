import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "TILE ADHESIVE", image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Grey", surface: "Powder", size: "20kg Bag" },
    { id: 2, code: "EPOXY GROUT", image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Various", surface: "Liquid", size: "1kg" },
    { id: 3, code: "WATERPROOFING", image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "White", surface: "Liquid", size: "5L" },
  ]
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1516937941344-00b4ec056608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    title: "Construction Chemicals",
    subtitle: "Advanced solutions for bonding, waterproofing, and more.",
  },
];

function ConstructionChemicals() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Construction Chemicals"
      subtitle="Ensuring durability and longevity."
      products={allProducts}
      slides={slides}
    />
  );
}

export default ConstructionChemicals;
