// src/pages/AdminPage.jsx
// Updated version with role checking

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import { AdminDashboard } from '../components/admin';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  // Check if user is admin on mount
  useEffect(() => {
    if (isAuthenticated && user?.role !== 'admin') {
      // Not an admin, redirect to home
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Show nothing or loading while checking auth
  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking permissions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header openAuthModal={openAuthModal} />
      <AdminDashboard />
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

export default AdminPage;