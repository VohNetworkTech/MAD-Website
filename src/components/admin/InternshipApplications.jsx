// src/components/admin/InternshipApplications.jsx
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
  GraduationCap,
  Target,
  AlertCircle,
  CheckCircle2,
  Clock,
  X,
  Edit,
  Users,
  BookOpen,
  UserX
} from 'lucide-react';

const InternshipApplications = ({ onBack }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: '',
    internshipArea: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdateData, setStatusUpdateData] = useState({});

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'interview-scheduled', label: 'Interview Scheduled' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'completed', label: 'Completed' }
  ];

  const internshipAreaOptions = [
    { value: '', label: 'All Areas' },
    { value: 'Research & Policy', label: 'Research & Policy' },
    { value: 'Content Development', label: 'Content Development' },
    { value: 'Event Coordination', label: 'Event Coordination' },
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Assistive Technology', label: 'Assistive Technology' },
    { value: 'More', label: 'Other/More' }
  ];

  const durationOptions = [
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllInternshipApplications(filters);
      
      if (data.success) {
        setApplications(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching internship applications:', error);
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
      
      await adminService.updateInternshipStatus(selectedApplication._id, statusUpdateData);
      
      // Refresh the data
      fetchApplications();
      setShowStatusModal(false);
      setStatusUpdateData({});
      
      console.log('Internship status updated successfully');
      
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'under-review': return <Eye className="w-4 h-4 text-blue-500" />;
      case 'interview-scheduled': return <Calendar className="w-4 h-4 text-purple-500" />;
      case 'accepted': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'rejected': return <UserX className="w-4 h-4 text-red-500" />;
      case 'completed': return <GraduationCap className="w-4 h-4 text-green-600" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'under-review': 'bg-blue-100 text-blue-800',
      'interview-scheduled': 'bg-purple-100 text-purple-800',
      'accepted': 'bg-green-100 text-green-800',
      'rejected': 'bg-red-100 text-red-800',
      'completed': 'bg-green-200 text-green-900'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['pending']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status?.replace('-', ' ') || 'Pending'}</span>
      </span>
    );
  };

  const getAreaBadge = (area) => {
    const styles = {
      'Research & Policy': 'bg-blue-100 text-blue-800',
      'Content Development': 'bg-green-100 text-green-800',
      'Event Coordination': 'bg-purple-100 text-purple-800',
      'Social Media': 'bg-pink-100 text-pink-800',
      'Assistive Technology': 'bg-orange-100 text-orange-800',
      'More': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${styles[area] || styles['More']}`}>
        {area}
      </span>
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
            <h1 className="text-2xl font-bold text-gray-900">Internship Applications</h1>
            <p className="text-gray-600">Manage internship applications and candidates</p>
          </div>
        </div>
        
       
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.pending || 0}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.underReview || 0}</div>
          <div className="text-sm text-gray-600">Under Review</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.accepted || 0}</div>
          <div className="text-sm text-gray-600">Accepted</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-700">{stats.completed || 0}</div>
          <div className="text-sm text-gray-600">Completed</div>
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
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            value={filters.internshipArea}
            onChange={(e) => handleFilterChange('internshipArea', e.target.value)}
          >
            {internshipAreaOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
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
                      Candidate Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Internship Area
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
                          <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-green-600" />
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getAreaBadge(application.internshipArea)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(application.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(application.createdAt)}
                        </div>
                        {application.internReference && (
                          <div className="flex items-center mt-1">
                            <Hash className="w-3 h-3 mr-1" />
                            <span className="text-xs">{application.internReference}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedApplication(application)}
                            className="text-green-600 hover:text-green-900 flex items-center"
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
                  Internship Application Details
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
                      <p className="text-sm text-gray-900">{selectedApplication.internReference}</p>
                    </div>
                  </div>
                </div>

                {/* Application Information */}
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Application Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Internship Area</label>
                      <div className="mt-1">
                        {getAreaBadge(selectedApplication.internshipArea)}
                      </div>
                    </div>
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
                    {selectedApplication.duration && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Duration</label>
                        <p className="text-sm text-gray-900">{selectedApplication.duration.replace('-', ' ')}</p>
                      </div>
                    )}
                    {selectedApplication.mentor && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Assigned Mentor</label>
                        <p className="text-sm text-gray-900">{selectedApplication.mentor}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Important Dates */}
                {(selectedApplication.interviewDate || selectedApplication.startDate || selectedApplication.endDate) && (
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Important Dates</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedApplication.interviewDate && (
                        <div>
                          <label className="text-sm font-medium text-gray-500">Interview Date</label>
                          <p className="text-sm text-gray-900">{formatDate(selectedApplication.interviewDate)}</p>
                        </div>
                      )}
                      {selectedApplication.startDate && (
                        <div>
                          <label className="text-sm font-medium text-gray-500">Start Date</label>
                          <p className="text-sm text-gray-900">{formatDate(selectedApplication.startDate)}</p>
                        </div>
                      )}
                      {selectedApplication.endDate && (
                        <div>
                          <label className="text-sm font-medium text-gray-500">End Date</label>
                          <p className="text-sm text-gray-900">{formatDate(selectedApplication.endDate)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Education Background */}
                {selectedApplication.education && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Education Background</label>
                    <div className="mt-1 bg-blue-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedApplication.education}
                      </p>
                    </div>
                  </div>
                )}

                {/* Motivation */}
                <div>
                  <label className="text-sm font-medium text-gray-500">Motivation & Interest</label>
                  <div className="mt-1 bg-gray-50 rounded-md p-3">
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">
                      {selectedApplication.motivation}
                    </p>
                  </div>
                </div>

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
                  Update Internship Status
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={statusUpdateData.status || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, status: e.target.value }))}
                  >
                    {statusOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={statusUpdateData.duration || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, duration: e.target.value }))}
                  >
                    <option value="">Select Duration</option>
                    {durationOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviewed By</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Admin name or ID"
                    value={statusUpdateData.reviewedBy || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, reviewedBy: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assigned Mentor</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Mentor name"
                    value={statusUpdateData.mentor || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, mentor: e.target.value }))}
                  />
                </div>

                {statusUpdateData.status === 'interview-scheduled' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interview Date</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={statusUpdateData.interviewDate || ''}
                      onChange={(e) => setStatusUpdateData(prev => ({ ...prev, interviewDate: e.target.value }))}
                    />
                  </div>
                )}

                {statusUpdateData.status === 'accepted' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        value={statusUpdateData.startDate || ''}
                        onChange={(e) => setStatusUpdateData(prev => ({ ...prev, startDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        value={statusUpdateData.endDate || ''}
                        onChange={(e) => setStatusUpdateData(prev => ({ ...prev, endDate: e.target.value }))}
                      />
                    </div>
                  </div>
                )}

                {statusUpdateData.status === 'rejected' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows="4"
                    placeholder="Internal notes about this application..."
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
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
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

export default InternshipApplications;