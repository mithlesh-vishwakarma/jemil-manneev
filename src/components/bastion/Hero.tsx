import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-green-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-green-800 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="z-10 md:w-1/2 space-y-8 animate-fadeIn">
        <h1 className="text-2xl md:text-5xl font-bold ">
          Institutional Grade <br />
          Investing Insights <br />
          for Decision <br />
          Makers
        </h1>

        <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-white font-black py-4 px-10 rounded-full text-sm tracking-widest shadow-lg cursor-pointer">
          SUBSCRIBE NOW FOR FREE!!!
        </button>
      </div>

      <div className="z-10 md:w-1/2 flex flex-col items-center justify-center mt-16 md:mt-0 relative">
        {/* Simplified Logo Concept */}
        <div className="relative group">
          <div className="flex flex-col items-center">
            {/* Visual Representation of the Logo */}
            <div className="relative w-48 h-56 md:w-64 md:h-72">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/logoOther.png" alt="logoOther" />
              </div>
            </div>
          </div>

          {/* Floating Envelope */}
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 animate-bounce">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 md:w-40 md:h-40 drop-shadow-xl"
            >
              <rect
                x="10"
                y="30"
                width="80"
                height="50"
                fill="#000080"
                rx="4"
              />
              <path
                d="M10 30 L50 60 L90 30"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <rect x="25" y="10" width="50" height="40" fill="white" rx="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
