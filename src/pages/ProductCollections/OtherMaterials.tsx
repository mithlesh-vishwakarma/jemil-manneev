import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "STEEL BARS", image: "https://media.istockphoto.com/id/172465856/photo/round-steel-bars.webp?a=1&b=1&s=612x612&w=0&k=20&c=1rtx6jCpgKkHXjhX_K13XTBnsGsW8Nl9KIChR4h_CAI=", color: "Grey", surface: "Steel", size: "Various" },
    { id: 2, code: "BRICKS", image: "https://media.istockphoto.com/id/182884765/photo/steel.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZH2QWIL9UjjxuphY-c3B7p5Dv49lxQXtM7iu3_HdLN4=", color: "Red", surface: "Clay", size: "Standard" },
  ]
};

const slides = [
  {
    image: "https://media.istockphoto.com/id/1346192283/photo/3d-illustration-of-reinforcements-bunch-of-steel-tmt-bar-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=j2crNmNaVx52dpMG-y2FHfV-LQKXfHyBbZ0Idx_r_3A=",
    title: "Building Materials",
    subtitle: "Essential supplies for every construction need.",
  },
];

function OtherMaterials() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Other Materials"
      subtitle="Quality construction supplies."
      products={allProducts}
      slides={slides}
    />
  );
}

export default OtherMaterials;
