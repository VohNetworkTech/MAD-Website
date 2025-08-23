import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import DonateHero from '../components/donate/DonateHero';
import DonateContent from '../components/donate/DonateContent';
import DonateWays from '../components/donate/DonateWays';
import DonateForm from '../components/donate/DonateForm';
import DonateContact from '../components/donate/DonateContact';

const DonatePage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header openAuthModal={openAuthModal} />
      <DonateHero />
      <DonateContent />
      <DonateWays />
      <DonateForm />
      <DonateContact />
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

export default DonatePage;