import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Calendar, Mic, Headphones, Video, Camera, User, Users, Check, 
  X, ArrowLeft, Clock, Info, ChevronRight, Star, MapPin, 
  Phone, Music, Disc2, Waves, Volume2, Bookmark, Gift, ArrowRight,
  ChevronDown, ChevronUp, Plus, Minus, Settings, Monitor, Speaker, Piano,
  Layers, Music2, Film, HeadphonesIcon, Music4, Award, Zap
} from 'lucide-react';

const services = [
  {
    value: "basic-song",
    label: "Basic Song",
    price: 9999,
    icon: <Disc2 size={20} />,
    description: "Simple recording and mixing for your track",
    features: ["Basic recording", "Simple mixing", "1 revision", "Delivery in 3 days"],
    color: "from-emerald-600 to-emerald-800"
  },
  {
    value: "recording-mixing",
    label: "Recording & Mixing",
    price: 23999,
    icon: <Layers size={20} />,
    description: "Professional recording with advanced mixing",
    features: ["Professional recording", "Advanced mixing", "2 revisions", "Delivery in 5 days"],
    color: "from-emerald-500 to-emerald-700"
  },
  {
    value: "full-production",
    label: "Full Production",
    price: 63999,
    icon: <Music4 size={20} />,
    description: "Complete production from start to finish",
    features: ["Beat making", "Recording session", "Mixing & Mastering", "Unlimited revisions", "3 hours studio time"],
    color: "from-emerald-600 to-emerald-800"
  },
  {
    value: "visualizer",
    label: "Visualizer",
    price: 9999,
    icon: <Film size={20} />,
    description: "Basic music visualization",
    features: ["Basic animation", "Song visualization", "Simple effects", "Delivery in 5 days"],
    color: "from-emerald-500 to-emerald-700"
  },
  {
    value: "promo-video",
    label: "Promo Video",
    price: 19999,
    icon: <Film size={20} />,
    description: "Professional promotional video",
    features: ["Concept development", "1 location shoot", "Basic editing", "Delivery in 7 days"],
    color: "from-emerald-600 to-emerald-800"
  },
  {
    value: "official-video",
    label: "Official Video",
    price: 34999,
    icon: <Film size={20} />,
    description: "High-quality official music video",
    features: ["Professional concept", "Multiple locations", "Advanced editing", "Delivery in 14 days"],
    color: "from-emerald-500 to-emerald-700"
  }
];

const studioFeatures = [
  { icon: <Disc2 size={20} />, title: "State-of-the-art Equipment", description: "Industry-leading gear for pristine sound" },
  { icon: <Volume2 size={20} />, title: "Acoustically Treated Rooms", description: "Optimal sound environment for recording" },
  { icon: <Calendar size={20} />, title: "Flexible Booking Options", description: "24/7 availability to fit your schedule" },
  { icon: <Music4 size={20} />, title: "Traditional African Instruments", description: "Authentic sounds for cultural expression" }
];

const equipmentOptions = [
  { name: "Neumann U87", category: "Microphone" },
  { name: "AKG C414", category: "Microphone" },
  { name: "Shure SM7B", category: "Microphone" },
  { name: "Sony C800G", category: "Microphone" },
  { name: "Yamaha HS8", category: "Monitors" },
  { name: "Focal Trio6", category: "Monitors" },
  { name: "KRK Rokit", category: "Monitors" },
  { name: "Genelec 8351", category: "Monitors" },
  { name: "Fender Rhodes", category: "Keyboard" },
  { name: "Moog Synth", category: "Synth" },
  { name: "Ludwig Drum Kit", category: "Drums" },
  { name: "Fender Stratocaster", category: "Guitar" },
  { name: "Pro Tools HD", category: "Software" },
  { name: "Ableton Suite", category: "Software" },
  { name: "Logic Pro", category: "Software" },
  { name: "iZotope RX", category: "Software" }
];

// Predefined booked dates for demonstration
const bookedDates = [
  "2024-06-15",
  "2024-06-18",
  "2024-06-20",
  "2024-06-22",
  "2024-06-25",
  "2024-06-27",
  "2024-06-29"
];

export default function Booking() {
  const formRef = useRef(null);
  
  // Get current date for initial state
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    bookingType: 'yourself',
    number: 1,
    plannedDate: '',
    plannedTime: '',
    duration: 2,
    service: services[0].value,
    message: '',
    selectedEquipment: []
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    plannedDate: '',
    plannedTime: ''
  });

  const [selectedService, setSelectedService] = useState(services[0]); // Default to first service
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1 (skip service selection)
  const [showEquipmentSelector, setShowEquipmentSelector] = useState(false);
  const [activeMonth, setActiveMonth] = useState(currentMonth);
  const [activeYear, setActiveYear] = useState(currentYear);
  const [calendarView, setCalendarView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set selected service when form.service changes
  useEffect(() => {
    const service = services.find(s => s.value === form.service);
    if (service) {
      setSelectedService(service);
    }
  }, [form.service]);

  // Email validation function - must end with @gmail.com
  const validateEmail = (email) => {
    if (!email) return true; // Email is optional
    return email.toLowerCase().endsWith('@gmail.com');
  };

  // Phone validation function - must be at least 10 digits
  const validatePhone = (phone) => {
    // Remove non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10;
  };

  const validateForm = () => {
    const errors = {
      name: !form.name ? 'Name is required' : '',
      email: form.email && !validateEmail(form.email) ? 'Must be a valid Gmail address (ending with @gmail.com)' : '',
      phone: !form.phone ? 'Phone number is required' : !validatePhone(form.phone) ? 'Phone number must have at least 10 digits' : '',
      plannedDate: !form.plannedDate ? 'Date is required' : '',
      plannedTime: !form.plannedTime ? 'Time is required' : ''
    };

    setFormErrors(errors);
    return Object.values(errors).every(error => error === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceSelect = (service) => {
    setForm({ ...form, service: service.value });
    setSelectedService(service);
  };

  const calculateDepartureTime = () => {
    if (!form.plannedTime) return '';
    
    const [hours, minutes] = form.plannedTime.split(':').map(Number);
    const startTime = new Date(2000, 0, 1, hours, minutes);
    const endTime = new Date(startTime.getTime() + form.duration * 60 * 60 * 1000);
    
    return `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;
  };

  const generateWhatsappMessage = () => {
    const departureTime = calculateDepartureTime();
    
    return `New Booking Request:
    
Service: ${selectedService?.label || 'Not specified'}
Price: KSh ${selectedService?.price?.toLocaleString('en-KE') || 'Not specified'}
Name: ${form.name}
Email: ${form.email || 'Not provided'}
Phone: ${form.phone}
Booking for: ${form.bookingType === 'yourself' ? 'Yourself' : `${form.numberOfPeople} people`}
Planned Date: ${form.plannedDate}
Arrival Time: ${form.plannedTime}
Duration: ${form.duration} hours
Departure Time: ${departureTime}
Selected Equipment: ${form.selectedEquipment.length > 0 
  ? form.selectedEquipment.map(e => e.name).join(', ') 
  : 'None'}
Additional Message: ${form.message || 'None'}

Please respond to this booking request as soon as possible.`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form before submission
      if (!validateForm()) {
        throw new Error('Please correct the form errors');
      }

      const message = generateWhatsappMessage();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/254745798255?text=${encodedMessage}`;
      
      // Save booking details for confirmation modal
      setBookingDetails({
        service: selectedService?.label,
        price: selectedService?.price,
        date: form.plannedDate,
        time: form.plannedTime,
        duration: form.duration,
        departure: calculateDepartureTime(),
        name: form.name,
        email: form.email,
        phone: form.phone,
        equipment: form.selectedEquipment.map(e => e.name).join(', ') || 'None',
        message: form.message || 'None'
      });

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setShowSuccess(true);
      }, 800);

    } catch (error) {
      alert(error.message || 'There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      // Validate before moving to next step
      let valid = true;
      
      if (currentStep === 1) {
        if (!form.plannedDate || !form.plannedTime) {
          setFormErrors(prev => ({
            ...prev,
            plannedDate: !form.plannedDate ? 'Date is required' : '',
            plannedTime: !form.plannedTime ? 'Time is required' : ''
          }));
          valid = false;
        }
      }
      
      if (valid) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: formRef.current.offsetTop - 100, behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: formRef.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const toggleEquipment = (equipment) => {
    setForm(prev => {
      const isSelected = prev.selectedEquipment.some(e => e.name === equipment.name);
      if (isSelected) {
        return {
          ...prev,
          selectedEquipment: prev.selectedEquipment.filter(e => e.name !== equipment.name)
        };
      } else {
        return {
          ...prev,
          selectedEquipment: [...prev.selectedEquipment, equipment]
        };
      }
    });
  };

  const isDateAvailable = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return !bookedDates.includes(dateStr);
  };

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInMonth(activeMonth, activeYear);
  
  // Get month name
  const monthName = new Date(activeYear, activeMonth).toLocaleString('default', { month: 'long' });
  
  // Generate calendar event file
  const generateCalendarEvent = () => {
    if (!bookingDetails) return '';
    
    const startDateTime = new Date(`${bookingDetails.date}T${bookingDetails.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + bookingDetails.duration * 60 * 60 * 1000);
    
    const formatDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//African Masters Studio//Booking
BEGIN:VEVENT
UID:${Math.random().toString(36).substr(2, 9)}@africanmasters.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDateTime)}
DTEND:${formatDate(endDateTime)}
SUMMARY:Studio Session - ${bookingDetails.service}
DESCRIPTION:Booking at African Masters Studio\\nName: ${bookingDetails.name}\\nPhone: ${bookingDetails.phone}
LOCATION:African Masters Studio, 123 Creative Lane, Nairobi
END:VEVENT
END:VCALENDAR`;
  };

  const downloadCalendarEvent = () => {
    const icsContent = generateCalendarEvent();
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `African-Masters-Booking.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      <Helmet>
        <title>Book a Session | African Masters Studio</title>
        <meta name="description" content="Reserve your studio time at African Masters Studio for recording, mixing, or production sessions." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
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
          .step-indicator {
            position: relative;
            z-index: 1;
          }
          .step-indicator:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: #e5e7eb;
            z-index: -1;
          }
          .step-indicator .step {
            background: white;
            border: 2px solid #e5e7eb;
          }
          .step-indicator .step.active {
            border-color: #10b981;
            background: #10b981;
            color: white;
          }
          .step-indicator .step.completed {
            border-color: #10b981;
            background: #10b981;
            color: white;
          }
          .step-indicator .step-label {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }
          .step-indicator .step.completed:after,
          .step-indicator .step.active:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 100%;
            width: 100px;
            height: 2px;
            background: #10b981;
            z-index: -1;
          }
          .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
          }
        `}</style>
      </Helmet>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && bookingDetails && (
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
                <div className="mx-auto bg-gradient-to-r from-emerald-600 to-emerald-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-700 mb-3">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for booking with African Masters Studio. We've received your request and will contact you shortly to confirm your session details.
                </p>
                
                <div className="bg-emerald-50 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-emerald-600 mb-3 flex items-center justify-center">
                    <Info size={20} className="mr-2" />
                    Booking Details
                  </h3>
                  <div className="text-left text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Service:</span>
                      <span className="text-gray-800">{bookingDetails.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Price:</span>
                      <span className="text-gray-800">KSh {bookingDetails.price?.toLocaleString('en-KE')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Date:</span>
                      <span className="text-gray-800">{formatDate(bookingDetails.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Time:</span>
                      <span className="text-gray-800">{bookingDetails.time} - {bookingDetails.departure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="text-gray-800">{bookingDetails.duration} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Name:</span>
                      <span className="text-gray-800">{bookingDetails.name}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button 
                    onClick={downloadCalendarEvent}
                    className="py-3 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-300 text-emerald-700 font-medium flex items-center justify-center"
                  >
                    <Calendar size={18} className="mr-2" />
                    Add to Calendar
                  </button>
                  <a 
                    href="https://wa.me/254745798255" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium flex items-center justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Contact Studio
                  </a>
                </div>
                
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
              AM
            </div>
            <span className="ml-2 font-bold text-xl text-gray-800">AFRICAN MASTERS</span>
          </div>
          <div className="flex space-x-8">
            <a href="/" className="font-medium text-gray-600 hover:text-emerald-600 transition">Home</a>
            <a href="/services" className="font-medium text-gray-600 hover:text-emerald-600 transition">Services</a>
            <a href="#" className="font-medium text-gray-600 hover:text-emerald-600 transition">Studio</a>
            <a href="#pricing" className="font-medium text-gray-600 hover:text-emerald-600 transition">Pricing</a>
            <a href="#" className="font-medium text-emerald-600">Booking</a>
          </div>
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-emerald-800/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-emerald-600 opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-200 opacity-10"></div>
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
              Craft Your <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Sound</span> <br />With Precision
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Book studio time at African Masters Studio. Professional engineers, state-of-the-art equipment, and an inspiring creative environment.
            </motion.p>
            <motion.button
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-800 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => window.scrollTo({ top: formRef.current.offsetTop - 100, behavior: 'smooth' })}
            >
              Book Your Session Now
              <ArrowRight className="inline ml-3" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Service Selection */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4 tracking-wider">
              OUR SERVICES
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Choose Your <span className="text-emerald-600">Service</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`glass-card rounded-2xl p-6 sharp-shadow border ${
                  form.service === service.value ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServiceSelect(service)}
              >
                <div className={`p-3 rounded-xl mr-4 mb-4 bg-gradient-to-br ${service.color} text-white inline-flex`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service.label}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">
                    KSh {service.price.toLocaleString('en-KE')}
                  </span>
                  {form.service === service.value && (
                    <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                      SELECTED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4 tracking-wider">
              PREMIUM STUDIO EXPERIENCE
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Why <span className="text-emerald-600">African Masters Studio</span>
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
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-6 mb-16">
        {/* Step Indicator */}
        <div className="step-indicator flex justify-between mb-16 relative">
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="flex flex-col items-center relative">
              <div className={`step w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                currentStep >= index + 1 ? 'completed' : currentStep === index ? 'active' : ''
              }`}>
                {currentStep >= index + 1 ? <Check size={20} /> : step}
              </div>
              <span className="step-label text-sm font-medium mt-3 text-gray-600">
                {index === 0 && 'Schedule'}
                {index === 1 && 'Details'}
                {index === 2 && 'Confirm'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20" ref={formRef}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Service Info */}
          <div className="lg:col-span-1">
            {selectedService && (
              <motion.div 
                className="glass-card rounded-2xl p-6 sharp-shadow mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-xl mr-4 bg-gradient-to-br ${selectedService.color} text-white`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{selectedService.label}</h3>
                    <p className="text-gray-600 text-sm">{selectedService.description}</p>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-emerald-600">
                        KSh {selectedService.price?.toLocaleString('en-KE')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center text-emerald-600">
                    <Info size={18} className="mr-2 text-emerald-500" />
                    Service Includes
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            <motion.div 
              className="glass-card rounded-2xl p-6 sharp-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-bold text-lg flex items-center text-gray-900 mb-4">
                <MapPin size={20} className="mr-2 text-emerald-500" />
                Studio Location
              </h3>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-50 rounded-xl w-full h-48 mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center p-4">
                  <MapPin size={32} className="mx-auto text-emerald-500 mb-2" />
                  <p className="font-semibold text-gray-800">African Masters Studio</p>
                  <p className="text-gray-600">nyali breeze apartments lucky summer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-700">Address:</span> nyali breeze apartments lucky summer, Nairobi, Kenya
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-700">Hours:</span> Mon-Sat: 9AM - 10PM
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Facilities:</span> Parking, Lounge, Refreshments
              </p>
            </motion.div>
          </div>
          
          {/* Right Column - Booking Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 sharp-shadow">
              <AnimatePresence mode="wait">
                {/* Step 1: Date & Time */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Schedule Your <span className="text-emerald-600">Session</span>
                    </h2>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <label className="block mb-2 text-gray-700 font-medium">Select Date <span className="text-emerald-600">*</span></label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 text-gray-500" size={20} />
                          <input
                            type="date"
                            name="plannedDate"
                            value={form.plannedDate}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                              formErrors.plannedDate ? 'border-red-500' : 'border-gray-300'
                            } bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none`}
                            aria-label="Select date"
                          />
                          {formErrors.plannedDate && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.plannedDate}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <button 
                          onClick={() => setCalendarView(!calendarView)}
                          className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-100 text-gray-700 hover:text-gray-900 transition-all flex items-center border border-gray-200"
                          aria-label={calendarView ? "Hide calendar" : "Show calendar"}
                        >
                          {calendarView ? "Hide Calendar" : "Show Calendar"}
                          {calendarView ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
                        </button>
                      </div>
                    </div>
                    
                    {calendarView && (
                      <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-700">{monthName} {activeYear}</h3>
                          <div className="flex space-x-2">
                            <button 
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300"
                              onClick={() => {
                                if (activeMonth === 0) {
                                  setActiveYear(activeYear - 1);
                                  setActiveMonth(11);
                                } else {
                                  setActiveMonth(activeMonth - 1);
                                }
                              }}
                              aria-label="Previous month"
                            >
                              <ArrowLeft size={16} />
                            </button>
                            <button 
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300"
                              onClick={() => {
                                if (activeMonth === 11) {
                                  setActiveYear(activeYear + 1);
                                  setActiveMonth(0);
                                } else {
                                  setActiveMonth(activeMonth + 1);
                                }
                              }}
                              aria-label="Next month"
                            >
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="calendar-grid gap-1 text-center text-sm">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                            <div key={day} className="text-gray-500 py-2 font-medium">{day}</div>
                          ))}
                          
                          {days.map((day, index) => {
                            const dateStr = day.toISOString().split('T')[0];
                            const isBooked = bookedDates.includes(dateStr);
                            
                            return (
                              <button
                                key={index}
                                onClick={() => !isBooked && setForm({...form, plannedDate: dateStr})}
                                className={`p-2 rounded-lg ${
                                  form.plannedDate === dateStr 
                                    ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white' 
                                    : isBooked
                                      ? 'bg-red-100 text-red-500 cursor-not-allowed line-through' 
                                      : isDateAvailable(day) 
                                        ? 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200' 
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={isBooked || !isDateAvailable(day)}
                                aria-label={`${day.getDate()} ${isBooked ? 'Booked' : 'Available'}`}
                              >
                                {day.getDate()}
                                {isBooked && <span className="text-xs block text-red-400">Booked</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <label className="block mb-2 text-gray-700 font-medium">Start Time <span className="text-emerald-600">*</span></label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setForm({...form, plannedTime: time})}
                            className={`py-3 rounded-xl text-center transition-all font-medium ${
                              form.plannedTime === time 
                                ? 'bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg' 
                                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                            }`}
                            aria-label={`Select ${time}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      {formErrors.plannedTime && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.plannedTime}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block mb-2 text-gray-700 font-medium">Duration</label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setForm({...form, duration: Math.max(1, form.duration - 1)})}
                          className="p-2 rounded-l-lg bg-gray-100 hover:bg-gray-200 border border-gray-300"
                          aria-label="Decrease duration"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex-1 text-center py-3 bg-gray-100 border-t border-b border-gray-300">
                          <span className="text-lg font-semibold text-emerald-600">{form.duration} hour{form.duration > 1 ? 's' : ''}</span>
                        </div>
                        <button 
                          onClick={() => setForm({...form, duration: Math.min(8, form.duration + 1)})}
                          className="p-2 rounded-r-lg bg-gray-100 hover:bg-gray-200 border border-gray-300"
                          aria-label="Increase duration"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-50 rounded-xl p-5 mb-6 border border-emerald-100">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-emerald-600">Session Timing</h3>
                        <Clock size={20} className="text-emerald-500" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Start</p>
                          <p className="font-bold text-lg text-gray-800">{form.plannedTime || '--:--'}</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="h-px bg-gray-300 w-full"></div>
                          <span className="mx-2 text-gray-500">{form.duration}h</span>
                          <div className="h-px bg-gray-300 w-full"></div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">End</p>
                          <p className="font-bold text-lg text-gray-800">{form.plannedTime ? calculateDepartureTime() : '--:--'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={nextStep}
                        disabled={!form.plannedDate || !form.plannedTime}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center ${
                          !form.plannedDate || !form.plannedTime
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:shadow-lg shadow-md shadow-emerald-200'
                        }`}
                        aria-label="Continue to details"
                      >
                        Continue to Details
                        <ChevronRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 2: Personal Info */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Your <span className="text-emerald-600">Information</span>
                    </h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="block mb-2 text-gray-700 font-medium">Full Name <span className="text-emerald-600">*</span></label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl border ${
                            formErrors.name ? 'border-red-500' : 'border-gray-300'
                          } bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none`}
                          placeholder="Your name"
                          aria-label="Full name"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700 font-medium">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          } bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none`}
                          placeholder="your@gmail.com"
                          aria-label="Email address"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                        {!formErrors.email && form.email && (
                          <p className="text-sm text-gray-500 mt-1">
                            {validateEmail(form.email) 
                              ? <span className="text-emerald-600">✓ Valid Gmail address</span>
                              : 'Must be a valid Gmail address (ending with @gmail.com)'}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700 font-medium">Phone Number <span className="text-emerald-600">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl border ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          } bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none`}
                          placeholder="+254 712 345 678"
                          aria-label="Phone number"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                        {!formErrors.phone && form.phone && (
                          <p className="text-sm text-gray-500 mt-1">
                            {validatePhone(form.phone) 
                              ? <span className="text-emerald-600">✓ Valid phone number ({form.phone.replace(/\D/g, '').length} digits)</span>
                              : `Phone number must have at least 10 digits (currently ${form.phone.replace(/\D/g, '').length})`}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700 font-medium">Booking For <span className="text-emerald-600">*</span></label>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={() => setForm({...form, bookingType: 'yourself'})}
                            className={`flex items-center px-4 py-3 rounded-xl border transition-all ${
                              form.bookingType === 'yourself' 
                                ? 'bg-gradient-to-r from-emerald-100 to-emerald-100 border-emerald-400 text-gray-800' 
                                : 'bg-white border-gray-300 hover:border-emerald-400 text-gray-700'
                            }`}
                            aria-label="Book for yourself"
                          >
                            <User size={18} className="mr-2" />
                            Yourself
                          </button>
                          <button
                            type="button"
                            onClick={() => setForm({...form, bookingType: 'many'})}
                            className={`flex items-center px-4 py-3 rounded-xl border transition-all ${
                              form.bookingType === 'many' 
                                ? 'bg-gradient-to-r from-emerald-100 to-emerald-100 border-emerald-400 text-gray-800' 
                                : 'bg-white border-gray-300 hover:border-emerald-400 text-gray-700'
                            }`}
                            aria-label="Book for multiple people"
                          >
                            <Users size={18} className="mr-2" />
                            Many People
                          </button>
                        </div>
                      </div>

                      {form.bookingType === 'many' && (
                        <div>
                          <label className="block mb-2 text-gray-700 font-medium">Number of People <span className="text-emerald-600">*</span></label>
                          <input
                            type="number"
                            name="numberOfPeople"
                            min="2"
                            value={form.numberOfPeople}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            aria-label="Number of people"
                          />
                        </div>
                      )}

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-gray-700 font-medium">Special Equipment Requests</label>
                          <button 
                            onClick={() => setShowEquipmentSelector(!showEquipmentSelector)}
                            className="text-emerald-600 hover:text-emerald-500 text-sm flex items-center"
                            aria-label={showEquipmentSelector ? "Hide equipment options" : "Show equipment options"}
                          >
                            <Settings size={16} className="mr-1" />
                            {showEquipmentSelector ? "Hide Options" : "Show Options"}
                          </button>
                        </div>
                        
                        {showEquipmentSelector && (
                          <div className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
                            <div className="grid grid-cols-2 gap-3">
                              {equipmentOptions.map((equipment, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => toggleEquipment(equipment)}
                                  className={`py-2 px-3 rounded-lg text-left transition-all flex items-center ${
                                    form.selectedEquipment.some(e => e.name === equipment.name)
                                      ? 'bg-gradient-to-r from-emerald-100 to-emerald-100 border border-emerald-300'
                                      : 'bg-white border border-gray-300 hover:border-emerald-400'
                                  }`}
                                  aria-label={`Select ${equipment.name} equipment`}
                                >
                                  <div className="mr-3 bg-gray-100 p-1.5 rounded-lg">
                                    {equipment.category === "Microphone" && <Mic size={16} />}
                                    {equipment.category === "Monitors" && <Speaker size={16} />}
                                    {equipment.category === "Synth" && <Piano size={16} />}
                                    {equipment.category === "Keyboard" && <Piano size={16} />}
                                    {equipment.category === "Drums" && <Music size={16} />}
                                    {equipment.category === "Guitar" && <Music size={16} />}
                                    {equipment.category === "Software" && <Settings size={16} />}
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-800">{equipment.name}</div>
                                    <div className="text-xs text-gray-600">{equipment.category}</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700 font-medium">Additional Information</label>
                        <textarea
                          name="message"
                          rows="3"
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                          placeholder="Any special requests, equipment needs, or details about your booking..."
                          aria-label="Additional information"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-xl font-medium text-emerald-600 hover:bg-emerald-50 transition-all flex items-center border border-gray-300"
                        aria-label="Back to scheduling"
                      >
                        <ArrowLeft size={18} className="mr-2" />
                        Back to Scheduling
                      </button>
                      <button
                        onClick={nextStep}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold hover:shadow-lg transition-all shadow-md shadow-emerald-200"
                        aria-label="Review booking"
                      >
                        Review Booking
                        <ChevronRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Review & Submit */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Review Your <span className="text-emerald-600">Booking</span>
                    </h2>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-emerald-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-bold text-lg mb-4 pb-2 border-b border-emerald-200 text-emerald-600">Booking Details</h3>
                          <div className="space-y-3">
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Service:</span>
                              <span className="font-medium text-gray-800">{selectedService?.label}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Price:</span>
                              <span className="text-gray-800 font-medium">KSh {selectedService?.price?.toLocaleString('en-KE')}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Date:</span>
                              <span className="text-gray-800 font-medium">{formatDate(form.plannedDate)}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Time:</span>
                              <span className="text-gray-800 font-medium">{form.plannedTime} - {calculateDepartureTime()} ({form.duration} hours)</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Booking For:</span>
                              <span className="text-gray-800 font-medium">{form.bookingType === 'yourself' ? 'Yourself' : `${form.numberOfPeople} people`}</span>
                            </div>
                            {form.selectedEquipment.length > 0 && (
                              <div className="flex">
                                <span className="font-medium w-32 text-gray-600">Equipment:</span>
                                <div>
                                  {form.selectedEquipment.map((e, i) => (
                                    <div key={i} className="text-gray-800 text-sm font-medium">{e.name}</div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-lg mb-4 pb-2 border-b border-emerald-200 text-emerald-600">Personal Details</h3>
                          <div className="space-y-3">
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Name:</span>
                              <span className="text-gray-800 font-medium">{form.name}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Email:</span>
                              <span className="text-gray-800 font-medium">{form.email || 'Not provided'}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Phone:</span>
                              <span className="text-gray-800 font-medium">{form.phone}</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-32 text-gray-600">Message:</span>
                              <span className="text-gray-800 font-medium">{form.message || 'None'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-xl font-medium text-emerald-600 hover:bg-emerald-50 transition-all flex items-center border border-gray-300"
                        aria-label="Edit details"
                      >
                        <ArrowLeft size={18} className="mr-2" />
                        Edit Details
                      </button>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center ${
                          isSubmitting
                            ? 'bg-gray-200 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:shadow-lg shadow-md shadow-emerald-200'
                        }`}
                        aria-label="Confirm booking"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Confirm Booking
                            <ArrowRight size={20} className="ml-2" />
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>Your booking will be sent to the studio manager at <strong className="text-emerald-600">+254745798255</strong> via WhatsApp.</p>
                <p>You'll receive a confirmation call shortly after submission.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}