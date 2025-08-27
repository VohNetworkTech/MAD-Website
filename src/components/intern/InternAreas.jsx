import React from 'react';
import { Search, FileText, Calendar, Megaphone, Monitor } from 'lucide-react';

const InternAreas = () => {
  const areas = [
    {
      icon: Search,
      title: "Research & Policy Analysis",
      description: "Assist in researching disability laws, accessibility policies, and government schemes to strengthen advocacy efforts.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Content Development & Digital Accessibility",
      description: "Create educational content, accessible study materials, and awareness campaigns to enhance outreach.",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Event & Workshop Coordination",
      description: "Help organize training sessions, networking events, and empowerment workshops focused on skill development and inclusion.",
      color: "purple"
    },
    {
      icon: Megaphone,
      title: "Social Media & Awareness Campaigns",
      description: "Assist in managing social media platforms, writing blogs, and running awareness campaigns to promote disability rights and inclusion.",
      color: "orange"
    },
    {
      icon: Monitor,
      title: "Assistive Technology & Digital Inclusion",
      description: "Support in testing, researching, and implementing assistive technologies that help persons with disabilities navigate education and employment more effectively.",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-600 to-blue-700" },
      green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-600 to-green-700" },
      purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-600 to-purple-700" },
      orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-600 to-orange-700" },
      red: { bg: "bg-red-500", light: "bg-red-50", text: "text-red-600", border: "border-red-200", gradient: "from-red-600 to-red-700" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas Where Interns Can Contribute</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer internships in various fields depending on your interests and expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              const colors = getColorClasses(area.color);
              
              return (
                <div key={index} className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${colors.light} rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                  
                  <div className={`absolute top-6 right-6 w-8 h-8 ${colors.light} rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                    <span className={`text-sm font-bold ${colors.text}`}>{index + 1}</span>
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

export default InternAreas;