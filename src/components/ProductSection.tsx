import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Tiles & Marbles",
    image: "https://images.pexels.com/photos/6970063/pexels-photo-6970063.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/collections",
  },
  {
    name: "Bathroom Fixtures",
    image: "https://images.pexels.com/photos/10919428/pexels-photo-10919428.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/collections",
  },
  {
    name: "Sanitary Ware",
    image: "https://images.pexels.com/photos/6316056/pexels-photo-6316056.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/collections",
  },
  {
    name: "Other Materials",
    image: "https://images.pexels.com/photos/19825178/pexels-photo-19825178.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/collections",
  },
];

const ProductSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <motion.a
              key={idx}
              href={product.link}
              whileHover="hover"
              className="relative group cursor-pointer overflow-hidden block"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay behind title */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                <h3 className="text-2xl md:text-4xl font-bold text-white">{product.name}</h3>
              </div>

              {/* Focus lines */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                  hover: { opacity: 1, transition: { duration: 0.3 } },
                }}
                initial={{ opacity: 0 }}
              >
                {/* Top-left */}
                <motion.div
                  className="absolute top-2 left-2 w-12 h-0.5 bg-[#D4AF37] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <motion.div
                  className="absolute top-2 left-2 w-0.5 h-12 bg-[#D4AF37] origin-top"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                />
                {/* Top-right */}
                <motion.div
                  className="absolute top-2 right-2 w-12 h-0.5 bg-[#D4AF37] origin-right"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <motion.div
                  className="absolute top-2 right-2 w-0.5 h-12 bg-[#D4AF37] origin-top"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                />
                {/* Bottom-left */}
                <motion.div
                  className="absolute bottom-2 left-2 w-12 h-0.5 bg-[#D4AF37] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-0.5 h-12 bg-[#D4AF37] origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                />
                {/* Bottom-right */}
                <motion.div
                  className="absolute bottom-2 right-2 w-12 h-0.5 bg-[#D4AF37] origin-right"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <motion.div
                  className="absolute bottom-2 right-2 w-0.5 h-12 bg-[#D4AF37] origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <a href="/products">
            <button className="px-6 py-3 text-base font-semibold bg-[#D4AF37] text-[#1C1C1C] rounded-full border border-transparent hover:bg-[#F5F5F5] hover:text-[#1C1C1C] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer">
              Explore More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
