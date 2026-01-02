

import { motion } from "framer-motion";

const fadeIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  show: { opacity: 1, x: 0 },
});

const MissionVisionValues = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-2 md:px-4 lg:px-0 bg-transparent">
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Our <span className="text-[#D4AF37]">Mission, Vision & Values</span>
      </motion.h2>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#D4AF37]">Our <span className="text-2xl text-[#D4AF37]">Mission</span></h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our mission is to empower businesses and individuals by delivering
            innovative, reliable, and scalable web solutions that help them grow
            and thrive in the digital world.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative animate-float">
            <div className="bg-[#111] p-2 rounded-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622905810727-9cc3126d712e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pc3Npb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                alt="Mission"
                className="rounded-2xl object-cover w-full h-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative animate-float">
            <div className="bg-[#111] p-2 rounded-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZptNdZTfzPsm_wNJAZvrlaPRSP5fEqiHEBDXT1x45LY="
                alt="Vision"
                className="rounded-2xl object-cover w-full h-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 text-right md:pl-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#D4AF37]">Our <span className="text-2xl text-[#D4AF37]">Vision</span></h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            We envision a future where technology bridges creativity and
            functionality seamlessly, transforming ideas into impactful digital
            experiences across the world.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#D4AF37]">Our <span className="text-2xl text-[#D4AF37]">Values</span></h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Integrity, innovation, and collaboration are at the core of
            everything we do. We believe in building trust, delivering quality,
            and continuously evolving to exceed client expectations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative animate-float">
            <div className="bg-[#111] p-2 rounded-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2170991268/photo/values-word-cloud.jpg?s=612x612&w=0&k=20&c=H8i59ge3ZnCkdd2xL2NOFjA-z04WaxMVzA45es0nkfw="
                alt="Values"
                className="rounded-2xl object-cover w-full h-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
