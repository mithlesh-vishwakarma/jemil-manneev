import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-[#021e10] text-white overflow-hidden">
      <div className="z-10 md:w-1/2 space-y-8 animate-fadeIn">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Institutional Grade <br />
          Investing Insights <br />
          for Decision <br />
          Makers
        </h1>

        <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-white font-black px-5 py-3 sm:py-4 sm:px-10 rounded-full text-sm tracking-widest shadow-lg cursor-pointer active:scale-95">
          SUBSCRIBE NOW FOR FREE!!!
        </button>
      </div>

      {/* Background Glow */}

      <div className="z-10 md:w-1/2 flex flex-col items-center justify-center mt-16 md:mt-0 relative">
        {/* Simplified Logo Concept */}
        <div className="relative group">
          {/* Visual Representation of the Logo */}

          <div className="w-60 h-60 sm:w-84 sm:h-84 content-center">
            <div className="relative w-48 md:w-64 mx-auto z-50">
              <img src="/images/logoOther.png" alt="logoOther" />
            </div>
            <div className="absolute top-0 w-full h-full bg-white rounded-full blur-2xl opacity-35 pointer-events-none"></div>
            <div className="absolute top-0 -right-8 sm:-right-4 md:-right-14 lg:-right-18 animate-bounce w-22 sm:w-26 md:w-32 lg:w-38">
              <img
                src="/images/PhotoshopExtension_Image.png"
                alt="PhotoshopExtension_Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
