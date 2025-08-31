// src/components/volunteer/VolunteerContent.jsx
import React from 'react';

const VolunteerContent = () => {
  return (
    <section id="volunteer-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer with MAD Foundation?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At My Action for the Disabled Foundation (MAD Foundation), we believe that real change happens when passionate individuals come together to take action. By volunteering with us, you can contribute towards education, skill development, employment, accessibility, assistive technology and advocacy for persons with disabilities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you have time, skills, or expertise to offer, there are many ways to get involved. As a volunteer, you will have the opportunity to support meaningful projects, engage in impactful activities, and help build an inclusive society.
              </p>

            
            </div>

            {/* Organization Info */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
                  alt="Volunteers working with persons with disabilities in inclusive activities"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
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

export default VolunteerContent;