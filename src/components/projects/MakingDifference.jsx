import React from 'react';
import { Users, Heart, Briefcase, Handshake } from 'lucide-react';

const MakingDifference = () => {
  const navigateTo = (page) => {
    if (page === 'volunteer') {
      window.location.href = '/volunteer';
    } else if (page === 'donate') {
      window.location.href = '/donate';
    } else if (page === 'intern') {
      window.location.href = '/intern';
    } else if (page === 'partner') {
      window.location.href = '/collaborate';
    }
  };
  return (
    <section id="join-movement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us in Making a Difference</h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            We believe in the power of collective effort. Whether you volunteer, intern, or support our initiatives, your involvement helps build a more inclusive society.
          </p>
          
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                          onClick={() => navigateTo('volunteer')}
                          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                          aria-label="Navigate to volunteer page"
                        >
                          <Users className="w-5 h-5" aria-hidden="true" />
                          <span>Volunteer with Us</span>
                        </button>
                        
                        <button 
                          onClick={() => navigateTo('donate')}
                          className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                          aria-label="Navigate to donation page"
                        >
                          <Heart className="w-5 h-5" aria-hidden="true" />
                          <span>Donate Now</span>
                        </button>
                        
                        <button 
                          onClick={() => navigateTo('intern')}
                          className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                          aria-label="Navigate to internship page"
                        >
                          <Briefcase className="w-5 h-5" aria-hidden="true" />
                          <span>Internships</span>
                        </button>
                        
                        <button 
                          onClick={() => navigateTo('partner')}
                          className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                          aria-label="Navigate to partnership page"
                        >
                          <Handshake className="w-5 h-5" aria-hidden="true" />
                          <span>Partner with Us</span>
                        </button>
                      </div>
        </div>
      </div>
    </section>
  );
};

export default MakingDifference;