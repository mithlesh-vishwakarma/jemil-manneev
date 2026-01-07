import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
// import Collections from './pages/Collections';
import Gallery from './pages/Gallery';
import OurPartners from './pages/OurPartners';
import TopBar from './components/TopBar';
import Tiles from './pages/ProductCollections/Tiles';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Threshold for hiding TopBar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* TopBar - Hidden when scrolled */}
      {!isScrolled && <TopBar />}

      {/* Header - Sticky when scrolled, relative when at top */}
      <div className={isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}>
        <Header />
      </div>

      {/* Main Content - Add top padding when Header is sticky */}
      <div className={isScrolled ? 'pt-16' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collections" element={<NotFound />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/collections/tiles" element={<Tiles />} />
        </Routes>
      </div>

      <Footer />

      {/* Floating Call Button - Visible only on mobile and tablet */}
      <a
        href="tel:+919326947550"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all lg:hidden"
      >
        <i className="fa-solid fa-phone text-white"></i>
        <span className="font-semibold text-sm">Call Now</span>
      </a>
    </div>
  );
};

export default Layout;
