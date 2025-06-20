import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Star, Calendar, MessageCircle, Check, 
  Play, Headset, Volume2, Music2, Award, X, Plus, Zap, Layers, Disc2, Film, HeadphonesIcon, Music4
} from 'lucide-react';

const Services = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef(null);

  // Base price for one song/track
  const BASE_PRICE = 8000;

  // Track scroll position for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  const pricingPlans = [
    {
      icon: <Disc2 size={32} className="text-emerald-600" />,
      title: "Basic Mixing",
      description: "Professional audio mixing for your tracks",
      price: BASE_PRICE,
      period: "per song",
      features: ["Stereo enhancement", "Dynamic control", "Loudness optimization", "1 revision"],
      popular: false,
      color: "border-gray-200",
      highlight: false
    },
    {
      icon: <Layers size={32} className="text-emerald-600" />,
      title: "Recording + Mixing",
      description: "Recording session with professional mixing",
      price: BASE_PRICE * 3,
      period: "per song",
      features: ["2-hour recording session", "Professional mixing", "High-quality microphones", "2 revisions"],
      popular: true,
      color: "border-emerald-500",
      highlight: true
    },
    {
      icon: <Music4 size={32} className="text-emerald-600" />,
      title: "Full Production",
      description: "Complete production from start to finish",
      price: BASE_PRICE * 8,
      period: "per song",
      features: ["Beat making", "Recording session", "Mixing & Mastering", "Unlimited revisions", "3 hours studio time"],
      popular: false,
      color: "border-gray-200",
      highlight: false
    },
    {
      icon: <Film size={32} className="text-emerald-600" />,
      title: "Video Package",
      description: "Music video production",
      price: BASE_PRICE * 20,
      period: "base package",
      features: ["Concept development", "1 day shooting", "Professional editing", "Color grading"],
      popular: false,
      color: "border-gray-200",
      highlight: false
    },
    {
      icon: <HeadphonesIcon size={32} className="text-emerald-600" />,
      title: "Podcast Production",
      description: "Professional podcast recording",
      price: BASE_PRICE * 2,
      period: "per episode",
      features: ["Audio cleanup", "Show notes", "Distribution", "Episode artwork"],
      popular: false,
      color: "border-gray-200",
      highlight: false
    },
    {
      icon: <Zap size={32} className="text-emerald-600" />,
      title: "Custom Project",
      description: "Tailored solutions for complex needs",
      price: "Custom",
      period: "quote",
      features: ["Sound design", "Scoring", "Dialogue editing", "Custom requirements"],
      popular: false,
      color: "border-gray-200",
      highlight: false
    }
  ];

  const testimonials = [
    {
      name: "Amiso Thwango",
      role: "Ohangla Artist",
      quote: "The mixing service took my tracks to another level. Professional and precise work!",
      stars: 5,
      avatar: "/images/Amiso.jpg"
    },
    {
      name: "Prince Indah",
      role: "Ohangla Legend",
      quote: "Our album production experience was seamless. The team understood our vision perfectly.",
      stars: 5,
      avatar: "/images/prince.jpg"
    },
    {
      name: "Elijah Jalogo",
      role: "Benga Artist",
      quote: "The recording booths have amazing acoustics. Best vocal recordings I've ever done.",
      stars: 5,
      avatar: "/images/jalogo.jpg"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical recording session take?",
      answer: "Most vocal sessions take 2-4 hours. Full band sessions typically take 4-8 hours depending on complexity."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Yes, we recommend booking at least 1 week in advance for weekdays and 2 weeks for weekends."
    },
    {
      question: "Can I bring my own engineer?",
      answer: "Absolutely, though our in-house engineers have extensive experience with our equipment and acoustics."
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver industry-standard formats including WAV, MP3, AIFF, and FLAC at your preferred quality."
    }
  ];

  const equipment = [
    {
      icon: <Headset size={32} className="text-emerald-600" />,
      title: "Microphones",
      items: ["Neumann U87", "AKG C414", "Shure SM7B", "Sony C800G"],
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Volume2 size={32} className="text-emerald-600" />,
      title: "Monitors",
      items: ["Yamaha HS8", "Focal Trio6", "KRK Rokit", "Genelec 8351"],
      image: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Music2 size={32} className="text-emerald-600" />,
      title: "Instruments",
      items: ["Fender Rhodes", "Moog Synth", "Ludwig Drum Kit", "Fender Stratocaster"],
      image: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Award size={32} className="text-emerald-600" />,
      title: "Software",
      items: ["Pro Tools HD", "Ableton Suite", "Logic Pro", "iZotope RX"],
      image: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < count ? "text-emerald-400 fill-emerald-400" : "text-gray-300"} 
      />
    ));
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `KSh ${price.toLocaleString('en-KE')}`;
    }
    return price;
  };

  // Function to handle booking
  const handleBooking = (planTitle) => {
    // Redirect to booking page with plan info
    window.location.href = `/booking?plan=${encodeURIComponent(planTitle)}`;
  };

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
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
              AM
            </div>
            <span className="ml-2 font-bold text-xl text-gray-800">AFRICAN MASTERS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="font-medium text-gray-600 hover:text-emerald-600 transition">Home</a>
            <a href="#pricing" className="font-medium text-gray-600 hover:text-emerald-600 transition">Pricing</a>
            <a href="#equipment" className="font-medium text-gray-600 hover:text-emerald-600 transition">Equipment</a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-emerald-600 transition">Testimonials</a>
            <a href="#faq" className="font-medium text-emerald-600">FAQ</a>
          </div>
          <button 
            onClick={() => handleBooking("Contact")}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all"
          >
            Contact Us
          </button>
        </div>
      </motion.div>

      {/* Hero Section - Redesigned to match booking page */}
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
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Elevate Your <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">African Sound</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional audio solutions blending traditional African rhythms with modern production techniques.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="#pricing" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                View Pricing
              </a>
              <button 
                onClick={() => setShowVideo(true)}
                className="px-8 py-3.5 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-2"
              >
                <Play size={20} />
                Studio Tour
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Studio Features */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4 tracking-wider">
              PREMIUM STUDIO EXPERIENCE
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Why <span className="text-emerald-600">African Masters Studio</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Disc2 size={32} />, title: "State-of-the-art Equipment", description: "Industry-leading gear for pristine sound" },
              { icon: <Volume2 size={32} />, title: "Acoustically Treated Rooms", description: "Optimal sound environment for recording" },
              { icon: <Calendar size={32} />, title: "Flexible Booking Options", description: "24/7 availability to fit your schedule" },
              { icon: <Music4 size={32} />, title: "Traditional African Instruments", description: "Authentic sounds for cultural expression" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-3 rounded-xl w-14 h-14 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-16 px-4 md:py-20 md:px-6 z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6">
              TRANSPARENT PRICING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable <span className="text-emerald-600">Pricing Plans</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional services with clear pricing based on one song at KSh 8,000
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative rounded-xl overflow-hidden bg-white border ${plan.color} shadow-sm hover:shadow-lg transition-all group ${
                  plan.highlight ? "ring-2 ring-emerald-500 ring-opacity-50 border-emerald-500" : "border-gray-300"
                }`}
                whileHover={{ 
                  y: -10,
                  borderColor: "#059669",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    WITH DISCOUNT
                  </motion.div>
                )}
                
                <div className="p-8 bg-white group-hover:bg-opacity-95 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all border border-gray-200">
                      {plan.icon}
                    </div>
                    {plan.popular && (
                      <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                        BEST VALUE
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-start">
                      <span className="text-4xl font-bold text-emerald-600">{formatPrice(plan.price)}</span>
                      <span className="text-gray-500 ml-2 mb-1">/{plan.period}</span>
                    </div>
                    {typeof plan.price === 'number' && plan.price > BASE_PRICE && (
                      <div className="text-sm text-gray-500 mt-1">
                        Based on {plan.price / BASE_PRICE} × single song price
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-emerald-500 mb-3 uppercase tracking-wider">KEY FEATURES:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <Check size={16} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white border-t border-gray-200 p-4 text-center">
                  <motion.button 
                    onClick={() => handleBooking(plan.title)}
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                      plan.highlight 
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:from-emerald-700 hover:to-emerald-900"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                    whileHover={{ 
                      scale: 1.03,
                      background: plan.highlight 
                        ? "linear-gradient(to right, #047857, #065f46)"
                        : "#111827"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {plan.price === "Custom" ? "Get Quote" : "Book Now"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pricing Note */}
          <motion.div 
            className="mt-12 p-6 bg-white rounded-xl border border-gray-200 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-4">
              PRICE CALCULATION
            </div>
            <h3 className="text-xl font-bold mb-2">How We Calculate Prices</h3>
            <p className="text-gray-600">
              All our pricing is based on our standard rate of <span className="font-semibold">KSh 8,000 per song</span>. 
              More complex services are calculated as multiples of this base rate to ensure fairness and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section id="equipment" className="relative py-16 px-4 md:py-20 md:px-6 z-10 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6">
              STUDIO GEAR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium <span className="text-emerald-600">Equipment</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools for authentic African sound quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-200">
                    {item.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((gear, j) => (
                      <li key={j} className="flex items-start">
                        <Check size={16} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{gear}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 px-4 md:py-20 md:px-6 z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6">
              ARTIST TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-emerald-600">Our Artists Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from Knyan artists who have experienced our premium studio services
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-16 px-4 md:py-20 md:px-6 z-10 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6">
              FREQUENTLY ASKED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our studio services
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-emerald-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <div className="text-emerald-600">
                    {activeFAQ === i ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {activeFAQ === i && (
                  <motion.div 
                    className="p-6 border-t border-gray-200 bg-emerald-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="relative py-16 px-4 md:py-20 md:px-6 z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to <span className="text-white">Create</span> With Us?
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-xl mb-10 max-w-2xl mx-auto text-center relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book your session today and experience authentic African music production
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 relative z-10"
            >
              <motion.button
                onClick={() => handleBooking("Session")}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar size={20} />
                BOOK A SESSION
              </motion.button>
              
              <motion.button
                onClick={() => handleBooking("Contact")}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={20} />
                CONTACT US
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div 
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors z-10 bg-black/50 rounded-full p-2"
                onClick={() => setShowVideo(false)}
              >
                <X size={24} />
              </button>
              
              <div className="aspect-video bg-black flex items-center justify-center">
                <video 
                  ref={videoRef}
                  controls
                  className="w-full h-full object-contain"
                  src="/images/welcome.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;