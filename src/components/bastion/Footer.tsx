import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bastion-green py-24 px-6 md:px-20 text-white overflow-hidden relative">
      {/* Background Star Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -rotate-12 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[40rem] h-[40rem] text-white">
          <path
            fill="currentColor"
            d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-12 mb-16 lg:mb-0">
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Begin your
            <br />
            access to crisp
            <br />
            Investing
            <br />
            Insights
          </h2>

          <button className="bg-white hover:bg-gray-200 transition-colors text-black font-black py-4 px-12 rounded-full text-xs tracking-widest shadow-xl uppercase">
            SUBSCRIBE NOW FOR FREE!!!
          </button>

          <div className="space-y-6">
            <h4 className="text-red-600 font-black text-2xl uppercase tracking-wider">
              CONNECT WITH US
            </h4>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-4 hover:text-red-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  Twitter: @bastionresearch
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 hover:text-red-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  YouTube: Bastion Research
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 hover:text-red-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  Linkedin: Bastion Research
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-md">
            <img
              src="https://picsum.photos/seed/studying/600/600"
              alt="Investing Insights"
              className="w-full h-full object-cover rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bastion Research. All rights reserved.
      </div>
    </footer>
  );
};
