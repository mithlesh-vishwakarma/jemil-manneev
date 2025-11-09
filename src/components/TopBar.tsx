import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#1C1C1C] text-[11px] tracking-[1.1px] font-semibold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Phone */}
          <a
            href="tel:02261523100"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <Phone size={15} className="text-[#D4AF37]" />
            <span>CALL 022 6152 3100</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@cbwestend.com"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <Mail size={15} className="text-[#D4AF37]" />
            <span>info@cbwestend.com</span>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/40%C2%B043'51.4%22N+73%C2%B058'54.0%22W"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <MapPin size={15} className="text-[#D4AF37]" />
            <span>B-1 Hem Colony - Vile Parle West, Mumbai</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <p className="uppercase text-[11px] tracking-[1.1px] mr-2 text-[#B0B0B0]">
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
