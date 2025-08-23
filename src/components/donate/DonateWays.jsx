import React from 'react';
import { Calendar, CreditCard, Star } from 'lucide-react';

const DonateWays = () => {
  const donationWays = [
    {
      icon: CreditCard,
      title: "One-Time Donation",
      description: "Make a one-time contribution to support our ongoing initiatives and projects.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Monthly Giving",
      description: "Set up a recurring monthly donation to provide consistent support for our programs.",
      color: "green"
    },
    {
      icon: Star,
      title: "Sponsor a Program",
      description: "Choose a specific initiative—education, livelihood, employment, assistive technology, or advocacy—and sponsor its growth and impact.",
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ways to Donate</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the donation method that works best for you and your commitment to supporting our cause.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {donationWays.map((way, index) => {
              const IconComponent = way.icon;
              const colors = getColorClasses(way.color);
              
              return (
                <div key={index} className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${colors.border} relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${colors.light} rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{way.description}</p>
                  </div>
                  
                  <div className={`absolute top-6 right-6 w-8 h-8 ${colors.light} rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                    <span className={`text-sm font-bold ${colors.text}`}>{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const formSection = document.getElementById('donate-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Become a Donor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateWays;