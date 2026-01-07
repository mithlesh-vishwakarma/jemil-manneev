import { Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // <-- Add this
import logo from "../assets/logo-manneev.png";
// import Button from "./ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // <-- Detect current path

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Brand Partners", href: "/partners" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-[#1C1C1C] text-[#F5F5F5] border-b border-[#F5F5F5]/20 shadow-sm">
      <div className="mx-auto flex items-center justify-between py-3 px-20 md:py-4">

        {/* Logo */}
        <a href="/" className="relative flex items-center gap-3">
          <div className="relative p-[3px] rounded-full group">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full relative z-10"
            />
            {/* Dashed rotating border */}
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/60 rotate-border" />
          </div>

          {/* Text stacked vertically */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-semibold tracking-wide text-[#D4AF37]">
              MANNEEV ENTERPRISES
            </span>
            <span className="text-sm tracking-wide text-[#D4AF37]/80">
              The Built-up Solution
            </span>
          </div>
        </a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]" // Active tab
                  : "text-[#F5F5F5] hover:text-[#D4AF37]" // Default + hover
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Appointment Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="px-5 py-2.5 text-sm lg:text-base font-semibold bg-[#D4AF37] text-[#1C1C1C] rounded-full border border-transparent hover:bg-[#F5F5F5] hover:text-[#1C1C1C] hover:border-[#D4AF37] transition-all duration-300"
          >
            Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D4AF37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2E2E2E] px-5 pb-5 space-y-3 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`block text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]"
                  : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="/contact"
              className="block text-center w-full py-2.5 rounded-full bg-[#D4AF37] text-[#1C1C1C] font-semibold hover:bg-[#F5F5F5] transition-all duration-300"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
