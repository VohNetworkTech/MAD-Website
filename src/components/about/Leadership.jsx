// src/components/about/Leadership.jsx
import React from 'react';
import { User, Award, Heart, Users } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Naveen Nishchal",
      position: "President",
      description: "A medical professional dedicated to disability rights and empowerment.",
      icon: Award,
      color: "blue"
    },
    {
      name: "Runa Arora",
      position: "General Secretary", 
      description: "A social activist committed to fostering opportunities for persons with disabilities.",
      icon: Heart,
      color: "pink"
    },
    {
      name: "Sara Chawla",
      position: "Joint Secretary",
      description: "A legal expert working on disability rights and policy inclusion.",
      icon: Users,
      color: "purple"
    },
    {
      name: "Shubham Kumar",
      position: "Joint Secretary",
      description: "A committed banking professional and disability rights advocate. Currently serving as an Assistant Manager at Union Bank of India, he brings both administrative experience and grassroots insight to the MAD Foundation.",
      additionalInfo: "In addition to his work with MAD Foundation, Shubham serves as the Chandigarh State Coordinator for the All India Chess Federation for the Blind (AICFB), promoting accessible sports and intellectual development for persons with visual impairments.",
      icon: User,
      color: "green"
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
      pink: { 
        bg: "bg-pink-500", 
        light: "bg-pink-50", 
        text: "text-pink-600", 
        border: "border-pink-200",
        gradient: "from-pink-600 to-pink-700"
      },
      purple: { 
        bg: "bg-purple-500", 
        light: "bg-purple-50", 
        text: "text-purple-600", 
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700"
      },
      green: { 
        bg: "bg-green-500", 
        light: "bg-green-50", 
        text: "text-green-600", 
        border: "border-green-200",
        gradient: "from-green-600 to-green-700"
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated leadership team brings together diverse expertise and unwavering commitment to disability rights and empowerment.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => {
              const IconComponent = leader.icon;
              const colors = getColorClasses(leader.color);
              
              return (
                <div key={index} className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${colors.border} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {leader.name}
                      </h3>
                      <p className={`text-lg font-semibold ${colors.text} mb-2`}>
                        {leader.position}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {leader.description}
                    </p>
                    
                    {leader.additionalInfo && (
                      <div className={`${colors.light} rounded-xl p-4 border ${colors.border}`}>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {leader.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              );
            })}
          </div>

          {/* Team Values */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Leadership Values</h3>
              <p className="text-gray-600">The principles that guide our leadership team</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Compassion</h4>
                <p className="text-sm text-gray-600">Leading with empathy and understanding</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Striving for the highest standards</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600">Working together for greater impact</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Transparency in all our actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;