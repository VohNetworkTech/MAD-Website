// src/components/admin/CollaborationSubmissions.jsx
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
  Building2,
  Target,
  AlertCircle,
  CheckCircle2,
  Clock,
  X,
  Users,
  Edit,
  MessageSquare
} from 'lucide-react';

const CollaborationSubmissions = ({ onBack }) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: '',
    areaOfInterest: '',
    organizationType: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdateData, setStatusUpdateData] = useState({});

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'meeting-scheduled', label: 'Meeting Scheduled' },
    { value: 'in-discussion', label: 'In Discussion' },
    { value: 'approved', label: 'Approved' },
    { value: 'active-partnership', label: 'Active Partnership' },
    { value: 'declined', label: 'Declined' },
    { value: 'on-hold', label: 'On Hold' }
  ];

  const areaOptions = [
    { value: '', label: 'All Areas' },
    { value: 'Education', label: 'Education' },
    { value: 'Employment', label: 'Employment' },
    { value: 'Skill Development', label: 'Skill Development' },
    { value: 'Livelihood', label: 'Livelihood' },
    { value: 'Assistive Technology', label: 'Assistive Technology' },
    { value: 'Healthcare & Rehabilitation', label: 'Healthcare & Rehabilitation' },
    { value: 'Advocacy', label: 'Advocacy' },
    { value: 'Accessibility', label: 'Accessibility' },
    { value: 'Policy Development', label: 'Policy Development' },
    { value: 'Research & Innovation', label: 'Research & Innovation' },
    { value: 'Other', label: 'Other' }
  ];

  const organizationTypeOptions = [
    { value: '', label: 'All Types' },
    { value: 'ngo', label: 'NGO' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'government', label: 'Government' },
    { value: 'institution', label: 'Institution' },
    { value: 'individual', label: 'Individual' },
    { value: 'startup', label: 'Startup' },
    { value: 'other', label: 'Other' }
  ];

  useEffect(() => {
    fetchSubmissions();
  }, [filters]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllCollaborationSubmissions(filters);
      
      if (data.success) {
        setSubmissions(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching collaborations:', error);
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
      
      await adminService.updateCollaborationStatus(selectedSubmission._id, statusUpdateData);
      
      // Refresh the data
      fetchSubmissions();
      setShowStatusModal(false);
      setStatusUpdateData({});
      
      // Optional: Show success message
      console.log('Status updated successfully');
      
    } catch (error) {
      console.error('Error updating status:', error);
      // Optional: Show error message
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'under-review': return <Eye className="w-4 h-4 text-blue-500" />;
      case 'meeting-scheduled': return <Calendar className="w-4 h-4 text-purple-500" />;
      case 'in-discussion': return <MessageSquare className="w-4 h-4 text-orange-500" />;
      case 'approved': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'active-partnership': return <Users className="w-4 h-4 text-green-600" />;
      case 'declined': return <X className="w-4 h-4 text-red-500" />;
      case 'on-hold': return <AlertCircle className="w-4 h-4 text-gray-500" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'under-review': 'bg-blue-100 text-blue-800',
      'meeting-scheduled': 'bg-purple-100 text-purple-800',
      'in-discussion': 'bg-orange-100 text-orange-800',
      'approved': 'bg-green-100 text-green-800',
      'active-partnership': 'bg-green-200 text-green-900',
      'declined': 'bg-red-100 text-red-800',
      'on-hold': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['pending']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status?.replace('-', ' ') || 'Pending'}</span>
      </span>
    );
  };

  const getOrgTypeBadge = (type) => {
    const styles = {
      'ngo': 'bg-green-100 text-green-800',
      'corporate': 'bg-blue-100 text-blue-800',
      'government': 'bg-purple-100 text-purple-800',
      'institution': 'bg-indigo-100 text-indigo-800',
      'individual': 'bg-gray-100 text-gray-800',
      'startup': 'bg-orange-100 text-orange-800',
      'other': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${styles[type] || styles['other']}`}>
        {type?.toUpperCase() || 'OTHER'}
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
            <h1 className="text-2xl font-bold text-gray-900">Collaboration Requests</h1>
            <p className="text-gray-600">Manage partnership and collaboration opportunities</p>
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
          <div className="text-2xl font-bold text-green-600">{stats.approved || 0}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-700">{stats.activePartnerships || 0}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-red-600">{stats.declined || 0}</div>
          <div className="text-sm text-gray-600">Declined</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search collaborations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            value={filters.areaOfInterest}
            onChange={(e) => handleFilterChange('areaOfInterest', e.target.value)}
          >
            {areaOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            value={filters.organizationType}
            onChange={(e) => handleFilterChange('organizationType', e.target.value)}
          >
            {organizationTypeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
            <span className="ml-3 text-gray-600">Loading collaborations...</span>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No collaboration requests found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organization & Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Area & Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {submission.organizationName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {submission.fullName}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {submission.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {submission.areaOfInterest}
                        </div>
                        <div className="mt-1">
                          {getOrgTypeBadge(submission.organizationType)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(submission.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(submission.createdAt)}
                        </div>
                        {submission.collaborationReference && (
                          <div className="flex items-center mt-1">
                            <Hash className="w-3 h-3 mr-1" />
                            <span className="text-xs">{submission.collaborationReference}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-red-600 hover:text-red-900 flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => {
                              setSelectedSubmission(submission);
                              setShowStatusModal(true);
                              setStatusUpdateData({ status: submission.status || 'pending' });
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
      {selectedSubmission && !showStatusModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/5 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Collaboration Request Details
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Organization Name</label>
                    <p className="text-sm text-gray-900 font-medium">{selectedSubmission.organizationName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Contact Person</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.fullName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Mobile</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.mobile}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Area of Interest</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.areaOfInterest}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Organization Type</label>
                    <div className="mt-1">
                      {getOrgTypeBadge(selectedSubmission.organizationType)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <div className="mt-1">
                      {getStatusBadge(selectedSubmission.status)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Reference ID</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.collaborationReference}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Submitted Date</label>
                    <p className="text-sm text-gray-900">{formatDate(selectedSubmission.createdAt)}</p>
                  </div>
                  {selectedSubmission.reviewedAt && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Last Reviewed</label>
                      <p className="text-sm text-gray-900">{formatDate(selectedSubmission.reviewedAt)}</p>
                    </div>
                  )}
                </div>
                
                {selectedSubmission.message && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Message</label>
                    <div className="mt-1 bg-gray-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  </div>
                )}

                {selectedSubmission.notes && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Admin Notes</label>
                    <div className="mt-1 bg-yellow-50 rounded-md p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedSubmission.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setStatusUpdateData({ status: selectedSubmission.status || 'pending' });
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
      {showStatusModal && selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Collaboration Status
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={statusUpdateData.status || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, status: e.target.value }))}
                  >
                    {statusOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={statusUpdateData.organizationType || selectedSubmission.organizationType || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, organizationType: e.target.value }))}
                  >
                    {organizationTypeOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={statusUpdateData.priority || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, priority: e.target.value }))}
                  >
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={statusUpdateData.partnershipType || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, partnershipType: e.target.value }))}
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="project-based">Project Based</option>
                    <option value="long-term">Long Term</option>
                    <option value="funding">Funding</option>
                    <option value="resource-sharing">Resource Sharing</option>
                    <option value="knowledge-exchange">Knowledge Exchange</option>
                    <option value="advocacy">Advocacy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {statusUpdateData.status === 'meeting-scheduled' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Date</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={statusUpdateData.meetingDate || ''}
                      onChange={(e) => setStatusUpdateData(prev => ({ ...prev, meetingDate: e.target.value }))}
                    />
                  </div>
                )}

                {statusUpdateData.status === 'active-partnership' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Start Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={statusUpdateData.partnershipStartDate || ''}
                      onChange={(e) => setStatusUpdateData(prev => ({ ...prev, partnershipStartDate: e.target.value }))}
                    />
                  </div>
                )}

                {statusUpdateData.status === 'declined' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Decline Reason</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      rows="3"
                      placeholder="Reason for declining the collaboration..."
                      value={statusUpdateData.declineReason || ''}
                      onChange={(e) => setStatusUpdateData(prev => ({ ...prev, declineReason: e.target.value }))}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviewed By</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Admin name or ID"
                    value={statusUpdateData.reviewedBy || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, reviewedBy: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    rows="4"
                    placeholder="Internal notes about this collaboration request..."
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
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
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

export default CollaborationSubmissions;