import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "MODERN SINK 101", image: "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "White", surface: "Ceramic", size: "24x18 inch" },
    { id: 2, code: "BLACK MARBLE BASIN", image: "https://images.unsplash.com/photo-1595514535116-d0401260e7cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Black", surface: "Marble", size: "18x18 inch" },
    { id: 3, code: "STONE SINK RUSTIC", image: "https://images.unsplash.com/photo-1595515770330-ceeea7d82cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Grey", surface: "Stone", size: "20x15 inch" },
    { id: 4, code: "GOLD FOIL BASIN", image: "https://plus.unsplash.com/premium_photo-1684445034864-5a9c6756d099?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Gold", surface: "Metallic", size: "16x16 inch" },
  ]
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    title: "Designer Sinks",
    subtitle: "Functional art for your bathrooms and kitchens.",
  },
];

function Sinks() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Sinks Collection"
      subtitle="Elegant and durable sinks for every style."
      products={allProducts}
      slides={slides}
    />
  );
}

export default Sinks;
