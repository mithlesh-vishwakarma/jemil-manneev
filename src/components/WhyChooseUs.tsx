import React from "react";
import { ShieldCheck, Gem, Clock, Users } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
      title: "Uncompromised Quality",
      desc: "Every product is built with precision, ensuring top-notch durability and long-lasting performance.",
    },
    {
      icon: <Gem className="w-10 h-10 text-[#D4AF37]" />,
      title: "Premium Craftsmanship",
      desc: "Our designs blend modern aesthetics with timeless craftsmanship to deliver true luxury.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#D4AF37]" />,
      title: "On-Time Delivery",
      desc: "We value your time and guarantee timely deliveries without compromising quality.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#D4AF37]" />,
      title: "Trusted by Customers",
      desc: "With a growing base of satisfied clients, our brand stands for trust and consistency.",
    },
  ];

  return (
    <section className="bg-[#1C1C1C] py-16 px-6 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-10 tracking-wide">
        Why Choose <span className="text-white">Us</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-[#2A2A2A] p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20"
          >
            <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
