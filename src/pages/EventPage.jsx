import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import EventAndCampaign from '../components/events/EventAndCampaign';
import WhoWeAre from '../components/events/WhoWeAre';
import SubscribeSection from '../components/common/SubscribeSection';
import EventHero from '../components/events/HeroSection';
import GetInTouch from '../components/common/GetInTouch';
import UpcomingEvents from '../components/events/UpcomingEvents';
const EventPage = () => {
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
      <EventHero/>
      <WhoWeAre/>
      <EventAndCampaign/>
      <UpcomingEvents/>
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

export default EventPage;