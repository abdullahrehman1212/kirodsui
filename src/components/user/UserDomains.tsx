import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  RefreshCw, 
  Plus, 
  Settings, 
  Lock, 
  ExternalLink, 
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Clock,
  Calendar,
  ArrowRight,
  Edit,
  RotateCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDomains = () => {
  const [domains, setDomains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDomain, setExpandedDomain] = useState(null);

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchDomains = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        const mockDomains = [
          {
            id: 1,
            domain: 'example.com',
            registrationDate: '2023-07-15',
            expiryDate: '2024-07-15',
            status: 'Active',
            autoRenew: true,
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
            registrarLock: true,
            idProtection: true,
            contactInfo: {
              registrant: 'John Doe',
              organization: 'Example Corp',
              email: 'john.doe@example.com'
            }
          },
          {
            id: 2,
            domain: 'mybusiness.net',
            registrationDate: '2023-08-01',
            expiryDate: '2024-08-01',
            status: 'Active',
            autoRenew: true,
            nameservers: [
              'ns1.kirods.com',
              'ns2.kirods.com'
            ],
            dnsRecords: [
              { type: 'A', host: '@', value: '234.567.890.123', ttl: 3600 },
              { type: 'CNAME', host: 'www', value: 'mybusiness.net', ttl: 3600 },
              { type: 'MX', host: '@', value: 'mail.mybusiness.net', priority: 10, ttl: 3600 }
            ],
            registrarLock: true,
            idProtection: true,
            contactInfo: {
              registrant: 'John Doe',
              organization: 'My Business',
              email: 'john.doe@example.com'
            }
          },
          {
            id: 3,
            domain: 'anotherdomain.org',
            registrationDate: '2023-09-15',
            expiryDate: '2024-09-15',
            status: 'Active',
            autoRenew: false,
            nameservers: [
              'ns1.kirods.com',
              'ns2.kirods.com'
            ],
            dnsRecords: [
              { type: 'A', host: '@', value: '345.678.901.234', ttl: 3600 },
              { type: 'CNAME', host: 'www', value: 'anotherdomain.org', ttl: 3600 }
            ],
            registrarLock: false,
            idProtection: false,
            contactInfo: {
              registrant: 'John Doe',
              organization: '',
              email: 'john.doe@example.com'
            }
          }
        ];
        
        setDomains(mockDomains);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching domains:', error);
        setIsLoading(false);
      }
    };

    fetchDomains();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would filter domains from the API
    // For demo purposes, we'll just filter the mock data
  };

  const toggleDomainDetails = (domainId) => {
    setExpandedDomain(expandedDomain === domainId ? null : domainId);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'transferred away':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDomains = domains.filter(domain => 
    domain.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Domain Names</h2>
        <p className="text-gray-600">Manage your domain names, DNS settings, and renewals.</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 mb-6">
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
          <button
            onClick={() => {}}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh domains"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          <Link
            to="/domain-search"
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Register Domain</span>
          </Link>
          
          <Link
            to="/domain-transfer"
            className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowRight className="h-4 w-4" />
            <span>Transfer Domain</span>
          </Link>
        </div>
      </div>

      {/* Domains List */}
      {filteredDomains.length > 0 ? (
        <div className="space-y-4">
          {filteredDomains.map((domain) => (
            <div key={domain.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              {/* Domain Header */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{domain.domain}</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span>ID: {domain.id}</span>
                        <span>•</span>
                        <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(domain.status)}`}>
                          {domain.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleDomainDetails(domain.id)}
                      className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
                    >
                      {expandedDomain === domain.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Domain Summary */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Registration Date</div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(domain.registrationDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Expiry Date</div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(domain.expiryDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Auto-Renew</div>
                    <div className="text-sm font-medium text-gray-900">
                      {domain.autoRenew ? (
                        <span className="text-green-600 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" /> Enabled
                        </span>
                      ) : (
                        <span className="text-red-600 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1" /> Disabled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <Settings className="h-4 w-4 mr-1" />
                    Manage DNS
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <Lock className="h-4 w-4 mr-1" />
                    {domain.registrarLock ? 'Unlock Domain' : 'Lock Domain'}
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit Contact Info
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <RotateCw className="h-4 w-4 mr-1" />
                    {domain.autoRenew ? 'Disable Auto-Renew' : 'Enable Auto-Renew'}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedDomain === domain.id && (
                <div className="px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nameservers */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Nameservers</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          {domain.nameservers.map((ns, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Nameserver {index + 1}:</span>
                              <span className="text-sm font-mono text-gray-900">{ns}</span>
                            </div>
                          ))}
                        </div>
                        <button className="mt-3 text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                          Change Nameservers
                        </button>
                      </div>
                    </div>

                    {/* Domain Information */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Domain Information</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Registrar Lock:</span>
                            <span className="text-sm text-gray-900">
                              {domain.registrarLock ? (
                                <span className="text-green-600 flex items-center">
                                  <Lock className="h-4 w-4 mr-1" /> Enabled
                                </span>
                              ) : (
                                <span className="text-red-600 flex items-center">
                                  <AlertTriangle className="h-4 w-4 mr-1" /> Disabled
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">ID Protection:</span>
                            <span className="text-sm text-gray-900">
                              {domain.idProtection ? (
                                <span className="text-green-600 flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-1" /> Enabled
                                </span>
                              ) : (
                                <span className="text-red-600 flex items-center">
                                  <AlertTriangle className="h-4 w-4 mr-1" /> Disabled
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Registrant:</span>
                            <span className="text-sm text-gray-900">{domain.contactInfo.registrant}</span>
                          </div>
                          {domain.contactInfo.organization && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Organization:</span>
                              <span className="text-sm text-gray-900">{domain.contactInfo.organization}</span>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Email:</span>
                            <span className="text-sm text-gray-900">{domain.contactInfo.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DNS Records */}
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">DNS Records</h4>
                      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TTL</th>
                              {domain.dnsRecords.some(record => record.type === 'MX') && (
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                              )}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {domain.dnsRecords.map((record, index) => (
                              <tr key={index}>
                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{record.type}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{record.host}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 font-mono">{record.value}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{record.ttl}</td>
                                {domain.dnsRecords.some(record => record.type === 'MX') && (
                                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {record.type === 'MX' ? record.priority : '-'}
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button className="mt-3 text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                          Manage DNS Records
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No domains found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm
              ? `No results for "${searchTerm}". Try a different search term.`
              : "You don't have any domains registered with us yet."}
          </p>
          {!searchTerm && (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
              <Link
                to="/domain-search"
                className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Register a Domain</span>
              </Link>
              <Link
                to="/domain-transfer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Transfer a Domain</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDomains;