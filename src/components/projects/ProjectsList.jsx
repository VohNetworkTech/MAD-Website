import React from 'react';
import { BookOpen, Monitor, Briefcase, Wrench, Heart, Users, Trophy, Megaphone } from 'lucide-react';

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      icon: BookOpen,
      title: "Competitive Examination Preparation",
      subtitle: "Empowering through knowledge and opportunity",
      description: "We aim to train and educate persons with disabilities for competitive examinations such as IAS, PCS, Judiciary, Banking, and other higher education entrance tests.",
      features: [
        "Development of accessible study materials (Braille, audiobooks, digital formats)",
        "Engagement of subject experts and retired civil servants as mentors",
        "Provision of mock tests, interview preparation, and guidance sessions",
        "Career counseling to help candidates identify and pursue suitable career paths"
      ],
      color: "blue"
    },
    {
      id: 2,
      icon: Monitor,
      title: "Technology Training Programs",
      subtitle: "Bridging the digital divide",
      description: "We aspire to equip persons with disabilities with digital skills essential for education, employment, and social participation.",
      features: [
        "Basic computer literacy and internet usage training",
        "Familiarization with assistive technologies such as screen readers, magnification tools, and voice recognition software",
        "Skill development in areas like data entry, content creation, graphic design, and freelancing",
        "Awareness on safe online practices and accessing government e-services"
      ],
      color: "purple"
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Employment and Livelihood Support",
      subtitle: "Creating pathways to self-reliance",
      description: "We aim to support persons with disabilities in accessing meaningful employment and entrepreneurship opportunities.",
      features: [
        "Job readiness programs including resume writing and interview preparation",
        "Partnerships with employers to encourage inclusive hiring",
        "Mentorship for entrepreneurship and facilitation of market linkages",
        "Guidance on government self-employment and loan schemes"
      ],
      color: "green"
    },
    {
      id: 4,
      icon: Wrench,
      title: "Assistive Technology Access",
      subtitle: "Tools for independence",
      description: "We intend to promote awareness and access to assistive technologies that enhance independence.",
      features: [
        "Organization of awareness camps on available assistive devices",
        "Guidance for securing aids and appliances through government schemes",
        "Demonstration events to help individuals experience devices before acquisition"
      ],
      color: "orange"
    },
    {
      id: 5,
      icon: Heart,
      title: "Health and Wellness Initiatives",
      subtitle: "A holistic approach to well-being",
      description: "We aspire to integrate health and wellness into empowerment initiatives.",
      features: [
        "Awareness sessions on preventive healthcare, nutrition, and mental health",
        "Introduction to adaptive fitness programs and sports activities",
        "Facilitation of peer-support circles for emotional well-being"
      ],
      color: "red"
    },
    {
      id: 6,
      icon: Users,
      title: "Empowerment of Women with Disabilities",
      subtitle: "Breaking barriers, building futures",
      description: "We aim to address the unique challenges faced by women with disabilities through targeted programs.",
      features: [
        "Skill development tailored for women's entrepreneurial opportunities",
        "Awareness sessions on rights, legal protections, and personal safety",
        "Platforms for networking, mentorship, and leadership development"
      ],
      color: "pink"
    },
    {
      id: 7,
      icon: Trophy,
      title: "Sports and Cultural Activities",
      subtitle: "Celebrating talent and breaking stereotypes",
      description: "We aspire to promote inclusion and self-expression through sports and cultural engagement.",
      features: [
        "Training opportunities for para-sports",
        "Organization of inclusive cultural festivals showcasing talents in music, dance, and arts",
        "Collaboration with cultural organizations to promote accessibility"
      ],
      color: "yellow"
    },
    {
      id: 8,
      icon: Megaphone,
      title: "Awareness and Sensitization",
      subtitle: "Building an inclusive mindset",
      description: "We intend to raise awareness and encourage a more inclusive society.",
      features: [
        "Sensitization workshops for schools, colleges, and workplaces",
        "Public campaigns to promote accessibility and inclusion",
        "Observance of important disability-related days and events"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-600 to-blue-700" },
      purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-600 to-purple-700" },
      green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-600 to-green-700" },
      orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-600 to-orange-700" },
      red: { bg: "bg-red-500", light: "bg-red-50", text: "text-red-600", border: "border-red-200", gradient: "from-red-600 to-red-700" },
      pink: { bg: "bg-pink-500", light: "bg-pink-50", text: "text-pink-600", border: "border-pink-200", gradient: "from-pink-600 to-pink-700" },
      yellow: { bg: "bg-yellow-500", light: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", gradient: "from-yellow-600 to-yellow-700" },
      indigo: { bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-600 to-indigo-700" }
    };
    return colorMap[color];
  };

  return (
    <section id="projects-list" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Initiatives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Through structured programs, we aim to focus on bridging gaps in accessibility, providing learning opportunities, and promoting inclusion across various sectors.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              const colors = getColorClasses(project.color);
              
              return (
                <div key={project.id} className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-lg font-semibold ${colors.text} mb-3`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {project.description}
                    </p>
                    
                    {/* Features List */}
                    <div className={`${colors.light} rounded-xl p-4 border ${colors.border}`}>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ProjectsList;