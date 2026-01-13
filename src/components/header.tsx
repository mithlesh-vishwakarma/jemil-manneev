import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- Add this
import logo from "../assets/logo-manneev.png";
// import Button from "./ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // <-- Detect current path

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Our Partners", href: "/partners" },

    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-[#1C1C1C] text-[#F5F5F5] border-b border-[#F5F5F5]/20 shadow-sm">
      <div className="mx-auto flex items-center justify-between py-3 px-4 md:px-20 xl:py-4">

        {/* Logo */}
        <Link to="/" className="relative flex items-center gap-3">
          <div className="relative p-[3px] rounded-full group">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 xl:h-14 xl:w-14 object-contain rounded-full relative z-10"
            />
            {/* Dashed rotating border */}
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/60 rotate-border" />
          </div>

          {/* Text stacked vertically */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg xl:text-xl font-semibold tracking-wide text-[#D4AF37]">
              MANNEEV ENTERPRISES
            </span>
            <span className="text-sm tracking-wide text-[#D4AF37]/80">
              The Built-up Solution
            </span>
          </div>
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]" // Active tab
                  : "text-[#F5F5F5] hover:text-[#D4AF37]" // Default + hover
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Appointment Button */}
        <div className="hidden xl:flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm lg:text-base font-semibold bg-[#D4AF37] text-[#1C1C1C] rounded-full border border-transparent hover:bg-[#F5F5F5] hover:text-[#1C1C1C] hover:border-[#D4AF37] transition-all duration-300"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-[#D4AF37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={35} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#2E2E2E] px-5 pb-5 space-y-3 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]"
                  : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block text-center w-full py-2.5 rounded-full bg-[#D4AF37] text-[#1C1C1C] font-semibold hover:bg-[#F5F5F5] transition-all duration-300"
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
