import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import VisionMission from '../components/about/VisionMission';
import OurApproach from '../components/about/OurApproach';
import Leadership from '../components/about/Leadership';
import JoinUs from '../components/about/JoinUs';
import PartOfChange from '../components/about/PartOfChange';
import SubscribeSection from '../components/common/SubscribeSection';

const AboutPage = () => {
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
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <OurApproach />
      <Leadership />
      <PartOfChange/>
      <JoinUs />
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

export default AboutPage;