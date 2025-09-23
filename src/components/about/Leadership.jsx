// src/components/about/Leadership.jsx
import React from 'react';
import { User, Award, Heart, Users } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Naveen Nishchal",
      position: "Chairperson",
      description: "Dr. Naveen Nishchal, a medical professional, serves as the Chairperson of MAD Foundation. With his vision and compassionate leadership, the Foundation continues to design and implement initiatives that advance disability empowerment and create lasting impact.",
      icon: Award,
      color: "blue"
    },
    {
      name: "Runa Arora",
      position: "Executive Director", 
      description: "As Executive Director, Runa Arora provides dynamic leadership to MAD Foundation’s mission and programs. Guided by a strong commitment to social change, she works to expand opportunities for persons with disabilities and ensure that every initiative of the Foundation translates into meaningful progress.",
      icon: Heart,
      color: "pink"
    },
    {
      name: "Sara Chawla",
      position: "Chief Program and Strategy Officer",
      description: "Sara Chawla serves as the Chief Program and Strategy Officer, where she guides the Foundation’s program development and long-term strategy. With her legal expertise and passion for equity, she ensures that every initiative aligns with the Foundation’s mission, advancing opportunities and creating meaningful impact for persons with disabilities.",
      icon: Users,
      color: "purple"
    },
    {
      name: "Garima Narula",
      position: "Director, Communication and Community Outreach",
      description: "Garima Narula serves as the Director of Communication and Community Outreach at MAD Foundation. She leads the Foundation’s efforts to amplify its mission, build meaningful partnerships, and connect with diverse communities. With her strong communication skills and commitment to inclusion, Garima works to ensure that the voices and aspirations of persons with disabilities are heard, respected, and acted upon. Through her role, she fosters awareness, engagement, and collaboration that strengthen the impact of the Foundation’s initiatives.",
      icon: Users,
      color: "purple"
    },
    {
      name: "Subham Kumar",
      position: "Director, Sports and Inclusion",
      description: "As Director of Sports and Inclusion at MAD Foundation, Subham Kumar champions the use of sports as a catalyst for empowerment. He works to build accessible pathways that enable persons with disabilities to participate, compete, and thrive, fostering inclusion through the spirit of sport",
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

          
        </div>
      </div>
    </section>
  );
};

export default Leadership;