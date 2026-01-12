import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "KOTA STONE", image: "https://plus.unsplash.com/premium_photo-1674707664781-400267cf908c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBzdG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500", color: "Blue/Grey", surface: "Natural", size: "2' x 2' ft" },
    { id: 2, code: "KADAPPA BLACK", image: "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Black", surface: "Natural", size: "Various" },
    { id: 3, code: "DHRANGADHRA STONE", image: "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", color: "Beige", surface: "Rough", size: "Custom" },
  ]
};

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1674518547392-458ab4714c25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    title: "Eco-Friendly Choice",
    subtitle: "Sustainable and durable natural stones for landscaping and interiors.",
  },
];

function NaturalStones() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Natural Stones"
      subtitle="The beauty of earth, brought to your spaces."
      products={allProducts}
      slides={slides}
    />
  );
}

export default NaturalStones;
