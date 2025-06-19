import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, User, MessageSquare, Instagram, Twitter, Facebook, Clock, Send, CheckCircle, Mic, Headphones, Video, Camera, Music, Calendar } from 'react-feather';

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
  const formRef = useRef(null);

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
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const studioServices = [
    { icon: <Mic size={20} />, name: "Recording", description: "Professional audio recording sessions" },
    { icon: <Headphones size={20} />, name: "Mixing", description: "Track mixing and mastering" },
    { icon: <Music size={20} />, name: "Production", description: "Full music production services" },
    { icon: <Video size={20} />, name: "Videography", description: "Music video production" },
    { icon: <Camera size={20} />, name: "Photography", description: "Artist photos and album art" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Top Curved Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 h-32 md:h-48 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AFRICAN MASTERS STUDIO
            </motion.h1>
            <motion.p 
              className="text-sm md:text-base opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Contact Us
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-green-400 opacity-30 -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-green-300 opacity-20 translate-x-12 translate-y-12"></div>
      </div>

      <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Page header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact <span className="text-green-600">African Masters</span> Studio
            </motion.h1>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Reach out for bookings, studio sessions, or any inquiries. Our team is ready to help bring your creative vision to life.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
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
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-800">Send us a message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
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

              {/* Contact Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                      <Phone className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-800">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-500 transition-all">
                      <div className="p-3 bg-green-100 rounded-xl text-green-600 mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="text-gray-600 font-medium">Email</h4>
                        <a href="mailto:contact@africanmasters.com" className="text-gray-800 hover:text-green-600 font-medium transition-colors">contact@africanmasters.com</a>
                      </div>
                    </div>

                    <div className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-500 transition-all">
                      <div className="p-3 bg-green-100 rounded-xl text-green-600 mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="text-gray-600 font-medium">Phone</h4>
                        <a href="tel:+254745798255" className="text-gray-800 hover:text-green-600 font-medium transition-colors">+254 745 798255</a>
                      </div>
                    </div>

                    <div className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-500 transition-all">
                      <div className="p-3 bg-green-100 rounded-xl text-green-600 mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="text-gray-600 font-medium">Studio Location</h4>
                        <p className="text-gray-800 font-medium">123 Music Avenue, Creative District</p>
                        <p className="text-gray-600">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl text-gray-800 border border-green-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <Clock className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Studio Hours</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex justify-between pb-3 border-b border-green-100">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-green-600 font-semibold">9:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between pb-3 border-b border-green-100">
                      <span className="font-medium">Saturday</span>
                      <span className="text-green-600 font-semibold">10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-green-600 font-semibold">By appointment only</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                      <div className="text-white font-bold">S</div>
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-800">Connect With Us</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { platform: 'Instagram', icon: <Instagram size={20} />, color: 'bg-gradient-to-r from-green-600 to-green-800' },
                      { platform: 'Twitter', icon: <Twitter size={20} />, color: 'bg-gradient-to-r from-green-600 to-green-800' },
                      { platform: 'Facebook', icon: <Facebook size={20} />, color: 'bg-gradient-to-r from-green-600 to-green-800' }
                    ].map((item) => (
                      <motion.a 
                        key={item.platform}
                        href="#"
                        className="group block"
                        whileHover={{ y: -5 }}
                      >
                        <div className={`${item.color} p-4 rounded-xl text-white flex items-center justify-center aspect-square transition-transform group-hover:-translate-y-1 shadow-md`}>
                          {item.icon}
                        </div>
                        <p className="text-center mt-3 font-medium text-gray-600 group-hover:text-green-600 transition-colors">
                          {item.platform}
                        </p>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-10">
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

              {/* Studio Team */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                    <User className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-800">Our Team</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: "Alex Morgan", role: "Lead Audio Engineer", bio: "10+ years experience in music production" },
                    { name: "Sarah Johnson", role: "Mixing Specialist", bio: "Specialized in hip-hop and electronic genres" },
                    { name: "David Kim", role: "Video Director", bio: "Award-winning music video creator" }
                  ].map((member, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-500 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <div className="relative">
                        <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-full flex-shrink-0"></div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-green-700 border-2 border-white"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-gray-800 font-medium">{member.name}</h4>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 text-sm font-semibold">{member.role}</p>
                        <p className="text-gray-600 text-sm mt-1">{member.bio}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {/* Action Buttons */}
          <motion.div 
            className="flex justify-center gap-6 mt-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate("/booking")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-medium flex items-center gap-2 shadow-lg shadow-green-600/30 overflow-hidden relative group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(22, 163, 74, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book Studio Session</span>
              <Calendar size={18} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => navigate("/location")}
              className="px-8 py-3 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition-all group relative overflow-hidden"
              whileHover={{ 
                backgroundColor: "rgba(22, 163, 74, 0.1)",
                borderColor: "rgba(22, 163, 74, 0.7)"
              }}
            >
              <span className="relative z-10">Visit Our Location</span>
              <MapPin size={18} className="relative z-10 ml-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-600 to-green-800 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                  <MapPin className="text-white" size={18} />
                </div>
                <h3 className="text-xl font-bold ml-3 text-gray-800">Studio Location</h3>
              </div>
              <p className="text-gray-600 mb-6">Visit our state-of-the-art facility in Nairobi's creative district.</p>
            </div>
            
            <div className="h-80 bg-gradient-to-br from-green-50 to-white relative overflow-hidden flex items-center justify-center">
              <div className="relative z-10 bg-white p-6 rounded-xl border border-green-300 shadow-lg max-w-xs text-center">
                <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="text-gray-800 font-semibold text-lg mb-2">African Masters Studio</h4>
                <p className="text-gray-600">123 Music Avenue</p>
                <p className="text-gray-600">Creative District, Nairobi</p>
                <p className="text-green-600 mt-3 font-medium">Open today until 10 PM</p>
              </div>
              
              {/* Map markers */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full border-2 border-white"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
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