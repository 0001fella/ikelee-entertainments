import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AudioContextProvider } from './components/AudioContextProvider';
import MainLayout from './Layouts/MainLayout';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop'; // ✅ NEW

// Page Components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Studio from './components/Studio';
import Artists from './components/Artists';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/Faq';

const pageTransition = {
  initial: { opacity: 0, x: -16 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] }
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] }
  }
};

const Overlay = () => (
  <motion.div
    key="page-bg"
    className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-orange-500/10 to-amber-400/10 dark:from-gray-900/30 dark:to-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.25 } }}
    exit={{ opacity: 0, transition: { duration: 0.2 } }}
  />
);

function AnimatedRoutes() {
  const location = useLocation();

  const wrapPage = (Component) => (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <Overlay />
      <motion.div
        key={location.pathname}
        className="relative z-10 min-h-screen"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {Component}
      </motion.div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={wrapPage(<Home />)} />
          <Route path="/about" element={wrapPage(<About />)} />
          <Route path="/services" element={wrapPage(<Services />)} />
          <Route path="/studio" element={wrapPage(<Studio />)} />
          <Route path="/portfolio" element={wrapPage(<Portfolio />)} />
          
          <Route path="/booking" element={wrapPage(<Booking />)} />
          <Route path="/testimonials" element={wrapPage(<Testimonials />)} />
          <Route path="/faqs" element={wrapPage(<FAQ />)} /> {/* ✅ Fixed */}
          <Route path="/contact" element={wrapPage(<Contact />)} />
        </Route>
        <Route
          path="*"
          element={wrapPage(
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
              <div className="text-center p-8 bg-gray-800/70 backdrop-blur-lg rounded-xl border border-gray-700">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">404</h1>
                <p className="text-xl mb-6 text-gray-300">Page not found</p>
                <a href="/" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-medium hover:shadow-lg transition-all hover:from-amber-500 hover:to-orange-400">
                  Return Home
                </a>
              </div>
            </div>
          )}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AudioContextProvider>
      <Router>
        <ScrollToTop /> {/* ✅ Smooth scroll reset */}
        <AnimatedRoutes />
      </Router>
    </AudioContextProvider>
  );
}
