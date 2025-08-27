import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AuthModal from "../components/common/AuthModal";
import CollaborateHero from "../components/collaborate/CollaborateHero";
import CollaborateContent from "../components/collaborate/CollaborateContent";
import CollaborateAreas from "../components/collaborate/CollaborateAreas";
import CollaborateBenefits from "../components/collaborate/CollaborateBenefits";
import CollaborateForm from "../components/collaborate/CollaborateForm";
import CollaborateContact from "../components/collaborate/CollaborateContact";

const CollaboratePage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header openAuthModal={openAuthModal} />

      {/* Hero Section */}
      <CollaborateHero />

      {/* Content Sections */}
      <CollaborateContent />
      
      {/* Collaboration Areas */}
      <CollaborateAreas />
      
      {/* Benefits Section */}
      <CollaborateBenefits />
      
      {/* Partnership Form */}
      <CollaborateForm />
      <CollaborateContact/>
      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        mode={authMode}
        setMode={setAuthMode}
      />
    </div>
  );
};

export default CollaboratePage;