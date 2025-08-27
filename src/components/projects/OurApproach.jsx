import React from 'react';

const OurApproach = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="space-y-8 text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                MAD Foundation takes a <strong className="text-blue-700">step-by-step, partnership-driven approach</strong> — carefully designing each project, securing resources, and building alliances before implementation. This ensures that our initiatives are <strong className="text-blue-700">realistic, measurable, and impactful</strong>.
              </p>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  As a young organization, we are in the process of building networks, mobilizing resources, and setting up the necessary infrastructure to bring them to life. We welcome collaboration with individuals, institutions, corporates, and government agencies who share our vision.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-blue-800 font-semibold text-lg">
                    Together, we can ensure that persons with disabilities are not just included, but fully empowered to participate in every sphere of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;