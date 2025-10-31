import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const products = [
  {
    title: "Polished Ceramic Tile",
    main: "https://picsum.photos/1200/800?random=1",
    thumbs: [
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
      "https://picsum.photos/400/300?random=13",
    ],
    desc: "Hardwearing ceramic tiles ideal for indoor floors. High gloss finish and multiple sizes."
  },
  {
    title: "Premium Indian Marble",
    main: "https://picsum.photos/1200/800?random=2",
    thumbs: [
      "https://picsum.photos/400/300?random=21",
      "https://picsum.photos/400/300?random=22",
      "https://picsum.photos/400/300?random=23",
    ],
    desc: "Elegant marble slabs with subtle veining. Ideal for premium interiors and living spaces."
  },
  {
    title: "Natural Sandstone",
    main: "https://picsum.photos/1200/800?random=3",
    thumbs: [
      "https://picsum.photos/400/300?random=31",
      "https://picsum.photos/400/300?random=32",
      "https://picsum.photos/400/300?random=33",
    ],
    desc: "Rustic sandstone with rich texture. Great for outdoor cladding and pathways."
  },
  {
    title: "Granite Countertop",
    main: "https://picsum.photos/1200/800?random=4",
    thumbs: [
      "https://picsum.photos/400/300?random=41",
      "https://picsum.photos/400/300?random=42",
      "https://picsum.photos/400/300?random=43",
    ],
    desc: "Durable granite slabs perfect for kitchen countertops and bathroom vanities."
  },
  {
    title: "Travertine Pavers",
    main: "https://picsum.photos/1200/800?random=5",
    thumbs: [
      "https://picsum.photos/400/300?random=51",
      "https://picsum.photos/400/300?random=52",
      "https://picsum.photos/400/300?random=53",
    ],
    desc: "Elegant travertine stones with natural holes, ideal for outdoor patios and walkways."
  },
  {
    title: "Limestone Blocks",
    main: "https://picsum.photos/1200/800?random=6",
    thumbs: [
      "https://picsum.photos/400/300?random=61",
      "https://picsum.photos/400/300?random=62",
      "https://picsum.photos/400/300?random=63",
    ],
    desc: "Versatile limestone blocks for construction and decorative purposes."
  },
  {
    title: "Quartz Countertops",
    main: "https://picsum.photos/1200/800?random=7",
    thumbs: [
      "https://picsum.photos/400/300?random=71",
      "https://picsum.photos/400/300?random=72",
      "https://picsum.photos/400/300?random=73",
    ],
    desc: "Engineered quartz surfaces with superior durability and modern aesthetics."
  },
  {
    title: "Slate Roofing Tiles",
    main: "https://picsum.photos/1200/800?random=8",
    thumbs: [
      "https://picsum.photos/400/300?random=81",
      "https://picsum.photos/400/300?random=82",
      "https://picsum.photos/400/300?random=83",
    ],
    desc: "Traditional slate tiles for roofing with excellent weather resistance."
  },
  {
    title: "Porcelain Tiles",
    main: "https://picsum.photos/1200/800?random=9",
    thumbs: [
      "https://picsum.photos/400/300?random=91",
      "https://picsum.photos/400/300?random=92",
      "https://picsum.photos/400/300?random=93",
    ],
    desc: "High-quality porcelain tiles with low water absorption and scratch resistance."
  },
];

const ProductsList: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24">
      {/* HERO */}
      <section className="relative bg-[linear-gradient(180deg,#faf5ff,rgba(250,246,255,0.6))] py-16 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Materials that last. Solutions that simplify.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Sourced carefully. Delivered on time. Designed with performance and style in mind.
              Browse our product range and request a quote for fast delivery.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#products" className="px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition">
                View Products
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition">
                Contact Sales
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">✓</div>
                <div>
                  <div className="text-sm font-semibold">Quality Certified</div>
                  <div className="text-xs text-gray-500">ISI & brand checks</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">🚚</div>
                <div>
                  <div className="text-sm font-semibold">Fast Logistics</div>
                  <div className="text-xs text-gray-500">Dedicated fleet</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">🤝</div>
                <div>
                  <div className="text-sm font-semibold">Trusted Partner</div>
                  <div className="text-xs text-gray-500">2500+ builders</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
                alt="hero"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <main id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Select categories and click view for images, details and quotation support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={i} title={p.title} main={p.main} thumbs={p.thumbs} desc={p.desc} />
              
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsList;
