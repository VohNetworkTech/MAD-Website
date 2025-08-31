// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import VolunteerPage from './pages/VolunteerPage';
import InternPage from './pages/InternPage';
import DonatePage from './pages/DonatePage';
import MediaPage from './pages/MediaPage';
import NewsPage from './pages/NewsPage';
import PrivacyPolicy from './pages/PrivayPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import ContactPage from './pages/ContactPage';
import CollaboratePage from './pages/CollaboratePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/intern" element={<InternPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/gallery-page" element={<MediaPage />} />
          <Route path="/what-new" element={<NewsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;