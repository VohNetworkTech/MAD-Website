import React from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Lives, <span className="text-blue-600">Creating Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            My Action for the Disabled Foundation (MAD Foundation) is dedicated to transforming the lives of persons with disabilities by fostering inclusive education, skill development, employment, livelihood, advocacy, and accessibility. We believe in action, empowerment, and creating equal opportunities for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Volunteer with Us
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
              <Heart className="w-5 h-5 inline mr-2" />
              Donate Now
            </button>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Internships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;