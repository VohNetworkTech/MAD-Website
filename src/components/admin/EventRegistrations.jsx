// src/components/admin/EventRegistrations.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Download, 
  Eye, 
  Mail,
  Phone,
  Calendar,
  User,
  Hash,
  MapPin,
  Briefcase,
  Building2,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  Clock,
  X,
  Edit,
  Users
} from 'lucide-react';

const EventRegistrations = ({ onBack }) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    eventId: '',
    registrationStatus: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdateData, setStatusUpdateData] = useState({});

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'waitlist', label: 'Waitlist' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  useEffect(() => {
    fetchRegistrations();
  }, [filters]);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllEventRegistrations(filters);
      
      if (data.success) {
        setRegistrations(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching event registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  const handleStatusUpdate = async () => {
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      await adminService.updateEventRegistrationStatus(selectedRegistration._id, statusUpdateData);
      
      // Refresh the data
      fetchRegistrations();
      setShowStatusModal(false);
      setStatusUpdateData({});
      
      console.log('Registration status updated successfully');
      
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'waitlist': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'cancelled': return <X className="w-4 h-4 text-red-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'confirmed': 'bg-green-100 text-green-800',
      'waitlist': 'bg-yellow-100 text-yellow-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['confirmed']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status || 'Confirmed'}</span>
      </span>
    );
  };

  const getDisabilityBadge = (isPersonWithDisability) => {
    if (isPersonWithDisability === 'Yes') {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <UserCheck className="w-3 h-3 mr-1" />
          PWD
        </span>
      );
    }
    return null;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get unique events for filter dropdown
  const uniqueEvents = [...new Set(registrations.map(reg => ({
    id: reg.eventId,
    title: reg.eventTitle
  })))];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Event Registrations</h1>
            <p className="text-gray-600">Manage event registrations and participants</p>
          </div>
        </div>
        
       
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total Registrations</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.confirmed || 0}</div>
          <div className="text-sm text-gray-600">Confirmed</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.waitlist || 0}</div>
          <div className="text-sm text-gray-600">Waitlist</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-red-600">{stats.cancelled || 0}</div>
          <div className="text-sm text-gray-600">Cancelled</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.withDisability || 0}</div>
          <div className="text-sm text-gray-600">PWD Participants</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search registrations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            value={filters.registrationStatus}
            onChange={(e) => handleFilterChange('registrationStatus', e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            value={filters.eventId}
            onChange={(e) => handleFilterChange('eventId', e.target.value)}
          >
            <option value="">All Events</option>
            {uniqueEvents.map((event, index) => (
              <option key={`${event.id}-${index}`} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Registrations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <span className="ml-3 text-gray-600">Loading registrations...</span>
          </div>
        ) : registrations.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No registrations found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Participant Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event & Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrations.map((registration) => (
                    <tr key={registration._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-orange-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 flex items-center">
                              {registration.fullName}
                              {getDisabilityBadge(registration.isPersonWithDisability)}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {registration.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {registration.mobileNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {registration.eventTitle}
                        </div>
                        <div className="text-sm text-gray-500 space-y-1">
                          {registration.city && (
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {registration.city}
                            </div>
                          )}
                          {registration.occupation && (
                            <div className="flex items-center">
                              <Briefcase className="w-3 h-3 mr-1" />
                              {registration.occupation}
                            </div>
                          )}
                          {registration.organization && (
                            <div className="flex items-center">
                              <Building2 className="w-3 h-3 mr-1" />
                              {registration.organization}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(registration.registrationStatus)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(registration.registrationDate || registration.createdAt)}
                        </div>
                        {registration.registrationReference && (
                          <div className="flex items-center mt-1">
                            <Hash className="w-3 h-3 mr-1" />
                            <span className="text-xs">{registration.registrationReference}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedRegistration(registration)}
                            className="text-orange-600 hover:text-orange-900 flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => {
                              setSelectedRegistration(registration);
                              setShowStatusModal(true);
                              setStatusUpdateData({ 
                                registrationStatus: registration.registrationStatus || 'confirmed',
                                notes: registration.notes || ''
                              });
                            }}
                            className="text-blue-600 hover:text-blue-900 flex items-center"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => handlePageChange(pagination.current - 1)}
                    disabled={pagination.current <= 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.current + 1)}
                    disabled={pagination.current >= pagination.pages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{((pagination.current - 1) * filters.limit) + 1}</span> to{' '}
                      <span className="font-medium">
                        {Math.min(pagination.current * filters.limit, pagination.total)}
                      </span> of{' '}
                      <span className="font-medium">{pagination.total}</span> results
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Detail View Modal */}
      {selectedRegistration && !showStatusModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/5 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Event Registration Details
                </h3>
                <button
                  onClick={() => setSelectedRegistration(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.fullName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Mobile Number</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.mobileNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">City</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.city || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Occupation</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.occupation || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Organization</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.organization || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Disability Information */}
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Accessibility Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Person with Disability</label>
                      <div className="mt-1">
                        {getDisabilityBadge(selectedRegistration.isPersonWithDisability) || (
                          <span className="text-sm text-gray-900">No</span>
                        )}
                      </div>
                    </div>
                    {selectedRegistration.isPersonWithDisability === 'Yes' && (
                      <>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Disability Type</label>
                          <p className="text-sm text-gray-900">{selectedRegistration.disabilityType || 'Not specified'}</p>
                        </div>
                        {selectedRegistration.otherDisabilityText && (
                          <div className="md:col-span-2">
                            <label className="text-sm font-medium text-gray-500">Other Disability Details</label>
                            <p className="text-sm text-gray-900">{selectedRegistration.otherDisabilityText}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Event Information */}
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Event Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Event Title</label>
                      <p className="text-sm text-gray-900 font-medium">{selectedRegistration.eventTitle}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Event ID</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.eventId}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration Status</label>
                      <div className="mt-1">
                        {getStatusBadge(selectedRegistration.registrationStatus)}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration Reference</label>
                      <p className="text-sm text-gray-900">{selectedRegistration.registrationReference}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration Date</label>
                      <p className="text-sm text-gray-900">{formatDate(selectedRegistration.registrationDate || selectedRegistration.createdAt)}</p>
                    </div>
                    {selectedRegistration.updatedAt && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Last Updated</label>
                        <p className="text-sm text-gray-900">{formatDate(selectedRegistration.updatedAt)}</p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedRegistration.notes && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Admin Notes</label>
                    <div className="mt-1 bg-yellow-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedRegistration.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedRegistration(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setStatusUpdateData({ 
                      registrationStatus: selectedRegistration.registrationStatus || 'confirmed',
                      notes: selectedRegistration.notes || ''
                    });
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Update Status
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && selectedRegistration && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Registration Status
                </h3>
                <button
                  onClick={() => {
                    setShowStatusModal(false);
                    setStatusUpdateData({});
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Registration Status</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={statusUpdateData.registrationStatus || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, registrationStatus: e.target.value }))}
                  >
                    {statusOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    rows="4"
                    placeholder="Add notes about this registration status change..."
                    value={statusUpdateData.notes || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowStatusModal(false);
                    setStatusUpdateData({});
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStatusUpdate}
                  className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistrations;