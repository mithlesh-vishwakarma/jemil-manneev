import React from "react";

export const SectorInsights: React.FC = () => {
  return (
    <section className="bg-gray-900 py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-96 h-96">
          <circle cx="200" cy="200" r="150" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 flex flex-col space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Decode
            <br />
            Booming
            <br />
            sectors
            <br />
            with us
          </h2>
          <button className="bg-white hover:bg-gray-200 transition-colors text-black font-black py-4 px-10 rounded-full text-xs tracking-widest self-start uppercase">
            SUBSCRIBE NOW
            <br />
            FOR FREE!!!
          </button>
          <div className="mt-8">
            <img
              src="https://picsum.photos/seed/group/400/400"
              alt="People studying"
              className="rounded-3xl shadow-2xl opacity-90 border-4 border-gray-700"
            />
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sector Card 1: BESS */}
          <div className="relative group overflow-hidden rounded-[2rem] border-2 border-gray-700 bg-gray-800 transition-all hover:border-yellow-500">
            <div className="h-full flex flex-col">
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start">
                  <span className="text-white text-3xl font-black tracking-tighter">
                    BASTION
                  </span>
                  <span className="text-yellow-400 font-black text-4xl">
                    BESS
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">
                  BACKING UP THE RENEWABLES
                </p>
              </div>
              <div className="px-8 flex-1">
                <img
                  src="https://picsum.photos/seed/energy/400/300"
                  alt="Renewables"
                  className="rounded-2xl w-full h-48 object-cover my-4 grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-8 pt-4">
                <p className="text-yellow-400 text-lg font-black uppercase tracking-tight text-center">
                  THE MISSING LINK IN THE CLEAN ENERGY EQUATION
                </p>
              </div>
            </div>
          </div>

          {/* Sector Card 2: Semiconductors */}
          <div className="relative group overflow-hidden rounded-[2rem] border-2 border-gray-700 bg-gray-800 transition-all hover:border-blue-500">
            <div className="h-full flex flex-col">
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start">
                  <span className="text-white text-3xl font-black tracking-tighter">
                    BASTION
                  </span>
                </div>
                <p className="text-yellow-400 font-black text-4xl mt-2">
                  SEMICONDUCTORS
                </p>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">
                  INSIDE THE NANO WORLD
                </p>
              </div>
              <div className="px-8 flex-1 flex justify-center py-4">
                <div className="w-full h-48 rounded-2xl bg-blue-900 flex items-center justify-center p-10 group-hover:bg-blue-800 transition-colors">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-white"
                  >
                    <rect
                      x="20"
                      y="20"
                      width="60"
                      height="60"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <rect
                      x="35"
                      y="35"
                      width="30"
                      height="30"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-8 pt-4">
                <p className="text-yellow-400 text-lg font-black uppercase tracking-tight text-center">
                  THE UNSEEN HEARTBEAT BEHIND TODAY'S DIGITAL WORLD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
