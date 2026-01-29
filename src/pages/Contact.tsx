import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Background from "../assets/bg-main (2).webp";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";




const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    setIsSending(true)

    emailjs.sendForm(
      "service_ka7381n",
      "template_toxpm0j",
      formRef.current,
      "QaYZ3tMqo672ZZUka"
    );
    emailjs
      .sendForm(
        "service_ka7381n",
        "template_vnig8hb",
        formRef.current,
        "QaYZ3tMqo672ZZUka"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);


          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again.");
        }

      ).finally(() => {
        setIsSending(false);
      });


  };


  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9326947550",
      sub: "Everyday, 9:30AM–7:30PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@manneev.com",
      sub: "Replies within 24 hours",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Everyday: 9:30AM–7:30PM",
      // sub: "Everyday: Open",
    },
  ];

  const visitUsDetail = {
    icon: MapPin,
    title: "Visit Us",
    info: "Shop No 13,Dattani park building no 1 Opp Gokul Concord Tower, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101",
    sub: "Kandivali East, Mumbai",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden text-white">
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 animate-fadeUp">
          <div className="inline-block px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg border border-[#D4AF37]/30">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you need a quote, product information, or expert guidance —
            our team is just a message away.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {contactDetails.map((c, i) => (
              <div
                key={i}
                className={`bg-[#1C1C1C] p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex items-center ${visible ? "animate-fadeUp" : "opacity-0"
                  }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mr-6 animate-float shrink-0 border border-[#D4AF37]/30">
                  <c.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-300 font-semibold">{c.info}</p>
                  <p className="text-gray-500 text-sm">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div
              className={`bg-[#1C1C1C] p-8 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex items-center ${visible ? "animate-fadeUp" : "opacity-0"
                }`}
              style={{ animationDelay: "0.45s" }}
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mr-6 animate-float shrink-0 border border-[#D4AF37]/30">
                <visitUsDetail.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {visitUsDetail.title}
                </h3>
                <p className="text-gray-300 font-semibold">
                  {visitUsDetail.info}
                </p>
                <p className="text-gray-500 text-sm">{visitUsDetail.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 bg-[#141414] p-10 sm:p-12 rounded-3xl shadow-2xl border border-[#D4AF37]/20 backdrop-blur-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Send Us a <span className="text-[#D4AF37]">Message</span>
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-4 bg-[#222] border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="p-4 bg-[#222] border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all placeholder-gray-500"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="p-4 bg-[#222] border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all sm:col-span-2 placeholder-gray-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="p-4 bg-[#222] border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all sm:col-span-2 resize-none placeholder-gray-500"
            />

            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSending}
                className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold hover:bg-[#c5a028] transition-all duration-300 flex items-center gap-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  "Sending..."
                ) : isSubmitted ? (
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
      <section className="py-20 bg-[#111] text-center text-white border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          <h2 className="text-4xl font-bold">
            Let’s Deal Something <span className="text-[#D4AF37]">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our experts are here to help you every step of the way — from
            planning to delivery.
          </p>
          <Link
            to="tel:+919322147550"
            className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold hover:bg-[#c5a028] transition-all duration-300 transform hover:scale-105"
          >
            Call Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
