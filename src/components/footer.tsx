import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 py-16 px-6 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">Manneev</span>
            </div>
            <p className="text-slate-400">
              Your trusted partner in construction materials since 2010
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Products</h4>
            <ul className="space-y-2 text-slate-400">
              {[
                "Cement & Concrete",
                "Steel & Rebar",
                "Bricks & Blocks",
                "Hardware & Tools",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-500 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Company</h4>
            <ul className="space-y-2 text-slate-400">
              {["Home","About Us", "Contact Us", "Our Partners", "Gallery",].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-orange-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 93221 47550</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>jemil.workspace@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Shop No 13,Dattani park building no 1 Opp Gokul Concord Tower, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Manneev. All rights reserved. | Made with ❤️ in Bharat</p>
          
          <p>Designed and Developed by <span> <a className="text-blue-400 underline" href="http://OrdinaryCoder.com" target="_blank">Mithlesh Vishwakarma</a> </span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
