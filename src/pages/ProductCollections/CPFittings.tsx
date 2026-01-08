import React, { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "CHROME FAUCET", image: "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Chrome", surface: "Polished", size: "Standard" },
    { id: 2, code: "SHOWER HEAD", image: "https://images.unsplash.com/photo-1516937941344-00b4ec056608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Black", surface: "Matte", size: "12 inch" },
    { id: 3, code: "MIXER TAP", image: "https://images.unsplash.com/photo-1595515770330-ceeea7d82cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Gold", surface: "Brushed", size: "Standard" },
  ]
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1616362258782-7511b61686ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Premium CP Fittings",
    subtitle: "Style and precision in every drop.",
  },
];

function CPFittings() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="CP Fittings"
      subtitle="Complete your bathroom with our premium fixtures."
      products={allProducts}
      slides={slides}
    />
  );
}

export default CPFittings;
