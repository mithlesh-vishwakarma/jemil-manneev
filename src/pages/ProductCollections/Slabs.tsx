import { useMemo } from 'react';
import ProductShowcase from '../../components/ProductShowcase';

const productData = {
  products: [
    {
      id: 1,
      code: "KOTA STONE",
      image: "https://plus.unsplash.com/premium_photo-1674707664781-400267cf908c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBzdG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://plus.unsplash.com/premium_photo-1674707664781-400267cf908c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBzdG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1674518547392-458ab4714c25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "Blue/Grey",
      surface: "Natural",
      size: "2' x 2' ft"
    },
    {
      id: 2,
      code: "KADAPPA BLACK",
      image: "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1674707664781-400267cf908c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBzdG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
      ],
      color: "Black",
      surface: "Natural",
      size: "Various"
    },
    {
      id: 3,
      code: "DHRANGADHRA STONE",
      image: "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1674518547392-458ab4714c25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "Beige",
      surface: "Rough",
      size: "Custom"
    },
    {
      id: 4,
      code: "NERO MARQUINA",
      image: "https://plus.unsplash.com/premium_photo-1722843459843-b6bb61a0b2c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      images: [
        "https://plus.unsplash.com/premium_photo-1722843459843-b6bb61a0b2c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1672152803614-5e1d85477699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1675077759128-7fffc787f789?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNsYWJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      ],
      color: "Black",
      surface: "Polished",
      size: "10' x 5' ft"
    },
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
