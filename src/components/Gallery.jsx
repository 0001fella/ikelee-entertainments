import React from 'react';

const images = [
  // Placeholder slots for images — update `src` values later
  { id: 1, src: '/images/studio/placeholder1.jpg', alt: 'Studio shot 1' },
  { id: 2, src: '/images/studio/placeholder2.jpg', alt: 'Studio shot 2' },
  { id: 3, src: '/images/studio/placeholder3.jpg', alt: 'Studio shot 3' },
  { id: 4, src: '/images/studio/placeholder4.jpg', alt: 'Studio shot 4' },
];

const Gallery = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Studio Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
