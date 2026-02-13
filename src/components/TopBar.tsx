import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#d1c1a4] text-[#1C1C1C] text-xs md:text-[10px] tracking-wide font-semibold border-b border-[#c4b28f]">
      <div className="px-4 md:px-20 py-2">

        {/* Mobile + Tablet Layout */}
        <div className="md:hidden">

          {/* Row 1 */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="tel:+919326947550"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <Phone size={14} className="text-[#725e03]" />
              <span>+91 9326947550</span>
            </a>

            <a
              href="mailto:info@manneev.com"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <Mail size={14} className="text-[#725e03]" />
              <span>info@manneev.com</span>
            </a>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center mt-2">
            <a
              href="https://maps.app.goo.gl/7GjzihKmbhfE3ceQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <MapPin size={14} className="text-[#725e03]" />
              <span>Kandivali East, Mumbai</span>
            </a>

            <div className="flex items-center gap-2">
              <span className="uppercase text-[10px] text-[#725e03]">
                Follow
              </span>
              <a
                href="https://www.instagram.com/manneeventerprise?igsh=cjVlYWQ0ZDdoOGtr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#725e03] transition"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+919326947550"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <Phone size={14} className="text-[#725e03]" />
              <span>+91 9326947550</span>
            </a>

            <a
              href="mailto:info@manneev.com"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <Mail size={14} className="text-[#725e03]" />
              <span>info@manneev.com</span>
            </a>

            <a
              href="https://maps.app.goo.gl/7GjzihKmbhfE3ceQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#725e03] transition"
            >
              <MapPin size={14} className="text-[#725e03]" />
              <span>Kandivali East, Mumbai</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <span className="uppercase text-[10px] text-[#725e03]">
              Follow
            </span>
            <a
              href="https://www.instagram.com/manneeventerprise?igsh=cjVlYWQ0ZDdoOGtr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#725e03] transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopBar;
