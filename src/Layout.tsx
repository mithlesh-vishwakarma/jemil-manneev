import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Home";
// import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
// import Collections from './pages/Collections';
import NotFound from "./pages/NotFound";
// import Gallery from "./pages/Gallery";

import TopBar from "./components/TopBar";
// import Granites from "./pages/ProductCollections/Granites";
// import Marbles from "./pages/ProductCollections/Marbles";
// import NaturalStones from "./pages/ProductCollections/NaturalStones";
// import ItalianMarbles from "./pages/ProductCollections/ItalianMarbles";
// import Tiles from "./pages/ProductCollections/Tiles";
// import Slabs from "./pages/ProductCollections/Slabs";
// import Sinks from "./pages/ProductCollections/Sinks";
// import SanitaryWare from "./pages/ProductCollections/SanitaryWare";
// import OtherMaterials from "./pages/ProductCollections/OtherMaterials";
// import ConstructionChemicals from "./pages/ProductCollections/ConstructionChemicals";
// import CPFittings from "./pages/ProductCollections/CPFittings";


const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Threshold for hiding TopBar
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
        {/* Animated TopBar Wrapper */}
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
            }`}
        >
          <TopBar />
        </div>

        {/* Header */}
        <div className="w-full">
          <Header />
        </div>
      </div>

      {/* Main Content - Padded to clear fixed header */}
      <div className="pt-[140px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/collections" element={<NotFound />} />
          <Route path="/gallery" element={<NotFound />} />

          <Route path="/partners" element={<NotFound />} />

          <Route path="/collections/tiles" element={<NotFound />} />
          <Route path="/collections/granites" element={<NotFound />} />
          <Route path="/collections/marbles" element={<NotFound />} />
          <Route
            path="/collections/natural stones"
            element={<NotFound />}
          />
          <Route
            path="/collections/italian marbles"
            element={<NotFound />}
          />
          <Route path="/collections/slabs" element={<NotFound />} />
          <Route path="/collections/sink" element={<NotFound />} />
          <Route path="/collections/sanitary ware" element={<NotFound />} />
          <Route
            path="/collections/other materials"
            element={<NotFound />}
          />
          <Route
            path="/collections/construction chemicals"
            element={<NotFound />}
          />
          <Route path="/collections/cp fittings" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />

      {/* Floating Call Button - Visible only on mobile and tablet */}
      <Link
        to="tel:+919326947550"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all lg:hidden"
      >
        <i className="fa-solid fa-phone text-white"></i>
        <span className="font-semibold text-sm">Call Now</span>
      </Link>
    </div>
  );
};

export default Layout;
