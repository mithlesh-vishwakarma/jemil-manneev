import React, { useRef } from "react";
import {
  Building2,
  Award,
  Shield,
  Truck,
  HeartHandshake,
  Leaf,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Background from "../assets/hero-bg.png";

const AboutUs: React.FC = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

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

      {/* ---------- Hero Section ---------- */}
      <Section
        id="about-hero"
        className="relative bg-cover bg-center bg-no-repeat py-32 sm:py-40 lg:py-48 text-center overflow-hidden"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-white/40 animated-blur -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 relative">
          {/* Frosted heading background */}
          <div className="inline-block px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/20 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              About <span className="text-gradient">MANNEEV</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            We are redefining how construction materials reach your site — combining
            quality, trust, and innovation to build the future together.
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
              began as a small team determined to connect top manufacturers with construction professionals seamlessly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve thousands of builders, delivering premium materials, trusted logistics, and unmatched technical support — all powered by passion, precision, and people.
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
      <Section id="mission" className="py-24 px-6 bg-gradient-to-br from-white via-purple-50 to-white mission-bg">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Mission</span>, Vision & Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The foundation of MANNEEV stands on strong principles that guide every decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
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
            <div key={idx} className="glass-card p-10 rounded-2xl text-center text-gray-800">
              <div className="bg-purple-100 w-16 h-16 mb-5 rounded-xl flex items-center justify-center mx-auto shadow-inner">
                <item.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Core Strengths ---------- */}
      <Section id="strengths" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50 strengths-bg">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient">Core Strengths</span>
          </h2>
          <p className="text-gray-600">
            Excellence across every aspect of construction supply
          </p>
        </div>

        {/* Circular loop graph animation */}
        <div className="max-w-7xl mx-auto relative">
          <div className="circular-container">
            {/* Circular path */}
            <div className="circular-path">
              <div className="arrow-marker">→</div>
            </div>

            {/* Cards positioned in circle */}
            {[
              { icon: Award, title: "Quality Certified", desc: "We partner only with ISI-certified and top-tier brands.", position: "card-position-0" },
              { icon: Truck, title: "Efficient Logistics", desc: "On-time delivery through our dedicated transport fleet.", position: "card-position-1" },
              { icon: Shield, title: "Trusted by Builders", desc: "Over 2,500+ professionals rely on our reliability.", position: "card-position-2" },
              { icon: Leaf, title: "Sustainability Focus", desc: "We prioritize eco-friendly materials and practices.", position: "card-position-3" },
            ].map((item, idx) => (
              <div key={idx} className={`neo-card p-6 text-center cursor-pointer w-48 ${item.position}`}>
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile linear layout */}
          <div className="lg:hidden flex flex-col items-center gap-6 mt-8">
            <div className="text-purple-400 text-2xl font-bold animate-pulse">↻</div>
            <p className="text-gray-500 text-sm">Continuous cycle of excellence</p>
          </div>

          <style>{`
            @keyframes circular-flow {
              0% { transform: translate(-50%, -50%) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes highlight-card {
              0%, 100% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
              25%, 50%, 75% { transform: scale(1.05); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
            }
            .circular-container {
              position: relative;
              width: 100%;
              max-width: 800px;
              margin: 0 auto;
              aspect-ratio: 1;
            }
            .card-position-0 { position: absolute; top: 0; left: 50%; transform: translateX(-50%); animation: highlight-card 4s infinite 0s; }
            .card-position-1 { position: absolute; top: 50%; right: 0; transform: translateY(-50%); animation: highlight-card 4s infinite 1s; }
            .card-position-2 { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); animation: highlight-card 4s infinite 2s; }
            .card-position-3 { position: absolute; top: 50%; left: 0; transform: translateY(-50%); animation: highlight-card 4s infinite 3s; }
            .card-background { position: absolute; inset: 0; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; }
            .card-content { position: relative; z-index: 1; }
            .strengths-bg {
              position: relative;
            }
            .strengths-bg::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image:
                radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
              pointer-events: none;
            }
            .mission-bg {
              position: relative;
            }
            .mission-bg::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image:
                radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.25) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 40%);
              pointer-events: none;
            }
            .circular-path {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 70%;
              height: 70%;
              border: 2px solid #a855f7;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              animation: circular-flow 8s linear infinite;
            }
            .arrow-marker {
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              color: #a855f7;
              font-size: 24px;
              font-weight: bold;
            }
            @media (max-width: 1024px) {
              .circular-container { aspect-ratio: auto; height: auto; }
              .card-position-0, .card-position-1, .card-position-2, .card-position-3 { position: static; transform: none; margin: 1rem auto; animation: none; }
              .circular-path { display: none; }
            }
          `}</style>
        </div>
      </Section>

      {/* ---------- Team Section ---------- */}
      <Section id="team" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Meet Our <span className="text-gradient">Leadership</span> Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A team of passionate builders, engineers, and innovators driving MANNEEV’s mission forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-4 justify-items-center gap-0">
          {[
            { name: "Rajesh Kumar", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400" },
            { name: "Aisha Patel", role: "Head of Operations", img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400" },
            { name: "Arun Kumar", role: "Technical Director", img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400" },
            { name: "Sana Verma", role: "Customer Relations Lead", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
          ].map((member, idx) => (
            <div
              key={idx}
              className=" bg-purple-50  p-4 rounded-2xl transition-all duration-500 text-center cube-card cursor-pointer hover:shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-3 border-4 border-white shadow-md"
              />
              <h3 className="text-base font-bold text-gray-900 text-center">{member.name}</h3>
              <p className="text-purple-600 font-medium text-center text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <style>{`
          .cube-card {
            position: relative;
            overflow: hidden;
          }
          .cube-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05));
            transform: translateZ(-1px);
            transition: transform 0.5s ease;
          }
          .cube-card:hover::before {
            transform: translateZ(10px) rotateX(5deg) rotateY(5deg);
          }
          .cube-card:hover {
            transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05);
          }
        `}</style>
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
