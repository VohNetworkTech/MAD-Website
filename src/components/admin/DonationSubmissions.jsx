// src/components/admin/DonationSubmissions.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  DollarSign,
  Phone,
  Calendar,
  User,
  Hash,
  AlertCircle,
  CheckCircle2,
  Clock,
  X,
  CreditCard
} from 'lucide-react';

const DonationSubmissions = ({ onBack }) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: '',
    donationType: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const donationTypeOptions = [
    { value: '', label: 'All Types' },
    { value: 'One-Time', label: 'One-Time' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Sponsor a Program', label: 'Sponsor a Program' },
    { value: 'Corporate Donation', label: 'Corporate Donation' }
  ];

  useEffect(() => {
    fetchSubmissions();
  }, [filters]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      // Import the admin service
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllDonationSubmissions(filters);
      
      if (data.success) {
        setSubmissions(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching donations:', error);
      // You might want to show a toast notification here
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1 // Reset to first page when filtering
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'contacted': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'cancelled': return <X className="w-4 h-4 text-red-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'contacted': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['pending']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </span>
    );
  };

  const getDonationTypeBadge = (type) => {
    const styles = {
      'One-Time': 'bg-blue-100 text-blue-800',
      'Monthly': 'bg-green-100 text-green-800',
      'Sponsor a Program': 'bg-purple-100 text-purple-800',
      'Corporate Donation': 'bg-orange-100 text-orange-800'
    };
    
    return (
      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${styles[type] || styles['One-Time']}`}>
        {type}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
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
            <h1 className="text-2xl font-bold text-gray-900">Donation Submissions</h1>
            <p className="text-gray-600">Manage and track donation requests</p>
          </div>
        </div>
        
       
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total Donations</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.pending || 0}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.completed || 0}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
       
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search donations..."
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
            value={filters.donationType}
            onChange={(e) => handleFilterChange('donationType', e.target.value)}
          >
            {donationTypeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="ml-3 text-gray-600">Loading donations...</span>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <DollarSign className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No donations found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Donor Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount & Type
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
                          <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {submission.fullName}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {submission.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {submission.mobile}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg font-bold text-green-600">
                          {formatCurrency(submission.donationAmount)}
                        </div>
                        <div className="mt-1">
                          {getDonationTypeBadge(submission.donationType)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(submission.status || 'pending')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(submission.createdAt)}
                        </div>
                        {submission.donationReference && (
                          <div className="flex items-center mt-1">
                            <Hash className="w-3 h-3 mr-1" />
                            <span className="text-xs">{submission.donationReference}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-green-600 hover:text-green-900 flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </button>
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
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                      <button
                        onClick={() => handlePageChange(pagination.current - 1)}
                        disabled={pagination.current <= 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      {[...Array(Math.min(5, pagination.pages))].map((_, index) => {
                        const page = index + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              page === pagination.current
                                ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => handlePageChange(pagination.current + 1)}
                        disabled={pagination.current >= pagination.pages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Donation Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Donation Details
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
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
                    <label className="text-sm font-medium text-gray-500">Donation Amount</label>
                    <p className="text-lg font-bold text-green-600">
                      {formatCurrency(selectedSubmission.donationAmount)}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Donation Type</label>
                    <div className="mt-1">
                      {getDonationTypeBadge(selectedSubmission.donationType)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <div className="mt-1">
                      {getStatusBadge(selectedSubmission.status || 'pending')}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Reference ID</label>
                    <p className="text-sm text-gray-900">{selectedSubmission.donationReference}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Submitted Date</label>
                    <p className="text-sm text-gray-900">{formatDate(selectedSubmission.createdAt)}</p>
                  </div>
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
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationSubmissions;