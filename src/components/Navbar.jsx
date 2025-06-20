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
      scrolled ? 'bg-white dark:bg-gray-900 backdrop-blur-sm shadow-md py-0' : 
                'bg-white dark:bg-gray-900 py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          {/* Logo with favicon */}
          <Link to="/" className="flex items-center group py-3">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Favicon"
                className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-amber-500 shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white dark:border-gray-900"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent tracking-tight">
                IKELEE ENTERTAINMENTS
              </span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 tracking-wider">PREMIUM RECORDING STUDIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}
                className={`px-4 py-5 relative text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-700 dark:text-amber-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t"></div>
                )}
              </Link>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <button onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle Dark Mode">
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
              </button>
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
              <Link to="/booking"
                className="px-4 py-2 rounded text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow transition-all flex items-center">
                <span>BOOK</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleDarkMode}
              className="mr-3 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-16 overflow-y-auto">
          <div className="px-4 pb-10">
            <div className="space-y-0.5 mb-6">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}
                  className={`block px-4 py-3 text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-l-4 border-amber-500'
                      : 'text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 rounded">
                <BookOpen className="mr-2" size={16} />
                Studio Services
              </h3>
              <div className="mt-2 space-y-0.5">
                {studioServices.map((service, index) => (
                  <Link key={index} to={service.path}
                    className="block px-6 py-3 text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center">
                    <span className="mr-3 text-amber-600 dark:text-amber-400">{service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/booking"
              className="block w-full px-4 py-3 rounded text-base font-medium text-white text-center bg-gradient-to-r from-amber-600 to-amber-700 shadow transition-all mb-6">
              BOOK A SESSION
            </Link>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
              <h3 className="flex items-center text-base font-semibold text-amber-700 dark:text-amber-400 mb-3">
                <MapPin className="mr-2" size={18} />
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="mr-3 mt-0.5 text-amber-600 dark:text-amber-400" size={16} />
                  <p className="text-gray-700 dark:text-gray-300">+254 745 798 255</p>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 mt-0.5 text-amber-600 dark:text-amber-400" size={16} />
                  <p className="text-gray-700 dark:text-gray-300">info@ikele-studios.com</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-0.5 text-amber-600 dark:text-amber-400" size={16} />
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