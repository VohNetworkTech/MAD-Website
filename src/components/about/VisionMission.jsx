// src/components/about/VisionMission.jsx
import React from 'react';
import { Eye, Target, CheckCircle } from 'lucide-react';

const VisionMission = () => {
  const missionPoints = [
    "To empower persons with disabilities through education, skill development, and employment opportunities.",
    "To promote accessibility in physical spaces, digital platforms, and workplaces.",
    "To advocate for disability rights and inclusion in policy-making and governance.",
    "To support assistive technology innovations that enhance independence and mobility.",
    "To foster holistic development through healthcare, rehabilitation, and cultural engagement."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To create an inclusive society where persons with disabilities have equal access to education, employment, healthcare, and opportunities for growth, ensuring dignity, independence, and empowerment.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">E</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Education</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">E</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Employment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold">E</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Empowerment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;