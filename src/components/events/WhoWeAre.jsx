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
                <span className="font-semibold text-blue-600">At MAD Foundation,</span> we believe that lasting change comes through action. Our events and campaigns bring together persons with disabilities, professionals, educators, policymakers, and the community to inspire, empower, and build a more inclusive society.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
Through workshops, awareness drives, cultural programs, and training sessions, we create platforms that not only provide opportunities but also spark conversations on accessibility, empowerment, and equal participation. </p>             
            </div>

            {/* Image and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756898683935%3A0.5804744744404398.png" 
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