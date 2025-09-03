import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import MediaHero from '../components/media/MediaHero';
import MediaContent from '../components/media/MediaContent';
import MediaGalleries from '../components/media/MediaGalleries';
// import FeaturedMoments from '../components/media/FeaturedMoments';
// import MediaUpload from '../components/media/MediaUpload';
import GetInTouch from '../components/common/GetInTouch';
import SubscribeSection from '../components/common/SubscribeSection';

const MediaPage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header openAuthModal={openAuthModal} />
      <MediaHero />
      <MediaContent />
      <MediaGalleries />
      {/* <FeaturedMoments /> */}
      {/* <MediaUpload /> */}
      <GetInTouch/>
      <SubscribeSection/>
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
        mode={authMode}
        setMode={setAuthMode}
      />
    </div>
  );
};

export default MediaPage;