import React from 'react';

const InternContent = () => {
  return (
    <section id="intern-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Launch Your Career with Purpose</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you looking for an opportunity to gain hands-on experience, contribute to a meaningful cause, and develop new skills? My Action for the Disabled Foundation (MAD Foundation) offers internship opportunities for students and professionals who want to support inclusive education, skill development, employment, assistive technology, and advocacy for persons with disabilities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As an intern, you will work on impactful projects that enhance accessibility, drive research, raise awareness, and contribute to real change. Whether you are a student, a fresh graduate, or a professional looking to contribute your skills, this internship will provide you with valuable learning experiences while making a difference.
              </p>

              
            </div>

            {/* Organization Info */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Interns collaborating on projects with mentors in a professional environment"
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

export default InternContent;