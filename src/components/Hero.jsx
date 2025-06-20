import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaMicrophoneAlt, FaSlidersH, FaDrum, FaUsers, FaVideo, FaMusic } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

const AfricanMastersStudio = () => {
  // State for scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // YouTube video IDs for the artists
  const productions = [
    {
      id: "prince-indah",
      title: "Prince Indah - Latest",
      videoId: "5GhPIDU-xgk" 
    },
    {
      id: "amiso-twamgo",
      title: "Amiso Twamgo - Latest",
      videoId: '3_1BxDfwdLo'
    },
    {
      id: "elijah-jalogo",
      title: "Elijah Jalogo - Latest",
      videoId: "LST0tDQVnwI"
    },
    {
      id: "uncle-eddie",
      title: "Uncle Eddie - Latest",
      videoId: "sNwaurU2Kn4"
    }
  ];

  const artists = [
    {
      name: "Prince Indah",
      genre: "Ohangla • Benga",
      image: '/images/prince.jpg'
    },
    {
      name: "Amiso Twamgo",
      genre: "Ohangla • Benga",
      image: '/images/Amiso.jpg'
    },
    {
      name: "Elijah Jalogo",
      genre: "Gospel rhumba",
      image: '/images/jalogo.jpg'
    },
    {
      name: "Elisha Toto",
      genre: "Ohangla • Benga",
      image: '/images/Elisha.jpg'
    },
    {
      name: "Papa T",
      genre: "Ohangla • Benga",
      image: '/images/papa.jpg'
    },
    {
      name: "Uncle Eddy",
      genre: "Traditional Fusion",
      image: '/images/uncle.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
      {/* Top Curved Section with animations and logo */}
      <motion.div 
        className="relative bg-gradient-to-r from-amber-700 to-amber-900 h-32 md:h-48 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Logo Animation */}
        <motion.div 
          className="absolute top-4 left-4 md:left-8 z-10"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/images/logo.png" 
            alt="African Masters Logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AFRICAN MASTERS STUDIO
            </motion.h1>
            <motion.p 
              className="text-sm md:text-base opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Where African Rhythms Meet Global Excellence
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-20 h-20 rounded-full bg-amber-500 opacity-30 -translate-x-10 -translate-y-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-amber-400 opacity-20 translate-x-12 translate-y-12"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </motion.div>

      {/* Hero Section with green accents */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Elevate Your Sound with <span className="text-green-600">Ekelee</span> <br /> 
            <span className="text-amber-400">Entertainments</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience world-class recording, mixing, and mastering in our state-of-the-art studios, where traditional African rhythms meet cutting-edge production technology.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div 
            className="relative w-full md:w-1/2 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl transform -rotate-3 z-0"></div>
            <motion.div 
              className="relative rounded-3xl overflow-hidden z-10"
              whileHover={hoverScale}
            >
              <img 
                src="/images/logo.png" 
                alt="African Masters Studio" 
                className="w-full h-80 object-cover"
              />
              {/* Green badge */}
              <motion.div 
                className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-xs"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                LIVE SESSION
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Studio Equipment section with green accents */}
          <motion.div 
            className="w-full md:w-1/2 max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Studio Equipment</h3>
              <motion.div 
                className="space-y-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div className="flex items-start" variants={item}>
                  <div className="bg-green-100 text-green-800 rounded-lg p-3 mr-4">
                    <FaMicrophoneAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Neumann Microphones</h4>
                    <p className="text-gray-600 text-sm">
                      Professional studio-grade microphones for pristine vocal capture
                    </p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={item}>
                  <div className="bg-green-100 text-green-800 rounded-lg p-3 mr-4">
                    <FaSlidersH size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">SSL Consoles</h4>
                    <p className="text-gray-600 text-sm">
                      Industry-standard mixing boards for professional sound engineering
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={item}>
                  <div className="bg-green-100 text-green-800 rounded-lg p-3 mr-4">
                    <FaDrum size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Acoustic Treatment</h4>
                    <p className="text-gray-600 text-sm">
                      Professionally treated spaces for optimal sound quality
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with green accent */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why <span className="text-amber-600">African Masters</span> Stands Out
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our studio the premier choice for authentic African sound production
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Feature Card 1 */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="h-48 bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                <motion.div 
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Cultural Authenticity</h3>
                <p className="text-gray-600">
                  We preserve the essence of African musical traditions while incorporating modern production techniques.
                </p>
              </div>
            </motion.div>
            
            {/* Feature Card 2 */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="h-48 bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center">
                <motion.div 
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">World-Class Equipment</h3>
                <p className="text-gray-600">
                  Our studios feature industry-leading gear for pristine sound quality and professional results.
                </p>
              </div>
            </motion.div>
            
            {/* Feature Card 3 with green theme */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
                <motion.div 
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Creative Collaboration</h3>
                <p className="text-gray-600">
                  Work with our team of producers and engineers to bring your musical vision to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with green accents */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our <span className="text-amber-600">Studio Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your music production needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <FaMicrophoneAlt size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Professional Recording</h3>
              <p className="text-gray-600">
                Capture your sound in acoustically-treated studios with premium microphones and preamps.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <FaSlidersH size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mixing & Mastering</h3>
              <p className="text-gray-600">
                Expert audio engineering to polish your tracks to perfection for any platform.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <FaDrum size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Beat Production</h3>
              <p className="text-gray-600">
                Custom beats crafted to your specifications, blending African rhythms with modern styles.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Artist Development</h3>
              <p className="text-gray-600">
                Comprehensive programs to refine your sound, image, and marketing strategy.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <FaVideo size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Music Videos</h3>
              <p className="text-gray-600">
                Full production services including concept development, filming, and editing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={item}
              whileHover={hoverScale}
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <FaMusic size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Songwriting</h3>
              <p className="text-gray-600">
                Collaborate with our talented songwriters to create memorable hooks and lyrics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Productions Section with Uncle Eddie */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Latest <span className="text-amber-300">Productions</span>
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Recent hits produced in our studio
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {productions.map((prod) => (
              <motion.div 
                key={prod.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${prod.videoId}`}
                    title={prod.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{prod.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Artist Spotlight with green accent */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Featured <span className="text-amber-500">Artists</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Talented musicians who have created magic in our studio
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {artists.map((artist, index) => (
            <motion.div 
              key={index}
              className="group relative w-64 overflow-hidden rounded-2xl shadow-lg"
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-10"></div>
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-white font-bold text-xl">{artist.name}</h3>
                <p className="text-amber-300">{artist.genre}</p>
              </div>
              {index === 0 && (
                <motion.div 
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold z-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    backgroundColor: ["#16a34a", "#22c55e", "#16a34a"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  TRENDING
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA with green theme */}
      <motion.div 
        className="py-16 bg-gradient-to-r from-green-700 to-green-900 rounded-t-[60px] md:rounded-t-[100px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Create Your Masterpiece?
          </motion.h2>
          <motion.p 
            className="text-green-100 max-w-2xl mx-auto mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Book a session at African Masters Studio and experience world-class production with authentic African inspiration.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href="/booking" 
              className="bg-white text-green-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px rgba(0, 0, 0, 0.2)",
                  "0 4px 6px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Book Studio Time
            </motion.a>
            <motion.a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer with logo */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="mr-3"
            >
              <img 
                src="/images/logo.png" 
                alt="African Masters Logo" 
                className="w-10 h-10"
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-amber-400">AFRICAN MASTERS STUDIO</h3>
              <p className="text-gray-400 text-sm mt-1">Elevating African Music Worldwide</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Artists</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Events</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} African Masters Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AfricanMastersStudio;