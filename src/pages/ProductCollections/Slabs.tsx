import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "ONYX IVORY SLAB", image: "https://plus.unsplash.com/premium_photo-1675864663191-542186af0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", color: "Ivory", surface: "Polished", size: "10' x 5' ft" },
    { id: 2, code: "ROYAL BEIGE", image: "https://plus.unsplash.com/premium_photo-1675077759128-7fffc787f789?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNsYWJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Beige", surface: "Honed", size: "9' x 6' ft" },
    { id: 3, code: "STATUARIO GIGANTE", image: "https://plus.unsplash.com/premium_photo-1672152803614-5e1d85477699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", color: "White", surface: "Polished", size: "12' x 6' ft" },
    { id: 4, code: "NERO MARQUINA", image: "https://plus.unsplash.com/premium_photo-1722843459843-b6bb61a0b2c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", color: "Black", surface: "Polished", size: "10' x 5' ft" },
  ]
};

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1675864663191-542186af0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Grand Slabs",
    subtitle: "Seamless surfaces for expansive, luxurious interiors.",
  },
];

function Slabs() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Slabs Collection"
      subtitle="Large-format slabs for modern architecture."
      products={allProducts}
      slides={slides}
    />
  );
}

export default Slabs;
