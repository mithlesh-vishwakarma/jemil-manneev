import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Truck, Shield, Award, CheckCircle2, Phone, Mail, MapPin, ChevronRight, Hammer, Zap, Users } from 'lucide-react';

const BuildingMaterialsLanding: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block">
                <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                  Trusted by 2,500+ Builders
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Build Your <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Vision</span> With Premium Materials
              </h1>
              <p className="text-xl text-slate-300">
                From foundation to finishing, we supply everything you need to construct excellence. Premium quality, competitive prices, and delivery you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Browse Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-orange-500/30 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-slate-700/50 p-4 rounded-lg backdrop-blur">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span>ISO 9001 Certified Quality</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-slate-700/50 p-4 rounded-lg backdrop-blur">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span>Same-Day Dispatch Available</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-slate-700/50 p-4 rounded-lg backdrop-blur">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span>Bulk Order Discounts</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-slate-700/50 p-4 rounded-lg backdrop-blur">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span>Technical Consultation Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-800/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-10 h-10 text-orange-500 mx-auto" />
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">Complete Range of <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Building Materials</span></h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Everything from foundation to finishing, all under one roof</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === idx
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/50'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                <cat.icon className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === idx ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-orange-500/30">
            <h3 className="text-2xl font-bold mb-6">{categories[activeCategory].name}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {categories[activeCategory].items.map((item, idx) => (
                <div key={idx} className="bg-slate-700/30 p-6 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer group">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">{item}</h4>
                  <p className="text-slate-400 text-sm mb-4">Premium quality, best prices guaranteed</p>
                  <button className="text-orange-500 font-semibold flex items-center group-hover:text-orange-400">
                    View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">Why Builders Choose <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">MANNEEV</span></h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Your success is built on our foundation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Ready to Start Your Next Project?</h2>
              <p className="text-xl text-slate-800 max-w-2xl mx-auto">Get an instant quote and exclusive builder discounts today</p>
              <button className="bg-slate-900 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Request a Quote Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingMaterialsLanding;
