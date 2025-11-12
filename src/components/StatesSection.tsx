import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "19+", label: "Partner Brands" },
  { number: "3k+", label: "Products SKU" },
  { number: "30", label: "Years of Experience" },
  { number: "12k+", label: "Happy Customers" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="relative bg-[#725e03] text-[#1c1c1c] py-20 px-6 overflow-hidden">
      {/* Luxury overlay shimmer */}
      

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-3 group"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-[#1c1c1c] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-300">
                {item.number}
              </h3>
              <p className="text-lg tracking-wide text-[#1c1c1c] group-hover:text-[#D4AF37] transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StatsSection;
