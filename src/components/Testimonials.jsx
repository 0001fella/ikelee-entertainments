import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amara Daniels",
    role: "Independent Artist",
    quote: "Ikele Studios brought my vision to life — the audio quality was industry-grade, and the team was amazing to work with."
  },
  {
    name: "Liam Oketch",
    role: "Music Producer",
    quote: "Their mixing and mastering elevated my sound beyond expectations. This studio is a creative powerhouse."
  },
  {
    name: "Keisha N.",
    role: "Photographer & Visual Artist",
    quote: "Professional, passionate, and precise. From booking to final delivery, everything was smooth and high-quality."
  },
  {
    name: "Tunde Williams",
    role: "Recording Artist",
    quote: "The acoustics are incredible and the engineers really understand how to bring out the best in every performance."
  },
  {
    name: "Sarah Johnson",
    role: "Podcast Producer",
    quote: "Perfect environment for recording - quiet, professional, and equipped with everything we needed."
  },
  {
    name: "Marcus Chen",
    role: "Film Composer",
    quote: "The attention to detail in their mixing process is unparalleled. My scores have never sounded better."
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-6">
      <Helmet>
        <title>Testimonials | Ikele Studios</title>
        <meta name="description" content="Hear from artists, producers, and creatives who've worked with Ikele Studios." />
      </Helmet>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">Clients Say</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Real stories from real creatives who trust Ikele Studios with their sound and vision.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Quote className="text-blue-400 mb-4" size={24} />
            <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-lg font-bold text-gray-800">{t.name}</h4>
              <p className="text-teal-600 text-sm font-medium">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to experience Ikele Entertainments?</h3>
        <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all shadow-md">
          Book Your Session
        </button>
      </motion.div>
    </div>
  );
}