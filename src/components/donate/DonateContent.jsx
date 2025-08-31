import React from 'react';
import { CheckCircle, Heart, } from 'lucide-react';

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
                  <p className="text-gray-700">Support education and livelihood opportunities for persons with disabilities.</p>
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
                  src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756594152873%3A0.26986162556518445.png" 
                  alt="People with disabilities receiving support and assistance"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateContent;