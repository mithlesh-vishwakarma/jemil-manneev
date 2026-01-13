import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    {
      id: 1,
      code: "TILE ADHESIVE",
      image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1516937941344-00b4ec056608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://media.istockphoto.com/id/172465856/photo/round-steel-bars.webp?a=1&b=1&s=612x612&w=0&k=20&c=1rtx6jCpgKkHXjhX_K13XTBnsGsW8Nl9KIChR4h_CAI="
      ],
      color: "Grey",
      surface: "Powder",
      size: "20kg Bag"
    },
    {
      id: 2,
      code: "EPOXY GROUT",
      image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://media.istockphoto.com/id/182884765/photo/steel.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZH2QWIL9UjjxuphY-c3B7p5Dv49lxQXtM7iu3_HdLN4=",
        "https://images.unsplash.com/photo-1516937941344-00b4ec056608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "Various",
      surface: "Liquid",
      size: "1kg"
    },
    {
      id: 3,
      code: "WATERPROOFING",
      image: "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1599690629471-ef3563914947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1516937941344-00b4ec056608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://media.istockphoto.com/id/1346192283/photo/3d-illustration-of-reinforcements-bunch-of-steel-tmt-bar-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=j2crNmNaVx52dpMG-y2FHfV-LQKXfHyBbZ0Idx_r_3A="
      ],
      color: "White",
      surface: "Liquid",
      size: "5L"
    },
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
