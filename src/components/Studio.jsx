import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Headphones, Mic, Piano, Disc, Monitor, 
  Video, Speaker, ArrowRight, Check, 
  Calendar, Phone, MapPin, ChevronLeft, 
  ChevronRight, X, Play, Pause, Maximize, Minimize,
  Star, Music, Video as VideoIcon, Download, User,
  Instagram, Twitter, Youtube, Menu, Home, Rss, Award, FileText, Mail
} from 'lucide-react';

export default function Studio() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeImage, setActiveImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  
  const modalRef = useRef(null);
  const sectionRefs = useRef({});
  const navbarHeight = 80;

  // Equipment data
  const equipment = [
    {
      category: "Microphones",
      icon: <Mic size={24} className="text-amber-600" />,
      items: ["Neumann U87 Ai", "Shure SM7B", "AKG C414 XLS", "Sennheiser MD 421"]
    },
    {
      category: "Monitors",
      icon: <Speaker size={24} className="text-amber-600" />,
      items: ["Yamaha HS8", "KRK Rokit 8 G4", "Avantone MixCube"]
    },
    {
      category: "Outboard Gear",
      icon: <Disc size={24} className="text-amber-600" />,
      items: ["Universal Audio 6176", "Warm Audio WA76", "DBX 160A"]
    },
    {
      category: "Instruments",
      icon: <Piano size={24} className="text-amber-600" />,
      items: ["Fender Rhodes Mk I", "Moog Subsequent 37", "Roland TR-8S"]
    }
  ];

  // Features data
  const features = [
    {
      icon: <Headphones size={40} className="text-amber-600" />,
      title: "Acoustically Treated",
      description: "Professional acoustic treatment for accurate monitoring"
    },
    {
      icon: <Mic size={40} className="text-amber-600" />,
      title: "Vocal Booth",
      description: "Isolated vocal recording space with pristine sound"
    },
    {
      icon: <Piano size={40} className="text-amber-600" />,
      title: "Live Room",
      description: "Spacious area for ensemble recording with natural reverb"
    },
    {
      icon: <Monitor size={40} className="text-amber-600" />,
      title: "Control Room",
      description: "Comfortable mixing environment with optimal acoustics"
    },
    {
      icon: <Video size={40} className="text-amber-600" />,
      title: "Video Production",
      description: "Full video recording setup with green screen"
    },
    {
      icon: <Disc size={40} className="text-amber-600" />,
      title: "Mastering Suite",
      description: "Dedicated space for final mastering with premium gear"
    }
  ];

  // Gallery images
  const galleryImages = [
    { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Main Studio" },
    { img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Live Room" },
    { img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80", title: "Vocal Booth" },
    { img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Gear Rack" },
    { img: "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Mixing Desk" },
    { img: '/images/book.jpg', title: "" }
  ];

  // Testimonials with actual images
  const testimonials = [
    {
      name: "Amiso Thwango",
      role: "Ohangla Artist",
      quote: "The vocal production quality at African Masters Studio is unmatched. They transformed my raw vocals into a professional masterpiece.",
      rating: 5,
      avatar: "/images/amiso.jpg"
    },
    {
      name: "Prince Indah",
      role: "Ohangla Legend",
      quote: "The engineering team here understands the unique African sound we were going for. They brought our vision to life perfectly.",
      rating: 5,
      avatar: "/images/prince.jpg"
    },
    {
      name: "Elijah Jalogo",
      role: "Gospel Rhumba",
      quote: "Recording my latest album here was a game-changer. The acoustics and equipment quality are world-class.",
      rating: 5,
      avatar: "/images/jalogo.jpg"
    }
  ];

  // Slideshow controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slideshow
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle keyboard navigation in slideshow
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImage !== null) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') setActiveImage(null);
        if (e.key === ' ') setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, isPlaying]);

  // Handle scroll effect for header and section navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + navbarHeight + 20;
      
      Object.entries(sectionRefs.current).forEach(([sectionId, element]) => {
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeImage !== null && modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveImage(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeImage]);

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setEmail('');
  };

  // Handle tour form submission via WhatsApp
  const handleTourSubmit = (e) => {
    e.preventDefault();
    
    const message = `New Tour Booking Request:%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Date: ${formData.date}%0A
Message: ${formData.message}`;
    
    window.open(`https://wa.me/254745798255?text=${message}`, '_blank');
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    
    setFormData({
      name: '',
      email: '',
      date: '',
      message: ''
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Render stars for testimonials
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
      />
    ));
  };

  // Set section refs
  const setSectionRef = (sectionId, element) => {
    if (element) {
      sectionRefs.current[sectionId] = element;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white px-6 py-4 rounded-xl shadow-xl z-50 flex items-center"
          >
            <Check size={24} className="mr-3" />
            <span className="font-medium">Form submitted successfully! We'll contact you shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="bg-gradient-to-r from-amber-700 to-amber-900 w-10 h-10 rounded-lg flex items-center justify-center">
              <Music size={24} className="text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">AFRICAN MASTERS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['features', 'gallery', 'equipment', 'testimonials', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  const element = document.getElementById(tab);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - navbarHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`relative py-2 px-1 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-amber-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-700 to-amber-900"
                    layoutId="navIndicator"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="/booking" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-white font-medium hover:from-amber-800 hover:to-amber-950 transition-all shadow-lg flex items-center group"
            >
              BOOK NOW 
              <motion.div 
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="py-4 px-4 flex flex-col space-y-3">
                {['features', 'gallery', 'equipment', 'testimonials', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setMenuOpen(false);
                      const element = document.getElementById(tab);
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - navbarHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`py-2 px-3 rounded-lg text-left ${
                      activeTab === tab
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
                <a 
                  href="/booking" 
                  className="mt-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-white font-medium text-center"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section with Extended Amber Curved Top */}
      <section className="relative pt-48 pb-20 bg-gradient-to-br from-amber-50 to-white">
        {/* Amber curved top - Extended */}
        <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-r from-amber-700 to-amber-900 rounded-b-[100px] md:rounded-b-[150px] overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-amber-500 opacity-20 -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-amber-400 opacity-20 translate-x-12 translate-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Ikelee <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Entertainments</span> in Nairobi
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Premier recording studio blending traditional African rhythms with modern production techniques
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/booking" 
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold hover:from-amber-800 hover:to-amber-950 transition-all shadow-lg flex items-center group"
                >
                  BOOK A SESSION 
                  <motion.div 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-white text-amber-600 border border-amber-600 hover:bg-amber-50 transition-colors flex items-center"
                >
                  <VideoIcon size={20} className="mr-2" />
                  VIRTUAL TOUR
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Studio interior"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "24+", label: "Microphones" },
            { value: "5000+", label: "Sq. Ft." },
            { value: "A+", label: "Acoustics" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold">
                {stat.value}
              </div>
              <div className="text-sm text-amber-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Features */}
      <section 
        id="features" 
        className="py-20 scroll-mt-20 bg-white"
        ref={el => setSectionRef('features', el)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold py-1.5 px-4 rounded-full mb-4">
              PROFESSIONAL FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Studio Facilities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for authentic African sound production with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 mb-6 mx-auto group-hover:bg-amber-600 transition-all"
                  animate={{ 
                    rotate: hoveredCard === i ? 10 : 0,
                    scale: hoveredCard === i ? 1.1 : 1
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery" 
        className="py-20 scroll-mt-20 bg-amber-50"
        ref={el => setSectionRef('gallery', el)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold py-1.5 px-4 rounded-full mb-4">
              STUDIO TOUR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our professional African music production environment
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => {
                  setCurrentSlide(index);
                  setActiveImage(index);
                }}
              >
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section 
        id="equipment" 
        className="py-20 scroll-mt-20 bg-white"
        ref={el => setSectionRef('equipment', el)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold py-1.5 px-4 rounded-full mb-4">
              PREMIUM GEAR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Equipment</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium gear for authentic African sound production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {equipment.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <Check size={18} className="text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-8 text-white h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Full Gear List</h3>
                <div className="bg-white/20 p-2 rounded-lg">
                  <Download size={20} />
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  "Neve 1073 Preamp", "API 5500 EQ", 
                  "Universal Audio Apollo x8", "Pro Tools | HDX", 
                  "SSL Fusion", "Empirical Labs Distressor", 
                  "Teletronix LA-2A", "Royer R-121", 
                  "AEA R84", "AKG C12 VR", "Manley Reference Cardioid"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check size={18} className="text-amber-100 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-3.5 rounded-xl bg-white text-amber-800 font-semibold hover:bg-gray-100 transition-all flex items-center justify-center group">
                
                <motion.div 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Artist Images */}
      <section 
        id="testimonials" 
        className="py-20 scroll-mt-20 bg-white"
        ref={el => setSectionRef('testimonials', el)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold py-1.5 px-4 rounded-full mb-4">
              CLIENT REVIEWS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Our Artists Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from African musicians who've created magic in our studio
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="bg-gradient-to-r from-amber-700 to-amber-900 p-1.5 rounded-full mb-4 md:mb-0 md:mr-6">
                  <div className="bg-white p-2 rounded-full">
                    <img 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-amber-600">{testimonials[activeTestimonial].role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                </div>
              </div>
              
              <div className="text-xl italic text-gray-700 mb-8">
                "{testimonials[activeTestimonial].quote}"
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === index 
                          ? 'bg-amber-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="bg-amber-100 hover:bg-amber-200 p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} className="text-amber-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-6 bg-gradient-to-br from-amber-700 to-amber-900 scroll-mt-20"
        ref={el => setSectionRef('contact', el)}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our <span className="text-amber-100">Studio</span>
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Experience authentic African music production firsthand
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p>Lucky Summer, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <p>+254 745 798 255 | studio@africanmasters.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar size={24} className="text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p>Monday-Saturday: 9AM - 10PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Subscribe for Updates</h3>
                <form onSubmit={handleSubscribe} className="flex">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-l-lg bg-white/20 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 w-full focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-amber-700 font-semibold px-6 rounded-r-lg hover:bg-gray-100 transition-all whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Book a Tour</h3>
            <form className="space-y-4" onSubmit={handleTourSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Tell us about your project"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold hover:from-amber-800 hover:to-amber-950 transition-all flex items-center justify-center"
              >
                <span> WHATSAPP</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 ml-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Image Modal with Slideshow */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="relative max-w-6xl w-full"
              onClick={e => e.stopPropagation()}
              ref={modalRef}
            >
              <button 
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white rounded-full p-2 z-10 hover:bg-white/20 transition-colors"
                onClick={() => setActiveImage(null)}
              >
                <X size={24} />
              </button>
              
              <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden">
                <img
                  src={galleryImages[currentSlide].img}
                  alt={galleryImages[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation controls */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors z-10 backdrop-blur-sm"
                  onClick={prevSlide}
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors z-10 backdrop-blur-sm"
                  onClick={nextSlide}
                >
                  <ChevronRight size={32} />
                </button>
                
                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    {galleryImages[currentSlide].title}
                  </h3>
                </div>
                
                {/* Play/Pause controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button 
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors backdrop-blur-sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button 
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors backdrop-blur-sm"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
                  </button>
                </div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'bg-white w-6' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail strip */}
              <div className="flex overflow-x-auto py-4 gap-2 mt-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      currentSlide === index 
                        ? 'border-amber-600 scale-105' 
                        : 'border-transparent hover:border-amber-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <img 
                      src={image.img} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}