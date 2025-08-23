// src/components/volunteer/VolunteerContent.jsx
import React from 'react';
import { MapPin,  Globe, Users, Target, Heart } from 'lucide-react';

const VolunteerContent = () => {
  return (
    <section id="volunteer-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer with MAD Foundation?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At My Action for the Disabled Foundation (MAD Foundation), we believe that real change happens when passionate individuals come together to take action. By volunteering with us, you can contribute towards inclusive education, skill development, employment, accessibility, assistive technology, and advocacy for persons with disabilities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you have time, skills, or expertise to offer, there are many ways to get involved. As a volunteer, you will have the opportunity to support meaningful projects, engage in impactful activities, and help build an inclusive society.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Target className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Support meaningful projects and impactful activities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Help build an inclusive society for persons with disabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Heart className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Contribute your time, skills, and expertise flexibly</p>
                </div>
              </div>
            </div>

            {/* Organization Info */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
                  alt="Volunteers working with persons with disabilities in inclusive activities"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Organization Details */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Our Operations</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Founded in <span className="font-semibold">September 2024</span>, MAD Foundation is a Delhi-based organization with Pan-India jurisdiction. At present, most of our operations are managed from <span className="font-semibold text-blue-600">Chandigarh, Mohali, and Panchkula</span>, where we are actively working on projects and initiatives.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-700">Remote Support:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Many activities can be supported remotely, enabling individuals from any part of the country to volunteer with us.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-700">Local Support:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          For certain physical events and programs, especially those organized in Chandigarh, Mohali and Panchkula, we may require local volunteers for on-ground support.
                        </p>
                      </div>
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

export default VolunteerContent;