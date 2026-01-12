import React from "react";

export const ScheduleSection: React.FC = () => {
  return (
    <section className="bg-[#021e10] pt-30 pb-18 px-6 md:pl-16 pr-6 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row justify-center lg:justify-between">
        {/* Left Schedule Card */}
        <div className="bg-[rgb(104,119,112)] max-w-lg rounded-4xl px-3 sm:px-8 pt-7 pb-5 flex flex-col space-y-9 mx-auto">
          <div className="flex items-start gap-2">
            <div className="w-24 sm:w-35 flex items-center justify-center shrink-0">
              <img src="/images/calender.png" alt="calender" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-[#12007B] text-center mb-0.5">
                Wednesday
              </h3>
              <p className="text-white text-xl font-semibold text-center leading-tight">
                Topical updates covering
                <br />
                ongoing market trends,
                <br />
                interesting IPOs and <br />
                current topics
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-24 sm:w-35 flex items-center justify-center shrink-0">
              <img src="/images/calender.png" alt="calender" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-[#12007b] text-center mb-0.5">
                Saturday
              </h3>
              <p className="text-white text-xl font-semibold text-center leading-tight">
                Learning of the Week
                <br />
                covering Timless Investing
                <br />
                Lessons and Building Blocks
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white hover:bg-gray-200 text-black font-black sm:py-4 sm:px-15 px-5 py-3 rounded-full text-md sm:text-lg shadow-lg active:scale-95 hover:scale-105 transition-all cursor-pointer duration-300">
              SUBSCRIBE NOW FOR FREE!!!
            </button>
          </div>
        </div>

        {/* Right Illustration Area */}
          <div className="max-w-152 max-h-116 mx-auto sm:mb-30 xl:mb-auto">
            <img
              src="/images/BoyWithLaptop.png"
              alt="BoyWithLaptop"
              className="object-contain -mt-30 lg:-mt-40"
            />
          </div>
      </div>
    </section>
  );
};
