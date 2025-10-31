import React from "react";
import { motion } from "framer-motion";

type ProductCardProps = {
  title: string;
  main: string;
  thumbs: string[];
  desc?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, main, thumbs, desc }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white glass rounded-3xl p-4 md:p-6 shadow-lg border border-white/40"
    >
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="relative">
          <img
            src={main}
            alt={title}
            className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-xl text-sm font-semibold text-purple-600 shadow">
            {title}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
            {desc ?? "Premium selection curated for aesthetics and durability."}
          </p>

          <div className="flex items-center gap-3">
            {thumbs.map((t, i) => (
              <div key={i} className="w-16 h-12 rounded-xl overflow-hidden border border-white/60 shadow-sm">
                <img src={t} alt={`${title}-thumb-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-auto flex gap-3 pt-2">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
              View
            </button>
            <button className="px-4 py-2 border border-purple-200 rounded-lg text-purple-600 hover:bg-purple-50 transition">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
