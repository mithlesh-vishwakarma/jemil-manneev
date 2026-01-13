import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Collections from './pages/Collections';
// import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";

import TopBar from "./components/TopBar";
import Granites from "./pages/ProductCollections/Granites";
import Marbles from "./pages/ProductCollections/Marbles";
import NaturalStones from "./pages/ProductCollections/NaturalStones";
import ItalianMarbles from "./pages/ProductCollections/ItalianMarbles";
import Tiles from "./pages/ProductCollections/Tiles";
import Slabs from "./pages/ProductCollections/Slabs";
import Sinks from "./pages/ProductCollections/Sinks";
import SanitaryWare from "./pages/ProductCollections/SanitaryWare";
import OtherMaterials from "./pages/ProductCollections/OtherMaterials";
import ConstructionChemicals from "./pages/ProductCollections/ConstructionChemicals";
import CPFittings from "./pages/ProductCollections/CPFittings";


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
      {/* TopBar - Hidden when scrolled */}
      {!isScrolled && <TopBar />}

      {/* Header - Sticky when scrolled, relative when at top */}
      <div
        className={isScrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"}
      >
        <Header />
      </div>

      {/* Main Content - Add top padding when Header is sticky */}
      <div className={isScrolled ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/collections/tiles" element={<Tiles />} />
          <Route path="/collections/granites" element={<Granites />} />
          <Route path="/collections/marbles" element={<Marbles />} />
          <Route
            path="/collections/natural stones"
            element={<NaturalStones />}
          />
          <Route
            path="/collections/italian marbles"
            element={<ItalianMarbles />}
          />
          <Route path="/collections/slabs" element={<Slabs />} />
          <Route path="/collections/sink" element={<Sinks />} />
          <Route path="/collections/sanitary ware" element={<SanitaryWare />} />
          <Route
            path="/collections/other materials"
            element={<OtherMaterials />}
          />
          <Route
            path="/collections/construction chemicals"
            element={<ConstructionChemicals />}
          />
          <Route path="/collections/cp fittings" element={<CPFittings />} />
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
