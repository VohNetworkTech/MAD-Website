import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AuthModal from "../components/common/AuthModal";
import PrivacyPolicy from "../components/policy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <Header openAuthModal={openAuthModal} />

      {/* Privacy Policy Content */}
      <div className="py-12 px-6 md:px-12 lg:px-24">
        <PrivacyPolicy />
      </div>

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

export default PrivacyPolicyPage;
