import React from 'react';
import { Target, Users, Handshake, BarChart } from 'lucide-react';

const OurApproach = () => {
  const approachSteps = [
    {
      icon: Target,
      title: "Careful Design",
      description: "We carefully design each project with clear objectives and measurable outcomes.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Resource Mobilization",
      description: "Securing necessary resources and building the right team for implementation.",
      color: "green"
    },
    {
      icon: Handshake,
      title: "Partnership Building",
      description: "Creating strategic alliances with institutions, corporates, and government agencies.",
      color: "purple"
    },
    {
      icon: BarChart,
      title: "Measurable Impact",
      description: "Ensuring our initiatives are realistic, measurable, and create lasting impact.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-600 to-blue-700" },
      green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", gradient: "from-green-600 to-green-700" },
      purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-600 to-purple-700" },
      orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", gradient: "from-orange-600 to-orange-700" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MAD Foundation takes a step-by-step, partnership-driven approach — carefully designing each project, securing resources, and building alliances before implementation.
            </p>
          </div>

          {/* Approach Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {approachSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colors = getColorClasses(step.color);
              
              return (
                <div key={index} className="group text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Step number */}
                  <div className={`w-8 h-8 ${colors.light} rounded-full flex items-center justify-center mx-auto mt-4 border-2 ${colors.text.replace('text-', 'border-')}`}>
                    <span className={`text-sm font-bold ${colors.text}`}>{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Building for the Future</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
As a young organization, we are in the process of building networks, mobilizing resources, and setting up the necessary infrastructure to bring them to life. We welcome collaboration with individuals, institutions, corporates, and government agencies who share our vision. Together, we can ensure that persons with disabilities are not just included, but fully empowered to participate in every sphere of life.            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <p className="text-blue-800 font-semibold">
                Together, we can ensure that persons with disabilities are not just included, but fully empowered to participate in every sphere of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;