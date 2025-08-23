import React from 'react';
import { Camera, Users, Target, Heart } from 'lucide-react';

const MediaContent = () => {
  return (
    <section id="media-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Stories of Change</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At My Action for the Disabled Foundation (MAD Foundation), every initiative, event, and milestone is a step toward a more inclusive society. Our media gallery showcases photos and videos that reflect the impact of our programs, the dedication of our volunteers, and the achievements of persons with disabilities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Through visual storytelling, we document moments of transformation, celebrate successes, and share the inspiring journeys of individuals who are breaking barriers and creating positive change in their communities.
              </p>

              {/* Key Highlights */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Camera className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Document impactful moments from events and initiatives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Showcase volunteer dedication and community engagement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Target className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Celebrate achievements of persons with disabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Heart className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Share inspiring stories of transformation and inclusion</p>
                </div>
              </div>
            </div>

            {/* Media Visual */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                  alt="MAD Foundation community event showcasing inclusive activities"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Community Engagement</h3>
                  <p className="text-sm text-gray-200">Inclusive events and workshops</p>
                </div>
              </div>

              {/* Media Type Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <Camera className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Photo Gallery</h4>
                  <p className="text-sm text-gray-600">Event snapshots and milestone moments</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-200">
                  <Users className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Video Stories</h4>
                  <p className="text-sm text-gray-600">Inspiring interviews and highlights</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Impact Documentation</h4>
                  <p className="text-sm text-gray-600">Before and after transformations</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Success Stories</h4>
                  <p className="text-sm text-gray-600">Personal journeys and achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaContent;