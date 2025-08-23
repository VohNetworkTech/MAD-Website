import React from 'react';
import { Award, Users, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const WhyIntern = () => {
  const benefits = [
    {
      icon: Award,
      title: "Work on Meaningful Projects",
      description: "Gain experience in a cause that promotes inclusion",
      color: "blue"
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Improve leadership, communication, research, and advocacy skills",
      color: "green"
    },
    {
      icon: Users,
      title: "Mentorship & Guidance",
      description: "Learn from experienced professionals in the field",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Flexible Work Opportunities",
      description: "Contribute based on your availability and area of expertise",
      color: "orange"
    },
    {
      icon: CheckCircle,
      title: "Certificate of Internship",
      description: "Get recognized for your contributions",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { gradient: "from-blue-600 to-blue-700", light: "bg-blue-50", text: "text-blue-600" },
      green: { gradient: "from-green-600 to-green-700", light: "bg-green-50", text: "text-green-600" },
      purple: { gradient: "from-purple-600 to-purple-700", light: "bg-purple-50", text: "text-purple-600" },
      orange: { gradient: "from-orange-600 to-orange-700", light: "bg-orange-50", text: "text-orange-600" },
      red: { gradient: "from-red-600 to-red-700", light: "bg-red-50", text: "text-red-600" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Intern with Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for an internship that combines meaningful work with professional growth and skill development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const colors = getColorClasses(benefit.color);
              
              return (
                <div key={index} className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="mt-4">
                    <CheckCircle className={`w-5 h-5 ${colors.text} mx-auto`} />
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

export default WhyIntern;