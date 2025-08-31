import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] lg:min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Pattern - Hidden on very small screens */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-8 sm:w-16 h-8 sm:h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-10 sm:w-20 h-10 sm:h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                MAD Foundation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
              My Action for the Disabled Foundation - Empowering lives through action, creating opportunities for all
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Heart className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-red-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Empowerment</div>
              <div className="text-sm sm:text-base text-blue-200 leading-relaxed">
                Through education & skill development
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Inclusion</div>
              <div className="text-sm sm:text-base text-blue-200 leading-relaxed">
                Building barriers-free society for all
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <Target className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Independence</div>
              <div className="text-sm sm:text-base text-blue-200 leading-relaxed">
                Creating pathways to self-reliant lives
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;