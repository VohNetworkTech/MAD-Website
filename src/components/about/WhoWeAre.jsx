// src/components/about/WhoWeAre.jsx
import React from 'react';
import { MapPin, Calendar, Globe } from 'lucide-react';

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
                <span className="font-semibold text-blue-600">MAD Foundation</span> (My Action for the Disabled Foundation) is a non-profit organization committed to the empowerment of persons with disabilities by fostering inclusive education, skill development, employment, livelihood, assistive technology, healthcare, accessibility, and advocacy.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded by passionate individuals, MAD Foundation envisions a world where disability is not a barrier to growth, success, and independence. Through structured programs and initiatives, we create pathways for persons with disabilities to lead self-reliant and dignified lives.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong focus on education, employment, accessibility, and holistic development, we strive to eliminate barriers and build an inclusive society where everyone has equal opportunities to thrive.
              </p>

              {/* Key Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Founded</p>
                      <p className="text-sm text-gray-600">September 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-600">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Jurisdiction</p>
                      <p className="text-sm text-gray-600">Pan-India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
                  alt="MAD Foundation team working with persons with disabilities"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Location Info */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Operations</h3>
                    <p className="text-gray-700 mb-4">
                      MAD Foundation is a <span className="font-semibold">Delhi-based organization</span> with Pan-India jurisdiction. At present, most of our operations are managed from <span className="font-semibold text-purple-600">Chandigarh, Mohali, and Panchkula</span>.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-purple-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Remote Support:</span> Many activities can be supported remotely, enabling volunteers and interns from across the country to contribute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;