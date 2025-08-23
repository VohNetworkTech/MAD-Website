import React from 'react';


const HeroImageSection = () => {


  return (
    <section className="relative h-[90vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
          alt="People with disabilities engaging in various activities, showcasing inclusion and empowerment"
          className="w-full h-full object-cover"
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
              Together, we're building a world where every person has the opportunity to thrive, regardless of their abilities.
            </blockquote>
            <div className="text-6xl md:text-8xl text-white/20 font-serif leading-none rotate-180">"</div>
          </div>

          {/* Statistics or Call to Action */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Programs Running</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years of Impact</div>
            </div>
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