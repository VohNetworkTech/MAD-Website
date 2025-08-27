import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsList from '../components/projects/ProjectsList';
import OurApproach from '../components/projects/OurApproach';
import JoinProjects from '../components/projects/JoinProjects';
import Overview from '../components/projects/Overview';

const ProjectsPage = () => {
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
      <ProjectsHero />
      <Overview/>
      <ProjectsList />
      <OurApproach />
      <JoinProjects />
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

export default ProjectsPage;