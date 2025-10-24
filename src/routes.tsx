import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Home';
import NotFound from './pages/NotFound';
// import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/about" element={<AboutUs/> } />
        <Route path="/products" element={<NotFound />} />
        <Route path="/gallery" element={<NotFound />} />
        <Route path="/partners" element={<NotFound />} />
      </Routes>
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

export default AppRoutes;
