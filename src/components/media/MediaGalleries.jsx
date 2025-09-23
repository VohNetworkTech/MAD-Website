import React, { useState } from 'react';
import { Camera, Video, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const MediaGalleries = () => {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Add your image URLs here
  const photoUrls = [
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608008118%3A0.14094509079980821.jpg',
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608103255%3A0.8347120345606232.jpg',
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608138110%3A0.005934231099368192.jpg',
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608170575%3A0.8391830935134543.jpg',
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608305213%3A0.7006800966888842.jpg',
    'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1758608533623%3A0.17721646916927258.jpg',
    // Add more image URLs here
  ];

  const openPhotoGallery = () => {
    setIsPhotoGalleryOpen(true);
    setCurrentPhotoIndex(0);
  };

  const closePhotoGallery = () => {
    setIsPhotoGalleryOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photoUrls.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photoUrls.length) % photoUrls.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

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

                <button 
                  onClick={openPhotoGallery}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
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

                <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>View Video Gallery</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {isPhotoGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-4">
            <div className="text-white text-lg font-semibold">
              Photo Gallery
            </div>
            <button
              onClick={closePhotoGallery}
              className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center px-4 pb-4">
            <div className="relative w-full max-w-4xl">
              {/* Navigation Buttons */}
              {photoUrls.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Single Image Display */}
              <div className="flex justify-center">
                <img
                  src={photoUrls[currentPhotoIndex]}
                  alt={`Photo ${currentPhotoIndex + 1}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section with Counter and Thumbnails */}
          <div className="pb-4">
            {/* Photo Counter */}
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full">
                {currentPhotoIndex + 1} / {photoUrls.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {photoUrls.length > 1 && (
              <div className="flex justify-center px-4">
                <div className="flex space-x-2 overflow-x-auto max-w-full">
                  {photoUrls.map((url, index) => (
                    <button
                      key={index}
                      onClick={() => goToPhoto(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentPhotoIndex
                          ? 'border-purple-400 opacity-100 ring-2 ring-purple-400'
                          : 'border-gray-400 opacity-60 hover:opacity-80 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGalleries;