import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Home';
import NotFound from './pages/NotFound';
import ContactUs from './pages/contactUs';
import Products from './pages/Products';

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<NotFound />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/products" element={<NotFound />} />
        <Route path="/gallery" element={<NotFound />} />
        <Route path="/partners" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
