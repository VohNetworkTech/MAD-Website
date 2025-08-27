import React from 'react';

const CollaborateContent = () => {
  return (
    <section id="collaborate-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Building Strong Partnerships for Greater Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At My Action for the Disabled Foundation (MAD Foundation), we believe that collaboration is key to driving lasting change. By partnering with organizations, institutions, corporates, and civil society groups, we aim to create sustainable solutions that empower persons with disabilities through education, skill development, employment, livelihood, accessibility, and assistive technology.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our partnerships help expand our reach, strengthen our programs, and create opportunities for collective action in building an inclusive society.
              </p>

              {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Handshake className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-800">Collaboration is Key</h3>
                </div>
                <p className="text-blue-700">
                  Together, we can create sustainable solutions and drive meaningful change in disability empowerment.
                </p>
              </div> */}

              <button
                onClick={() => {
                  const formSection = document.getElementById('collaborate-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Partner with Us
              </button>
            </div>

            {/* Impact Visual */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80" 
                  alt="Team collaboration and partnership in inclusive workspace"
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

export default CollaborateContent;