
import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-red-600 min-h-[50vh] flex flex-col md:flex-row items-center px-6 md:px-20 py-16 text-white overflow-hidden relative">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative">
            {/* Person Illustration Placeholder */}
            <img 
              src="https://picsum.photos/seed/writing/500/500" 
              alt="Person writing" 
              className="w-80 h-80 rounded-full object-cover border-8 border-red-500 shadow-2xl"
            />
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-8">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          Receive Insight<br />
          Packed Newsletters<br />
          from us every week
        </h2>
        
        <button className="bg-white hover:bg-gray-100 transition-colors text-red-600 font-black py-4 px-10 rounded-full text-sm tracking-widest shadow-lg uppercase">
          SUBSCRIBE NOW FOR FREE!!!
        </button>
      </div>

      {/* Floating Icons decoration */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-80">
          <svg viewBox="0 0 100 100" className="w-32 h-32">
              <circle cx="50" cy="50" r="40" fill="#fbbf24" />
              <path d="M50 20 L50 40 M50 60 L50 80 M20 50 L40 50 M60 50 L80 50" stroke="black" strokeWidth="4" />
              <rect x="35" y="45" width="30" height="10" fill="black" rx="2" />
          </svg>
      </div>
    </section>
  );
};
