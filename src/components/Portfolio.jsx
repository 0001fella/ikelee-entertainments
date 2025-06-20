import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Play, ZoomIn, Music, Video, Camera, ArrowRight, Star, Sparkles, ArrowUp, 
  Headphones, Film, Image as ImageIcon, Globe, Calendar as CalendarIcon, 
  Volume2, Mic, Monitor, Disc, X, Plus, Minus
} from 'lucide-react';

// Project data updated with correct local videos
const projects = [
  {
    id: 1,
    title: 'Studio session Session',
    type: 'Studio Recording',
    category: 'audio',
    thumbnail: '/images/welcome.mp4',
    media: '/images/welcome.mp4',
    description: 'Capturing the raw talent of emerging artists',
    tags: ['Afrobeat', 'Audio Engineering', 'Mixing'],
    stats: { duration: '3:45', date: 'june 2025' },
    fullDescription: 'An immersive recording session featuring traditional African instruments blended with contemporary production techniques. Our team captured the authentic sounds of the Savannah region using state-of-the-art equipment and acoustic treatment.'
  },
  {
    id: 2,
    title: 'videography and photoshot session',
    type: 'Music Video',
    category: 'video',
    thumbnail: '/images/season.mp4',
    media: '/images/season.mp4',
    description: 'Vibrant visuals celebrating African rhythms',
    tags: ['Cinematography', 'Color Grading', 'Drone Shots'],
    stats: { duration: '4:22', date: 'Sep 2023' },
    fullDescription: 'A cinematic journey with the  musicians. Shot on RED Komodo with custom color grading to enhance the golden hour visuals. Drone footage captured the vastness of the desert landscape.'
  },
  {
    id: 3,
    title: 'production in progress',
    type: 'Event',
    category: 'event',
    thumbnail: '/images/new.jpg',
    media: '/images/welcome.mp4',
    description: 'Electrifying stage performance captured',
    tags: ['Live Sound', 'Multi-Cam', 'Lighting Design'],
    stats: { duration: '15:30', date: 'Aug 2023' },
    fullDescription: ' carefull and accurate mixing  and perfect production with the oist skilled engineers. Our team managed stage lighting, sound reinforcement, and live streaming for this 5,000-attendee event.'
  },
  {
    id: 4,
    title: 'African Rhythms Album Art',
    type: 'Photo',
    category: 'photo',
    thumbnail: '/images/book.jpg',
    media: '/images/book.jpg',
    description: 'Stunning photography of African heritage',
    tags: ['Portrait Photography', 'Lighting', 'Set Design'],
    stats: { duration: '32 images', date: 'Jul 2025' },
    fullDescription: 'Album artwork photography for Grammy-nominated artist Kofi Mensah. Shot in our custom-built studio with unique lighting setups to highlight traditional Ghanaian Kente cloth patterns.'
  },
  {
    id: 5,
    title: ' Fusion Podcast',
    type: 'Audio Production',
    category: 'audio',
    thumbnail: '/images/home.jpg',
    media: '/audio/podcast.mp3',
    description: 'Conversations with African music pioneers',
    tags: ['Audio Editing', 'Sound Design', 'Mixing'],
    stats: { duration: '58:12', date: 'Jun 2025' },
    fullDescription: 'A 12-episode podcast series featuring interviews with legendary African musicians. We handled recording, editing, sound design, and mastering for this award-winning series.'
  },
  {
    id: 6,
    title: 'Highlife Legends Shoot',
    type: 'Photo',
    category: 'photo',
    thumbnail: '/images/season1.jpg',
    media: '/images/season1.jpg',
    description: 'Iconic album artwork for  legends',
    tags: ['Concept Art', 'Set Design', 'Post-Production'],
    stats: { duration: '24 images', date: 'May 2025' },
    fullDescription: 'Photography series for the "Legends of Highlife" tribute album. We created custom sets inspired by 1970s Lagos nightlife and used vintage lenses for authentic period looks.'
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProjectCard = ({ project, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative cursor-pointer rounded-xl overflow-hidden h-[300px] border-2 border-gray-200 bg-white ${
        isActive ? 'ring-4 ring-green-500 z-10' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10" />
      
      {project.thumbnail.endsWith('.mp4') ? (
        <video 
          src={project.thumbnail} 
          className="w-full h-full object-cover absolute inset-0"
          muted
          autoPlay={isHovered}
          loop
          playsInline
        />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover absolute inset-0"
          loading="lazy"
        />
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-xs text-gray-300 flex items-center">
          <CategoryIcon category={project.category} />
          {project.type}
        </p>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center animate-pulse">
            <ZoomIn size={24} className="text-gray-900" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ProjectDetail = ({ project, onClose }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  
  if (!project) return null;
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-lg" 
          onClick={onClose}
        />
        
        <motion.div 
          className="relative bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="relative h-[400px]">
            {project.media.endsWith('.mp4') ? (
              <div className="relative w-full h-full">
                <video 
                  ref={videoRef}
                  src={project.media}
                  className="w-full h-full object-cover"
                  onClick={togglePlay}
                />
                {!playing && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center">
                      <Play size={40} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ) : project.media.endsWith('.mp3') ? (
              <div className="w-full h-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-center p-6">
                  <Volume2 size={60} className="text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
                  <audio src={project.media} controls className="mt-6 w-full" />
                </div>
              </div>
            ) : (
              <img 
                src={project.media} 
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-900" />
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-1 flex items-center">
                <CategoryIcon category={project.category} />
                {project.type}
              </p>
            </div>
          </div>
          
          <div className="p-8 flex-1 overflow-y-auto">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800`}>
                <Globe size={12} className="mr-1" />
                {project.category.toUpperCase()}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                <CalendarIcon size={12} className="mr-1" />
                {project.stats.date}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {project.stats.duration}
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project Overview</h3>
                <p className="text-gray-600 mb-6">{project.fullDescription}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Technical Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Monitor size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Equipment Used</h5>
                        <p className="text-sm text-gray-600">Neumann U87, API Console, Pro Tools HD</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Disc size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Software</h5>
                        <p className="text-sm text-gray-600">Pro Tools, Logic Pro, Davinci Resolve</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Mic size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Techniques</h5>
                        <p className="text-sm text-gray-600">Binaural recording, Analog summing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Users size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Team</h5>
                        <p className="text-sm text-gray-600">1 mobilizer, 1producers, 1 cinematographer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-green-50 rounded-xl p-5 mb-6">
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Project Impact</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900">Streams</h5>
                      <p className="text-2xl font-bold text-green-600">2.4M+</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Awards</h5>
                      <p className="text-2xl font-bold text-green-600">3 Nominations</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Client Growth</h5>
                      <p className="text-2xl font-bold text-green-600">120% Increase</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1.5 bg-green-100 rounded-full text-sm font-medium text-green-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View Case Study Button Removed */}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CategoryIcon = ({ category }) => {
  const icons = {
    audio: <Headphones size={16} className="mr-1" />,
    video: <Film size={16} className="mr-1" />,
    photo: <ImageIcon size={16} className="mr-1" />,
    event: <Play size={16} className="mr-1" />
  };
  
  return icons[category] || <Play size={16} className="mr-1" />;
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.button 
          className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ClientsShowcase = () => {
  const clients = [
    { name: "Universal Music" },
    { name: "Sony Africa" },
    { name: "MTN Music" },
    { name: "Afrochella" },
    { name: "Trace TV" },
    { name: "Sauti Sol" }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Trusted by Africa's Best</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl flex items-center justify-center h-24 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-lg font-semibold text-gray-700 text-center">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="py-16 bg-gradient-to-br from-green-900 to-green-700 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Start Your Creative Journey</h2>
            <p className="text-green-100 mb-8 max-w-lg">
              Ready to bring your artistic vision to life? Our team of African creative experts is ready to collaborate with you on your next project.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Studio Location</h3>
                  <p className="text-green-200">nyali breeze apartments lucky summer, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Contact Us</h3>
                  <p className="text-green-200">+254 745 798 255</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-green-200">info@africanmasters.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-gray-800">
            <h3 className="text-xl font-bold mb-4">Project Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Project Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
                  <option>Select project type</option>
                  <option>Audio Production</option>
                  <option>Video Production</option>
                  <option>Photography</option>
                  <option>Event Coverage</option>
                  <option>Other</option>
                </select>
              </div>
              
              {isExpanded && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Timeline</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      placeholder="When do you need this completed?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Budget Range</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
                      <option>Select budget range</option>
                      <option>KES 50,000 - 100,000</option>
                      <option>KES 100,000 - 250,000</option>
                      <option>KES 250,000 - 500,000</option>
                      <option>KES 500,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Details</label>
                    <textarea 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  className="flex items-center text-green-600 font-medium"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <>
                      <Minus size={16} className="mr-1" />
                      Less Details
                    </>
                  ) : (
                    <>
                      <Plus size={16} className="mr-1" />
                      More Details
                    </>
                  )}
                </button>
                
                <button 
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Users = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const MapPin = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Phone = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'audio', label: 'Audio', icon: <Music size={16} className="mr-1" /> },
    { id: 'video', label: 'Video', icon: <Video size={16} className="mr-1" /> },
    { id: 'photo', label: 'Photo', icon: <Camera size={16} className="mr-1" /> },
    { id: 'event', label: 'Events', icon: <Play size={16} className="mr-1" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 2);
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 min-h-screen overflow-hidden">
      <Helmet>
        <title>Portfolio | African Masters Studio</title>
        <meta name="description" content="Explore our creative portfolio celebrating African music heritage" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
          }
          .sleek-shadow {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300b894' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        `}</style>
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-green-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                AM
              </div>
              <span className="ml-2 font-bold text-xl text-gray-900">AFRICAN MASTERS</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Home</a>
              <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Services</a>
              <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Studio</a>
              <a href="#" className="font-medium text-gray-600 hover:text-green-600 transition">Pricing</a>
              <a href="#" className="font-medium text-green-600">Portfolio</a>
            </div>
            
            <button className="hidden md:block px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-100 hover:shadow-green-200 transition-all">
              Contact Us
            </button>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-5 space-y-4">
                <a href="#" className="block font-medium text-gray-600 hover:text-green-600 transition">Home</a>
                <a href="#" className="block font-medium text-gray-600 hover:text-green-600 transition">Services</a>
                <a href="#" className="block font-medium text-gray-600 hover:text-green-600 transition">Studio</a>
                <a href="#" className="block font-medium text-gray-600 hover:text-green-600 transition">Pricing</a>
                <a href="#" className="block font-medium text-green-600">Portfolio</a>
                <button className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-100">
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-green-400 opacity-10 blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-green-600 opacity-10 blur-3xl -z-10"></div>
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <motion.span 
                className="text-green-500 font-medium text-sm flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={16} className="mr-2" />
                AFRICAN MASTERS STUDIO
              </motion.span>
            </div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-gray-900">African Masters</span>
              <span className="text-green-500 bg-clip-text">Creative Portfolio</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience our work through a portfolio celebrating African rhythms and creativity
            </motion.p>
          </motion.div>

          {/* Gallery */}
          <div className="relative mb-16 bg-pattern">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <div className="inline-flex items-center space-x-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center transition-all ${
                      activeFilter === filter.id
                        ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CategoryIcon category={filter.id} />
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  isActive={activeProject === project.id}
                  onClick={setActiveProject}
                />
              ))}
            </motion.div>
            
            {visibleProjects < filteredProjects.length && (
              <div className="text-center mt-12">
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg shadow-md shadow-green-200"
                  onClick={showMoreProjects}
                  whileTap={{ scale: 0.95 }}
                >
                  
                </motion.button>
              </div>
            )}
          </div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[ 
              { value: '120+', label: 'Projects', icon: <Film size={24} className="text-green-500" /> },
              { value: '75+', label: 'Artists', icon: <Mic size={24} className="text-green-500" /> },
              { value: '35M+', label: 'Streams', icon: <Headphones size={24} className="text-green-500" /> },
              { value: '15', label: 'Awards', icon: <Star size={24} className="text-green-500" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-6 rounded-xl text-center border border-gray-100 sleek-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-500 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "African Masters Studio transformed our music into a masterpiece that perfectly captured our vision while honoring our cultural roots.",
                  author: "Kwame Osei",
                  role: "Afrobeats Artist"
                },
                {
                  quote: "The attention to detail in our album cover shoot was phenomenal. They created visuals that truly represent African musical heritage.",
                  author: "Amina Diallo",
                  role: "Photographer"
                },
                {
                  quote: "Working with African Masters on our documentary was transformative. Their cultural sensitivity elevated our project.",
                  author: "James Wilson",
                  role: "Producer"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 sleek-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-green-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <ClientsShowcase />
        
        <ContactSection />
      </div>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold mx-auto">
              AM
            </div>
            <h3 className="text-xl font-bold mt-4">African Masters Studio</h3>
            <p className="text-gray-400 mt-2">Celebrating African Creativity</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Studio</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Portfolio</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} .
          </div>
        </div>
      </footer>
      
      {activeProject && (
        <ProjectDetail 
          project={projects.find(p => p.id === activeProject)} 
          onClose={() => setActiveProject(null)} 
        />
      )}
      
      <ScrollToTop />
    </div>
  );
}

const MenuIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);