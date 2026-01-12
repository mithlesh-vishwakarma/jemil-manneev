
import React from 'react';

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  isRedHeader?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, image, isRedHeader }) => (
  <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl group transition-all hover:-translate-y-2">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className={`p-8 flex-1 flex flex-col items-center text-center text-white ${isRedHeader ? 'bg-red-600' : 'bg-black'}`}>
      <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-200 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const ReadingTopics: React.FC = () => {
  const topics = [
    {
      title: "Macro Topics",
      description: "Decoding the global shifts impacting your wallet.",
      image: "https://picsum.photos/seed/money/500/500",
      isRedHeader: true
    },
    {
      title: "Company Developments",
      description: "Inside the boardroom: What's changing at top firms.",
      image: "https://picsum.photos/seed/city/500/500",
      isRedHeader: true
    },
    {
      title: "IPO Analysis",
      description: "IPO Watch: Who's ready to launch (and who to avoid).",
      image: "https://picsum.photos/seed/ipo/500/500",
      isRedHeader: true
    },
    {
      title: "Investing Concepts",
      description: "Back to basics: The mental models of smart investing.",
      image: "https://picsum.photos/seed/brain/500/500",
      isRedHeader: false
    },
    {
      title: "Plant Visits Insights",
      description: "From the source: Real-time reports from our site visits.",
      image: "https://picsum.photos/seed/factory/500/500",
      isRedHeader: false
    },
    {
      title: "Business Dynamics",
      description: "How great businesses actually make money.",
      image: "https://picsum.photos/seed/business/500/500",
      isRedHeader: false
    }
  ];

  return (
    <section className="bg-bastion-green py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-white font-black text-center mb-20 tracking-tight">
          What Do You Get To Read?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topics.slice(0, 3).map((topic, i) => <TopicCard key={i} {...topic} />)}
        </div>

        <div className="flex justify-center my-16">
            <button className="bg-white hover:bg-gray-200 transition-colors text-black font-black py-4 px-12 rounded-full text-xs tracking-widest shadow-xl uppercase">
                JOIN THOUSANDS READING IT FOR FREE!!!
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topics.slice(3).map((topic, i) => <TopicCard key={i} {...topic} />)}
        </div>

        <div className="flex justify-center mt-16">
            <button className="bg-white hover:bg-gray-200 transition-colors text-black font-black py-4 px-12 rounded-full text-xs tracking-widest shadow-xl uppercase">
                JOIN THOUSANDS READING IT FOR FREE!!!
            </button>
        </div>
      </div>
    </section>
  );
};
