// import React from 'react';

const OurPartners = () => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-[#F5F5F5]">
      {/* Navbar - Using Header2 or keeping standalone? Using specific header from comments or Layout? 
          Actually user said "add the menu on the header... showing not found page add the menu". 
          This page likely runs INSIDE the Layout (which has header). 
          So I should NOT render Header/Footer here if Layout already does it. 
          The 'NotFound' returned implying it was empty. 
          I will render the CONTENT. 
      */}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-[#F5F5F5]">
            Our Trusted Partners
          </h2>
          <p className="text-[#B0B0B0] mb-6 leading-relaxed">
            We collaborate with top-quality brands to bring you the best in tiles, marbles, sanitary ware, and more.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=700&q=60"
          alt="Partners"
          className="rounded-xl shadow-lg mt-10 md:mt-0 w-full md:w-1/2 border border-[#2E2E2E]"
        />
      </section>

      {/* Partners List Section (Mock using previous Structure) */}
      <section className="bg-[#F5F5F5] text-[#1C1C1C] px-10 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Brand Partners</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Brand A", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a" },
            { name: "Brand B", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea" },
            { name: "Brand C", img: "https://images.unsplash.com/photo-1581092334655-bc81e3f45b4e" },
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
                  Trusted Partner.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
