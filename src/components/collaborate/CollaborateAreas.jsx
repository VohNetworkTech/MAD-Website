import React from 'react';
import { CheckCircle, GraduationCap, Briefcase, Smartphone, Heart, Users } from 'lucide-react';

const CollaborateAreas = () => {
  const collaborationAreas = [
    {
      icon: GraduationCap,
      title: "Education & Competitive Exam Preparation",
      description: "Providing accessible learning resources and coaching support.",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Skill Development & Livelihood Initiatives",
      description: "Creating employment and entrepreneurial opportunities.",
      color: "green"
    },
    {
      icon: Smartphone,
      title: "Assistive Technology & Accessibility",
      description: "Promoting innovation and digital inclusion.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Healthcare & Rehabilitation Support",
      description: "Strengthening health and wellness initiatives for persons with disabilities.",
      color: "red"
    },
    {
      icon: Users,
      title: "Advocacy & Awareness Campaigns",
      description: "Driving policy-level changes and community-based inclusion.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-600 to-blue-700" },
      green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-600 to-green-700" },
      purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-600 to-purple-700" },
      red: { bg: "bg-red-500", light: "bg-red-50", text: "text-red-600", border: "border-red-200", gradient: "from-red-600 to-red-700" },
      orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-600 to-orange-700" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Areas of Collaboration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We welcome partnerships with corporates, NGOs, government bodies, and institutions in the following areas:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {collaborationAreas.map((area, index) => {
              const IconComponent = area.icon;
              const colors = getColorClasses(area.color);
              
              return (
                <div key={index} className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${colors.light} rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateAreas;