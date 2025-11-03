import { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowRight,
  Building2,
  Truck,
  Shield,
  Award,
  CheckCircle2,
  Phone,
  ChevronRight,
  Hammer,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Background1 from "./assets/background-original.png";
import Background2 from "./assets/bg-main (2).webp";

// ---------- Floating Element ----------
type FloatingElementProps = {
  delay: number;
  size: string;
  style?: React.CSSProperties;
};

const FloatingElement: React.FC<FloatingElementProps> = ({
  delay,
  size,
  style,
}) => (
  <div
    className="absolute rounded-full opacity-40 blur-3xl animate-pulse"
    style={{
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      background: "#a78bfa",
      ...style,
    }}
  />
);

// ---------- Main Component ----------
const BuildingMaterialsLanding: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const benefitsRef = useRef<HTMLElement>(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [statsVisible, setStatsVisible] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const stats = useMemo(() => [
    { value: "15K+", label: "Projects Completed", icon: Building2 },
    { value: "2,500+", label: "Active Builders", icon: Users },
    { value: "24/7", label: "Support Available", icon: Phone },
    { value: "50+", label: "Product Categories", icon: Award },
  ], []);

  const categories = [
    {
      name: "Cement & Concrete",
      items: [
        { name: "Portland Cement", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" },
        { name: "Ready-Mix Concrete", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" },
        { name: "Concrete Blocks", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" }
      ],
      icon: Building2,
    },
    {
      name: "Steel & Rebar",
      items: [
        { name: "TMT Bars", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
        { name: "Structural Steel", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
        { name: "Mesh & Wire", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop" }
      ],
      icon: Shield,
    },
    {
      name: "Bricks & Blocks",
      items: [
        { name: "Clay Bricks", image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=300&fit=crop" },
        { name: "AAC Blocks", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" },
        { name: "Fly Ash Bricks", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" }
      ],
      icon: Hammer,
    },
    {
      name: "Hardware & Tools",
      items: [
        { name: "Power Tools", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop" },
        { name: "Hand Tools", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop" },
        { name: "Safety Equipment", image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop" }
      ],
      icon: Zap,
    },
  ];

  // Benefits section intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    const currentRef = benefitsRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const currentRef = statsRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProductsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    const currentRef = productsRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (statsVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = duration / steps;

      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        const stepValue = targetValue / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.floor(stepValue * currentStep), targetValue);
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = currentValue;
            return newStats;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, increment);
      });
    }
  }, [statsVisible, stats]);

  const benefits = [
    {
      title: "Premium Quality Materials",
      desc: "ISI certified products from top manufacturers",
      icon: Award,
    },
    {
      title: "On-Time Delivery",
      desc: "Fleet of trucks ensuring timely site delivery",
      icon: Truck,
    },
    {
      title: "Competitive Pricing",
      desc: "Bulk discounts and flexible payment terms",
      icon: CheckCircle2,
    },
    {
      title: "Technical Support",
      desc: "Expert guidance from our engineering team",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen  overflow-hidden">
      {/* ---------- CSS Animations ---------- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes staggerFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }
        .animate-staggerFade {
          animation: staggerFade 0.6s ease-out forwards;
        }
        .text-gradient {
          color: #a78bfa;
        }
      `}</style>

      {/* ---------- Header Placeholder ---------- */}
      <header />

      {/* ---------- Hero Section ---------- */}
      <section
        className="relative pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background1})`, backgroundSize: 'cover' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <FloatingElement delay={0} size="200px" style={{ top: "10%", left: "5%" }} />
          <FloatingElement delay={0.5} size="300px" style={{ top: "20%", right: "10%" }} />
          <FloatingElement delay={1} size="150px" style={{ bottom: "10%", left: "20%" }} />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(168, 139, 250, .05) 25%, rgba(168, 139, 250, .05) 26%, transparent 27%, transparent 74%, rgba(168, 139, 250, .05) 75%, rgba(168, 139, 250, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 139, 250, .05) 25%, rgba(168, 139, 250, .05) 26%, transparent 27%, transparent 74%, rgba(168, 139, 250, .05) 75%, rgba(168, 139, 250, .05) 76%, transparent 77%, transparent)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-block animate-slideUp mx-auto lg:mx-0" style={{ animationDelay: "0.1s" }}>
                <span className="bg-purple-100 text-purple-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-purple-300 flex items-center space-x-2 w-fit">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Trusted by 2,500+ Builders</span>
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                Build Your <span className="text-gradient">Vision</span> With{" "}
                <span className="text-amber-500">Premium </span>Materials
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-white max-w-lg mx-auto lg:mx-0 animate-slideUp"
                style={{ animationDelay: "0.3s" }}
              >
                From foundation to finishing, we supply everything you need to
                construct excellence. Premium quality, competitive prices, and
                delivery you can count on.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-white hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group cursor-pointer">
                    Explore Collections
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-purple-600 font-semibold text-base sm:text-lg text-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group cursor-pointer">
                    Get A Quote
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side Floating Cards */}
            <div className="relative hidden lg:flex items-center justify-center mt-8 lg:mt-0">
              <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse" />
              <div className="relative z-10 animate-float">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-100 backdrop-blur-xl">
                  <div className="space-y-4">
                    {[
                      "ISO 9001 Certified Quality",
                      "Same-Day Dispatch Available",
                      "Bulk Order Discounts",
                      "Technical Consultation Free",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all cursor-pointer transform hover:scale-105"
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section
        ref={statsRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-purple-50 transition-all duration-1000 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center space-y-3 p-6 sm:p-8 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-300/50 group cursor-pointer"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                  animation: statsVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-purple-300/50">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                  {stat.value.includes('+') ? `${animatedStats[idx]}+` :
                   stat.value.includes('K') ? `${animatedStats[idx]}K` :
                   stat.value.includes('M') ? `${animatedStats[idx]}M` :
                   animatedStats[idx]}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------- Products Section ------------- */}
      <section
        ref={productsRef}
        id="products"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Background2})`, backgroundSize: 'cover' }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/90 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 space-y-4 transition-all duration-1000 ${
              productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-bounceIn"
              style={{ animationDelay: productsVisible ? '0.2s' : '0s' }}
            >
              Complete Range of <span className="text-gradient">Building Materials</span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slideInLeft"
              style={{ animationDelay: productsVisible ? '0.4s' : '0s' }}
            >
              Everything from foundation to finishing, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 sm:p-6 rounded-2xl text-left transition-all duration-500 transform hover:scale-110 hover:rotate-1 hover:shadow-xl relative overflow-hidden ${
                  activeCategory === idx
                    ? "bg-purple-600 text-white shadow-2xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-transparent hover:border-purple-300"
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animation: productsVisible ? 'slideInLeft 0.8s ease-out forwards' : 'none',
                  backgroundImage: activeCategory === idx ? "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)" : 'none',
                  backgroundSize: activeCategory === idx ? "10px 10px" : 'auto',
                  backgroundPosition: activeCategory === idx ? "0 0, 0 5px, 5px -5px, -5px 0px" : 'auto'
                }}
              >
                <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-base sm:text-lg mb-2">{cat.name}</h3>
                <ChevronRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    activeCategory === idx ? "rotate-90 scale-110" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            className={`bg-white p-6 sm:p-8 rounded-3xl border-2 border-purple-200 shadow-xl transition-all duration-1000 ${
              productsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ animationDelay: productsVisible ? '0.6s' : '0s' }}
          >
            <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(45deg, #a78bfa 25%, transparent 25%), linear-gradient(-45deg, #a78bfa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #a78bfa 75%), linear-gradient(-45deg, transparent 75%, #a78bfa 75%)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
                }}
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 animate-slideInRight relative z-10 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200">
                {categories[activeCategory].name}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categories[activeCategory].items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-purple-50 p-6 sm:p-8 rounded-2xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 cursor-pointer group border border-purple-100 hover:border-purple-400 transform hover:-translate-y-2 hover:rotate-1 overflow-hidden"
                  style={{
                    animationDelay: `${idx * 0.15}s`,
                    animation: productsVisible ? 'staggerFade 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0  bg-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Premium quality, best prices guaranteed
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center group-hover:text-pink-600 transition-all duration-300 group-hover:scale-105">
                    View Details{" "}
                    <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* ---------- Benefits Section ---------- */}
      <section
        ref={benefitsRef}
        className="py-24 px-6 bg-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 animate-slideInUp"
              style={{ animationDelay: benefitsVisible ? '0.2s' : '0s' }}
            >
              Why Builders Choose <span className="text-gradient">MANNEEV</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInUp"
              style={{ animationDelay: benefitsVisible ? '0.4s' : '0s' }}
            >
              Your success is built on our foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredBenefit(idx)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`bg-white p-8 pt-16 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group relative ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${idx * 0.15 + 0.6}s`,
                  animation: benefitsVisible ? 'slideInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div
                  className={`bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 absolute -top-10 left-1/2 transform -translate-x-1/2 ${
                    hoveredBenefit === idx ? "scale-125 animate-float" : "animate-float"
                  }`}
                >
                  <benefit.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA Section ---------- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Get an instant quote and exclusive builder discounts today
              </p>
              <Link to="/contact">
                <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Request a Quote Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer Placeholder ---------- */}
      <footer />
    </div>
  );
};

export default BuildingMaterialsLanding;
