import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

const stats = [
  { number: 19, suffix: "+", label: "Partner Brands" },
  { number: 3000, suffix: "+", label: "Products SKU" },
  { number: 30, suffix: "", label: "Years of Experience" },
  { number: 12000, suffix: "+", label: "Happy Customers" },
];

const StatItem = ({ value, suffix, label }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [motionValue]);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.8,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center space-y-3 group"
    >
      <h3 className="text-4xl sm:text-5xl font-extrabold text-[#1c1c1c] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-300">
        {displayValue}
        {suffix}
      </h3>

      <p className="text-lg tracking-wide text-[#1c1c1c] group-hover:text-[#D4AF37] transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="relative bg-[#725e03] text-[#1c1c1c] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6">
          {stats.map((item, index) => (
            <StatItem
              key={index}
              value={item.number}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
