import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  User, 
  Search, 
  RefreshCw, 
  Plus, 
  Edit, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  XCircle,
  Filter,
  Download,
  FileText,
  Eye,
  Package,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  UserPlus,
  UserX,
  UserCheck,
  Lock,
  Unlock,
  Shield
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSUserManager = () => {
  const { siteSettings } = useAdmin();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Check if WHMCS user management is enabled
    const enableUserManagementSetting = siteSettings.find(
      s => s.setting_key === 'whmcs_enableUserManagement'
    );
    
    setIsEnabled(enableUserManagementSetting?.setting_value === true);
    
    if (enableUserManagementSetting?.setting_value === true) {
      fetchUsers();
    }
  }, [siteSettings]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call the actual WHMCS API
      // For demo purposes, we'll use mock data
      const mockUsers = [
        {
          id: 1,
          username: 'admin',
          firstName: 'System',
          lastName: 'Administrator',
          email: 'admin@example.com',
          role: 'Administrator',
          departments: ['All Departments'],
          lastLogin: '2024-06-17T08:30:00Z',
          status: 'Active',
          twoFactorAuth: true
        },
        {
          id: 2,
          username: 'support',
          firstName: 'Support',
          lastName: 'Agent',
          email: 'support@example.com',
          role: 'Support',
          departments: ['Technical Support', 'Billing Support'],
          lastLogin: '2024-06-16T14:45:00Z',
          status: 'Active',
          twoFactorAuth: true
        },
        {
          id: 3,
          username: 'billing',
          firstName: 'Billing',
          lastName: 'Manager',
          email: 'billing@example.com',
          role: 'Billing',
          departments: ['Billing Support'],
          lastLogin: '2024-06-15T11:20:00Z',
          status: 'Active',
          twoFactorAuth: false
        },
        {
          id: 4,
          username: 'sales',
          firstName: 'Sales',
          lastName: 'Representative',
          email: 'sales@example.com',
          role: 'Sales',
          departments: ['Sales'],
          lastLogin: '2024-06-14T09:15:00Z',
          status: 'Inactive',
          twoFactorAuth: false
        },
        {
          id: 5,
          username: 'manager',
          firstName: 'Team',
          lastName: 'Manager',
          email: 'manager@example.com',
          role: 'Manager',
          departments: ['Technical Support', 'Billing Support', 'Sales'],
          lastLogin: '2024-06-13T16:30:00Z',
          status: 'Active',
          twoFactorAuth: true
        }
      ];
      
      setUsers(mockUsers);
      setTotalPages(Math.ceil(mockUsers.length / 10)); // Assuming 10 users per page
      
      toast.success('Users loaded successfully');
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRole = roleFilter === '' || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  if (!isEnabled) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              WHMCS User Management is not enabled. Please enable it in the WHMCS API settings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If a user is selected, show the user details
  if (selectedUser) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedUser(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Users
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Edit className="h-4 w-4 inline mr-1" />
              Edit User
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-main-green rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {selectedUser.firstName.charAt(0)}{selectedUser.lastName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{selectedUser.firstName} {selectedUser.lastName}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                    <span>@{selectedUser.username}</span>
                    <span>•</span>
                    <span>{selectedUser.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedUser.status)}`}>
                  {selectedUser.status}
                </span>
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {selectedUser.role}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">User Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Username:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedUser.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Email:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedUser.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Role:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedUser.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedUser.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Login:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedUser.lastLogin).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Two-Factor Auth:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedUser.twoFactorAuth ? 'Enabled' : 'Disabled'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Departments</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    {selectedUser.departments.map((department, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-main-green" />
                        <span className="text-sm text-gray-700">{department}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">User Actions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Lock className="h-4 w-4 text-gray-600" />
                  <span>Reset Password</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedUser.status === 'Active' ? (
                    <>
                      <UserX className="h-4 w-4 text-red-600" />
                      <span className="text-red-600">Deactivate User</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Activate User</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedUser.twoFactorAuth ? (
                    <>
                      <Unlock className="h-4 w-4 text-yellow-600" />
                      <span className="text-yellow-600">Disable 2FA</span>
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600">Enable 2FA</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Activity Log</h4>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Logged in to the system</div>
                      <div className="text-xs text-gray-500">{new Date(selectedUser.lastLogin).toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Edit className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Updated client profile #1234</div>
                      <div className="text-xs text-gray-500">2024-06-15 14:30:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Created invoice #INV-001</div>
                      <div className="text-xs text-gray-500">2024-06-14 11:15:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <User className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS User Manager</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchUsers}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh users"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <UserPlus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Search users..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={roleFilter}
            onChange={handleRoleFilterChange}
            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Roles</option>
            <option value="Administrator">Administrator</option>
            <option value="Support">Support</option>
            <option value="Billing">Billing</option>
            <option value="Sales">Sales</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredUsers.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Departments
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedUser(user)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-main-green rounded-full flex items-center justify-center text-white font-bold">
                          {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                          <div className="text-sm text-gray-500">@{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.role}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.departments.join(', ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.lastLogin).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(user.status)}`}>
                          {user.status}
                        </span>
                        {user.twoFactorAuth && (
                          <span className="ml-2 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            2FA
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedUser(user);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle edit action
                          }}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle delete action
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
                  <span className="font-medium">{filteredUsers.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No users found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || roleFilter
              ? `No results for your search. Try different search terms or filters.`
              : 'No users have been created yet.'}
          </p>
          {!searchTerm && !roleFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <UserPlus className="h-5 w-5" />
              <span>Create First User</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WHMCSUserManager;