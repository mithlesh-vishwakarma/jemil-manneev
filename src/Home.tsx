import { useState, useEffect } from 'react';
import { ArrowRight, Building2, Truck, Shield, Award, CheckCircle2, Phone, ChevronRight, Hammer, Zap, Users, Sparkles } from 'lucide-react';

import Background from './assets/hero-bg2.png';

const BuildingMaterialsLanding = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = [
    { name: 'Cement & Concrete', items: ['Portland Cement', 'Ready-Mix Concrete', 'Concrete Blocks'], icon: Building2 },
    { name: 'Steel & Rebar', items: ['TMT Bars', 'Structural Steel', 'Mesh & Wire'], icon: Shield },
    { name: 'Bricks & Blocks', items: ['Clay Bricks', 'AAC Blocks', 'Fly Ash Bricks'], icon: Hammer },
    { name: 'Hardware & Tools', items: ['Power Tools', 'Hand Tools', 'Safety Equipment'], icon: Zap }
  ];

  const stats = [
    { value: '15K+', label: 'Projects Completed', icon: Building2 },
    { value: '2,500+', label: 'Active Builders', icon: Users },
    { value: '24/7', label: 'Support Available', icon: Phone },
    { value: '50+', label: 'Product Categories', icon: Award }
  ];

  const benefits = [
    { title: 'Premium Quality Materials', desc: 'ISI certified products from top manufacturers', icon: Award },
    { title: 'On-Time Delivery', desc: 'Fleet of trucks ensuring timely site delivery', icon: Truck },
    { title: 'Competitive Pricing', desc: 'Bulk discounts and flexible payment terms', icon: CheckCircle2 },
    { title: 'Technical Support', desc: 'Expert guidance from our engineering team', icon: Shield }
  ];

  const FloatingElement = ({ delay, size }) => (
    <div
      className={`absolute rounded-full opacity-40 blur-3xl animate-pulse`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        background: 'linear-gradient(135deg, #c084fc, #a78bfa)',
      }}
    />
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .text-gradient {
          background: linear-gradient(135deg, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <header />

      {/* Hero Section with Background */}
      <section
        className="relative pt-44 pb-24 px-6 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {/* Overlay (optional, makes text more readable) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-0">
          <FloatingElement delay={0} size="300px" style={{ top: '10%', left: '5%' }} />
          <FloatingElement delay={0.5} size="400px" style={{ top: '20%', right: '10%' }} />
          <FloatingElement delay={1} size="250px" style={{ bottom: '10%', left: '20%' }} />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(0deg, transparent 24%, rgba(168, 139, 250, .05) 25%, rgba(168, 139, 250, .05) 26%, transparent 27%, transparent 74%, rgba(168, 139, 250, .05) 75%, rgba(168, 139, 250, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 139, 250, .05) 25%, rgba(168, 139, 250, .05) 26%, transparent 27%, transparent 74%, rgba(168, 139, 250, .05) 75%, rgba(168, 139, 250, .05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>


        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block animate-slideUp" style={{ animationDelay: '0.1s' }}>
                <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-300 flex items-center space-x-2 w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Trusted by 2,500+ Builders</span>
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                Build Your <span className="text-gradient">Vision</span> With <span className="text-amber-500">Premium </span>Materials
              </h1>

              <p className="text-xl text-gray-600 max-w-lg animate-slideUp" style={{ animationDelay: '0.3s' }}>
                From foundation to finishing, we supply everything you need to construct excellence. Premium quality, competitive prices, and delivery you can count on.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <button className="bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Explore Collections
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white px-8 py-4 rounded-xl border-1 border-purple-600 font-semibold text-lg text-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Get A Quote

                </button>
              </div>
            </div>

            <div className="relative hidden md:flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl animate-pulse" />
              <div className="relative z-10 animate-float">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 backdrop-blur-xl">
                  <div className="space-y-4">
                    {[
                      'ISO 9001 Certified Quality',
                      'Same-Day Dispatch Available',
                      'Bulk Order Discounts',
                      'Technical Consultation Free'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all cursor-pointer transform hover:scale-105">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-3 p-8 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Complete Range of <span className="text-gradient">Building Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything from foundation to finishing, all under one roof</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${activeCategory === idx
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-transparent'
                  }`}
              >
                <cat.icon className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === idx ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-purple-200 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">{categories[activeCategory].name}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {categories[activeCategory].items.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-lg transition-all cursor-pointer group border border-purple-100 hover:border-purple-300">
                  <CheckCircle2 className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{item}</h4>
                  <p className="text-gray-600 text-sm mb-4">Premium quality, best prices guaranteed</p>
                  <button className="text-purple-600 font-semibold flex items-center group-hover:text-pink-600 transition-colors">
                    View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Why Builders Choose <span className="text-gradient">MANNEEV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your success is built on our foundation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredBenefit(idx)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="bg-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer group"
              >
                <div className={`bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${hoveredBenefit === idx ? 'scale-110' : ''}`}>
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Start Your Next Project?</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Get an instant quote and exclusive builder discounts today</p>
              <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Request a Quote Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer />
    </div>
  );
};

export default BuildingMaterialsLanding;