import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#d1c1a4] text-[#1C1C1C] text-[10px] tracking-[1.1px] font-semibold">
      <div className="flex flex-col md:flex-row justify-between py-2 px-20">
        {/* Left Section */}
        <div className="flex flex-wrap items-left gap-4">
          {/* Phone */}
          <a
            href="tel:+919326947550"
            className="flex items-center gap-2 hover:text-[#725e03] transition"
          >
            <Phone size={15} className="text-[#725e03]" />
            <span>CALL +91 9326947550</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@manneev.com"
            className="flex items-center gap-2 hover:text-[#725e03] transition"
          >
            <Mail size={15} className="text-[#725e03]" />
            <span>info@manneev.com</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/7GjzihKmbhfE3ceQ7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#725e03] transition"
          >
            <MapPin size={15} className="text-[#725e03]" />
            <span>Kandivali East, Mumbai, Maharashtra 400101</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center ml-10 gap-3 mt-2 md:mt-0">
          <p className="uppercase text-[10px] tracking-[1.1px] text-[#725e03]">
            <strong>Follow us on social</strong>
          </p>
          {/* <a
            href="https://www.facebook.com/cbwestend"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#725e03] transition "
          >
            <FaFacebookF size={12} />
          </a> */}
          <a
            href="https://www.instagram.com/cb_westend/"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#725e03] transition"
          >
            <FaInstagram size={12} />
          </a>
          {/* <a
            href="https://www.linkedin.com/company/c-bhogilal-westend-official"
            target="_blank"
            rel="noreferrer"
            className="text-[#1C1C1C] hover:text-[#725e03] transition"
          >
            <FaLinkedinIn size={12} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
