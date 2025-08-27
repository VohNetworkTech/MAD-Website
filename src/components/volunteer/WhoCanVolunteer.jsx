import React from 'react';
import { GraduationCap, Users, Monitor, Heart, CheckCircle, Award, Globe, Clock } from 'lucide-react';

const WhoCanVolunteer = () => {
  const whoCanVolunteer = [
    {
      icon: GraduationCap,
      title: "Students & Professionals",
      description: "Gain experience while making a social impact",
      color: "blue"
    },
    {
      icon: Users,
      title: "Educators & Trainers",
      description: " Share your expertise in teaching, mentorship, and skill-building",
      color: "green"
    },
    {
      icon: Monitor,
      title: "Tech & Accessibility Enthusiasts",
      description: "Support initiatives related to assistive technology and digital inclusion",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Anyone Willing to Make a Difference",
      description: "Passion and commitment matter most",
      color: "red"
    }
  ];

  const whyVolunteer = [
    {
      icon: CheckCircle,
      title: "Make a Real Difference",
      description: "Contribute towards empowering persons with disabilities"
    },
    {
      icon: Award,
      title: "Gain Valuable Experience",
      description: "Work on projects that enhance your skills and knowledge"
    },
    {
      icon: Globe,
      title: " Be Part of a Like-Minded Community",
      description: "Connect with passionate individuals and experts in the field  of disability inclusion"
    },
    {
      icon: Clock,
      title: "Flexible Opportunities",
      description: "Engage in initiatives that align with your availability"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { gradient: "from-blue-600 to-blue-700", light: "bg-blue-50", text: "text-blue-600" },
      green: { gradient: "from-green-600 to-green-700", light: "bg-green-50", text: "text-green-600" },
      purple: { gradient: "from-purple-600 to-purple-700", light: "bg-purple-50", text: "text-purple-600" },
      red: { gradient: "from-red-600 to-red-700", light: "bg-red-50", text: "text-red-600" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Who Can Volunteer */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Can Volunteer?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoCanVolunteer.map((item, index) => {
                const IconComponent = item.icon;
                const colors = getColorClasses(item.color);
                
                return (
                  <div key={index} className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-3">
                      <CheckCircle className={`w-5 h-5 ${colors.text} mx-auto`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Volunteer */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Volunteer with Us?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyVolunteer.map((reason, index) => {
                const IconComponent = reason.icon;
                
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanVolunteer;