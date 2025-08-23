import React from 'react';
import { MapPin, Globe, Users, Target, Heart, GraduationCap } from 'lucide-react';

const InternContent = () => {
  return (
    <section id="intern-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Launch Your Career with Purpose</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you looking for an opportunity to gain hands-on experience, contribute to a meaningful cause, and develop new skills? My Action for the Disabled Foundation (MAD Foundation) offers internship opportunities for students and professionals who want to support inclusive education, skill development, employment, assistive technology, and advocacy for persons with disabilities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As an intern, you will work on impactful projects that enhance accessibility, drive research, raise awareness, and contribute to real change. Whether you are a student, a fresh graduate, or a professional looking to contribute your skills, this internship will provide you with valuable learning experiences while making a difference.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Target className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Work on impactful projects that enhance accessibility</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <GraduationCap className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Gain valuable learning experiences in disability advocacy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Heart className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Contribute to research and awareness initiatives</p>
                </div>
              </div>
            </div>

            {/* Organization Info */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Interns collaborating on projects with mentors in a professional environment"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Organization Details */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Internship Locations</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Founded in <span className="font-semibold">September 2024</span>, MAD Foundation is a Delhi-based organization with Pan-India jurisdiction. At present, most of our operations are managed from <span className="font-semibold text-blue-600">Chandigarh, Mohali, and Panchkula</span>, where we are actively working on projects and initiatives.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-700">Remote Internships:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Many activities can be supported remotely, enabling individuals from any part of the country to intern with us.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-700">On-site Opportunities:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          For certain physical events and programs, especially those organized in Chandigarh, Mohali and Panchkula, we may require local interns for on-ground support.
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

export default InternContent;