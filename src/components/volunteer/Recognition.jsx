// src/components/volunteer/Recognition.jsx
import React from 'react';
import { Award, FileText,  Trophy } from 'lucide-react';

const Recognition = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recognition & Certificates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              As a token of appreciation for your contribution, volunteers receive.
            </p>
          </div>

          {/* Recognition Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-full -mr-12 -mt-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">A Certificate of Volunteering recognizing your efforts</h3>
                </div>
            
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-12 -mt-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">A Certificate of Volunteering recognizing your efforts</h3>
                </div>
                
                
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Make an Impact?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Join our volunteer community and start making a difference in the lives of persons with disabilities.
            </p>
            <button
              onClick={() => {
                const formSection = document.getElementById('volunteer-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Register as a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;