import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Lives, <span className="text-blue-600">Creating Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600  leading-relaxed">
            MAD Foundation (My Action for the Disabled Foundation) is dedicated to transforming the lives of persons with disabilities by advancing education (with a strong focus on higher education), skill development, employment, livelihood, healthcare, assistive technology, accessibility, sports & culture, and overall empowerment. Through action, advocacy, and innovation, we strive to create equal opportunities and enable full participation in every sphere of life.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;