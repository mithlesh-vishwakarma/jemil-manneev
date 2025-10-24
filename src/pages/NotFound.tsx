import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8">Page in under construction</p>
        <p className="text-xl text-orange-500 font-medium">Coming Soon</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Back to Home -
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
