import React from "react";

export const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#d40000] min-h-screen flex flex-wrap px-4 sm:px-10 py-16 text-white overflow-hidden relative">
      <div className="flex justify-center lg:justify-start lg:w-fit w-full">
        <div className="relative max-w-120 -top-1 ">
          {/* Person Illustration Placeholder */}
          <img src="/images/WritingLady.png" alt="WritingLady" className="" />
        </div>
      </div>

      <div className="sm:px-12 mt-8 sm:mt-0 lg:space-y-14 space-y-6 justify-center lg:w-fit w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-center md:leading-tight lg:leading-18">
          Receive Insight
          <br />
          Packed Newsletters
          <br />
          from us every week
        </h2>

        <div className="text-center">
          <button className="bg-white hover:bg-gray-100 text-black font-black sm:text-lg text-md px-5 py-3 sm:py-4 sm:px-12 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
            SUBSCRIBE NOW FOR FREE!!!
          </button>
        </div>
      </div>

      {/* Floating Icons decoration */}
      <div className="absolute bottom-0 lg:-bottom-8 right-0 hidden md:block">
        <img
          src="/images/BulbWithMessage.png"
          alt="BulbWithMessage"
          className="md:max-w-40 lg:max-w-60"
        />
      </div>
    </section>
  );
};
