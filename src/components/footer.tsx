import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../assets/logo-manneev.png";

const Footer: React.FC = () => {
  return (
     <footer className="bg-[#1E1B4B] text-white py-12 pb-2 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
               <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 shadow-md"
            />
            <div className="flex flex-col ml-1">
              <span className="hidden sm:inline font-semibold text-white text-2xl tracking-tight">
                MANNEEV ENTERPRISES
              </span>
              <span className="hidden sm:inline font-light text-white text-sm">
                The Built Up Solution
              </span>
            </div>
          </div>
            <div className="space-y-3">
              <h4 className="font-bold">Quick Links</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-white transition">Products</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold">Contact</h4>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>+91 XXXX XXX XXX</span></li>
                <li className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>info@manneev.com</span></li>
                <li className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>Ahmedabad, Gujarat</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-2 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MANNEEV. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
