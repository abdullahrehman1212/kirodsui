import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Briefcase, 
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
  Server,
  Settings,
  Play,
  Pause,
  RotateCw
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSServiceManager = () => {
  const { siteSettings } = useAdmin();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Check if WHMCS product management is enabled
    const enableProductManagementSetting = siteSettings.find(
      s => s.setting_key === 'whmcs_enableProductManagement'
    );
    
    setIsEnabled(enableProductManagementSetting?.setting_value === true);
    
    if (enableProductManagementSetting?.setting_value === true) {
      fetchServices();
    }
  }, [siteSettings]);

  const fetchServices = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call the actual WHMCS API
      // For demo purposes, we'll use mock data
      const mockServices = [
        {
          id: 1,
          name: 'Premium WordPress Hosting',
          domain: 'example.com',
          client: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
          },
          product: {
            id: 2,
            name: 'Premium Hosting',
            type: 'Shared Hosting'
          },
          server: {
            id: 1,
            name: 'Shared Server 01',
            ipAddress: '123.456.789.012'
          },
          registrationDate: '2023-07-15',
          nextDueDate: '2024-07-15',
          recurringAmount: '$19.99',
          billingCycle: 'Monthly',
          status: 'Active',
          details: {
            diskUsage: {
              used: 8.2,
              total: 25,
              percentage: 33
            },
            bandwidth: {
              used: 45,
              total: 100,
              percentage: 45
            },
            emailAccounts: {
              used: 3,
              total: 10,
              percentage: 30
            },
            databases: {
              used: 2,
              total: 10,
              percentage: 20
            }
          }
        },
        {
          id: 2,
          name: 'Cloud Hosting',
          domain: 'mybusiness.net',
          client: {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
          },
          product: {
            id: 4,
            name: 'Enterprise Cloud',
            type: 'Cloud Hosting'
          },
          server: {
            id: 3,
            name: 'Cloud Server 03',
            ipAddress: '234.567.890.123'
          },
          registrationDate: '2023-08-01',
          nextDueDate: '2024-08-01',
          recurringAmount: '$99.99',
          billingCycle: 'Monthly',
          status: 'Active',
          details: {
            diskUsage: {
              used: 45.5,
              total: 100,
              percentage: 45.5
            },
            bandwidth: {
              used: 120,
              total: 500,
              percentage: 24
            },
            emailAccounts: {
              used: 8,
              total: 25,
              percentage: 32
            },
            databases: {
              used: 12,
              total: 50,
              percentage: 24
            }
          }
        },
        {
          id: 3,
          name: 'Basic Hosting',
          domain: 'smallbusiness.org',
          client: {
            id: 3,
            name: 'Robert Johnson',
            email: 'robert.johnson@example.com'
          },
          product: {
            id: 1,
            name: 'Basic Hosting',
            type: 'Shared Hosting'
          },
          server: {
            id: 1,
            name: 'Shared Server 01',
            ipAddress: '123.456.789.012'
          },
          registrationDate: '2023-09-15',
          nextDueDate: '2024-09-15',
          recurringAmount: '$9.99',
          billingCycle: 'Monthly',
          status: 'Suspended',
          details: {
            diskUsage: {
              used: 4.2,
              total: 10,
              percentage: 42
            },
            bandwidth: {
              used: 25,
              total: 50,
              percentage: 50
            },
            emailAccounts: {
              used: 2,
              total: 5,
              percentage: 40
            },
            databases: {
              used: 1,
              total: 5,
              percentage: 20
            }
          }
        },
        {
          id: 4,
          name: 'Business VPS',
          domain: 'techcompany.com',
          client: {
            id: 4,
            name: 'Emily Williams',
            email: 'emily.williams@example.com'
          },
          product: {
            id: 3,
            name: 'Business VPS',
            type: 'VPS Hosting'
          },
          server: {
            id: 2,
            name: 'VPS Server 02',
            ipAddress: '345.678.901.234'
          },
          registrationDate: '2023-10-01',
          nextDueDate: '2024-10-01',
          recurringAmount: '$49.99',
          billingCycle: 'Monthly',
          status: 'Active',
          details: {
            diskUsage: {
              used: 35.8,
              total: 100,
              percentage: 35.8
            },
            bandwidth: {
              used: 180,
              total: 500,
              percentage: 36
            },
            emailAccounts: {
              used: 15,
              total: 50,
              percentage: 30
            },
            databases: {
              used: 8,
              total: 20,
              percentage: 40
            }
          }
        },
        {
          id: 5,
          name: 'Email Hosting',
          domain: 'creativestudio.com',
          client: {
            id: 5,
            name: 'Michael Brown',
            email: 'michael.brown@example.com'
          },
          product: {
            id: 5,
            name: 'Email Hosting',
            type: 'Email Services'
          },
          server: {
            id: 4,
            name: 'Email Server 01',
            ipAddress: '456.789.012.345'
          },
          registrationDate: '2023-11-15',
          nextDueDate: '2024-11-15',
          recurringAmount: '$4.99',
          billingCycle: 'Monthly',
          status: 'Pending',
          details: {
            diskUsage: {
              used: 2.5,
              total: 10,
              percentage: 25
            },
            emailAccounts: {
              used: 5,
              total: 10,
              percentage: 50
            }
          }
        }
      ];
      
      setServices(mockServices);
      setTotalPages(Math.ceil(mockServices.length / 10)); // Assuming 10 services per page
      
      toast.success('Services loaded successfully');
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to load services');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchServices();
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800';
      case 'terminated':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = searchTerm === '' || 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.client.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || service.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
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
              WHMCS Product Management is not enabled. Please enable it in the WHMCS API settings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If a service is selected, show the service details
  if (selectedService) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Services
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Edit className="h-4 w-4 inline mr-1" />
              Edit Service
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{selectedService.name}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>{selectedService.domain}</span>
                  <span>•</span>
                  <span>ID: {selectedService.id}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedService.status)}`}>
                  {selectedService.status}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Service Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Product:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.product.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.product.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Domain:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.domain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Server:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.server.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">IP Address:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.server.ipAddress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Registration Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedService.registrationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Next Due Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedService.nextDueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Billing Cycle:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.billingCycle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Recurring Amount:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedService.recurringAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Client Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {selectedService.client.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{selectedService.client.name}</div>
                      <div className="text-sm text-gray-500">{selectedService.client.email}</div>
                    </div>
                  </div>
                  <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                    View Client Profile
                  </button>
                </div>
                
                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-6">Service Status</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">Current Status:</span>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedService.status)}`}>
                      {selectedService.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.status === 'Active' ? (
                      <button className="flex items-center justify-center space-x-1 px-3 py-1.5 border border-yellow-300 text-yellow-700 bg-yellow-50 rounded text-sm font-medium hover:bg-yellow-100 transition-colors duration-200">
                        <Pause className="h-4 w-4" />
                        <span>Suspend</span>
                      </button>
                    ) : selectedService.status === 'Suspended' ? (
                      <button className="flex items-center justify-center space-x-1 px-3 py-1.5 border border-green-300 text-green-700 bg-green-50 rounded text-sm font-medium hover:bg-green-100 transition-colors duration-200">
                        <Play className="h-4 w-4" />
                        <span>Unsuspend</span>
                      </button>
                    ) : (
                      <button className="flex items-center justify-center space-x-1 px-3 py-1.5 border border-green-300 text-green-700 bg-green-50 rounded text-sm font-medium hover:bg-green-100 transition-colors duration-200">
                        <Play className="h-4 w-4" />
                        <span>Activate</span>
                      </button>
                    )}
                    <button className="flex items-center justify-center space-x-1 px-3 py-1.5 border border-red-300 text-red-700 bg-red-50 rounded text-sm font-medium hover:bg-red-100 transition-colors duration-200">
                      <Trash2 className="h-4 w-4" />
                      <span>Terminate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resource Usage */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Resource Usage</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedService.details.diskUsage && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-700">Disk Usage</h5>
                      <span className="text-xs font-medium text-gray-500">
                        {selectedService.details.diskUsage.used} GB / {selectedService.details.diskUsage.total} GB
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-main-green h-2.5 rounded-full" 
                        style={{ width: `${selectedService.details.diskUsage.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                      <span>{selectedService.details.diskUsage.percentage}% used</span>
                      <span>{selectedService.details.diskUsage.total - selectedService.details.diskUsage.used} GB free</span>
                    </div>
                  </div>
                )}
                
                {selectedService.details.bandwidth && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-700">Bandwidth</h5>
                      <span className="text-xs font-medium text-gray-500">
                        {selectedService.details.bandwidth.used} GB / {selectedService.details.bandwidth.total} GB
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${selectedService.details.bandwidth.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                      <span>{selectedService.details.bandwidth.percentage}% used</span>
                      <span>{selectedService.details.bandwidth.total - selectedService.details.bandwidth.used} GB free</span>
                    </div>
                  </div>
                )}
                
                {selectedService.details.emailAccounts && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-700">Email Accounts</h5>
                      <span className="text-xs font-medium text-gray-500">
                        {selectedService.details.emailAccounts.used} / {selectedService.details.emailAccounts.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${selectedService.details.emailAccounts.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                      <span>{selectedService.details.emailAccounts.percentage}% used</span>
                      <span>{selectedService.details.emailAccounts.total - selectedService.details.emailAccounts.used} available</span>
                    </div>
                  </div>
                )}
                
                {selectedService.details.databases && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-700">Databases</h5>
                      <span className="text-xs font-medium text-gray-500">
                        {selectedService.details.databases.used} / {selectedService.details.databases.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-500 h-2.5 rounded-full" 
                        style={{ width: `${selectedService.details.databases.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                      <span>{selectedService.details.databases.percentage}% used</span>
                      <span>{selectedService.details.databases.total - selectedService.details.databases.used} available</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Service Actions */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Service Actions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Settings className="h-4 w-4 text-gray-600" />
                  <span>Change Package</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <RotateCw className="h-4 w-4 text-gray-600" />
                  <span>Create Upgrade</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Server className="h-4 w-4 text-gray-600" />
                  <span>Change Server</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span>Change Due Date</span>
                </button>
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
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Briefcase className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS Service Manager</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchServices}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh services"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Create Service</span>
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
              placeholder="Search services..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
            <option value="terminated">Terminated</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredServices.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recurring Amount
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
                {filteredServices.map((service) => (
                  <tr 
                    key={service.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <Server className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{service.client.name}</div>
                      <div className="text-sm text-gray-500">{service.client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(service.nextDueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{service.recurringAmount}</div>
                      <div className="text-xs text-gray-500">{service.billingCycle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(service.status)}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(service);
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredServices.length}</span> of{' '}
                  <span className="font-medium">{filteredServices.length}</span> results
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
          <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No services found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter
              ? `No results for your search. Try different search terms or filters.`
              : 'No services have been created yet.'}
          </p>
          {!searchTerm && !statusFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Create First Service</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WHMCSServiceManager;