import React from 'react';
import { CheckCircle, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const DonateContent = () => {
  return (
    <section id="donate-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Difference with Your Contribution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your support enables My Action for the Disabled Foundation (MAD Foundation) to create real impact by empowering persons with disabilities through education, skill development, employment, livelihood, assistive technology, accessibility, and advocacy initiatives.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Every contribution helps us expand our reach, improve resources, and enhance the lives of individuals striving for independence and dignity.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Support inclusive education and livelihood opportunities for persons with disabilities.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Help provide assistive technologies and accessible learning materials.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Enable skill development and employment pathways.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Contribute to building an inclusive and accessible society.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-800">Every Contribution Counts</h3>
                </div>
                <p className="text-blue">
                  No amount is too small—every contribution counts and makes a meaningful difference in someone's life.
                </p>
              </div>

              <button
                onClick={() => {
                  const formSection = document.getElementById('donate-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Donate Now
              </button>
            </div>

            {/* Impact Visual */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                  alt="People with disabilities receiving support and assistance"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Impact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Lightbulb className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <p className="text-sm text-gray-600">Accessible learning materials and inclusive education programs</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <Users className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Employment</h4>
                  <p className="text-sm text-gray-600">Skill development and job placement assistance</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <Shield className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Advocacy</h4>
                  <p className="text-sm text-gray-600">Rights protection and policy advocacy initiatives</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                  <Heart className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Support</h4>
                  <p className="text-sm text-gray-600">Assistive technology and accessibility solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateContent;