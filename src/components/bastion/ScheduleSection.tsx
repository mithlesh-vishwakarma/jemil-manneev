import React from "react";

export const ScheduleSection: React.FC = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Schedule Card */}
        <div className="bg-[#2d2d2d] rounded-[3rem] p-10 md:p-16 md:w-1/2 flex flex-col space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-2">
                Wednesday
              </h3>
              <p className="text-gray-300 text-lg">
                Topical updates covering ongoing market trends, interesting IPOs
                and current topics
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-blue-400 mb-2">
                Saturday
              </h3>
              <p className="text-gray-300 text-lg">
                Learning of the Week covering Timeless Investing Lessons and
                Building Blocks
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-white hover:bg-gray-200 transition-colors text-black font-black py-4 px-10 rounded-full text-xs tracking-widest shadow-lg uppercase">
              SUBSCRIBE NOW FOR FREE!!!
            </button>
          </div>
        </div>

        {/* Right Illustration Area */}
        <div className="md:w-1/2 flex justify-center items-center relative py-20">
          {/* Working Person Overlay */}
          <div className="absolute -bottom-10 left-0 md:left-10 z-20">
            <img
              src="/images/BoyWithLaptop.png"
              alt="BoyWithLaptop"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
