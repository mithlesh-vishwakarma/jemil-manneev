import React, { useState, useMemo, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";
import TechnicalSpecs from "./TechnicalSpecs";
import { FaWhatsapp } from "react-icons/fa";
import AutoCarousel from "./AutoCarousel";
import { Link } from "react-router-dom";

export interface Product {
  id: number | string;
  code: string;
  image: string;
  images?: string[]; // Added support for multiple images
  color: string;
  surface: string;
  size: string;
}

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface ProductShowcaseProps {
  slides: Slide[];
  products: Product[];
  title: string;
  subtitle?: string;
  itemsPerPage?: number;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = React.memo(
  ({
    slides,
    products,
    title,
    subtitle = "Explore our diverse range of finishes and designs.",
    itemsPerPage = 15,
  }) => {
    // 1. Filter State
    const [filters, setFilters] = useState({
      color: "All",
      size: "All",
      surface: "All",
    });

    const [currentPage, setCurrentPage] = useState(1);

    // 2. Derive Filter Options
    const uniqueColors = useMemo(
      () => [
        "All",
        ...Array.from(new Set(products.map((p) => p.color))).sort(),
      ],
      [products]
    );
    const uniqueSurfaces = useMemo(
      () => [
        "All",
        ...Array.from(new Set(products.map((p) => p.surface))).sort(),
      ],
      [products]
    );
    const uniqueSizes = useMemo(
      () => [
        "All",
        ...Array.from(
          new Set(products.map((p) => p.size.split("(")[0].trim()))
        ).sort(),
      ],
      [products]
    );

    // 3. Handle Filter Change
    const handleFilterChange = (key: string, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setCurrentPage(1); // Reset to first page
    };

    // 4. Filter Logic
    const filteredProducts = useMemo(() => {
      return products.filter((product) => {
        const matchColor =
          filters.color === "All" || product.color === filters.color;
        const matchSurface =
          filters.surface === "All" || product.surface === filters.surface;
        const matchSize =
          filters.size === "All" || product.size.includes(filters.size);
        return matchColor && matchSurface && matchSize;
      });
    }, [products, filters]);

    // 5. Pagination Logic
    const totalPages = useMemo(() => {
      return Math.ceil(filteredProducts.length / itemsPerPage);
    }, [filteredProducts.length, itemsPerPage]);

    const currentProducts = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredProducts.slice(start, end);
    }, [currentPage, filteredProducts, itemsPerPage]);

    useEffect(() => {
      setCurrentPage(1);
    }, [filteredProducts]);

    const getPaginationPages = () => {
      const pages: (number | "dots")[] = [];

      if (totalPages <= 4) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (start > 2) {
        pages.push("dots");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("dots");
      }

      pages.push(totalPages);

      return pages;
    };

    return (
      <div className="min-h-screen bg-[#1c1c1c]">
        <section className="h-[75vh] relative bg-[linear-gradient(180deg,#faf5ff,rgba(250,246,255,0.6))] overflow-hidden">
          <AutoCarousel slides={slides} />
        </section>

        <main className="container mx-auto px-4 py-12 relative z-10">
          {/* Intro & Filters Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <div className="text-left">
              <div className="inline-block bg-[#D4AF37] rounded-full px-4 py-2 shadow-md mb-3">
                <span className="text-[#1c1c1c] text-sm font-semibold">
                  ✨ Premium Collection ✨
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 bg-[#E6E6FA]/10 p-4 rounded-xl border border-[#D4AF37]/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white font-semibold mr-2">
                <FunnelIcon className="w-5 h-5 text-[#D4AF37]" />
                Filters:
              </div>

              {/* Color Filter */}
              <select
                value={filters.color}
                onChange={(e) => handleFilterChange("color", e.target.value)}
                className="bg-white/90 border border-[#D4AF37]/50 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37] block p-2 outline-none cursor-pointer hover:bg-white transition-colors"
                style={{ minWidth: "120px" }}
              >
                {uniqueColors.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "All Colors" : c}
                  </option>
                ))}
              </select>

              {/* Surface Filter */}
              <select
                value={filters.surface}
                onChange={(e) => handleFilterChange("surface", e.target.value)}
                className="bg-white/90 border border-[#D4AF37]/50 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37] block p-2 outline-none cursor-pointer hover:bg-white transition-colors"
                style={{ minWidth: "140px" }}
              >
                {uniqueSurfaces.map((s) => (
                  <option key={s} value={s}>
                    {s === "All" ? "All Surfaces" : s.replace(" Finish", "")}
                  </option>
                ))}
              </select>

              {/* Size Filter */}
              <select
                value={filters.size}
                onChange={(e) => handleFilterChange("size", e.target.value)}
                className="bg-white/90 border border-[#D4AF37]/50 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37] block p-2 outline-none cursor-pointer hover:bg-white transition-colors"
                style={{ minWidth: "120px" }}
              >
                {uniqueSizes.map((s) => (
                  <option key={s} value={s}>
                    {s === "All" ? "All Sizes" : s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {currentProducts.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">
                No products match your selected filters.
              </p>
              <button
                onClick={() =>
                  setFilters({ color: "All", size: "All", surface: "All" })
                }
                className="mt-4 text-[#D4AF37] font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > itemsPerPage && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2 rounded-lg bg-white/10 border border-[#D4AF37] text-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              {/* Desktop Page Numbers */}
              <div className="hidden sm:flex gap-1">
                {getPaginationPages().map((page, index) => {
                  if (page === "dots") {
                    return (
                      <span
                        key={`dots-${index}`}
                        className="w-10 h-10 flex items-center justify-center text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg border font-semibold transition-all duration-300
              ${
                currentPage === page
                  ? "bg-[#D4AF37] text-white border-[#D4AF37] shadow-md scale-105"
                  : "bg-white/10 text-gray-400 border-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Page Indicator */}
              <div className="sm:hidden font-semibold text-gray-400 px-3">
                Page{" "}
                <span className="text-[#D4AF37] font-semibold">
                  {currentPage}
                </span>{" "}
                of{" "}
                <span className="text-[#D4AF37] font-semibold">
                  {totalPages}
                </span>
              </div>

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2 rounded-lg bg-white/10 border border-[#D4AF37] text-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </main>
        <TechnicalSpecs />

        {/* Footer */}
        <footer className="bg-[#88876d] text-gray-800 py-12 mt-0">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-800 mb-6">
              Contact us for samples and professional consultation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp Contact Button */}
              <Link
                to="https://wa.me/919326947550"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl font-semibold transition-colors border border-green-800"
              >
                <FaWhatsapp className="text-3xl" />
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
);

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isControlHovered, setIsControlHovered] = useState(false);
  const baseUrl = "https://ik.imagekit.io/shaileshImages/tiles/toWEBP/";

  // Use images array if present, otherwise single image
  const rawImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  // Auto-scroll effect ONLY on hover
  useEffect(() => {
    if (!isHovered || isControlHovered || rawImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rawImages.length);
    }, 1200); // Change image every 2 seconds on hover

    return () => clearInterval(interval);
  }, [isHovered, isControlHovered, rawImages.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % rawImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + rawImages.length) % rawImages.length
    );
  };

  return (
    <div
      className="bg-[#88876d] shadow-md p-2 md:p-3 border border-[#D4AF37] rounded-lg transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0); // Optional: Reset to first image on leave? Or keep? Resetting feels cleaner for "showcase".
      }}
    >
      <div className="relative overflow-hidden rounded-md border border-[#D4AF37] aspect-square group">
        {rawImages.map((src, index) => (
          <img
            key={src}
            src={`${baseUrl}${src}`}
            alt={product.code}
            className={`
        absolute inset-0 w-full h-full object-cover
        transition-opacity duration-700 ease-in-out
        ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
      `}
          />
        ))}
        {/* Arrows - Only show if multiple images */}
        {rawImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              onMouseEnter={() => setIsControlHovered(true)}
              onMouseLeave={() => setIsControlHovered(false)}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#D4AF37] text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              onMouseEnter={() => setIsControlHovered(true)}
              onMouseLeave={() => setIsControlHovered(false)}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#D4AF37] text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Details */}
      <div className="mt-3 space-y-2 text-[#1c1c1c]">
        <h3 className="text-lg font-bold text-[#1c1c1c] leading-tight">
          {product.code}
        </h3>
        <div className="text-sm text-[#1c1c1c] space-y-1">
          <div className="flex justify-between border-b border-[#D4AF37]/30 pb-0.5">
            <span className="font-semibold">V. Code:</span>
            <span className="truncate ml-1">{product.code}</span>
          </div>
          <div className="flex justify-between border-b border-[#D4AF37]/30 pb-0.5">
            <span className="font-semibold">Size:</span>
            <span className="truncate ml-1">
              {product.size.split("(")[0].trim()}
            </span>
          </div>
          <div className="flex justify-between border-b border-[#D4AF37]/30 pb-0.5">
            <span className="font-semibold">Surface:</span>
            <span className="truncate ml-1">
              {product.surface.replace(" Finish", "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
