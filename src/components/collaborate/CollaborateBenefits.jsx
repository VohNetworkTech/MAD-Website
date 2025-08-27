import React from 'react';
import { CheckCircle, TrendingUp, Network, Target } from 'lucide-react';

const CollaborateBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Social Impact",
      description: "Be part of meaningful change in disability empowerment.",
      color: "blue"
    },
    {
      icon: Network,
      title: "Access to a Growing Network",
      description: "Connect with like-minded organizations and changemakers.",
      color: "green"
    },
    {
      icon: Target,
      title: "Contribute to Policy & Innovation",
      description: "Help drive inclusive policies and technological advancements.",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-600 to-blue-700" },
      green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-600 to-green-700" },
      purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-600 to-purple-700" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner with MAD Foundation?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const colors = getColorClasses(benefit.color);
              
              return (
                <div key={index} className={`group bg-gradient-to-br ${colors.light} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-full -mr-16 -mt-16 opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
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

export default CollaborateBenefits;