import React from 'react';
import { Bell, Calendar, Newspaper, Megaphone } from 'lucide-react';

const NewsHero = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] lg:min-h-[70vh] overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      {/* Background Pattern - Hidden on very small screens */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div className="absolute top-16 sm:top-32 left-6 sm:left-24 w-12 sm:w-24 h-12 sm:h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-10 sm:top-20 right-8 sm:right-32 w-16 sm:w-32 h-16 sm:h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/3 w-8 sm:w-16 h-8 sm:h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-12 sm:bottom-24 right-6 sm:right-24 w-10 sm:w-20 h-10 sm:h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">What's New</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-100 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
              Stay updated with My Action for the Disabled Foundation - latest programs, success stories, and important announcements
            </p>
          </div>

          {/* News Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Bell className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Latest</div>
              <div className="text-sm sm:text-base text-orange-200">Updates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Calendar className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Upcoming</div>
              <div className="text-sm sm:text-base text-orange-200">Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Newspaper className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">News</div>
              <div className="text-sm sm:text-base text-orange-200">& Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Megaphone className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Impact</div>
              <div className="text-sm sm:text-base text-orange-200">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;