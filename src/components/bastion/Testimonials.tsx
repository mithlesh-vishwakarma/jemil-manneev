
import React from 'react';

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, quote }) => (
  <div className="bg-[#b9d6e8] rounded-[2rem] p-10 flex flex-col md:flex-row gap-8 shadow-lg">
    <div className="md:w-1/3 flex flex-col">
        <h4 className="text-2xl font-black text-gray-900">{name}</h4>
        <p className="text-gray-700 font-bold mt-2 leading-tight uppercase text-sm">{title}</p>
    </div>
    <div className="md:w-2/3">
        <p className="text-gray-800 text-lg leading-relaxed">{quote}</p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Krishna Appala",
      title: "Fundmanager at Capital Mind PMS",
      quote: "I have known Navid and the Bastion team for many years now, and they have been truly stupendous throughout. In a world filled with surface-level commentary, they are the ones I genuinely look up to for core, fundamental research."
    },
    {
      name: "Siddharth Mandalaywala",
      title: "Fundmanager at Concept Investwell PMS",
      quote: "Bastion Research has truly set a high benchmark in the field of equity research and market intelligence. Their deep-dive analyses, consistent accuracy, and forward-looking insights make them stand out in a crowded space."
    },
    {
      name: "Ashish Kumar Sahu",
      title: "Subscriber, Bastion CORE",
      quote: "Your research is very in-depth, and I typically prioritize reading it as soon as it is published. I appreciate your research, which was published at a very early stage when no one else had recognized its potential."
    }
  ];

  return (
    <section className="bg-red-400 py-24 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/4 flex flex-col space-y-12">
                <h2 className="text-5xl font-black text-white leading-tight">
                    What our<br />Readers<br />Say...
                </h2>
                <div className="flex gap-4">
                    <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"></path></svg>
                    </div>
                    <div className="bg-red-600 p-4 rounded-full shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="lg:w-3/4 flex flex-col gap-8">
                {reviews.map((rev, i) => <Testimonial key={i} {...rev} />)}
            </div>
        </div>
    </section>
  );
};
