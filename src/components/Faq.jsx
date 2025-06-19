import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ChevronDown, ChevronUp, Mail, Phone, MapPin, ArrowRight, 
  BookOpen, Calendar, Headphones, Music, Volume2, Video, Camera 
} from 'lucide-react';

const faqs = [
  {
    question: "How do I book a session at Ikele Studios?",
    answer: "You can book directly through our booking page or contact us via phone/email to schedule a session."
  },
  {
    question: "What genres do you specialize in?",
    answer: "Our engineers and producers work across multiple genres including hip hop, afrobeat, R&B, gospel, and more."
  },
  {
    question: "Do you offer remote mixing/mastering?",
    answer: "Yes! Send your files via Google Drive or WeTransfer — we'll handle the rest."
  },
  {
    question: "Can I sit in during the mix session?",
    answer: "Absolutely. You're welcome to be present in-studio or join virtually via Zoom."
  },
  {
    question: "What's your rescheduling or cancellation policy?",
    answer: "We ask for 24-hour notice for any changes. Late cancellations may incur a fee."
  },
  {
    question: "What equipment do you have available?",
    answer: "We have state-of-the-art recording equipment including Neumann microphones, API consoles, and a wide selection of instruments."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options for larger projects. Contact us to discuss arrangements."
  },
  {
    question: "Can I bring my own engineer?",
    answer: "Absolutely. We welcome outside engineers and can provide technical support as needed."
  }
];

const studioServices = [
  { icon: <Headphones size={20} />, title: "Recording", description: "Professional audio recording" },
  { icon: <Volume2 size={20} />, title: "Mixing & Mastering", description: "Polishing tracks to perfection" },
  { icon: <Music size={20} />, title: "Production", description: "Full track production" },
  { icon: <Video size={20} />, title: "Video Production", description: "Music videos & visual content" },
  { icon: <Camera size={20} />, title: "Photography", description: "Artist photos & album art" },
  { icon: <Calendar size={20} />, title: "Event Space", description: "Album launches & listening parties" }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      <Helmet>
        <title>FAQs | Ikele Studios</title>
        <meta name="description" content="Frequently Asked Questions about booking, services, and studio policies at Ikele Studios." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.8);
          }
          .sharp-shadow {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          }
          .service-card {
            transition: all 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Helmet>

      {/* Floating Navigation */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
              IK
            </div>
            <span className="ml-2 font-bold text-xl text-gray-800">IKELE STUDIOS</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-600 transition">Home</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-600 transition">Services</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-600 transition">Studio</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-600 transition">Pricing</a>
            <a href="#" className="font-medium text-emerald-600">FAQs</a>
          </div>
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all">
            Book Now
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-emerald-800/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-emerald-600 opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-200 opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Questions</span> Answered
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Find answers to common questions about our studio services, policies, and booking process.
            </motion.p>
            
            <motion.button
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-800 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => window.scrollTo({ top: document.querySelector('#faq-section').offsetTop - 100, behavior: 'smooth' })}
            >
              Explore FAQs
              <ArrowRight className="inline ml-3" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Our <span className="text-emerald-600">Studio Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl text-center mt-4">
              Professional audio services tailored to bring your creative vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioServices.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 sharp-shadow service-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="relative z-10 py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-3 rounded-full mb-6">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our studio services and policies
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl overflow-hidden sharp-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left p-6 flex justify-between items-center group"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === i ? (
                      <ChevronUp className="text-emerald-600" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500 group-hover:text-emerald-600 transition-colors" size={24} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-card rounded-2xl p-8 text-center mt-16 sharp-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our team and we'll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium rounded-lg hover:shadow-lg shadow-md shadow-emerald-200 transition-all"
              >
                Contact Us
              </a>
              <a 
                href="/booking" 
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 md:p-12 sharp-shadow">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-emerald-600">Touch</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a project in mind? Contact us today to discuss how we can bring your creative vision to life with our professional studio services.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-3 rounded-xl mr-4 flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Studio Location</h3>
                      <p className="text-gray-600">123 Creative Lane, Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-3 rounded-xl mr-4 flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">info@ikele-studios.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-3 rounded-xl mr-4 flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+254 745 798 255</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold hover:shadow-lg shadow-md shadow-emerald-200 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}