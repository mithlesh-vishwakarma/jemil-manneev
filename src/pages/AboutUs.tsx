import { useEffect, useRef, useState } from "react";
import {
  Users,
  Building2,
  Award,
  Shield,
  Truck,
  HeartHandshake,
  Factory,
  Leaf,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Background from "../assets/hero-bg.png";

const AboutUs: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  // Intersection observer for fade-in sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const Section = ({
    id,
    children,
    className = "",
    style,
  }: {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <section
      id={id}
      ref={setSectionRef(id)}
      className={`${className}`}
      style={style}
    >
      {children}
    </section>
  );

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .text-gradient { color: #a78bfa; }
      `}</style>

      {/* ---------- Hero Section ---------- */}
      <Section
        id="about-hero"
        className="relative bg-cover bg-center bg-no-repeat py-32 sm:py-40 lg:py-48 text-center overflow-hidden"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] -z-10"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">MANNEEV</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            We are redefining how construction materials reach your site —
            combining quality, trust, and innovation to build the future together.
          </p>
        </div>
      </Section>

      {/* ---------- Our Story ---------- */}
      <Section id="story" className="py-24 px-6 bg-purple-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to simplify material procurement for builders,
              <span className="font-semibold text-purple-600"> MANNEEV </span>
              began as a small team determined to connect top manufacturers with
              construction professionals seamlessly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve thousands of builders, delivering premium
              materials, trusted logistics, and unmatched technical support — all
              powered by passion, precision, and people.
            </p>
          </div>
          <div className="relative animate-float">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600"
                alt="Construction team"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- Mission, Vision, Values ---------- */}
      <Section id="mission" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Mission</span>, Vision & Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The foundation of MANNEEV stands on strong principles that guide every decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {[
            {
              icon: Building2,
              title: "Mission",
              desc: "To empower builders with quality materials, timely delivery, and transparent pricing.",
            },
            {
              icon: Sparkles,
              title: "Vision",
              desc: "To be the most trusted and technologically advanced supplier in the construction ecosystem.",
            },
            {
              icon: HeartHandshake,
              title: "Values",
              desc: "Integrity, reliability, and customer-first approach — building relationships that last.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-purple-50 aspect-square flex flex-col justify-center items-center text-center
                         p-6 rounded-lg border-2 border-purple-200 
                         hover:scale-105 hover:shadow-2xl hover:border-purple-400 
                         transition-all duration-300"
            >
              <div className="bg-purple-100 w-14 h-14 mb-5 rounded-lg flex items-center justify-center">
                <item.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Core Strengths ---------- */}
      <Section id="strengths" className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient">Core Strengths</span>
          </h2>
          <p className="text-gray-600">
            Excellence across every aspect of construction supply
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {[
            { icon: Award, title: "Quality Certified", desc: "We partner only with ISI-certified and top-tier brands." },
            { icon: Truck, title: "Efficient Logistics", desc: "On-time delivery through our dedicated transport fleet." },
            { icon: Shield, title: "Trusted by Builders", desc: "Over 2,500+ professionals rely on our reliability." },
            { icon: Leaf, title: "Sustainability Focus", desc: "We prioritize eco-friendly materials and practices." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white aspect-square flex flex-col justify-center items-center text-center
                         p-6 rounded-lg border-2 border-purple-200 
                         hover:border-purple-400 hover:shadow-xl 
                         transition-all transform hover:-translate-y-2 
                         cursor-pointer group relative"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-5 mx-auto group-hover:scale-125 transition-all">
                <item.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-base font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Team Section ---------- */}
      <Section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Leadership</span> Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A team of passionate builders, engineers, and innovators driving MANNEEV’s mission forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Rohit Manneev", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400" },
            { name: "Aisha Patel", role: "Head of Operations", img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400" },
            { name: "Arun Kumar", role: "Technical Director", img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400" },
            { name: "Sana Verma", role: "Customer Relations Lead", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-purple-50 rounded-2xl p-6 border border-purple-200 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-md"
              />
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-purple-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section id="cta" className="py-24 px-6 bg-purple-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Trust, One Project at a Time
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let’s collaborate to make your next project smoother, faster, and more sustainable.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
          >
            Get in Touch <CheckCircle2 className="ml-2 w-5 h-5" />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
