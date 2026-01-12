import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gem, Clock, Users } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
      title: "Uncompromised Quality",
      desc: "Every product is built with precision, ensuring top-notch durability and long-lasting performance.",
      video:
        "https://www.shutterstock.com/shutterstock/videos/3705217451/preview/stock-footage-business-person-enforces-strict-quality-assurance-protocols-ensuring-qc-and-qa-standards-are-met.webm",
    },
    {
      icon: <Gem className="w-10 h-10 text-[#D4AF37]" />,
      title: "Premium Craftsmanship",
      desc: "Our designs blend modern aesthetics with timeless craftsmanship to deliver true luxury.",
      video:
        "https://www.shutterstock.com/shutterstock/videos/3673888565/preview/stock-footage-discover-the-modern-elegant-bathroom-design-that-features-a-beautiful-freestanding-tub.webm",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#D4AF37]" />,
      title: "On-Time Delivery",
      desc: "We value your time and guarantee timely deliveries without compromising quality.",
      video:
        "https://www.shutterstock.com/shutterstock/videos/3546766439/preview/stock-footage-cargo-truck-with-copy-space-for-advertising-on-white-semi-trailer-driving-on-highway-freight.webm",
    },
    {
      icon: <Users className="w-10 h-10 text-[#D4AF37]" />,
      title: "Trusted by Customers",
      desc: "With a growing base of satisfied clients, our brand stands for trust and consistency.",
      video:
        "https://www.shutterstock.com/shutterstock/videos/3806611353/preview/stock-footage-a-businessman-presents-five-golden-stars-and-feedback-bubbles-symbolizing-customer-satisfaction.webm",
    },
  ];

  return (
    <section className="relative bg-[#1c1c1c] text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >


        <div className="flex flex-col gap-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col xl:flex-row items-center overflow-hidden transition-all duration-500 bg-[#1c1c1c] ${index % 2 === 1 ? "xl:flex-row-reverse xl:translate-x-20" : "xl:-translate-x-20"
                }`}
            >
              {/* Video Side */}
              <div className="xl:w-1/2 w-full h-[300px] overflow-hidden ">
                <motion.video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover transform transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div className="xl:w-1/2 w-full p-10 flex flex-col justify-center text-center xl:text-left">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-center xl:justify-start mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
