// src/components/about/WhoWeAre.jsx
import React from 'react';

const Overview = () => {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">MAD Foundation</span>  is committed to empowering persons with disabilities through education, skill development, employment, livelihood, assistive technology, healthcare, accessibility, and advocacy. Through our initiatives we aspire to create real, sustainable impact, ensuring that individuals have the resources, training, and opportunities to lead independent and dignified lives.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
Through structured programs, we aim to focus on bridging gaps in accessibility, providing learning opportunities, and promoting inclusion across various sectors.  </p>

              <p className="text-lg text-gray-700 leading-relaxed">
We aim to develop and implement these initiatives in collaboration with individuals, institutions, and government bodies.     </p>

             
            </div>

            {/* Image and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756593996507%3A0.4679869635056475.png" 
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

export default Overview;