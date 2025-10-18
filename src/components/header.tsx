import { useState } from "react";
import Logo from "../assets/logo-manneev.png";
// import { Facebook, Instagram, MessageCircle } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const productSubmenu = [
    "Tiles",
    "Granites",
    "Marbles",
    "Natural Stones",
    "Other Materials",
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", submenu: productSubmenu },
    { name: "Gallery / Projects", href: "/gallery" },
    { name: "Our Partners", href: "/partners" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b rounded-2xl border-white/40 shadow-lg">
      <div className="relative bg-[#1E1B4B] text-white text-sm shadow-md border-b rounded-2xl border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 py-2">
          {/* Left Section - Contact Info */}
          <div className="flex items-center gap-3">
            <span className="font-medium tracking-wide flex items-center gap-2">
              <i className="fa-solid fa-headset text-indigo-300"></i>
              Need Help? Contact Us Anytime
            </span>
          </div>

          {/* Right Section - Social Icons + Call Button */}
          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-600/70 transition-all"
              >
                <i className="fa-brands fa-facebook-f text-white text-lg"></i>
              </a>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600/70 transition-all"
              >
                <i className="fa-brands fa-instagram text-white text-lg"></i>
              </a>
              <a
                href="https://wa.me/9326947550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-600/70 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-white text-lg"></i>
              </a>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-white/20"></div>

            {/* Call Now Button */}
            <a
              href="tel:+919326947550"
              className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full hover:bg-indigo-50 hover:shadow transition-all"
            >
              <i className="fa-solid fa-phone text-indigo-600 text-sm"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo + Title */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 shadow-md"
            />
            <div className="flex flex-col ml-1">
              <span className="hidden sm:inline font-semibold text-purple-900 text-2xl tracking-tight">
                MANNEEV ENTERPRISES
              </span>
              <span className="hidden sm:inline font-light text-purple-900 text-sm">
                The Built Up Solution
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setIsProductsDropdownOpen(!isProductsDropdownOpen)
                    }
                    className="text-lavender-700 hover:text-purple-500 transition-colors flex items-center gap-1 font-medium"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-lavender-700 hover:text-purple-500 transition-colors flex items-center gap-1 font-medium"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.submenu && isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/80 backdrop-blur-lg border border-white/30 rounded-lg shadow-2xl py-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="/products"
                        className="block px-4 py-2 text-lavender-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden lg:block">
            <a href="https://wa.me/9326947550" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all transform hover:scale-105 inline-block">
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-lavender-700 p-2 hover:bg-lavender-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden border border-white/30">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={() => !item.submenu && setIsMenuOpen(false)}
                  className="block px-4 py-3 text-lavender-700 hover:bg-lavender-100 hover:text-purple-500 transition-colors border-b border-white/30"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="bg-white/50 backdrop-blur-sm">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-8 py-2 text-lavender-500 hover:bg-lavender-100 hover:text-purple-600 transition-colors text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <a href="https://wa.me/9326947550" target="_blank" rel="noopener noreferrer" className="w-full bg-purple-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all transform hover:scale-105 inline-block">
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
