import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mic, Camera, Headphones, Disc, Music, Video, Radio, ChevronRight, 
  Star, Instagram, Twitter, Youtube, MapPin, Calendar, MessageCircle, 
  Play, Award, Volume2, Monitor, Users, Music2, Album, X, Pause, ChevronLeft
} from 'lucide-react';

const features = [
  {
    icon: <Mic size={40} />, 
    title: "Professional Recording", 
    description: "Acoustically-treated spaces with premium microphones",
    color: "from-amber-600 to-amber-800"
  },
  {
    icon: <Disc size={40} />, 
    title: "Mixing & Mastering", 
    description: "Industry-standard tools for polished, radio-ready tracks",
    color: "from-amber-500 to-amber-700"
  },
  {
    icon: <Music size={40} />, 
    title: "Music Production", 
    description: "Full-track production from concept to final master",
    color: "from-amber-600 to-amber-800"
  },
  {
    icon: <Video size={40} />, 
    title: "Music Videos", 
    description: "Cinematic visual storytelling for your music",
    color: "from-amber-500 to-amber-700"
  },
  {
    icon: <Radio size={40} />, 
    title: "Podcast Setup", 
    description: "Professional podcast recording and production",
    color: "from-amber-600 to-amber-800"
  },
  {
    icon: <Camera size={40} />, 
    title: "Photography", 
    description: "High-quality artist photos and album artwork",
    color: "from-amber-500 to-amber-700"
  }
];

const testimonials = [
  {
    name: "Amiso Thango",
    role: "Ohangla Artist",
    quote: "The production quality at African Masters Studio elevated my sound to international standards.",
    stars: 5
  },
  {
    name: "Prince Indah",
    role: "Ohangla Legend",
    quote: "African Masters Studio captures the authentic Ohangla sound like no other studio.",
    stars: 5
  },
  {
    name: "Elijah Jalogo",
    role: "Benga Artist",
    quote: "Recording here was transformative. They helped me refine my sound while honoring my heritage.",
    stars: 5
  },
  {
    name: "Papa T",
    role: "Ohangla Artist",
    quote: "The creative environment helped me find my unique sound. The team is deeply knowledgeable.",
    stars: 5
  },
  {
    name: "Kaka Talanta",
    role: "Ohangla Artist",
    quote: "African Masters Studio's mixing capabilities took my tracks to the next level.",
    stars: 5
  },
  {
    name: "Elvis Jakadori",
    role: "Ohangla Artist",
    quote: "The engineering team has an incredible ear for blending traditional African sounds.",
    stars: 5
  }
];

const socialFeed = [
  { 
    id: 1, 
    platform: 'instagram', 
    content: 'Recording session with Papa T', 
    url: '#', 
    thumbnail: '/images/new.jpg' 
  },
  { 
    id: 2, 
    platform: 'youtube', 
    content: 'Behind the scenes - studio session', 
    url: '#', 
    thumbnail: '/images/season1.jpg',
    video: '/images/season.mp4'
  },
  { 
    id: 3, 
    platform: 'instagram', 
    content: 'Producer at work', 
    url: '#', 
    thumbnail: '/images/season3.jpg'
  },
  { 
    id: 4, 
    platform: 'instagram', 
    content: 'Seasoned artists recording', 
    url: '#', 
    thumbnail: '/images/season2.jpg'
  },
];

const clients = [
  { name: "Boomplay", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Boomplay_logo.svg/1200px-Boomplay_logo.svg.png" },
  { name: "Afrotainment", logo: "https://afrotainment.com/wp-content/uploads/2021/06/afrotainment-logo-1.png" },
  { name: "Trace TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/TRACE_logo.svg/1200px-TRACE_logo.svg.png" },
  { name: "Sony Music Africa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sony_Music_logo.svg/2560px-Sony_Music_logo.svg.png" },
  { name: "Universal Africa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Universal_Music_Group_logo.svg/2560px-Universal_Music_Group_logo.svg.png" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Songs Produced" },
  { value: "200+", label: "Artists Worked With" },
  { value: "50+", label: "Awards Won" }
];

const About = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialInterval = useRef(null);
  
  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
      />
    ));
  };

  // Testimonial carousel autoplay
  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(testimonialInterval.current);
  }, []);

  const openVideo = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowVideoModal(true);
  };

  const nextTestimonials = () => {
    setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    resetTestimonialTimer();
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    resetTestimonialTimer();
  };

  const resetTestimonialTimer = () => {
    clearInterval(testimonialInterval.current);
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section - Updated with video in circular container */}
      <section className="relative py-16 md:py-24 flex items-center overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-700 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-amber-800 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center bg-white text-amber-800 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-8">
              AFRICA'S PREMIER STUDIO
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Crafting <span className="block">African Sonic Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 max-w-xl mx-auto md:mx-0 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              African Masters Studio: Where traditional rhythms meet cutting-edge production in Africa's premier creative space.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Link 
                to="/booking" 
                className="px-8 py-3.5 rounded-full bg-white text-amber-800 font-bold flex items-center gap-2 hover:bg-amber-50 transition-all shadow-lg"
              >
                <Calendar size={20} />
                Book a Session
              </Link>
              <button 
                onClick={() => openVideo('/images/welcome.mp4')}
                className="px-8 py-3.5 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Play size={20} />
                Studio Tour
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="/images/welcome.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-xl">
              <Music2 size={40} className="text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-600">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Removed Learn More buttons */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative bg-gradient-to-b from-white to-amber-50">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Studio <span className="text-amber-600">Capabilities</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional-grade equipment and acoustically treated spaces for authentic African sound production
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="h-full p-8 flex flex-col">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated with requested artists */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Artists <span className="text-amber-600">Testimonials</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear what African artists and producers say about working with us
              </p>
            </motion.div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-br-full text-white flex items-center justify-center">
                <QuoteIcon />
              </div>
              
              <div className="text-center px-8 pt-4">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonialIndex].stars)}
                </div>
                <p className="text-gray-600 italic text-lg mb-8">"{testimonials[currentTestimonialIndex].quote}"</p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-amber-100 mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold">{testimonials[currentTestimonialIndex].name}</h4>
                  <p className="text-amber-600">{testimonials[currentTestimonialIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonials}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors"
              >
                <ChevronLeft className="text-amber-600" />
              </button>
              <button 
                onClick={nextTestimonials}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors"
              >
                <ChevronRight className="text-amber-600" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 opacity-10 blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 opacity-10 blur-3xl"></div>
      </section>

      {/* Behind the Scenes - Updated with actual images */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Behind The Scenes
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Follow our journey on social media
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialFeed.map((post, i) => (
              <motion.div
                key={post.id}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => post.video && openVideo(post.video)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={post.thumbnail} 
                    alt={post.content} 
                    className="w-full h-full object-cover"
                  />
                  {post.video && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="text-white" size={24} />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center text-white">
                      {post.platform === 'instagram' && <Instagram size={18} className="mr-2" />}
                      {post.platform === 'twitter' && <Twitter size={18} className="mr-2" />}
                      {post.platform === 'youtube' && <Youtube size={18} className="mr-2" />}
                      <span className="text-sm font-medium">{post.content}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-amber-600 font-bold text-lg">
              Follow us on Instagram
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Trusted By</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Leading African artists and industry partners</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="h-12 w-32 bg-gray-200 border-2 border-dashed rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative bg-gradient-to-br from-amber-700 to-amber-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Create Something Extraordinary?
          </motion.h2>
          
          <motion.p 
            className="text-white/90 text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book a session today and experience professional African music production at its finest
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/booking" 
              className="px-8 py-4 rounded-full bg-white text-amber-800 font-bold hover:bg-amber-50 transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar size={20} />
              BOOK A SESSION
            </Link>
            
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={20} />
              CONTACT US
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button 
                className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
                onClick={() => setShowVideoModal(false)}
              >
                <X size={32} />
              </button>
              
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  <source src={currentVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Custom Quote Icon
const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.691 6.292C5.094 4.771 7.217 4 10.068 4v1.927c-1.877 0-3.197.34-4.865 1.521l-.006.004c-.458.323-1.5 1.156-1.5 2.496v.5H10v8H1v-8h3.125v-.492c0-1.184.566-2.289 1.691-3.216l-.125-.027zM13.691 6.292C15.094 4.771 17.217 4 20.068 4v1.927c-1.877 0-3.197.34-4.865 1.521l-.006.004c-.458.323-1.5 1.156-1.5 2.496v.5H23v8h-9v-8h3.125v-.492c0-1.184.566-2.289 1.691-3.216l-.125-.027z" />
  </svg>
);

export default About;