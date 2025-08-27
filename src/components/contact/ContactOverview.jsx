// src/components/about/WhoWeAre.jsx
import React from 'react';

const ContactOverview = () => {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
             
              
              <p className="text-lg text-gray-700 leading-relaxed">
At My Action for the Disabled Foundation (MAD Foundation), we welcome your questions, suggestions, and collaborations. Whether you’re looking to partner with us, volunteer, intern, or seek support, our team is here to assist you.</p>

              <p className="text-lg text-gray-700 leading-relaxed">
Feel free to reach out via phone, email, or by filling out the contact form below</p>

             
            </div>

            {/* Image and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
                  alt="MAD Foundation team working with persons with disabilities"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
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

export default ContactOverview;