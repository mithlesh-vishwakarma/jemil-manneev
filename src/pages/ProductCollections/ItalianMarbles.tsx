import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    { id: 1, code: "STATUARIO VENATO", image: "https://media.istockphoto.com/id/1486579445/photo/white-marble-with-black-patterns.webp?a=1&b=1&s=612x612&w=0&k=20&c=c5cgwIQbo2oh9lsKQlWXD4fjV03BF7OHLPeJ5G_onvU=", color: "White", surface: "Polished", size: "10' x 6' ft" },
    { id: 2, code: "BOTTICINO CLASSICO", image: "https://media.istockphoto.com/id/475648615/photo/vintage-mosaic-tile.webp?a=1&b=1&s=612x612&w=0&k=20&c=YCodWnORnkxjgiHP-dWmphVrzt9GDW5ylAGkT1gj0nQ=", color: "Beige", surface: "Polished", size: "9' x 5' ft" },
    { id: 3, code: "CALACATTA GOLD", image: "https://plus.unsplash.com/premium_photo-1707986417720-e1282588bcdc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGl0YWxpYW4lMjBtYXJibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", color: "White/Gold", surface: "Polished", size: "10' x 6' ft" },
    { id: 4, code: "GREY WILLIAM", image: "https://media.istockphoto.com/id/1198576809/photo/beige-limestone-similar-to-marble-natural-surface-or-texture-for-floor-or-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3XT0a1YWveYVPfMeBHFGtqxdbtQiPNEp69vapKRQTFQ=", color: "Grey", surface: "Polished", size: "8' x 4' ft" },
  ]
};

const slides = [
  {
    image: "https://media.istockphoto.com/id/1198576809/photo/beige-limestone-similar-to-marble-natural-surface-or-texture-for-floor-or-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3XT0a1YWveYVPfMeBHFGtqxdbtQiPNEp69vapKRQTFQ=",
    title: "Italian Excellence",
    subtitle: "Imported directly from Italy, these marbles define luxury and sophistication.",
  },
];

function ItalianMarbles() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Italian Marbles"
      subtitle="The finest selection of Italian stone for premium interiors."
      products={allProducts}
      slides={slides}
    />
  );
}

export default ItalianMarbles;
