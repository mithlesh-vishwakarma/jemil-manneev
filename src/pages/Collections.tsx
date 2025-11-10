import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import ProductCard from "../components/Product";
import MaterialImg from "../assets/materials.webp";

const collections = [
  {
    title: "Tiles",
    main: "https://media.istockphoto.com/id/2208218411/photo/man-choosing-tile-among-different-samples-in-store-closeup.jpg?s=612x612&w=0&k=20&c=AcXCEgn_pT2Q4ybvwysyhwyJz4h7klEL9RB6rzXlSIM=",
    thumbs: [
      "https://media.istockphoto.com/id/2208218385/photo/man-choosing-tile-among-different-samples-in-store-closeup.jpg?s=612x612&w=0&k=20&c=QUAD6aqVtLaRFxffIkUnSRbr81MBfm4B7J-nEzQv7AQ=",
      "https://media.istockphoto.com/id/2196284471/photo/architect-hand-pointing-at-stone-tile-collection-display-on-sample-board-stone-texture-and.jpg?s=612x612&w=0&k=20&c=LabL8VxDTcbtvM6JV_gme4omSc_5YHUr3uAXBZZWfR0=",
      "https://media.istockphoto.com/id/1855274284/photo/interior-architect-compares-multi-color-of-artificial-stones-with-swatches-or-palette-of.jpg?s=612x612&w=0&k=20&c=CSGlXhBj0q3Eg4HyBtmo6Gfe8VuDeNw8_6ukSXshT34=",
    ],
    desc: "High-quality tiles for flooring and wall applications, available in various designs and finishes."
  },
  {
    title: "Granites",
    main: "https://plus.unsplash.com/premium_photo-1675798561940-8cf9cbffc175?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYW5pdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://plus.unsplash.com/premium_photo-1675115145946-b88f0cb41db0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3Jhbml0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1675526111013-842cc17dd7cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhbml0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      "https://images.unsplash.com/photo-1674831311475-bafedda32036?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhbml0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Durable granite slabs ideal for countertops, flooring, and construction projects."
  },
  {
    title: "Marbles",
    main: "https://images.unsplash.com/photo-1613215428130-7651fbff11db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://images.unsplash.com/photo-1616362258782-7511b61686ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      "https://images.unsplash.com/photo-1566305977571-5666677c6e98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Elegant marble stones with natural veining, perfect for premium interiors and sculptures."
  },
  {
    title: "Natural Stones",
    main: "https://plus.unsplash.com/premium_photo-1674707664781-400267cf908c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBzdG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://images.unsplash.com/photo-1603621062552-1029ca1aece2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1674518547392-458ab4714c25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Versatile natural stones for landscaping, cladding, and decorative purposes."
  },
  {
    title: "Italian Marbles",
    main: "https://media.istockphoto.com/id/1198576809/photo/beige-limestone-similar-to-marble-natural-surface-or-texture-for-floor-or-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3XT0a1YWveYVPfMeBHFGtqxdbtQiPNEp69vapKRQTFQ=",
    thumbs: [
      "https://media.istockphoto.com/id/1486579445/photo/white-marble-with-black-patterns.webp?a=1&b=1&s=612x612&w=0&k=20&c=c5cgwIQbo2oh9lsKQlWXD4fjV03BF7OHLPeJ5G_onvU=",
      "https://media.istockphoto.com/id/475648615/photo/vintage-mosaic-tile.webp?a=1&b=1&s=612x612&w=0&k=20&c=YCodWnORnkxjgiHP-dWmphVrzt9GDW5ylAGkT1gj0nQ=",
      "https://plus.unsplash.com/premium_photo-1707986417720-e1282588bcdc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGl0YWxpYW4lMjBtYXJibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Premium Italian marbles known for their superior quality and timeless beauty."
  },
  {
    title: "Slabs",
    main: "https://plus.unsplash.com/premium_photo-1675864663191-542186af0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://plus.unsplash.com/premium_photo-1675077759128-7fffc787f789?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNsYWJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1672152803614-5e1d85477699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1722843459843-b6bb61a0b2c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Large stone slabs for countertops, flooring, and architectural applications."
  },
  {
    title: "Sink",
    main: "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://images.unsplash.com/photo-1595514535116-d0401260e7cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      "https://images.unsplash.com/photo-1595515770330-ceeea7d82cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1684445034864-5a9c6756d099?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Functional and stylish sinks for kitchens and bathrooms, made from durable materials."
  },
  {
    title: "Sanitary Ware",
    main: "https://images.unsplash.com/photo-1761353855019-05f2f3ed9c43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    thumbs: [
      "https://media.istockphoto.com/id/1126590541/photo/modern-high-tech-toilet-with-electronic-bidet-in-thailand-japan-style-toilet-bowl-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2-hzZa_X8X4t6ftSN5knR2z4JoJvAGw2DhmYT0RoSc=",
      "https://plus.unsplash.com/premium_photo-1664392164625-4f806c5f70f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1664392169903-550c1c7ce2bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuaXRhcnklMjB3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Complete range of sanitary ware including toilets, basins, and accessories."
  },
  {
    title: "Other Materials",
    main: "https://media.istockphoto.com/id/172465856/photo/round-steel-bars.webp?a=1&b=1&s=612x612&w=0&k=20&c=1rtx6jCpgKkHXjhX_K13XTBnsGsW8Nl9KIChR4h_CAI=",
    thumbs: [
      "https://media.istockphoto.com/id/1346192283/photo/3d-illustration-of-reinforcements-bunch-of-steel-tmt-bar-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=j2crNmNaVx52dpMG-y2FHfV-LQKXfHyBbZ0Idx_r_3A=",
      "https://media.istockphoto.com/id/182884765/photo/steel.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZH2QWIL9UjjxuphY-c3B7p5Dv49lxQXtM7iu3_HdLN4=",
      "https://images.unsplash.com/photo-1644749024302-b6fbea903ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
    ],
    desc: "Miscellaneous construction and building materials for various project needs."
  },
  {
    title: "Construction Chemicals",
    main: "https://media.istockphoto.com/id/1244947026/photo/hand-of-worker-plastering-cement-at-wall-for-building-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=BpDmov04BS4FgPaYNeyMVe3l6S2Dc4P5hAPmYsEkv-8=",
    thumbs: [
      "https://media.istockphoto.com/id/182177634/photo/warehouse-full-of-sacks-stacked-from-floor-to-ceiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=_yZjxMV5ZaiyUTECBzXAE00i8UHBBrb_BKytgM1IEN0=",
      "https://media.istockphoto.com/id/1352877532/photo/filling-a-bucket-with-cement-at-construstion-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=L9gR7nEYc7h0dl5_7MtgmVPboMiifo99BPSobRrwgdo=",
      "https://media.istockphoto.com/id/1181619517/photo/a-heap-of-cement-bags-lying-on-a-road-side-near-mhatre-bridge-pune-maharashtra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=7HdmnJ3mC_cy4-3nsRasnvCYXrPtNdHMX9LvY3AVfg8=",
    ],
    desc: "Specialized chemicals for construction, including adhesives, sealants, and waterproofing."
  },
  {
    title: "CP Fittings",
    main: "https://media.istockphoto.com/id/152169704/photo/metals.jpg?s=612x612&w=0&k=20&c=xsSv3Vel7PxiXGneJNFXhkRPmMrR-_Z6rcedAw44kLY=",
    thumbs: [
      "https://media.istockphoto.com/id/1448590902/photo/nickel-plated-shut-off-valve-for-cold-or-hot-water.jpg?s=612x612&w=0&k=20&c=s5jGJOzKfWJXmRV96trRy0SrzWaI9egEyjNuhhZFvOI=",
      "https://media.istockphoto.com/id/1344103801/photo/upvc-cpvc-fittings-for-polypropylene-pipes-elements-for-pipelines-plastic-piping-elements.jpg?s=612x612&w=0&k=20&c=LdsMQ2HyKMvPSf1gP1IDq25dw9Xs4b7M7aicsl6He98=",
      "https://media.istockphoto.com/id/1251660466/photo/water-supply-and-sanitary-fittings.jpg?s=612x612&w=0&k=20&c=BGSwqFJLkZlyG9mjY4ec-RQKKSG2FUfIZtpWTp_g4eA=",
    ],
    desc: "High-quality CP fittings for plumbing and water supply systems."
  },
];

const ProductsList: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

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
              <button onClick={handleContactClick} className="px-5 py-3 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 transform hover:scale-105 cursor-pointer">
                Contact Sales
              </button>
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
                src={MaterialImg}
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
            {collections.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
                <img src={c.main} alt={c.title} className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => navigate(`/collections/${encodeURIComponent(c.title.toLowerCase())}`)}
                      className="px-3 py-2 text-sm rounded bg-purple-600 text-white"
                    >
                      View
                    </button>
                    <button
                      onClick={handleContactClick}
                      className="px-3 py-2 text-sm rounded border border-gray-200"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsList;
