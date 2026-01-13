import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    {
      id: 1,
      code: "SMART TOILET",
      image: "https://media.istockphoto.com/id/1126590541/photo/modern-high-tech-toilet-with-electronic-bidet-in-thailand-japan-style-toilet-bowl-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2-hzZa_X8X4t6ftSN5knR2z4JoJvAGw2DhmYT0RoSc=",
      images: [
        "https://media.istockphoto.com/id/1126590541/photo/modern-high-tech-toilet-with-electronic-bidet-in-thailand-japan-style-toilet-bowl-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2-hzZa_X8X4t6ftSN5knR2z4JoJvAGw2DhmYT0RoSc=",
        "https://plus.unsplash.com/premium_photo-1664392164625-4f806c5f70f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "White",
      surface: "Ceramic",
      size: "Standard"
    },
    {
      id: 2,
      code: "WALL HUNG WC",
      image: "https://plus.unsplash.com/premium_photo-1664392164625-4f806c5f70f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://plus.unsplash.com/premium_photo-1664392164625-4f806c5f70f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://media.istockphoto.com/id/1126590541/photo/modern-high-tech-toilet-with-electronic-bidet-in-thailand-japan-style-toilet-bowl-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2-hzZa_X8X4t6ftSN5knR2z4JoJvAGw2DhmYT0RoSc=",
        "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "White",
      surface: "Ceramic",
      size: "Compact"
    },
    {
      id: 3,
      code: "PEDESTAL BASIN",
      image: "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHR1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        "https://media.istockphoto.com/id/1126590541/photo/modern-high-tech-toilet-with-electronic-bidet-in-thailand-japan-style-toilet-bowl-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2-hzZa_X8X4t6ftSN5knR2z4JoJvAGw2DhmYT0RoSc="
      ],
      color: "Ivory",
      surface: "Ceramic",
      size: "Standard"
    },
    {
      id: 4,
      code: "BATH TUB",
      image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHR1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHR1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1664392164625-4f806c5f70f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "White",
      surface: "Acrylic",
      size: "6ft"
    },
  ]
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHR1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    title: "Luxury Sanitary Ware",
    subtitle: "Modern designs for comfort and hygiene.",
  },
];

function SanitaryWare() {
  const allProducts = useMemo(() => productData.products, []);

  return (
    <ProductShowcase
      title="Sanitary Ware"
      subtitle="Complete your bathroom with our premium range."
      products={allProducts}
      slides={slides}
    />
  );
}

export default SanitaryWare;
