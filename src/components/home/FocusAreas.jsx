import React from 'react';
import { Users, Briefcase, Accessibility, Heart } from 'lucide-react';

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Advancing inclusive education and skill development for persons with disabilities",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Employment",
      description: "Creating pathways for employment and sustainable livelihoods",
      color: "green"
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Promoting accessibility and inclusion in all areas of life",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Supporting healthcare, rehabilitation, and overall well-being",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
          <p className="text-xl text-gray-600">Creating comprehensive support for persons with disabilities</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            const colors = getColorClasses(area.color);
            
            return (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} rounded-full -mr-10 -mt-10 opacity-50`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6 mx-auto relative z-10`}>
                  <IconComponent className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;