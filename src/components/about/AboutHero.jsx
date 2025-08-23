// src/components/about/AboutHero.jsx
import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const AboutHero = () => {
  

  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MAD Foundation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              My Action for the Disabled Foundation - Empowering lives through action, creating opportunities for all
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Founded</div>
              <div className="text-blue-200">September 2024</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Pan-India</div>
              <div className="text-blue-200">Jurisdiction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Delhi</div>
              <div className="text-blue-200">Based</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </button> */}
      </div>
    </section>
  );
};

export default AboutHero;