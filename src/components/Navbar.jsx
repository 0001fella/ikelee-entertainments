import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun, Moon, Menu, X, Headphones, Mic, Music, Video, Camera,
  BookOpen, Mail, Phone, MapPin
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
       localStorage.getItem('darkMode') !== 'false');
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'STUDIO', path: '/studio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'FAQS', path: '/faqs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const studioServices = [
    { icon: <Headphones size={16} />, name: 'Recording', path: '/services#recording' },
    { icon: <Mic size={16} />, name: 'Mixing & Mastering', path: '/services#mixing' },
    { icon: <Music size={16} />, name: 'Production', path: '/services#production' },
    { icon: <Video size={16} />, name: 'Video', path: '/services#video' },
    { icon: <Camera size={16} />, name: 'Photography', path: '/services#photography' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-2' :
                 'bg-white dark:bg-gray-900 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with favicon */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/favicon.jpg"
              alt="Favicon"
              className="w-10 h-10 rounded-full mr-3 object-cover border border-amber-500 shadow"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                IKELEE ENTERTAINMENTS
              </span>
              <span className="block text-xs text-gray-600 dark:text-gray-400">STUDIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                    : 'text-gray-800 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all"
              aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/booking"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 shadow-md hover:shadow-lg transition-all">
              BOOK
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleDarkMode}
              className="mr-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all"
              aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300"
              aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20 overflow-y-auto">
          <div className="px-6 pb-10">
            <div className="space-y-1 mb-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                      : 'text-gray-800 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                <BookOpen className="mr-2" size={16} />
                Studio Services
              </h3>
              <div className="space-y-1">
                {studioServices.map((service, index) => (
                  <Link key={index} to={service.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 flex items-center">
                    <span className="mr-3 text-amber-600 dark:text-amber-400">{service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/booking"
              className="block w-full px-4 py-3 rounded-lg text-base font-medium text-white text-center bg-gradient-to-r from-amber-600 to-orange-500 shadow-md hover:shadow-lg transition-all mb-8">
              BOOK A SESSION
            </Link>

            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h3 className="flex items-center text-lg font-semibold text-amber-800 dark:text-amber-300 mb-4">
                <MapPin className="mr-2" size={20} />
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 text-amber-600 dark:text-amber-400" size={18} />
                  <p className="text-gray-700 dark:text-gray-300">+254 745 798 255</p>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 text-amber-600 dark:text-amber-400" size={18} />
                  <p className="text-gray-700 dark:text-gray-300">info@ikele-studios.com</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 text-amber-600 dark:text-amber-400" size={18} />
                  <p className="text-gray-700 dark:text-gray-300">123 Creative Lane, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
