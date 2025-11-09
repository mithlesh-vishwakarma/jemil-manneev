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
    <footer className="bg-[#1C1C1C] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-12">
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Manneev Enterprises" className="h-16 mb-4" />
          <h2 className="text-[#F5F5F5] font-semibold text-lg ">
            MANNEEV ENTERPRISES
          </h2><span className="text-[#B0B0B0]">The Built-Up Solution</span>

          <p className="mt-3 text-sm text-[#B0B0B0] leading-relaxed">
            Our carefully curated collections and personal touch have redefined
            spaces across India, winning the trust of our customers for over 25
            years.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-4 uppercase">
            About Us
          </h3>
          <p className="text-sm text-[#B0B0B0] leading-relaxed">
            We combine craftsmanship, innovation, and design excellence to
            elevate your living spaces with style and sophistication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
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

        {/* Contact Us */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-4 uppercase">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-[#B0B0B0]">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#D4AF37] mt-1" />
              <span>
                Bath Decor NX, Shop No. 5, Kewal Tower, Wing-B, Opp. Vodafone
                Gallery, Liberty Garden, Malad West, Mumbai, Maharashtra 400064
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4AF37]" />
              <a
                href="tel:+919076150099"
                className="hover:text-[#D4AF37] transition"
              >
                +91 90761 50099
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#D4AF37]" />
              <a
                href="mailto:info@bathdecornx.com"
                className="hover:text-[#D4AF37] transition"
              >
                info@bathdecornx.com
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
      <div className="border-t border-[#2E2E2E] text-center py-4 text-sm text-[#B0B0B0]">
        © Copyright 2024–25 Bath Decor NX. All Rights Reserved.
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919076150099"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-20 bg-[#D4AF37] text-[#1C1C1C] p-3 rounded-full shadow-lg hover:bg-[#b8962e] transition"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
