import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo-manneev.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#F5F5F5] border-t border-[#2E2E2E] ">
      <div className="mx-auto grid md:grid-cols-4 gap-8 px-20 py-4 pt-12">
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Manneev Enterprises" className="h-16 mb-4" />
          <h2 className="text-[#F5F5F5] font-semibold text-xl ">
            MANNEEV ENTERPRISES
          </h2><span className="text-[#B0B0B0]">The Built-Up Solution</span>

          <p className="mt-3 text-lg text-[#B0B0B0] leading-relaxed">
            Our carefully curated collections and personal touch have redefined
            spaces across India, winning the trust of our customers for over 25
            years.
          </p>
        </div>



        {/* Quick Links */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-lg tracking-wider mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg">
            {["Product", "Visit Us", "About Us", "Contact Us"].map((item) => (
              <li key={item} className="flex items-center gap-2 group">
                <ArrowRight
                  size={14}
                  className="text-[#D4AF37] group-hover:translate-x-1 transition"
                />
                <a
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-lg tracking-wider mb-4 uppercase">
            Products
          </h3>
          <ul className="space-y-2 text-lg">
            {["Tiles & Marbles", "Bathroom Fixtures", "Sanitary Ware", "Other Materials"].map((item) => (
              <li key={item} className="flex items-center gap-2 group">
                <ArrowRight
                  size={14}
                  className="text-[#D4AF37] group-hover:translate-x-1 transition"
                />
                <a
                  href="/collections"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-lg tracking-wider mb-4 uppercase">
            Contact Us
          </h3>
          <ul className="space-y-3 text-lg text-[#B0B0B0]">
            <li className="flex items-start gap-2">
              <MapPin size={50} className="text-[#D4AF37] mt-1" />
              <span>
                Shop No 13,Dattani park building no 1 Opp Gokul Concord Tower, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4AF37]" />
              <a
                href="tel:+91 9326947550"
                className="hover:text-[#D4AF37] transition"
              >
                +91 9326947550
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#D4AF37]" />
              <a
                href="mailto:info@manneev.com"
                className="hover:text-[#D4AF37] transition"
              >
                info@manneev.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-[#D4AF37]" />
              <span>Mon–Sat: 10 AM to 7:30 PM | Sunday Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2E2E2E] text-center py-4 text-lg text-[#B0B0B0]">
        © Copyright 2025 Manneev Enterprises. All Rights Reserved.
        {/* <div className=" text-center text-lg text-[#B0B0B0]">
          made with ❤️ by <a href="http://ordinarycoder.com">Mithlesh</a>
        </div> */}
      </div>


      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/919076150099"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a> */}

      {/* Back to Top Button */}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-20 text-[#e4ab00] w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/60 rotate-border pointer-events-none z-50" />
        ↑
      </button>


    </footer>
  );
};

export default Footer;
