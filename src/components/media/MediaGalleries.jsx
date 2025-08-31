
import React from 'react';
import { Camera, Video, ExternalLink } from 'lucide-react';

const MediaGalleries = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Photo Gallery */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Photo Gallery</h3>
                
                <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                  Explore snapshots from our events, training programs, advocacy campaigns, and community engagements.
                </p>

                {/* Sample Photo Preview */}
                {/* <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg border-2 border-purple-200 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-red-100 rounded-lg border-2 border-pink-200 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg border-2 border-indigo-200 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-indigo-600" />
                  </div>
                </div> */}

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>View Photo Gallery</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Gallery */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Video Gallery</h3>
                
                <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                  Watch inspiring stories, interviews, and highlights from our initiatives that are creating real change.
                </p>

                {/* Sample Video Preview */}
                {/* <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 rounded-lg border-2 border-red-200 flex items-center justify-center">
                    <Video className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg border-2 border-pink-200 flex items-center justify-center">
                    <Video className="w-8 h-8 text-pink-600" />
                  </div>
                </div> */}

                <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>View Video Gallery</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGalleries;
