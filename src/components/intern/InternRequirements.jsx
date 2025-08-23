import React from 'react';
import { Users, Clock, Heart, MessageSquare } from 'lucide-react';

const InternRequirements = () => {
  const requirements = [
    {
      icon: Users,
      title: "Open to All",
      description: "Students, graduates, and professionals from all fields are welcome to apply"
    },
    {
      icon: Clock,
      title: "Minimum Duration",
      description: "4 weeks minimum (flexible based on project requirements)"
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "Dedication to disability inclusion and social impact"
    },
    {
      icon: MessageSquare,
      title: "Skills",
      description: "Strong communication and teamwork abilities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Internship Requirements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Simple requirements to join our internship program and make a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => {
              const IconComponent = req.icon;
              
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
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

export default InternRequirements;