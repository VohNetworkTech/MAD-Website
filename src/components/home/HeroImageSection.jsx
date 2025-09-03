import React from 'react';

const HeroImageSection = () => {
  return (
    <section className="relative h-[100vh] sm:h-[90vh] min-h-[600px] sm:min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src= "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756901442584%3A0.9147638741540076.png" 
          alt="People with disabilities engaging in various activities, showcasing inclusion and empowerment"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Enhanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        {/* Additional overlay for mobile to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 sm:bg-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Quote Section */}
          <div className="mb-6 sm:mb-8">
            {/* Opening Quote Mark */}
            <div className="text-4xl sm:text-6xl md:text-8xl text-white/20 font-serif leading-none mb-2 sm:mb-4">
              "
            </div>
            
            {/* Main Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed sm:leading-relaxed md:leading-relaxed mb-2 sm:mb-4 px-2 sm:px-4">
              Let us work together towards building a world where every person has the opportunity to thrive, regardless of their abilities.
            </blockquote>
            
            {/* Closing Quote Mark */}
            <div className="text-4xl sm:text-6xl md:text-8xl text-white/20 font-serif leading-none transform rotate-180 inline-block">
              "
            </div>
          </div>

          {/* Optional CTA Button - uncomment if needed */}
          {/* 
          <div className="mt-8 sm:mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
          */}
        </div>
      </div>

      {/* Responsive Decorative Elements */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-8 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-indigo-500/20 rounded-full blur-lg"></div>
      
      {/* Additional mobile decorative elements */}
      <div className="absolute top-1/4 left-2 w-8 h-8 bg-purple-500/15 rounded-full blur-md sm:hidden"></div>
      <div className="absolute bottom-1/4 left-8 w-14 h-14 bg-cyan-500/15 rounded-full blur-lg sm:hidden"></div>

      {/* Scroll Indicator - Optional */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroImageSection;