import { motion } from "framer-motion";
import { FaRocket, FaEye, FaGem } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MissionVisionValues = () => {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 -z-10 opacity-[0.04] 
  bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),
      linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)]
  bg-[size:60px_60px]" /> */}

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] -translate-x-1/2 -z-10" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-20"
      >
        Our <span className="text-[#D4AF37]">Mission, Vision & Values</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Mission */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center 
bg-gradient-to-b from-[#111] to-[#0a0a0a] 
p-8 rounded-3xl 
border border-transparent 
bg-clip-padding 
before:absolute before:inset-0 before:rounded-3xl 
before:p-[1px] before:bg-gradient-to-br 
before:from-[#D4AF37]/40 before:to-transparent 
before:-z-10
shadow-[0_0_40px_rgba(212,175,55,0.08)] 
hover:shadow-[0_0_80px_rgba(212,175,55,0.25)] 
transition-all duration-500"
        >
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl" />

          <div className="w-16 h-16 flex items-center justify-center 
          bg-[#D4AF37]/10 rounded-2xl mb-6">
            <FaRocket className="text-[#D4AF37] text-2xl" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Mission</span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            To develop landmark real estate projects that set new benchmarks in quality, design, and structural excellence. We are committed to delivering large-scale developments built with world-class materials, advanced engineering practices, and uncompromising construction standards.

            Through disciplined execution and meticulous attention to detail, we aim to create enduring assets that deliver long-term value to investors, elevate urban infrastructure, and enrich the communities we serve.
          </p>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl" />


        </motion.div>

        {/* Vision */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center 
bg-gradient-to-b from-[#111] to-[#0a0a0a] 
p-8 rounded-3xl 
border border-transparent 
bg-clip-padding 
before:absolute before:inset-0 before:rounded-3xl 
before:p-[1px] before:bg-gradient-to-br 
before:from-[#D4AF37]/40 before:to-transparent 
before:-z-10
shadow-[0_0_40px_rgba(212,175,55,0.08)] 
hover:shadow-[0_0_80px_rgba(212,175,55,0.25)] 
transition-all duration-500"
        >
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl" />

          <div className="w-16 h-16 flex items-center justify-center 
          bg-[#D4AF37]/10 rounded-2xl mb-6">
            <FaEye className="text-[#D4AF37] text-2xl" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Vision</span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            To be recognized as a leading name in premium real estate development, shaping modern skylines through innovation, sustainability, and superior craftsmanship.

            Our vision is to execute complex and high-value developments that reflect architectural distinction, structural strength, and world-class infrastructure while contributing to the future of progressive urban living.
          </p>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl" />


        </motion.div>

        {/* Values */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center 
bg-gradient-to-b from-[#111] to-[#0a0a0a] 
p-8 rounded-3xl 
border border-transparent 
bg-clip-padding 
before:absolute before:inset-0 before:rounded-3xl 
before:p-[1px] before:bg-gradient-to-br 
before:from-[#D4AF37]/40 before:to-transparent 
before:-z-10
shadow-[0_0_40px_rgba(212,175,55,0.08)] 
hover:shadow-[0_0_80px_rgba(212,175,55,0.25)] 
transition-all duration-500"
        >
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl" />

          <div className="w-16 h-16 flex items-center justify-center 
          bg-[#D4AF37]/10 rounded-2xl mb-6">
            <FaGem className="text-[#D4AF37] text-2xl" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Values</span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Our core values are built on quality, integrity, and precision. We are committed to maintaining the highest standards in materials, construction practices, and project execution to ensure strength, safety, and lasting performance. Through transparency, disciplined planning, and attention to detail, we strive to deliver developments that create enduring value for investors, communities, and future generations while upholding excellence in every stage of development
          </p>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl" />

        </motion.div>

      </div>
    </section>
  );
};

export default MissionVisionValues;
