// src/components/Artists.js
import React, { useState } from 'react';
import { FaInstagram, FaSpotify, FaYoutube, FaSearch, FaTimes } from 'react-icons/fa';

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample artist data
  const artists = [
    { 
      id: 1, 
      name: 'Alex Rivera', 
      genre: 'Electronic', 
      location: 'Berlin, DE',
      followers: '124K',
      description: 'Blending techno with ambient textures for immersive experiences'
    },
    { 
      id: 2, 
      name: 'Sofia Chen', 
      genre: 'R&B', 
      location: 'Toronto, CA',
      followers: '89K',
      description: 'Soulful vocals meets contemporary R&B production'
    },
    { 
      id: 3, 
      name: 'Marcus Johnson', 
      genre: 'Hip-Hop', 
      location: 'Chicago, US',
      followers: '210K',
      description: 'Lyrical storytelling with jazz-inspired beats'
    },
    { 
      id: 4, 
      name: 'Elena Petrova', 
      genre: 'Classical', 
      location: 'Vienna, AT',
      followers: '64K',
      description: 'Modern interpretations of classical piano repertoire'
    },
    { 
      id: 5, 
      name: 'Kenji Tanaka', 
      genre: 'J-Pop', 
      location: 'Tokyo, JP',
      followers: '356K',
      description: 'Energetic pop with traditional Japanese influences'
    },
    { 
      id: 6, 
      name: 'Zara Ndlovu', 
      genre: 'Afrobeat', 
      location: 'Lagos, NG',
      followers: '182K',
      description: 'Contemporary Afrobeat fused with global rhythms'
    }
  ];

  const genres = ['all', 'electronic', 'r&b', 'hip-hop', 'classical', 'j-pop', 'afrobeat'];

  // Filter logic
  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artist.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || artist.genre.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Discover <span className="text-amber-600">Artists</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Explore our talented roster of creators shaping the sound of tomorrow
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-16">
          <div className="relative max-w-xl mx-auto">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="Search artists or genres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm('')}
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-all ${
                  activeFilter === genre
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setActiveFilter(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <div 
              key={artist.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image Slot */}
              <div className="relative pt-[100%] bg-gradient-to-br from-amber-100 to-amber-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {artist.followers} followers
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{artist.name}</h3>
                    <p className="text-gray-600 mt-1">{artist.genre} • {artist.location}</p>
                  </div>
                  <div className="flex space-x-3 text-gray-500">
                    <a href="#" className="hover:text-amber-600 transition-colors">
                      <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-amber-600 transition-colors">
                      <FaSpotify size={20} />
                    </a>
                    <a href="#" className="hover:text-amber-600 transition-colors">
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{artist.description}</p>
                
                {/* Audio Slot */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Featured Track</span>
                    <span className="text-xs text-gray-500">2:45</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-lg w-12 h-12" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-20">
            <div className="text-amber-500 mx-auto mb-6">
              <FaSearch size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">No artists found</h3>
            <p className="mt-2 text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <button 
              className="mt-6 px-6 py-3 bg-amber-100 hover:bg-amber-200 text-amber-700 font-medium rounded-lg transition-colors"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;