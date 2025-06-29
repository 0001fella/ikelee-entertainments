import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaMicrophoneAlt, FaSlidersH, 
  FaDrum, FaUsers, FaVideo, FaMusic, FaPhoneAlt, FaEnvelope,
  FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';

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
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      name: "Amiso Thwango",
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
      {/* Top Contact Bar */}
      <motion.div 
        className="bg-amber-900 text-white py-2 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-2 sm:mb-0">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Nairobi, Kenya
            </span>
            <a href="tel:+254123456789" className="flex items-center gap-2">
              <FaPhoneAlt /> +254 123 456 789
            </a>
            <a href="mailto:info@africanmasters.com" className="flex items-center gap-2">
              <FaEnvelope /> info@africanmasters.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-amber-300 transition duration-300" size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-amber-300 transition duration-300" size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-amber-300 transition duration-300" size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-amber-300 transition duration-300" size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Top Curved Section (logo removed) */}
      <motion.div 
        className="relative bg-gradient-to-r from-amber-700 to-amber-900 h-40 md:h-56 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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

      {/* Hero Section with redesigned curved container */}
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
          {/* Redesigned curved container */}
          <motion.div 
            className="relative w-full md:w-1/2 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Curved shape container */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Background shape with curved sides */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700"
                style={{ 
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                  borderRadius: '0 0 40% 40%'
                }}
              ></div>
              
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-amber-400 opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-amber-300 opacity-40"
                animate={{ 
                  scale: [1, 1.3, 1],
                  y: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
            </div>
            
            {/* Image container with curved edges */}
            <motion.div 
              className="relative z-10 overflow-hidden"
              style={{ 
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                borderRadius: '0 0 40% 40%'
              }}
              whileHover={hoverScale}
            >
              <img 
                src="/images/kido.jpg" 
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
          
          {/* Studio Equipment section */}
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

      {/* ... Rest of the code remains unchanged ... */}

    </div>
  );
};

export default AfricanMastersStudio;