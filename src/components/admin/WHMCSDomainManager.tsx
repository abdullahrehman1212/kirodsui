import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Globe, 
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
  Lock,
  Unlock,
  Settings,
  RotateCw,
  Server
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSDomainManager = () => {
  const { siteSettings } = useAdmin();
  const [domains, setDomains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    // Check if WHMCS product management is enabled
    const enableProductManagementSetting = siteSettings.find(
      s => s.setting_key === 'whmcs_enableProductManagement'
    );
    
    setIsEnabled(enableProductManagementSetting?.setting_value === true);
    
    if (enableProductManagementSetting?.setting_value === true) {
      fetchDomains();
    }
  }, [siteSettings]);

  const fetchDomains = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call the actual WHMCS API
      // For demo purposes, we'll use mock data
      const mockDomains = [
        {
          id: 1,
          domain: 'example.com',
          client: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
          },
          registrar: 'Namecheap',
          registrationDate: '2023-07-15',
          expiryDate: '2024-07-15',
          nextDueDate: '2024-07-15',
          recurringAmount: '$14.99',
          status: 'Active',
          autoRenew: true,
          idProtection: true,
          nameservers: [
            'ns1.kirods.com',
            'ns2.kirods.com'
          ],
          dnsRecords: [
            { type: 'A', host: '@', value: '123.456.789.012', ttl: 3600 },
            { type: 'CNAME', host: 'www', value: 'example.com', ttl: 3600 },
            { type: 'MX', host: '@', value: 'mail.example.com', priority: 10, ttl: 3600 },
            { type: 'TXT', host: '@', value: 'v=spf1 include:_spf.kirods.com ~all', ttl: 3600 }
          ],
          registrarLock: true
        },
        {
          id: 2,
          domain: 'mybusiness.net',
          client: {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
          },
          registrar: 'GoDaddy',
          registrationDate: '2023-08-01',
          expiryDate: '2024-08-01',
          nextDueDate: '2024-08-01',
          recurringAmount: '$16.99',
          status: 'Active',
          autoRenew: true,
          idProtection: true,
          nameservers: [
            'ns1.kirods.com',
            'ns2.kirods.com'
          ],
          dnsRecords: [
            { type: 'A', host: '@', value: '234.567.890.123', ttl: 3600 },
            { type: 'CNAME', host: 'www', value: 'mybusiness.net', ttl: 3600 },
            { type: 'MX', host: '@', value: 'mail.mybusiness.net', priority: 10, ttl: 3600 }
          ],
          registrarLock: true
        },
        {
          id: 3,
          domain: 'anotherdomain.org',
          client: {
            id: 3,
            name: 'Robert Johnson',
            email: 'robert.johnson@example.com'
          },
          registrar: 'Namecheap',
          registrationDate: '2023-09-15',
          expiryDate: '2024-09-15',
          nextDueDate: '2024-09-15',
          recurringAmount: '$12.99',
          status: 'Expired',
          autoRenew: false,
          idProtection: false,
          nameservers: [
            'ns1.kirods.com',
            'ns2.kirods.com'
          ],
          dnsRecords: [
            { type: 'A', host: '@', value: '345.678.901.234', ttl: 3600 },
            { type: 'CNAME', host: 'www', value: 'anotherdomain.org', ttl: 3600 }
          ],
          registrarLock: false
        },
        {
          id: 4,
          domain: 'techcompany.io',
          client: {
            id: 4,
            name: 'Emily Williams',
            email: 'emily.williams@example.com'
          },
          registrar: 'Namecheap',
          registrationDate: '2023-10-01',
          expiryDate: '2024-10-01',
          nextDueDate: '2024-10-01',
          recurringAmount: '$39.99',
          status: 'Active',
          autoRenew: true,
          idProtection: true,
          nameservers: [
            'ns1.kirods.com',
            'ns2.kirods.com'
          ],
          dnsRecords: [
            { type: 'A', host: '@', value: '456.789.012.345', ttl: 3600 },
            { type: 'CNAME', host: 'www', value: 'techcompany.io', ttl: 3600 },
            { type: 'MX', host: '@', value: 'mail.techcompany.io', priority: 10, ttl: 3600 }
          ],
          registrarLock: true
        },
        {
          id: 5,
          domain: 'creativestudio.com',
          client: {
            id: 5,
            name: 'Michael Brown',
            email: 'michael.brown@example.com'
          },
          registrar: 'GoDaddy',
          registrationDate: '2023-11-15',
          expiryDate: '2024-11-15',
          nextDueDate: '2024-11-15',
          recurringAmount: '$14.99',
          status: 'Pending Transfer',
          autoRenew: true,
          idProtection: true,
          nameservers: [
            'ns1.godaddy.com',
            'ns2.godaddy.com'
          ],
          dnsRecords: [
            { type: 'A', host: '@', value: '567.890.123.456', ttl: 3600 },
            { type: 'CNAME', host: 'www', value: 'creativestudio.com', ttl: 3600 }
          ],
          registrarLock: false
        }
      ];
      
      setDomains(mockDomains);
      setTotalPages(Math.ceil(mockDomains.length / 10)); // Assuming 10 domains per page
      
      toast.success('Domains loaded successfully');
    } catch (error) {
      console.error('Error fetching domains:', error);
      toast.error('Failed to load domains');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDomains();
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'pending':
      case 'pending transfer':
        return 'bg-yellow-100 text-yellow-800';
      case 'transferred away':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDomains = domains.filter(domain => {
    const matchesSearch = searchTerm === '' || 
      domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.client.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || domain.status.toLowerCase() === statusFilter.toLowerCase();
    
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

  // If a domain is selected, show the domain details
  if (selectedDomain) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedDomain(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Domains
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Edit className="h-4 w-4 inline mr-1" />
              Edit Domain
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{selectedDomain.domain}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>ID: {selectedDomain.id}</span>
                  <span>•</span>
                  <span>Registrar: {selectedDomain.registrar}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedDomain.status)}`}>
                  {selectedDomain.status}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Domain Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Registration Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedDomain.registrationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Expiry Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedDomain.expiryDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Next Due Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedDomain.nextDueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Recurring Amount:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedDomain.recurringAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Auto Renew:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedDomain.autoRenew ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ID Protection:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedDomain.idProtection ? 'Enabled' : 'Disabled'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Registrar Lock:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedDomain.registrarLock ? 'Enabled' : 'Disabled'}</span>
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
                        {selectedDomain.client.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{selectedDomain.client.name}</div>
                      <div className="text-sm text-gray-500">{selectedDomain.client.email}</div>
                    </div>
                  </div>
                  <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                    View Client Profile
                  </button>
                </div>
                
                <h4 className="text-sm font-medium text-gray-700 mb-3 mt-6">Nameservers</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    {selectedDomain.nameservers.map((ns, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Nameserver {index + 1}:</span>
                        <span className="text-sm font-medium text-gray-900">{ns}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* DNS Records */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">DNS Records</h4>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TTL</th>
                      {selectedDomain.dnsRecords.some(record => record.type === 'MX') && (
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      )}
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedDomain.dnsRecords.map((record, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.host}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{record.value}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.ttl}</td>
                        {selectedDomain.dnsRecords.some(record => record.type === 'MX') && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {record.type === 'MX' ? record.priority : '-'}
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4">
                <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                  Add DNS Record
                </button>
              </div>
            </div>
            
            {/* Domain Actions */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Domain Actions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedDomain.registrarLock ? (
                    <>
                      <Unlock className="h-4 w-4 text-yellow-600" />
                      <span className="text-yellow-600">Unlock Domain</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Lock Domain</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedDomain.idProtection ? (
                    <>
                      <Eye className="h-4 w-4 text-yellow-600" />
                      <span className="text-yellow-600">Disable ID Protection</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Enable ID Protection</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  {selectedDomain.autoRenew ? (
                    <>
                      <RotateCw className="h-4 w-4 text-yellow-600" />
                      <span className="text-yellow-600">Disable Auto Renew</span>
                    </>
                  ) : (
                    <>
                      <RotateCw className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Enable Auto Renew</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Settings className="h-4 w-4 text-gray-600" />
                  <span>Manage Nameservers</span>
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
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS Domain Manager</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchDomains}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh domains"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Register Domain</span>
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
              placeholder="Search domains..."
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
            <option value="expired">Expired</option>
            <option value="pending">Pending</option>
            <option value="pending transfer">Pending Transfer</option>
            <option value="transferred away">Transferred Away</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredDomains.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registrar
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
                {filteredDomains.map((domain) => (
                  <tr 
                    key={domain.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedDomain(domain)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{domain.domain}</div>
                          <div className="text-xs text-gray-500">ID: {domain.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{domain.client.name}</div>
                      <div className="text-sm text-gray-500">{domain.client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(domain.expiryDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {domain.registrar}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(domain.status)}`}>
                        {domain.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDomain(domain);
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredDomains.length}</span> of{' '}
                  <span className="font-medium">{filteredDomains.length}</span> results
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
          <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No domains found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter
              ? `No results for your search. Try different search terms or filters.`
              : 'No domains have been registered yet.'}
          </p>
          {!searchTerm && !statusFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Register First Domain</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WHMCSDomainManager;