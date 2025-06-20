import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, User, MessageSquare, Instagram, Twitter, Facebook, 
  Clock, Send, CheckCircle, Mic, Headphones, Video, Camera, Music, Calendar,
  ArrowRight, ChevronDown, ChevronUp, Plus, Minus, Settings, Info, ChevronRight,
  Star, Disc, Waves, Volume2, Bookmark, Gift, ArrowLeft, X, Check
} from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [isRecording, setIsRecording] = useState(false);
  const [isHoveringGlobe, setIsHoveringGlobe] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef(null);
  const particlesRef = useRef(null);
  const globeRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Initialize particles
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22, 163, 74, ${p.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);
  
  // Globe rotation effect
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    
    let rotation = 0;
    const rotateGlobe = () => {
      rotation += isHoveringGlobe ? 0.8 : 0.2;
      globe.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(rotateGlobe);
    };
    
    rotateGlobe();
    
    return () => {
      cancelAnimationFrame(rotateGlobe);
    };
  }, [isHoveringGlobe]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };
  
  const handleVoiceInput = () => {
    setIsRecording(true);
    
    // Simulate voice recording and transcription
    setTimeout(() => {
      setIsRecording(false);
      setFormData(prev => ({
        ...prev,
        message: prev.message + "Hello, I'm interested in learning more about your studio services."
      }));
    }, 3000);
  };

  const studioServices = [
    { icon: <Mic size={20} />, name: "Recording", description: "Professional audio recording sessions" },
    { icon: <Headphones size={20} />, name: "Mixing", description: "Track mixing and mastering" },
    { icon: <Music size={20} />, name: "Production", description: "Full music production services" },
    { icon: <Video size={20} />, name: "Videography", description: "Music video production" },
    { icon: <Camera size={20} />, name: "Photography", description: "Artist photos and album art" },
  ];

  const studioFeatures = [
    { icon: <Disc size={20} />, title: "State-of-the-art Equipment", description: "Industry-leading gear for pristine sound" },
    { icon: <Waves size={20} />, title: "Acoustically Treated Rooms", description: "Optimal sound environment for recording" },
    { icon: <Bookmark size={20} />, title: "Flexible Booking Options", description: "24/7 availability to fit your schedule" },
    { icon: <Gift size={20} />, title: "Complimentary Refreshments", description: "Stay refreshed during your creative sessions" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Amiso Thwango.",
      role: "Musician",
      content: "The recording quality at African Masters Studio is unmatched. My tracks came out sounding professional and radio-ready!",
      rating: 5
    },
    {
      id: 2,
      name: "Uncle Eddiy",
      role: "Artist",
      content: "Their mixing engineers have an incredible ear for detail. They transformed my rough mixes into polished gems.",
      rating: 5
    },
    {
      id: 3,
      name: "Elija J..",
      role: "Artist",
      content: "The video production team helped bring my creative vision to life. The final music video exceeded my expectations!",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? "#10b981" : "none"} 
        className={i < rating ? "text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      <Helmet>
        <title>Contact Us | African Masters Studio</title>
        <meta name="description" content="Get in touch with African Masters Studio for inquiries, bookings, and collaborations." />
        <style>{`
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
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          .service-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Helmet>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 sharp-shadow"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="text-center">
                <div className="mx-auto bg-gradient-to-r from-green-600 to-green-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-3">Message Sent!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting African Masters Studio. We've received your message and will get back to you within 24 hours.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button 
                    onClick={() => navigate("/booking")}
                    className="py-3 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-300 text-green-700 font-medium flex items-center justify-center"
                  >
                    <Calendar size={18} className="mr-2" />
                    Book Session
                  </button>
                  <a 
                    href="https://wa.me/254745798255" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-800 text-white font-medium flex items-center justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Chat Now
                  </a>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="px-4 text-gray-500 text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Scan to save studio contact</p>
                  <div className="flex justify-center">
                    <div className="bg-white p-2 rounded-lg border border-gray-200">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/254745798255" 
                        alt="WhatsApp QR Code" 
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Particles Background */}
      <canvas 
        ref={particlesRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Floating Navigation */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-600 to-green-800 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
              AM
            </div>
            <span className="ml-2 font-bold text-xl text-gray-800">AFRICAN MASTERS</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Home</a>
            <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Services</a>
            <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Studio</a>
            <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Pricing</a>
            <a href="#" className="font-medium text-green-600">Contact</a>
          </div>
          <button 
            onClick={() => navigate("/booking")}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-800 text-white font-medium shadow-lg shadow-green-100 hover:shadow-green-200 transition-all"
          >
            Book Session
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 to-green-800/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-400 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-green-600 opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-green-200 opacity-10"></div>
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
              Connect With <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">African Masters</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Reach out to our team for inquiries, collaborations, or to book studio time. We're here to bring your creative vision to life.
            </motion.p>
            <motion.button
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 to-green-800 shadow-lg shadow-green-200 hover:shadow-green-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => window.scrollTo({ top: formRef.current.offsetTop - 100, behavior: 'smooth' })}
            >
              Send Us a Message
              <ArrowRight className="inline ml-3" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Studio Features */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4 tracking-wider">
              PREMIUM STUDIO EXPERIENCE
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Why <span className="text-green-600">African Masters Studio</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 sharp-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Studio Info & Testimonials */}
            <div className="lg:col-span-1">
              <motion.div 
                className="glass-card rounded-2xl p-6 sharp-shadow mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-xl mr-4 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Studio Location</h3>
                    <p className="text-gray-600 text-sm">nyali breeze apartments lucky summer, Nairobi</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center text-green-600">
                    <Info size={18} className="mr-2 text-green-500" />
                    Contact Information
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Mail size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">contact@africanmasters.com</span>
                    </li>
                    <li className="flex items-start">
                      <Phone size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">+254 745 798255</span>
                    </li>
                    <li className="flex items-start">
                      <Clock size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Mon-Sat: 9AM - 10PM</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card rounded-2xl p-6 sharp-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-bold text-lg mb-4 flex items-center text-gray-900">
                  <Star size={20} className="mr-2 text-green-500" />
                  Client Testimonials
                </h3>
                
                <div className="space-y-4">
                  {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 italic mb-3">"{testimonial.content}"</p>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8 sharp-shadow" ref={formRef}>
                <div className="flex justify-center mb-12">
                  <div className="bg-gray-100 rounded-xl p-1 inline-flex border border-gray-200">
                    <button 
                      onClick={() => setActiveTab('contact')}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        activeTab === 'contact' 
                          ? 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Contact Form
                    </button>
                    <button 
                      onClick={() => setActiveTab('info')}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        activeTab === 'info' 
                          ? 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Studio Info
                    </button>
                  </div>
                </div>

                {activeTab === 'contact' ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                        <MessageSquare className="text-white" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold ml-4 text-gray-800">Send us a message</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">Full Name <span className="text-green-600">*</span></label>
                        <div className="relative">
                          <div className="absolute left-3 top-3.5 text-green-500">
                            <User size={20} />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                              errors.name ? 'border-red-500' : 'border-gray-200 focus:border-green-500'
                            } text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all`}
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">Email Address <span className="text-green-600">*</span></label>
                        <div className="relative">
                          <div className="absolute left-3 top-3.5 text-green-500">
                            <Mail size={20} />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                              errors.email ? 'border-red-500' : 'border-gray-200 focus:border-green-500'
                            } text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all`}
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">Your Message <span className="text-green-600">*</span></label>
                        <div className="relative">
                          <div className="absolute left-3 top-3.5 text-green-500">
                            <MessageSquare size={20} />
                          </div>
                          <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                              errors.message ? 'border-red-500' : 'border-gray-200 focus:border-green-500'
                            } text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all`}
                            placeholder="Tell us about your project or inquiry..."
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                          )}
                          
                          {/* Voice input button */}
                          <motion.button
                            type="button"
                            onClick={handleVoiceInput}
                            disabled={isRecording}
                            className={`absolute right-3 bottom-3 p-2 rounded-full ${
                              isRecording 
                                ? 'bg-red-500 text-white animate-pulse' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mic size={18} />
                          </motion.button>
                        </div>
                      </div>

                      <div className="pt-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center ${
                            isSubmitting 
                              ? 'bg-green-700' 
                              : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-md hover:shadow-lg'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Send Message <Send className="ml-2" size={18} />
                            </span>
                          )}
                        </motion.button>
                      </div>

                      {submitSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="p-4 bg-gradient-to-r from-green-100 to-green-50 text-green-700 rounded-xl border border-green-300 flex items-start mt-4"
                        >
                          <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Message sent successfully!</p>
                            <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
                    {/* Studio Services */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center mb-8">
                        <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                          <Music className="text-white" size={20} />
                        </div>
                        <h3 className="text-2xl font-bold ml-4 text-gray-800">Studio Services</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {studioServices.map((service, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-4 rounded-xl border border-gray-100 hover:border-green-500 transition-all shadow-md"
                          >
                            <div className="bg-gradient-to-r from-green-600 to-green-800 w-10 h-10 rounded-lg flex items-center justify-center mb-3 shadow-sm text-white">
                              {service.icon}
                            </div>
                            <h4 className="text-gray-800 font-medium mb-1">{service.name}</h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Futuristic Map Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-green-600 to-green-800 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                            <MapPin className="text-white" size={18} />
                          </div>
                          <h3 className="text-xl font-bold ml-3 text-gray-800">Studio Location</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Visit our state-of-the-art facility in Nairobi- nyali breeze apartments lucky summer.</p>
                      </div>
                      
                      <div 
                        className="h-80 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center"
                        onMouseEnter={() => setIsHoveringGlobe(true)}
                        onMouseLeave={() => setIsHoveringGlobe(false)}
                      >
                        {/* Interactive 3D Globe */}
                        <div 
                          ref={globeRef}
                          className="w-48 h-48 rounded-full relative overflow-hidden transform-style-3d transition-transform duration-1000"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, #1e3a8a, #0f172a)',
                            boxShadow: '0 0 50px rgba(34, 197, 94, 0.5)',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          {/* Continent shapes */}
                          <div className="absolute top-1/2 left-1/2 w-20 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          <div className="absolute top-1/3 left-1/3 w-12 h-6 bg-gradient-to-r from-green-700 to-green-900 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          
                          {/* Nairobi marker */}
                          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-40"></div>
                          </div>
                          
                          {/* Grid lines */}
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={`horizontal-${i}`}
                              className="absolute top-0 left-0 w-full h-full"
                              style={{
                                borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
                                transform: `rotateX(${i * 30}deg)`
                              }}
                            />
                          ))}
                          
                          {[...Array(12)].map((_, i) => (
                            <div 
                              key={`vertical-${i}`}
                              className="absolute top-0 left-0 w-full h-full"
                              style={{
                                borderRight: '1px solid rgba(34, 197, 94, 0.2)',
                                transform: `rotateY(${i * 30}deg)`
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Floating location info */}
                        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm p-4 rounded-xl text-white max-w-xs border border-green-500/30">
                          <h4 className="font-bold text-green-400 mb-1">African Masters Studio</h4>
                          <p className="text-sm">nyali breeze apartments</p>
                          <p className="text-sm">lucky summer, Nairobi</p>
                          <div className="flex items-center mt-2 text-green-300">
                            <Clock size={14} className="mr-1" />
                            <span className="text-xs">Open today until 10 PM</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-green-400">AFRICAN MASTERS STUDIO</h3>
            <p className="text-gray-400 text-sm mt-1">Elevating African Music Worldwide</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Artists</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} African Masters Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}