import React, { useRef } from "react";
import { Award, Shield, Truck, Leaf, CheckCircle2 } from "lucide-react";
import Background from "../assets/background-original.png";
import OurJourneyImg from "../assets/our-journey.png";
import MissionVisionValues from "../components/MissionVisionValues";
import { Link } from "react-router-dom";

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
    <div className="bg-[#0a0a0a]  min-h-screen text-white">
      {/* ---------- Hero Section ---------- */}
      <Section
        id="about-hero"
        className="relative bg-cover bg-center bg-no-repeat py-32 sm:py-40 lg:py-48 text-center overflow-hidden bg-black/40 backdrop-blur-md shadow-lg"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/70 animated-blur -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 relative">
          {/* <div className="inline-block px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg border border-[#D4AF37]/30 mb-6"> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            About <span className="text-[#D4AF37]">MANNEEV</span>
          </h1>
          {/* </div> */}
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto border border-[#D4AF37]/30 p-4">
            We are a trusted construction materials dealer supplying large-scale real estate and infrastructure projects across India, ensuring consistent quality, dependable delivery, and execution certainty at every stage of construction.
          </p>
        </div>
      </Section>

      {/* ---------- Our Story ---------- */}
      <Section
        id="story"
        className="relative py-28 px-6 bg-gradient-to-b from-[#0e0e0e] to-[#151515] overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="space-y-8 flex flex-col justify-center">

            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-[#D4AF37]"></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Our <span className="text-[#D4AF37]">Journey</span>
              </h2>
            </div>

            <p className="leading-relaxed text-lg text-gray-300">
              <span className="font-semibold text-[#D4AF37]">MANNEEV</span> was founded with a clear vision to redefine how construction materials are sourced and delivered for modern real estate and infrastructure projects.
            </p>

            <p className="leading-relaxed text-lg text-gray-300">
              What began as a focused initiative has grown into a trusted materials partner for large residential developments, commercial complexes, industrial facilities, and infrastructure ventures. From high-rise towers to expansive townships, every project is supported through precision-driven procurement and dependable supply systems.
            </p>

            <p className="leading-relaxed text-lg text-gray-300">
              Over time, we have built strategic alliances with leading manufacturers and established a streamlined supply network designed to manage scale, complexity, and demanding timelines.
            </p>

            <div className="bg-[#1C1C1C] p-6 rounded-2xl border border-[#D4AF37]/20 shadow-xl">
              <p className="text-lg font-semibold text-white mb-4">
                We Deals In:
              </p>

              {/* <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Premium-grade construction materials
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Structured procurement for large-scale developments
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Reliable logistics and time-bound delivery
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Technical and execution-level coordination
                </li>
              </ul> */}
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Deals in large-scale high-rise and multi-tower projects
                </li>

                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Deals in integrated township and master-planned developments
                </li>

                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Deals in premium commercial and mixed-use real estate projects
                </li>

                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">✓</span>
                  Deals in major infrastructure and industrial-scale ventures
                </li>
              </ul>

            </div>

            <p className="leading-relaxed text-lg text-gray-300">
              Each milestone reflects our commitment to performance, accountability, and long-term partnerships. As the industry evolves, MANNEEV continues to power landmark projects with quality, consistency, and confidence.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          {/* Premium Image Section */}
          <div className="relative mt-10">

            {/* Gold Glow Behind */}
            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-3xl rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl">

              {/* Image */}
              <img
                src={OurJourneyImg}
                alt="Luxury Real Estate Project"
                className="w-full h-[800px] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Glass Info Card */}
              <div className="absolute bottom-12 left-12 bg-white/5 backdrop-blur-xl 
      border border-[#D4AF37]/30 rounded-2xl p-8 max-w-lg shadow-xl">

                <h3 className="text-2xl font-bold text-white mb-4">
                  Premium Construction & Material Supply
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Delivering high-grade certified materials and executing large-scale
                  residential, commercial, and infrastructure developments with
                  uncompromising quality, structural integrity, and long-term durability.
                </p>

                <div className="mt-6 h-[2px] w-20 bg-[#D4AF37]"></div>
              </div>

            </div>

          </div>







        </div>
      </Section>

      <Section
        id="story"
        className="relative py-28 px-6 bg-gradient-to-b from-[#0e0e0e] to-[#151515] overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0"></div>

        <MissionVisionValues />
      </Section>

      {/* ---------- Core Strengths ---------- */}
      <Section id="strengths" className="py-24 px-6 bg-[#0a0a0a] strengths-bg">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#D4AF37]">Core Strengths</span>
          </h2>
          <p className="text-gray-400">
            Excellence across every aspect of construction supply
          </p>
        </div>

        {/* Circular layout */}
        <div className="max-w-7xl mx-auto relative">
          <div className="circular-container">
            <div className="circular-path">
              <div className="arrow-marker">→</div>
            </div>

            {[
              {
                icon: Award,
                title: "Quality Certified",
                desc: "We partner only with ISI-certified and top-tier brands.",
                position: "card-position-0",
              },
              {
                icon: Truck,
                title: "Efficient Logistics",
                desc: "On-time delivery through our dedicated transport fleet.",
                position: "card-position-1",
              },
              {
                icon: Shield,
                title: "Trusted by Builders",
                desc: "Over 2,500+ professionals rely on our reliability.",
                position: "card-position-2",
              },
              {
                icon: Leaf,
                title: "Sustainability Focus",
                desc: "We prioritize eco-friendly materials and practices.",
                position: "card-position-3",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`neo-card p-6 text-center cursor-pointer w-48 ${item.position}`}
              >
                <div className="card-background bg-[#1C1C1C] border border-[#D4AF37]/20 rounded-2xl shadow-lg hover:border-[#D4AF37] transition-all duration-300 h-full">
                  <div className="p-4">
                    <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto border border-[#D4AF37]/30">
                      <item.icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden flex flex-col items-center gap-6 mt-8">
            <div className="text-[#D4AF37] text-2xl font-bold animate-pulse">
              ↻
            </div>
            <p className="text-gray-500 text-sm">
              Continuous cycle of excellence
            </p>
          </div>
        </div>

        <style>{`
          @keyframes circular-flow {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes highlight-card {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
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
          .circular-path {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 70%;
            height: 70%;
            border: 2px solid #D4AF37;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: circular-flow 8s linear infinite;
            opacity: 0.3;
          }
          .arrow-marker {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            color: #D4AF37;
            font-size: 24px;
            font-weight: bold;
          }
          @media (max-width: 1024px) {
            .circular-container { aspect-ratio: auto; height: auto; }
            .card-position-0, .card-position-1, .card-position-2, .card-position-3 { position: static; transform: none; margin: 1rem auto; animation: none; }
            .circular-path { display: none; }
          }
        `}</style>
      </Section>

      {/* ---------- Team ---------- */}
      <Section id="team" className="py-24 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Meet Our <span className="text-[#D4AF37]">Leadership</span> Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A team of passionate builders, engineers, and innovators driving
            MANNEEV’s mission forward.
          </p>
        </div>

        <div className="w-full flex justify-center px-4">
          <div
            className="
    flex 
    flex-wrap 
    justify-center 
    gap-10 
    lg:gap-20
    max-w-6xl
    w-full
  "
          >
            {[
              {
                name: "Amit Nakrani",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400",
              },
              // {
              //   name: "Aisha Patel",
              //   role: "Head of Operations",
              //   img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400",
              // },
              // {
              //   name: "Arun Kumar",
              //   role: "Technical Director",
              //   img: "https://images.unsplash.com/photo-1603415526960-f7e0328b1f67?w=400",
              // },
              // {
              //   name: "Sana Verma",
              //   role: "Customer Relations Lead",
              //   img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
              // },
            ].map((member, idx) => (
              <div
                key={idx}
                className="
          bg-[#1C1C1C]
          p-4
          rounded-2xl
          text-center
          cursor-pointer
          transition-all
          duration-500
          hover:shadow-2xl
          border border-transparent
          hover:border-[#D4AF37]/30
          w-full
          max-w-[260px]
        "
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="
            w-full aspect-square 
            mx-auto 
            rounded-2xl 
            object-cover 
            mb-4 
            border-2 
            border-[#D4AF37]/30 
            shadow-md
            grayscale hover:grayscale-0 transition-all duration-500
          "
                />
                <h3 className="text-white font-bold text-xl mt-4">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section
        id="cta"
        className="py-24 px-6 bg-[#00000] text-center relative overflow-hidden border-t border-[#D4AF37]/20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl opacity-20" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Trust, One Project at a Time
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let’s collaborate to make your next project smoother, faster, and
            more sustainable.
          </p>
          <Link
            to="/contact"
            className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#c5a028] transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
          >
            Get in Touch <CheckCircle2 className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
