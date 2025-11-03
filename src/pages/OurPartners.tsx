import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Larsen & Toubro",
    logo: "https://picsum.photos/200/100?random=201",
    quote: "Their web solutions helped us manage projects faster and more efficiently.",
  },
  {
    id: 2,
    name: "Tata Projects",
    logo: "https://picsum.photos/200/100?random=202",
    quote: "A reliable digital partner transforming the way we present our work.",
  },
  {
    id: 3,
    name: "Shapoorji Pallonji",
    logo: "https://picsum.photos/200/100?random=203",
    quote: "They created a platform that matches our engineering excellence.",
  },
  {
    id: 4,
    name: "Gammon India",
    logo: "https://picsum.photos/200/100?random=204",
    quote: "Great collaboration and innovative approach to every project.",
  },
  {
    id: 5,
    name: "HCC (Hindustan Construction Company)",
    logo: "https://picsum.photos/200/100?random=205",
    quote: "A trusted tech team who understands construction industry needs.",
  },
  {
    id: 6,
    name: "Afcons Infrastructure",
    logo: "https://picsum.photos/200/100?random=206",
    quote: "Their modern solutions streamlined our workflow beautifully.",
  },
];

const OurPartners = () => {
  return (
    <section className="relative bg-[#f9f9fb] text-gray-800 py-20 overflow-hidden pt-42">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-purple-500"
        >
          Trusted by Construction Industry Leaders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg"
        >
          Our digital craftsmanship has earned the trust of leading infrastructure firms,
          creating cutting-edge platforms that empower innovation and efficiency.
        </motion.p>

        {/* Partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partner.id * 0.1 }}
              className="group bg-white hover:bg-blue-50 transition-all duration-500 rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-200 hover:border-blue-300"
            >
              <div className="flex justify-center mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm italic">"{partner.quote}"</p>
            </motion.div>
          ))}
        </div>

        {/* Floating soft glow animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-300 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
