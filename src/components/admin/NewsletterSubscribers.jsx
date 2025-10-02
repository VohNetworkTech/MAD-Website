// src/components/admin/NewsletterSubscribers.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Download, 
  Eye, 
  Mail,
  Calendar,
  User,
  Hash,
  AlertCircle,
  CheckCircle2,
  UserX,
  X,
  Edit,
  Users,
  Send
} from 'lucide-react';

const NewsletterSubscribers = ({ onBack }) => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdateData, setStatusUpdateData] = useState({});

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'unsubscribed', label: 'Unsubscribed' }
  ];

  useEffect(() => {
    fetchSubscribers();
  }, [filters]);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllNewsletterSubscribers(filters);
      
      if (data.success) {
        setSubscribers(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching newsletter subscribers:', error);
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
      
      await adminService.updateSubscriberStatus(selectedSubscriber._id, statusUpdateData.status);
      
      // Refresh the data
      fetchSubscribers();
      setShowStatusModal(false);
      setStatusUpdateData({});
      
      console.log('Subscriber status updated successfully');
      
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'inactive': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'unsubscribed': return <UserX className="w-4 h-4 text-red-500" />;
      default: return <CheckCircle2 className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      'active': 'bg-green-100 text-green-800',
      'inactive': 'bg-yellow-100 text-yellow-800',
      'unsubscribed': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles['active']}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status || 'Active'}</span>
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportSubscribers = () => {
    // Create CSV content
    const csvContent = [
      // Header
      ['Email', 'Status', 'Subscribed Date', 'Unsubscribed Date'].join(','),
      // Data rows
      ...subscribers.map(subscriber => [
        subscriber.email,
        subscriber.status || 'active',
        formatDate(subscriber.subscribedAt || subscriber.createdAt),
        subscriber.unsubscribedAt ? formatDate(subscriber.unsubscribedAt) : 'N/A'
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
            <p className="text-gray-600">Manage newsletter subscriptions and send campaigns</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={exportSubscribers}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            <Send className="w-4 h-4 mr-2" />
            Send Campaign
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total Subscribers</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.active || 0}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-red-600">{stats.unsubscribed || 0}</div>
          <div className="text-sm text-gray-600">Unsubscribed</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by email..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <span className="ml-3 text-gray-600">Loading subscribers...</span>
          </div>
        ) : subscribers.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No subscribers found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscriber
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscribed Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscribers.map((subscriber) => (
                    <tr key={subscriber._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6 text-teal-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {subscriber.email}
                            </div>
                            {subscriber._id && (
                              <div className="text-sm text-gray-500 flex items-center">
                                <Hash className="w-3 h-3 mr-1" />
                                {subscriber._id.slice(-8)}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(subscriber.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(subscriber.subscribedAt || subscriber.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscriber.unsubscribedAt ? (
                          <div className="text-red-600">
                            Unsubscribed: {formatDate(subscriber.unsubscribedAt)}
                          </div>
                        ) : (
                          <div className="text-green-600">Active subscription</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedSubscriber(subscriber)}
                            className="text-teal-600 hover:text-teal-900 flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
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
      {selectedSubscriber && !showStatusModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Subscriber Details
                </h3>
                <button
                  onClick={() => setSelectedSubscriber(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-sm text-gray-900 font-medium">{selectedSubscriber.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscription Status</label>
                    <div className="mt-1">
                      {getStatusBadge(selectedSubscriber.status)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscribed Date</label>
                    <p className="text-sm text-gray-900">
                      {formatDate(selectedSubscriber.subscribedAt || selectedSubscriber.createdAt)}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscriber ID</label>
                    <p className="text-sm text-gray-900 font-mono">{selectedSubscriber._id}</p>
                  </div>
                  {selectedSubscriber.unsubscribedAt && (
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-500">Unsubscribed Date</label>
                      <p className="text-sm text-red-600">{formatDate(selectedSubscriber.unsubscribedAt)}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Subscription History</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Subscribed on {formatDate(selectedSubscriber.subscribedAt || selectedSubscriber.createdAt)}</div>
                    {selectedSubscriber.unsubscribedAt && (
                      <div>• Unsubscribed on {formatDate(selectedSubscriber.unsubscribedAt)}</div>
                    )}
                    <div>• Current status: <span className="font-medium capitalize">{selectedSubscriber.status || 'active'}</span></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedSubscriber(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && selectedSubscriber && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/3 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Subscription Status
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email: {selectedSubscriber.email}
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Status</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    value={statusUpdateData.status || ''}
                    onChange={(e) => setStatusUpdateData(prev => ({ ...prev, status: e.target.value }))}
                  >
                    {statusOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                  <div className="text-sm text-yellow-800">
                    <strong>Note:</strong> Changing status will affect newsletter delivery and subscriber communications.
                  </div>
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
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscribers;