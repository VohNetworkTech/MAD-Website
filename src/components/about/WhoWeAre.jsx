// src/components/about/WhoWeAre.jsx
import React from 'react';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">MAD Foundation</span> (My Action for the Disabled Foundation) is a non-profit organization committed to the empowerment of persons with disabilities by fostering education, skill development, employment, livelihood, assistive technology, healthcare, accessibility, and advocacy.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
Founded by passionate individuals, MAD Foundation envisions a world where disability is not a barrier to growth, success, and independence.              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
Through structured programs and initiatives, MAD Foundation creates pathways for persons with disabilities to lead self-reliant and dignified lives. With a strong focus on education, employment, livelihood, skill-development, accessibility, and holistic development, we strive to eliminate barriers and build an inclusive society.              </p>

             
            </div>

            {/* Image and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="MAD Foundation team working with persons with disabilities"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;