import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] pt-[140px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#D4AF37] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-2">Page Not Found</h2>
        <p className="text-lg text-[#B0B0B0] mb-8">Page is under construction</p>
        <p className="text-xl text-[#D4AF37] font-medium">Coming Soon</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#b08d2b] transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
