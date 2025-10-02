// src/components/admin/VolunteerApplications.jsx
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
  Heart,
  Target,
  AlertCircle,
  CheckCircle2,
  Clock,
  X,
  Edit,
  Users,
  UserCheck,
  UserX
} from 'lucide-react';

const VolunteerApplications = ({ onBack }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: '',
    expertise: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdateData, setStatusUpdateData] = useState({});

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'reviewed', label: 'Reviewed' },
    { value: 'approved', label: 'Approved' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'rejected', label: 'Rejected' }
  ];

  const expertiseOptions = [
    { value: '', label: 'All Expertise' },
    { value: 'Education', label: 'Education' },
    { value: 'Skill Development', label: 'Skill Development' },
    { value: 'Content Creation', label: 'Content Creation' },
    { value: 'Advocacy', label: 'Advocacy' },
    { value: 'Event Coordination', label: 'Event Coordination' },
    { value: 'Research & Policy', label: 'Research & Policy' },
    { value: 'More', label: 'Other/More' }
  ];

  const availabilityOptions = [
    { value: 'part-time', label: 'Part Time' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'weekends', label: 'Weekends' },
    { value: 'flexible', label: 'Flexible' }
  ];

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllVolunteerApplications(filters);
      
      if (data.success) {
        setApplications(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching volunteer applications:', error);
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
      
      await adminService.updateVolunteerStatus(selectedApplication._id, statusUpdateData);
      
      fetchApplications();
      setShowStatusModal(false);
      setStatusUpdateData({});
      
      console.log('Volunteer status updated successfully');
      
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'reviewed': return <Eye className="w-4 h-4 text-blue-500" />;
      case 'approved': return <UserCheck className="w-4 h-4 text-green-500" />;
      case 'active': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'inactive': return <AlertCircle className="w-4 h-4 text-gray-500" />;
      case 'rejected': return <UserX className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'reviewed': 'bg-blue-100 text-blue-800',
      'approved': 'bg-green-100 text-green-800',
      'active': 'bg-green-200 text-green-900',
      'inactive': 'bg-gray-100 text-gray-800',
      'rejected': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['pending']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status || 'Pending'}</span>
      </span>
    );
  };

  const getExpertiseBadges = (expertiseArray) => {
    if (!Array.isArray(expertiseArray) || expertiseArray.length === 0) {
      return <span className="text-xs text-gray-500">No expertise listed</span>;
    }
    
    return (
      <div className="flex flex-wrap gap-1">
        {expertiseArray.slice(0, 2).map((exp, index) => (
          <span key={index} className="inline-flex px-2 py-1 rounded text-xs font-medium bg-cyan-100 text-cyan-800">
            {exp}
          </span>
        ))}
        {expertiseArray.length > 2 && (
          <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
            +{expertiseArray.length - 2} more
          </span>
        )}
      </div>
    );
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
            <h1 className="text-2xl font-bold text-gray-900">Volunteer Applications</h1>
            <p className="text-gray-600">Manage volunteer registrations and community engagement</p>
          </div>
        </div>
        
       
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.pending || 0}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.approved || 0}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-700">{stats.active || 0}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-red-600">{stats.rejected || 0}</div>
          <div className="text-sm text-gray-600">Rejected</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search volunteers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            value={filters.expertise}
            onChange={(e) => handleFilterChange('expertise', e.target.value)}
          >
            {expertiseOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div>
            <span className="ml-3 text-gray-600">Loading applications...</span>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Volunteer Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expertise Areas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-cyan-100 rounded-full flex items-center justify-center">
                            <Heart className="h-6 w-6 text-cyan-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {application.fullName}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {application.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {application.mobile}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getExpertiseBadges(application.expertise)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(application.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(application.createdAt)}
                        </div>
                        {application.volunteerReference && (
                          <div className="flex items-center mt-1">
                            <Hash className="w-3 h-3 mr-1" />
                            <span className="text-xs">{application.volunteerReference}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedApplication(application)}
                            className="text-cyan-600 hover:text-cyan-900 flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => {
                              setSelectedApplication(application);
                              setShowStatusModal(true);
                              setStatusUpdateData({ status: application.status || 'pending' });
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
      {selectedApplication && !showStatusModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/5 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Volunteer Application Details
                </h3>
                <button
                  onClick={() => setSelectedApplication(null)}
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
                      <p className="text-sm text-gray-900">{selectedApplication.fullName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-sm text-gray-900">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Mobile</label>
                      <p className="text-sm text-gray-900">{selectedApplication.mobile}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Reference ID</label>
                      <p className="text-sm text-gray-900">{selectedApplication.volunteerReference}</p>
                    </div>
                  </div>
                </div>

                {/* Application Information */}
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Volunteer Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Status</label>
                      <div className="mt-1">
                        {getStatusBadge(selectedApplication.status)}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Applied Date</label>
                      <p className="text-sm text-gray-900">{formatDate(selectedApplication.createdAt)}</p>
                    </div>
                    {selectedApplication.reviewedAt && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Last Reviewed</label>
                        <p className="text-sm text-gray-900">{formatDate(selectedApplication.reviewedAt)}</p>
                      </div>
                    )}
                    {selectedApplication.approvedAt && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Approved Date</label>
                        <p className="text-sm text-gray-900">{formatDate(selectedApplication.approvedAt)}</p>
                      </div>
                    )}
                    {selectedApplication.availability && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Availability</label>
                        <p className="text-sm text-gray-900 capitalize">{selectedApplication.availability.replace('-', ' ')}</p>
                      </div>
                    )}
                    {selectedApplication.reviewedBy && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Reviewed By</label>
                        <p className="text-sm text-gray-900">{selectedApplication.reviewedBy}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expertise Areas */}
                <div>
                  <label className="text-sm font-medium text-gray-500">Expertise Areas</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedApplication.expertise && selectedApplication.expertise.length > 0 ? (
                      selectedApplication.expertise.map((exp, index) => (
                        <span key={index} className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                          {exp}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">No expertise areas listed</span>
                    )}
                  </div>
                </div>

                {/* How to Help */}
                <div>
                  <label className="text-sm font-medium text-gray-500">How They Want to Help</label>
                  <div className="mt-1 bg-gray-50 rounded-md p-3">
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">
                      {selectedApplication.howToHelp}
                    </p>
                  </div>
                </div>

                {/* Additional Message */}
                {selectedApplication.message && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Additional Message</label>
                    <div className="mt-1 bg-blue-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedApplication.message}
                      </p>
                    </div>
                  </div>
                )}

                {/* Admin Notes */}
                {selectedApplication.notes && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Admin Notes</label>
                    <div className="mt-1 bg-yellow-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedApplication.notes}
                      </p>
                    </div>
                  </div>
                )}

                {/* Rejection Reason */}
                {selectedApplication.rejectionReason && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Rejection Reason</label>
                    <div className="mt-1 bg-red-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedApplication.rejectionReason}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setStatusUpdateData({ status: selectedApplication.status || 'pending' });
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
      {showStatusModal && selectedApplication && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Volunteer Status
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    value={statusUpdateData.status || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, status: e.target.value }))}
                  >
                    {statusOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    value={statusUpdateData.availability || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, availability: e.target.value }))}
                  >
                    <option value="">Select Availability</option>
                    {availabilityOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviewed By</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Admin name or ID"
                    value={statusUpdateData.reviewedBy || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, reviewedBy: e.target.value }))}
                  />
                </div>

                {statusUpdateData.status === 'rejected' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      rows="3"
                      placeholder="Reason for rejecting the application..."
                      value={statusUpdateData.rejectionReason || ''}
                      onChange={(e) => setStatusUpdateData(prev => ({ ...prev, rejectionReason: e.target.value }))}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    rows="4"
                    placeholder="Internal notes about this volunteer..."
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
                  className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
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

export default VolunteerApplications;