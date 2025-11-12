
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-[#F5F5F5]">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-[#2E2E2E]">
        <h1 className="text-2xl font-bold text-[#D4AF37]">BuildMate Dealers</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-[#D4AF37] transition">Home</a>
          <a href="#" className="hover:text-[#D4AF37] transition">Products</a>
          <a href="#" className="hover:text-[#D4AF37] transition">About</a>
          <a href="#" className="hover:text-[#D4AF37] transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-[#F5F5F5]">
            Premium Construction Materials for Modern Projects
          </h2>
          <p className="text-[#B0B0B0] mb-6 leading-relaxed">
            We deal in top-quality tiles, marbles, sanitary ware, rods, pipes, and taps.
            Trusted by builders and architects for years.
          </p>
          <Button size="md">
            Explore Products
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=700&q=60"
          alt="Construction Material"
          className="rounded-xl shadow-lg mt-10 md:mt-0 w-full md:w-1/2 border border-[#2E2E2E]"
        />
      </section>

      {/* Products Section */}
      <section className="bg-[#F5F5F5] text-[#1C1C1C] px-10 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Our Top Categories</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Tiles", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a" },
            { name: "Sanitary Ware", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea" },
            { name: "Marbles", img: "https://images.unsplash.com/photo-1581092334655-bc81e3f45b4e" },
            { name: "Rods & Pipes", img: "https://images.unsplash.com/photo-1600294037681-95d59e0a55ce" },
            { name: "Taps & Faucets", img: "https://images.unsplash.com/photo-1584278861924-cb0b9d0d8f6c" },
            { name: "Cement & Bricks", img: "https://images.unsplash.com/photo-1600566752582-6c67a6e2f5c2" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-[#eaeaea]"
            >
              <img
                src={item.img + '?auto=format&fit=crop&w=600&q=60'}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-[#555555] mb-4">
                  Premium quality materials for durable and elegant construction.
                </p>
                <button className="text-[#D4AF37] font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-[#B0B0B0] py-6 text-center border-t border-[#1C1C1C]">
        © 2025 BuildMate Dealers — All Rights Reserved
      </footer>
    </div>
  );
};

export default HomePage;
