import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import InternHero from '../components/intern/InternHero';
import InternContent from '../components/intern/InternContent';
import InternForm from '../components/intern/InternForm';
import WhyIntern from '../components/intern/WhyIntern';
import InternAreas from '../components/intern/InternAreas';
import InternRequirements from '../components/intern/InternRequirements';
import InternCertificate from '../components/intern/InternCertificate';
import GetInTouch from '../components/common/GetInTouch';
import SubscribeSection from '../components/common/SubscribeSection';

const InternPage = () => {
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
      <InternHero />
      <InternContent />
     
      <WhyIntern />
      <InternAreas />
      <InternRequirements />
       <InternForm />
      <InternCertificate />
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

export default InternPage;