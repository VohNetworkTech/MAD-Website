import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import VolunteerHero from '../components/volunteer/VolunteerHero';
import VolunteerContent from '../components/volunteer/VolunteerContent';
import VolunteerForm from '../components/volunteer/VolunteerForm';
import WaysToHelp from '../components/volunteer/WaysToHelp';
import WhoCanVolunteer from '../components/volunteer/WhoCanVolunteer';
import Recognition from '../components/volunteer/Recognition';
import VolunteerContact from '../components/volunteer/VolunteerContact';

const VolunteerPage = () => {
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
      <VolunteerHero />
      <VolunteerContent />
      <VolunteerForm />
      <WaysToHelp />
      <WhoCanVolunteer />
      <Recognition />
      <VolunteerContact />
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

export default VolunteerPage;