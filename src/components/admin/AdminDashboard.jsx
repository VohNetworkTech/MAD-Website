// src/components/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import DashboardCards from './DashboardCards';
import ContactSubmissions from './ContactSubmissions';
import ContactUsSubmissions from './ContactUsSubmissions';
import DonationSubmissions from './DonationSubmissions';
import CollaborationSubmissions from './CollaborationSubmissions';
import EventRegistrations from './EventRegistrations';
import VolunteerApplications from './VolunteerApplications';
import InternshipApplications from './InternshipApplications';
import NewsletterSubscribers from './NewsletterSubscribers';
import UserManagement from './UserManagement';
import { ArrowLeft } from 'lucide-react';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setActiveView('submissions');
  };

  const handleBackToDashboard = () => {
    setActiveView('dashboard');
    setSelectedCard(null);
  };

  const renderSubmissionComponent = () => {
    switch (selectedCard) {
      case 'contact':
        return <ContactSubmissions onBack={handleBackToDashboard} />;
      case 'contactus':
        return <ContactUsSubmissions onBack={handleBackToDashboard} />;
      case 'volunteer':
        return <VolunteerApplications onBack={handleBackToDashboard} />;
      case 'intern':
        return <InternshipApplications onBack={handleBackToDashboard} />;
      case 'donations':
        return <DonationSubmissions onBack={handleBackToDashboard} />;
      case 'projects':
        return <CollaborationSubmissions onBack={handleBackToDashboard} />;
      case 'events':
        return <EventRegistrations onBack={handleBackToDashboard} />;
      case 'media':
        return <NewsletterSubscribers onBack={handleBackToDashboard} />;
      case 'users':
        return <UserManagement onBack={handleBackToDashboard} />;
      default:
        return <DashboardCards onCardClick={handleCardClick} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {activeView === 'dashboard' ? (
          <>
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Admin Dashboard
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Manage and view all user form submissions from your VOHMAD platform
              </p>
            </div>
            <DashboardCards onCardClick={handleCardClick} />
          </>
        ) : (
          renderSubmissionComponent()
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;