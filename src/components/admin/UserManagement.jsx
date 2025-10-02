// src/components/admin/UserManagement.jsx
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
  Shield,
  UserCog,
  AlertCircle,
  X,
  Edit
} from 'lucide-react';

const UserManagement = ({ onBack }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    role: ''
  });
  const [pagination, setPagination] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [roleUpdateData, setRoleUpdateData] = useState({});

  const roleOptions = [
    { value: '', label: 'All Roles' },
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' }
  ];

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      const data = await adminService.getAllUsers(filters);
      
      if (data.success) {
        setUsers(data.data || []);
        setStats(data.stats || {});
        setPagination(data.pagination || {});
      }

    } catch (error) {
      console.error('Error fetching users:', error);
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

  const handleRoleUpdate = async () => {
    try {
      const adminService = (await import('../../services/adminService')).default;
      
      await adminService.updateUserRole(selectedUser._id, roleUpdateData.role);
      
      fetchUsers();
      setShowRoleModal(false);
      setRoleUpdateData({});
      
      console.log('User role updated successfully');
      
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  const getRoleBadge = (role) => {
    const styles = {
      'admin': 'bg-purple-100 text-purple-800',
      'user': 'bg-blue-100 text-blue-800'
    };
    
    const icons = {
      'admin': <Shield className="w-3 h-3 mr-1" />,
      'user': <User className="w-3 h-3 mr-1" />
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[role] || styles['user']}`}>
        {icons[role] || icons['user']}
        <span className="capitalize">{role || 'User'}</span>
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
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage user accounts and permissions</p>
          </div>
        </div>
        
        
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total || 0}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-purple-600">{stats.admins || 0}</div>
          <div className="text-sm text-gray-600">Admins</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.users || 0}</div>
          <div className="text-sm text-gray-600">Regular Users</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={filters.role}
            onChange={(e) => handleFilterChange('role', e.target.value)}
          >
            {roleOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Loading users...</span>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-12">
            <UserCog className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registered Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {user._id?.slice(-8)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {user.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {user.phoneNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getRoleBadge(user.role)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(user.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedUser(user)}
                            className="text-purple-600 hover:text-purple-900 flex items-center"
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
      {selectedUser && !showRoleModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  User Account Details
                </h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-sm text-gray-900 font-medium">{selectedUser.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-sm text-gray-900">{selectedUser.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone Number</label>
                    <p className="text-sm text-gray-900">{selectedUser.phoneNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">User Role</label>
                    <div className="mt-1">
                      {getRoleBadge(selectedUser.role)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">User ID</label>
                    <p className="text-sm text-gray-900 font-mono">{selectedUser._id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Registration Date</label>
                    <p className="text-sm text-gray-900">{formatDate(selectedUser.createdAt)}</p>
                  </div>
                  {selectedUser.updatedAt && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Last Updated</label>
                      <p className="text-sm text-gray-900">{formatDate(selectedUser.updatedAt)}</p>
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <strong>Security Note:</strong> Password information is encrypted and cannot be viewed. Users can reset their password through the authentication system.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Role Update Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/3 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Update User Role
                </h3>
                <button
                  onClick={() => {
                    setShowRoleModal(false);
                    setRoleUpdateData({});
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User: {selectedUser.name}
                  </label>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Role</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    value={roleUpdateData.role || ''}
                    onChange={(e) => setRoleUpdateData(prev => ({ ...prev, role: e.target.value }))}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <div className="text-sm text-red-800">
                    <strong>Warning:</strong> Changing user role will affect their access permissions. Admin users have full access to the admin panel and all management features.
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowRoleModal(false);
                    setRoleUpdateData({});
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

export default UserManagement;