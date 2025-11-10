import { Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo-manneev.png";

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Brand Partners", href: "/brands" },
    { label: "Contact Us", href: "/contact" },
  ];

  const leftNav = navItems.slice(0, 3);
  const rightNav = navItems.slice(3);

  return (
    <header className="relative w-full bg-[#1C1C1C] text-[#F5F5F5] border-b border-[#F5F5F5]/20 shadow-sm z-30">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-2 px-10 z-20">
        {/* Left Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {leftNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]"
                  : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Center Logo with curved base */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative flex items-end z-20">

            {/* Logo */}
            {/* <span className="text-lg md:text-xl font-semibold tracking-wide text-[#D4AF37] pr-5 z-50"> MANNEEV </span> */}
            
            <div className="relative p-[3px] rounded-full group translate-y-6 z-30 bg-[#1C1C1C]">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-14 md:h-16 md:w-16 object-contain rounded-full relative z-20"
              />
              <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/60 rotate-border" />
            </div>
            {/* <span className="text-lg md:text-xl font-semibold tracking-wide text-[#D4AF37] pl-5 z-50"> ENTERPRISES </span> */}
            {/* Curved background */}
            <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 w-[300px] h-[81px] bg-[#1C1C1C] rounded-b-[60px] border border-[#1C1C1C]/20 z-10 ]" />
          </div>

          {/* Curved Text Below the Curve */}
          <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 z-40 w-[320px] h-[120px] pointer-events-none">
            <svg viewBox="0 0 320 120" className="w-full h-full">
              {/* Lower arc so text curves upward nicely below the shape */}
              <path id="curveBelow" d="M 20 100 A 140 140 0 0 1 300 100" fill="none" />
              <text
                fill="#D4AF37"
                fontSize="14"
                fontWeight="600"
                letterSpacing="2"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <textPath href="#curveBelow" startOffset="50%">
                  The Built-up Solution
                </textPath>
              </text>
            </svg>
          </div>

        </div>





        {/* Right Menu + Appointment */}
        <div className="hidden md:flex items-center gap-8">
          {rightNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#D4AF37]"
                  : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/contact"
            className="px-5 py-2 text-sm lg:text-base font-semibold bg-[#D4AF37] text-[#1C1C1C] rounded-full border border-transparent hover:bg-[#F5F5F5] hover:text-[#1C1C1C] hover:border-[#D4AF37] transition-all duration-300"
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

      {/* Mobile Dropdown */}
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

export default Header2;
