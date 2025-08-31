import React from 'react';


const HeroImageSection = () => {


  return (
    <section className="relative h-[90vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756593470091%3A0.33898842339057.png" 
          alt="People with disabilities engaging in various activities, showcasing inclusion and empowerment"
          className="w-full h-full object-contain"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="mb-8">
            <div className="text-6xl md:text-8xl text-white/20 font-serif leading-none mb-4">"</div>
            <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-4">
              Let us work together towards building a world where every person has the opportunity to thrive, regardless of their abilities.
            </blockquote>
            <div className="text-6xl md:text-8xl text-white/20 font-serif leading-none rotate-180">"</div>
          </div>

          
        </div>

        
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroImageSection;