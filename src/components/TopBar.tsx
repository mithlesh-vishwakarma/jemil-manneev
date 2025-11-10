import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#1C1C1C] text-[15px] tracking-[1.1px] font-semibold">
      <div className="flex flex-col md:flex-row justify-between py-2 px-20">
        {/* Left Section */}
        <div className="flex flex-wrap items-left gap-4">
          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <Phone size={15} className="text-[#D4AF37]" />
            <span>CALL +91 9876543210</span>
          </a>

          {/* Email */}
          <a
            href="mailto:jemil.workspace@gmail.com"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <Mail size={15} className="text-[#D4AF37]" />
            <span>jemil.workspace@gmail.com</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/7GjzihKmbhfE3ceQ7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <MapPin size={15} className="text-[#D4AF37]" />
            <span>Kandivali East, Mumbai, Maharashtra 400101</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center ml-10 gap-3 mt-2 md:mt-0">
          <p className="uppercase text-[15px] tracking-[1.1px] text-[#B0B0B0]">
            <strong>Follow us on social</strong>
          </p>
          <a
            href="https://www.facebook.com/cbwestend"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#D4AF37] transition "
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href="https://www.instagram.com/cb_westend/"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#D4AF37] transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/company/c-bhogilal-westend-official"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#D4AF37] transition"
          >
            <FaLinkedinIn size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
