import React from 'react';
import { Star, Calendar, Users, Award } from 'lucide-react';

const FeaturedMoments = () => {
  const featuredMoments = [
    {
      id: 1,
      title: "Inclusive Education Workshop",
      description: "Training session for educators on accessibility and inclusive teaching methods",
      date: "December 2024",
      type: "Workshop",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      id: 2,
      title: "Assistive Technology Demo",
      description: "Demonstration of latest assistive technologies for persons with disabilities",
      date: "November 2024",
      type: "Event",
      icon: Star,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      id: 3,
      title: "Employment Success Stories",
      description: "Celebrating individuals who secured employment through our programs",
      date: "October 2024",
      type: "Achievement",
      icon: Award,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Moments</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Highlighting key milestones and memorable moments from our journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredMoments.map((moment, index) => {
              const IconComponent = moment.icon;
              
              return (
                <div key={moment.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                        {moment.type}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-purple-600 font-medium">{moment.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{moment.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
              View All Featured Moments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMoments;