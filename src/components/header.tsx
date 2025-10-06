import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const productSubmenu = [
    "Tiles",
    "Granites",
    "Marbles",
    "Italian Marbles",
    "Slabs",
    "Sinks",
    "Sanitary Ware",
    "Construction Chemicals",
    "CP Fittings",
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", submenu: productSubmenu },
    { name: "Gallery / Projects", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Our Partners", href: "/partners" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg shadow-lg">
      {/* Top Bar with Call Now CTA */}
      <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-slate-300 text-sm flex items-center gap-2">
            <span className="hidden sm:inline">
              Need Help? Contact Us Anytime
            </span>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/40 transition-all transform hover:scale-105">
            Call Now
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              MANNEEV
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className="text-slate-200 hover:text-orange-500 transition-colors flex items-center gap-1 font-medium"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-slate-200 hover:text-orange-500 transition-colors flex items-center gap-1 font-medium"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.submenu && isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-2xl py-2 border border-slate-700">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="/products"
                        className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-orange-400 transition-colors"
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
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105">
              WhatsApp Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-200 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-900 rounded-lg shadow-xl overflow-hidden border border-slate-800">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={() => !item.submenu && setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-orange-500 transition-colors border-b border-slate-800"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="bg-slate-800 bg-opacity-50">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-8 py-2 text-slate-400 hover:bg-slate-700 hover:text-orange-400 transition-colors text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all transform hover:scale-105">
                WhatsApp Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
