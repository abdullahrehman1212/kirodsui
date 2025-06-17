import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  List, 
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
  Tag,
  Layers,
  Copy,
  Settings
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSPlanManager = () => {
  const { siteSettings } = useAdmin();
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [typeFilter, setTypeFilter] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Check if WHMCS product management is enabled
    const enableProductManagementSetting = siteSettings.find(
      s => s.setting_key === 'whmcs_enableProductManagement'
    );
    
    setIsEnabled(enableProductManagementSetting?.setting_value === true);
    
    if (enableProductManagementSetting?.setting_value === true) {
      fetchPlans();
    }
  }, [siteSettings]);

  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call the actual WHMCS API
      // For demo purposes, we'll use mock data
      const mockPlans = [
        {
          id: 1,
          name: 'Basic Hosting',
          type: 'Shared Hosting',
          description: 'Entry-level hosting package for small websites',
          pricing: {
            monthly: '$9.99',
            quarterly: '$27.99',
            semiannually: '$53.99',
            annually: '$99.99'
          },
          setupFee: '$0.00',
          features: [
            '10 GB SSD Storage',
            '100 GB Bandwidth',
            '10 Email Accounts',
            '1 Website',
            'Free SSL Certificate',
            '24/7 Support'
          ],
          status: 'Active',
          hidden: false,
          stockControl: false,
          stockQuantity: null,
          autoSetup: true,
          serverGroup: 'Shared Hosting Servers',
          createdAt: '2024-01-15T10:30:00Z',
          updatedAt: '2024-06-01T14:45:00Z'
        },
        {
          id: 2,
          name: 'Premium Hosting',
          type: 'Shared Hosting',
          description: 'Advanced hosting with more resources and features',
          pricing: {
            monthly: '$19.99',
            quarterly: '$53.99',
            semiannually: '$107.99',
            annually: '$199.99'
          },
          setupFee: '$0.00',
          features: [
            '25 GB SSD Storage',
            'Unlimited Bandwidth',
            'Unlimited Email Accounts',
            '10 Websites',
            'Free SSL Certificate',
            '24/7 Priority Support',
            'Daily Backups'
          ],
          status: 'Active',
          hidden: false,
          stockControl: false,
          stockQuantity: null,
          autoSetup: true,
          serverGroup: 'Shared Hosting Servers',
          createdAt: '2024-01-15T10:35:00Z',
          updatedAt: '2024-06-01T14:50:00Z'
        },
        {
          id: 3,
          name: 'Business VPS',
          type: 'VPS Hosting',
          description: 'Virtual private server for business applications',
          pricing: {
            monthly: '$49.99',
            quarterly: '$134.99',
            semiannually: '$269.99',
            annually: '$499.99'
          },
          setupFee: '$0.00',
          features: [
            '4 vCPU Cores',
            '8 GB RAM',
            '100 GB SSD Storage',
            'Unlimited Bandwidth',
            'Root Access',
            'Free SSL Certificate',
            '24/7 Priority Support',
            'Daily Backups'
          ],
          status: 'Active',
          hidden: false,
          stockControl: true,
          stockQuantity: 15,
          autoSetup: true,
          serverGroup: 'VPS Servers',
          createdAt: '2024-01-15T10:40:00Z',
          updatedAt: '2024-06-01T14:55:00Z'
        },
        {
          id: 4,
          name: 'Enterprise Cloud',
          type: 'Cloud Hosting',
          description: 'Scalable cloud hosting for enterprise applications',
          pricing: {
            monthly: '$99.99',
            quarterly: '$269.99',
            semiannually: '$539.99',
            annually: '$999.99'
          },
          setupFee: '$0.00',
          features: [
            '8 vCPU Cores',
            '16 GB RAM',
            '250 GB SSD Storage',
            'Unlimited Bandwidth',
            'Root Access',
            'Free SSL Certificate',
            '24/7 Priority Support',
            'Daily Backups',
            'Load Balancing',
            'Auto Scaling'
          ],
          status: 'Active',
          hidden: false,
          stockControl: true,
          stockQuantity: 8,
          autoSetup: true,
          serverGroup: 'Cloud Servers',
          createdAt: '2024-01-15T10:45:00Z',
          updatedAt: '2024-06-01T15:00:00Z'
        },
        {
          id: 5,
          name: 'Email Hosting',
          type: 'Email Services',
          description: 'Professional email hosting for businesses',
          pricing: {
            monthly: '$4.99',
            quarterly: '$13.99',
            semiannually: '$26.99',
            annually: '$49.99'
          },
          setupFee: '$0.00',
          features: [
            '10 Email Accounts',
            '10 GB Storage per Account',
            'Webmail Access',
            'POP3/IMAP Support',
            'Spam Protection',
            '24/7 Support'
          ],
          status: 'Active',
          hidden: false,
          stockControl: false,
          stockQuantity: null,
          autoSetup: true,
          serverGroup: 'Email Servers',
          createdAt: '2024-01-15T10:50:00Z',
          updatedAt: '2024-06-01T15:05:00Z'
        },
        {
          id: 6,
          name: 'Legacy Hosting',
          type: 'Shared Hosting',
          description: 'Old hosting plan for existing customers only',
          pricing: {
            monthly: '$7.99',
            quarterly: '$21.99',
            semiannually: '$42.99',
            annually: '$79.99'
          },
          setupFee: '$0.00',
          features: [
            '5 GB Storage',
            '50 GB Bandwidth',
            '5 Email Accounts',
            '1 Website',
            'SSL Certificate',
            'Support'
          ],
          status: 'Hidden',
          hidden: true,
          stockControl: false,
          stockQuantity: null,
          autoSetup: true,
          serverGroup: 'Shared Hosting Servers',
          createdAt: '2023-01-15T10:30:00Z',
          updatedAt: '2024-06-01T15:10:00Z'
        }
      ];
      
      setPlans(mockPlans);
      setTotalPages(Math.ceil(mockPlans.length / 10)); // Assuming 10 plans per page
      
      toast.success('Plans loaded successfully');
    } catch (error) {
      console.error('Error fetching plans:', error);
      toast.error('Failed to load plans');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPlans();
  };

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'hidden':
        return 'bg-yellow-100 text-yellow-800';
      case 'disabled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPlans = plans.filter(plan => {
    const matchesSearch = searchTerm === '' || 
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = typeFilter === '' || plan.type === typeFilter;
    
    return matchesSearch && matchesType;
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

  // If a plan is selected, show the plan details
  if (selectedPlan) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedPlan(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Plans
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Copy className="h-4 w-4 inline mr-1" />
              Duplicate
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Edit className="h-4 w-4 inline mr-1" />
              Edit Plan
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{selectedPlan.name}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>ID: {selectedPlan.id}</span>
                  <span>•</span>
                  <span>Type: {selectedPlan.type}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedPlan.status)}`}>
                  {selectedPlan.status}
                </span>
                {selectedPlan.stockControl && (
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Stock: {selectedPlan.stockQuantity}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Plan Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700">Description</div>
                      <div className="text-sm text-gray-600 mt-1">{selectedPlan.description}</div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Server Group:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.serverGroup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Auto Setup:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.autoSetup ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Stock Control:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.stockControl ? 'Yes' : 'No'}</span>
                    </div>
                    {selectedPlan.stockControl && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Stock Quantity:</span>
                        <span className="text-sm font-medium text-gray-900">{selectedPlan.stockQuantity}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Created:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedPlan.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Updated:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedPlan.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Pricing</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Quarterly:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.pricing.quarterly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Semi-Annually:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.pricing.semiannually}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Annually:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.pricing.annually}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Setup Fee:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedPlan.setupFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Features</h4>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-main-green flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Plan Actions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Settings className="h-4 w-4 text-gray-600" />
                  <span>Configure Options</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedPlan.status === 'Active' ? (
                    <>
                      <Eye className="h-4 w-4 text-red-600" />
                      <span className="text-red-600">Hide Plan</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Show Plan</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-200">
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Plan</span>
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
          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
            <List className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS Plan Manager</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchPlans}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh plans"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Create Plan</span>
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
              placeholder="Search plans..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={typeFilter}
            onChange={handleTypeFilterChange}
            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="Shared Hosting">Shared Hosting</option>
            <option value="VPS Hosting">VPS Hosting</option>
            <option value="Cloud Hosting">Cloud Hosting</option>
            <option value="Email Services">Email Services</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredPlans.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Annual Price
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
                {filteredPlans.map((plan) => (
                  <tr 
                    key={plan.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedPlan(plan)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Layers className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                          <div className="text-xs text-gray-500 max-w-xs truncate">{plan.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {plan.pricing.monthly}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {plan.pricing.annually}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(plan.status)}`}>
                        {plan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPlan(plan);
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPlans.length}</span> of{' '}
                  <span className="font-medium">{filteredPlans.length}</span> results
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
          <List className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No plans found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || typeFilter
              ? `No results for your search. Try different search terms or filters.`
              : 'No plans have been created yet.'}
          </p>
          {!searchTerm && !typeFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Create First Plan</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WHMCSPlanManager;