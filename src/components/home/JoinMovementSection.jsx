import React from 'react';

const JoinMovementSection = () => {
  return (
    <section id="join-movement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Movement</h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Be a part of the change! Whether you volunteer, intern, or contribute, your support helps create a more inclusive world.
          </p>
          
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Volunteer with Us
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
              
              Donate Now
            </button>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Internships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;