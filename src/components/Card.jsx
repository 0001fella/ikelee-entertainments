import React from 'react';

export default function Card({ title, img, desc }) {
  return (
    <div className="max-w-sm text-center">
      <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-400 text-sm">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        ) : (
          'Image Slot'
        )}
      </div>
      <h3 className="text-red-600 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
