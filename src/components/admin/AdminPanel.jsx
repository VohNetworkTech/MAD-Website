import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Mail, Phone, Calendar, MapPin, FileText } from 'lucide-react';

const AdminPanel = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [submissionsData, setSubmissionsData] = useState({});
  const [loading, setLoading] = useState({});

  // Mock data for demonstration - replace with actual API calls
  const mockSubmissions = {
    contact: [
      { id: 1, name: "John Doe", email: "john@email.com", phone: "+1234567890", message: "Interested in volunteering", date: "2024-01-15" },
      { id: 2, name: "Jane Smith", email: "jane@email.com", phone: "+1987654321", message: "Question about donations", date: "2024-01-14" }
    ],
    volunteer: [
      { id: 1, name: "Mike Johnson", email: "mike@email.com", skills: "Medical, Emergency Response", availability: "Weekends", date: "2024-01-13" },
      { id: 2, name: "Sarah Wilson", email: "sarah@email.com", skills: "Teaching, Communication", availability: "Evenings", date: "2024-01-12" }
    ],
    donations: [
      { id: 1, name: "Robert Brown", email: "robert@email.com", amount: "$500", type: "One-time", method: "Credit Card", date: "2024-01-11" },
      { id: 2, name: "Emily Davis", email: "emily@email.com", amount: "$100", type: "Monthly", method: "PayPal", date: "2024-01-10" }
    ],
    events: [
      { id: 1, name: "Alex Garcia", email: "alex@email.com", event: "Health Camp 2024", attendees: "5", requirements: "Wheelchair access", date: "2024-01-09" }
    ],
    projects: [
      { id: 1, name: "Lisa Chen", email: "lisa@email.com", project: "Rural Health Initiative", interest: "Partnership", experience: "5 years in healthcare", date: "2024-01-08" }
    ],
    media: [
      { id: 1, name: "Tom Anderson", email: "tom@email.com", type: "Press Inquiry", organization: "Health News Today", topic: "Recent initiatives", date: "2024-01-07" }
    ]
  };

  const cardConfigs = [
    {
      id: 'contact',
      title: 'Contact Submissions',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'General inquiries and contact form submissions'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Applications',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'People interested in volunteering opportunities'
    },
    {
      id: 'donations',
      title: 'Donation Requests',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Donation form submissions and funding requests'
    },
    {
      id: 'events',
      title: 'Event Registrations',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Event sign-ups and registration forms'
    },
    {
      id: 'projects',
      title: 'Project Inquiries',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Project collaboration and partnership requests'
    },
    {
      id: 'media',
      title: 'Media Requests',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      description: 'Press inquiries and media-related submissions'
    }
  ];

  const fetchData = async (cardId) => {
    setLoading(prev => ({ ...prev, [cardId]: true }));
    
    // Simulate API call - replace with actual API endpoint
    try {
      // await fetch(`/api/submissions/${cardId}`)
      // For now, using mock data
      setTimeout(() => {
        setSubmissionsData(prev => ({
          ...prev,
          [cardId]: mockSubmissions[cardId] || []
        }));
        setLoading(prev => ({ ...prev, [cardId]: false }));
      }, 1000);
    } catch (error) {
      console.error(`Error fetching ${cardId} data:`, error);
      setLoading(prev => ({ ...prev, [cardId]: false }));
    }
  };

  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
      if (!submissionsData[cardId]) {
        fetchData(cardId);
      }
    }
  };

  const renderSubmissionData = (cardId, data) => {
    if (!data || data.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No submissions found
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {data.map((submission) => (
          <div key={submission.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(submission).map(([key, value]) => {
                if (key === 'id') return null;
                return (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm text-gray-900 mt-1">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage and view all user form submissions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cardConfigs.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleCardClick(card.id)}
            >
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {card.icon}
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  {activeCard === card.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                <p className="mt-2 text-sm opacity-90">
                  {card.description}
                </p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {submissionsData[card.id]?.length || 0}
                  </span>
                  <span className="text-sm text-gray-500">
                    Total Submissions
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Click to view details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Card Data */}
        {activeCard && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {cardConfigs.find(card => card.id === activeCard)?.title} Details
              </h2>
              <button
                onClick={() => setActiveCard(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronUp className="w-6 h-6" />
              </button>
            </div>

            {loading[activeCard] ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Loading submissions...</span>
              </div>
            ) : (
              renderSubmissionData(activeCard, submissionsData[activeCard])
            )}
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {cardConfigs.map((card) => (
              <div key={card.id} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${card.color} text-white mb-2`}>
                  {card.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {submissionsData[card.id]?.length || 0}
                </div>
                <div className="text-xs text-gray-500 capitalize">
                  {card.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;