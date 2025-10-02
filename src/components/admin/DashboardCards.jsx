// src/components/admin/DashboardCards.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Users, FileText, Calendar, MapPin, Phone, DollarSign, UserCog } from 'lucide-react';

const DashboardCards = ({ onCardClick }) => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const cardConfigs = [
    {
      id: 'contact',
      title: 'Contact Form',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Simple contact messages',
      apiEndpoint: '/api/contact/all'
    },
    {
      id: 'contactus',
      title: 'ContactUs Form',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Detailed contact us form submissions',
      apiEndpoint: '/api/contactsus/all'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Applications',
      icon: <Users className="w-6 h-6" />,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Volunteer registration and management',
      apiEndpoint: '/api/volunteer/all'
    },
    {
      id: 'intern',
      title: 'Internship Applications',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Internship applications and candidate management',
      apiEndpoint: '/api/intern/all'
    },
    {
      id: 'donations',
      title: 'Donation Requests',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Donation form submissions and funding requests',
      apiEndpoint: '/api/donation/all'
    },
    {
      id: 'projects',
      title: 'Collaborations',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Partnership and collaboration requests',
      apiEndpoint: '/api/collaborate/all'
    },
    {
      id: 'events',
      title: 'Event Registrations',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Event registrations and participant management',
      apiEndpoint: '/api/events/registrations'
    },
    {
      id: 'media',
      title: 'Newsletter Subscribers',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      description: 'Newsletter subscriptions and subscriber management',
      apiEndpoint: '/api/newsletter/subscribers'
    },
    {
      id: 'users',
      title: 'User Management',
      icon: <UserCog className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Manage user accounts and permissions',
      apiEndpoint: '/api/auth/users'
    }
  ];

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Import the admin service
      const adminService = (await import('../../services/adminService')).default;
      
      // Fetch contact stats
      const contactData = await adminService.getAllContactSubmissions({ limit: 1 });
      if (contactData.success) {
        setStats(prev => ({
          ...prev,
          contact: contactData.stats?.total || 0
        }));
      }

      // Fetch donation stats
      const donationData = await adminService.getAllDonationSubmissions({ limit: 1 });
      if (donationData.success) {
        setStats(prev => ({
          ...prev,
          donations: donationData.stats?.total || 0
        }));
      }

      // Fetch collaboration stats
      const collaborationData = await adminService.getAllCollaborationSubmissions({ limit: 1 });
      if (collaborationData.success) {
        setStats(prev => ({
          ...prev,
          projects: collaborationData.stats?.total || 0
        }));
      }

      // Fetch volunteer application stats
      const volunteerData = await adminService.getAllVolunteerApplications({ limit: 1 });
      if (volunteerData.success) {
        setStats(prev => ({
          ...prev,
          volunteer: volunteerData.stats?.total || 0
        }));
      }

      // Fetch internship application stats
      const internshipData = await adminService.getAllInternshipApplications({ limit: 1 });
      if (internshipData.success) {
        setStats(prev => ({
          ...prev,
          intern: internshipData.stats?.total || 0
        }));
      }

      // Fetch event registration stats
      const eventData = await adminService.getAllEventRegistrations({ limit: 1 });
      if (eventData.success) {
        setStats(prev => ({
          ...prev,
          events: eventData.stats?.total || 0
        }));
      }

      // Fetch newsletter subscriber stats
      const newsletterData = await adminService.getAllNewsletterSubscribers({ limit: 1 });
      if (newsletterData.success) {
        setStats(prev => ({
          ...prev,
          media: newsletterData.stats?.total || 0
        }));
      }

      // Fetch user management stats
      const userData = await adminService.getAllUsers({ limit: 1 });
      if (userData.success) {
        setStats(prev => ({
          ...prev,
          users: userData.stats?.total || 0
        }));
      }

      // For other endpoints, set to 0 or fetch when available
      setStats(prev => ({
        ...prev,
        contactus: 0
      }));

    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cardConfigs.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => onCardClick(card.id)}
          >
            <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
              <div className="flex items-center space-x-3">
                {card.icon}
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <p className="mt-2 text-sm opacity-90">
                {card.description}
              </p>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                {/* <span className="text-2xl font-bold text-gray-900">
                  {loading ? '...' : (stats[card.id] || 0)}
                </span>
                <span className="text-sm text-gray-500">
                  Total Submissions
                </span> */}
              </div>
              <div className="mt-2 text-xs text-blue-600 font-medium">
                Click to view details →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Statistics Overview
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
          {cardConfigs.map((card) => (
            <div key={card.id} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${card.color} text-white mb-2`}>
                {card.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {loading ? '...' : (stats[card.id] || 0)}
              </div>
              <div className="text-xs text-gray-500 capitalize">
                {card.title.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Total Submissions: 
              <span className="font-bold text-gray-900 ml-1">
                {loading ? '...' : Object.values(stats).reduce((a, b) => a + b, 0)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;