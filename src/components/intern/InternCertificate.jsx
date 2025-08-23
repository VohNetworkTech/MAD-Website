import React from 'react';
import { Award, FileCheck, Star } from 'lucide-react';

const InternCertificate = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificate & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Complete your internship successfully and receive official recognition for your contributions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Certificate of Internship</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Interns receive a <span className="font-semibold text-yellow-700">Certificate of Internship</span> upon successful completion, recognizing their valuable contributions to our mission of empowering persons with disabilities.
              </p>

              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700 font-medium">Official Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">Professional Certification</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const formSection = document.getElementById('intern-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Internship
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternCertificate;