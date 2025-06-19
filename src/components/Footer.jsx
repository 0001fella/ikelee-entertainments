import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, Twitter, Youtube, Mail, Phone, MapPin, 
  ArrowUp, Music, Video, Mic, Headphones, Camera, Disc 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-emerald-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 rounded-full bg-emerald-600 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-1 rounded-lg">
              <div className="bg-black p-2 rounded-md">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300">
                  IKELE STUDIOS
                </h2>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 max-w-md">
            Premier music production and creative studio delivering exceptional audio and visual experiences since 2018.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {[
              { icon: Instagram, url: "https://instagram.com", color: "hover:bg-[#E4405F]" },
              { icon: Twitter, url: "https://twitter.com", color: "hover:bg-[#1DA1F2]" },
              { icon: Youtube, url: "https://youtube.com", color: "hover:bg-[#FF0000]" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all duration-300 hover:text-white transform hover:-translate-y-1"
                aria-label={social.icon.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">Join Our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-grow"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/20"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-emerald-400 text-sm animate-pulse">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 w-3 h-3 rounded-full mr-2"></span>
            Quick Links
          </h3>
          <ul className="space-y-4">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/studio", label: "Our Studio" },
              { path: "/artists", label: "Featured Artists" },
              { path: "/contact", label: "Contact" }
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="border-b border-transparent group-hover:border-emerald-400 transition-border">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 w-3 h-3 rounded-full mr-2"></span>
            Our Services
          </h3>
          <ul className="space-y-4">
            {[
              { icon: Music, name: "Music Recording" },
              { icon: Headphones, name: "Mixing & Mastering" },
              { icon: Disc, name: "Music Production" },
              { icon: Mic, name: "Podcast Production" },
              { icon: Video, name: "Music Videos" },
              { icon: Camera, name: "Artist Photography" }
            ].map((service, index) => (
              <li key={index} className="flex items-center group">
                <service.icon size={16} className="text-emerald-500 mr-3 transition-transform group-hover:scale-110" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {service.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 w-3 h-3 rounded-full mr-2"></span>
            Contact Us
          </h3>
          <address className="not-italic space-y-5">
            <div className="flex items-start">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <MapPin size={18} className="text-emerald-500" />
              </div>
              <span className="text-gray-300">123 Creative Lane, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <Mail size={18} className="text-emerald-500" />
              </div>
              <a 
                href="mailto:info@ikele.com" 
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                info@ikele-studios.com
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-lg mr-3">
                <Phone size={18} className="text-emerald-500" />
              </div>
              <a 
                href="tel:+254745798255" 
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                +254 745 798 255
              </a>
            </div>
            
            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="font-medium mb-2">Studio Hours</h4>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM - 10PM</p>
              <p className="text-gray-400 text-sm">Sat-Sun: 10AM - 8PM</p>
            </div>
          </address>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Ikele Studios. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <Link 
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm text-gray-500 hover:text-emerald-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-3 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 z-20"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}