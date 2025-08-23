import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import NewsHero from '../components/news/NewsHero';
import NewsContent from '../components/news/NewsContent';

import NewsSubmit from '../components/news/NewsSubmit';
import NewsContact from '../components/news/NewsContact';

const NewsPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
       <Header openAuthModal={openAuthModal} />
      <NewsHero />
      <NewsContent />
      {/* <LatestAnnouncements /> */}
      {/* <UpcomingEvents /> */}
      <NewsSubmit />
      <NewsContact />
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

export default NewsPage;