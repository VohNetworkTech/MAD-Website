import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Who We Are</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At MAD Foundation, we work towards a future where persons with disabilities have the resources, skills, and opportunities to lead independent and fulfilling lives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our planned initiatives focus on inclusive education, employment, livelihood, assistive technology, healthcare, accessibility, and advocacy to bring meaningful change to communities across the nation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Promoting inclusive education and skill development programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Creating sustainable employment opportunities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Advocating for accessibility and equal rights</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="MAD Foundation team working with persons with disabilities in an inclusive environment"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border-l-4 border-blue-600">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;