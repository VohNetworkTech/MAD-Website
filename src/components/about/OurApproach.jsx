// src/components/about/OurApproach.jsx
import React from 'react';
import { BookOpen, Briefcase, Accessibility, Megaphone } from 'lucide-react';

const OurApproach = () => {
  const approaches = [
    {
      icon: BookOpen,
      title: "Education & Skill Development",
      description: "Equipping individuals with knowledge and practical skills.",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Employment & Livelihood", 
      description: "Connecting talent with meaningful career opportunities.",
      color: "green"
    },
    {
      icon: Accessibility,
      title: "Accessibility & Assistive Technology",
      description: "Ensuring environments and tools are inclusive.",
      color: "purple"
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description: "Driving policy-level and community-based changes.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { 
        bg: "bg-blue-500", 
        light: "bg-blue-50", 
        text: "text-blue-600", 
        border: "border-blue-200",
        gradient: "from-blue-600 to-blue-700"
      },
      green: { 
        bg: "bg-green-500", 
        light: "bg-green-50", 
        text: "text-green-600", 
        border: "border-green-200",
        gradient: "from-green-600 to-green-700"
      },
      purple: { 
        bg: "bg-purple-500", 
        light: "bg-purple-50", 
        text: "text-purple-600", 
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700"
      },
      orange: { 
        bg: "bg-orange-500", 
        light: "bg-orange-50", 
        text: "text-orange-600", 
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700"
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At MAD Foundation, we believe that empowerment comes through action and opportunity. Our approach focuses on creating sustainable change through collaborative efforts.
            </p>
          </div>

          {/* Approach Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              const colors = getColorClasses(approach.color);
              
              return (
                <div key={index} className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${colors.light} rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {approach.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              );
            })}
          </div>

          {/* Collaboration Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work through strategic collaborations to bring sustainable change and maximize our impact across communities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Institutions</h4>
                <p className="text-sm text-gray-600">Educational and training partners</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Corporates</h4>
                <p className="text-sm text-gray-600">Employment and CSR partners</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Policymakers</h4>
                <p className="text-sm text-gray-600">Government and policy advocates</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Accessibility className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Communities</h4>
                <p className="text-sm text-gray-600">Local support networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;