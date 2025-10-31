import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://picsum.photos/800/600?random=101",
  "https://picsum.photos/800/600?random=102",
  "https://picsum.photos/800/600?random=103",
  "https://picsum.photos/800/600?random=104",
  "https://picsum.photos/800/600?random=105",
  "https://picsum.photos/800/600?random=106",
  "https://picsum.photos/800/600?random=107",
  "https://picsum.photos/800/600?random=108",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 pt-24 ">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A glimpse of our showroom, products, and customer installations — modern spaces built with trust and quality.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm md:text-base font-medium tracking-wide">
                  View Project
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
