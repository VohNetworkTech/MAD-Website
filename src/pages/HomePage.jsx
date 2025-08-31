import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import HeroSection from '../components/home/HeroSection';
import HeroImageSection from '../components/home/HeroImageSection';
import AboutSection from '../components/home/AboutSection';
import FocusAreas from '../components/home/FocusAreas';
import ContactSection from '../components/home/ContactSection';
import JoinMovementSection from '../components/home/JoinMovementSection';
import SubscribeSection from '../components/common/SubscribeSection';

const HomePage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header openAuthModal={openAuthModal} />
      <HeroImageSection />
      <HeroSection />
      <AboutSection />
      <FocusAreas />
      <JoinMovementSection/>
      <ContactSection />
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

export default HomePage;