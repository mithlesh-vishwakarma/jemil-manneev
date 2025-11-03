
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Background from "../assets/bg-main (2).webp";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactDetails = [
    { icon: Phone, title: "Call Us", info: "+91 98765 43210", sub: "Mon–Sat, 9AM–7PM" },
    { icon: Mail, title: "Email Us", info: "jemil.workspace@gmail.com", sub: "Replies within 24 hours" },
    { icon: Clock, title: "Working Hours", info: "Mon–Sat: 9AM–7PM", sub: "Sunday: Closed" },
  ];

  const visitUsDetail = { icon: MapPin, title: "Visit Us", info: "Shop No 13,Dattani park building no 1 Opp Gokul Concord Tower, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101", sub: "Kandivali East, Mumbai" };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 animate-fadeUp">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you need a quote, product information, or expert guidance — our team is just a message away.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {contactDetails.map((c, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex items-center ${
                  visible ? "animate-fadeUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 animate-float shrink-0">
                  <c.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-800 font-semibold">{c.info}</p>
                  <p className="text-gray-500 text-sm">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div
              className={`bg-white p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex items-center ${
                visible ? "animate-fadeUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.45s" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6 animate-float shrink-0">
                <visitUsDetail.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{visitUsDetail.title}</h3>
                <p className="text-gray-800 font-semibold">{visitUsDetail.info}</p>
                <p className="text-gray-500 text-sm">{visitUsDetail.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 bg-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-purple-100 backdrop-blur-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
            Send Us a <span className="text-gradient">Message</span>
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-4 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="p-4 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="p-4 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all sm:col-span-2"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="p-4 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all sm:col-span-2 resize-none"
            />

            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-purple-200 text-center text-black">
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          <h2 className="text-4xl font-bold">Let’s Deal Something Amazing</h2>
          <p className="text-black text-lg">
            Our experts are here to help you every step of the way — from planning to delivery.
          </p>
          <a
            href="tel:+919322147550"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
