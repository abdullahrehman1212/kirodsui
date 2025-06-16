import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  RefreshCw, 
  Plus, 
  Settings, 
  ExternalLink, 
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  Shield,
  Zap,
  Database,
  Layers,
  Edit,
  Trash2,
  RotateCw,
  FileText,
  Folder,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UserWordPressSites = () => {
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSite, setExpandedSite] = useState(null);

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchSites = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        const mockSites = [
          {
            id: 1,
            name: 'Example Blog',
            url: 'https://example.com',
            status: 'Active',
            version: '6.4.3',
            lastBackup: '2024-06-15T10:30:00Z',
            lastUpdate: '2024-06-10T14:45:00Z',
            storage: {
              used: 1.2,
              total: 10,
              percentage: 12
            },
            plugins: [
              { name: 'Yoast SEO', version: '21.2', status: 'Active', updateAvailable: false },
              { name: 'WooCommerce', version: '8.1.1', status: 'Active', updateAvailable: true },
              { name: 'Elementor', version: '3.15.3', status: 'Active', updateAvailable: false },
              { name: 'Contact Form 7', version: '5.8.1', status: 'Active', updateAvailable: false }
            ],
            themes: [
              { name: 'Astra', version: '4.3.1', status: 'Active', updateAvailable: false },
              { name: 'Twenty Twenty-Four', version: '1.0', status: 'Inactive', updateAvailable: false }
            ],
            performance: {
              score: 92,
              loadTime: '1.2s',
              pageSize: '1.5 MB'
            },
            security: {
              sslStatus: 'Valid',
              malwareScan: 'Clean',
              firewallStatus: 'Active',
              lastScan: '2024-06-14T08:15:00Z'
            }
          },
          {
            id: 2,
            name: 'Business Website',
            url: 'https://mybusiness.net',
            status: 'Active',
            version: '6.4.3',
            lastBackup: '2024-06-14T22:15:00Z',
            lastUpdate: '2024-06-09T11:30:00Z',
            storage: {
              used: 2.8,
              total: 10,
              percentage: 28
            },
            plugins: [
              { name: 'Yoast SEO', version: '21.2', status: 'Active', updateAvailable: false },
              { name: 'Elementor Pro', version: '3.15.3', status: 'Active', updateAvailable: true },
              { name: 'WP Forms', version: '1.8.3.2', status: 'Active', updateAvailable: false },
              { name: 'Wordfence Security', version: '7.10.2', status: 'Active', updateAvailable: false }
            ],
            themes: [
              { name: 'Avada', version: '7.11.2', status: 'Active', updateAvailable: true },
              { name: 'Twenty Twenty-Four', version: '1.0', status: 'Inactive', updateAvailable: false }
            ],
            performance: {
              score: 88,
              loadTime: '1.5s',
              pageSize: '2.1 MB'
            },
            security: {
              sslStatus: 'Valid',
              malwareScan: 'Clean',
              firewallStatus: 'Active',
              lastScan: '2024-06-14T08:15:00Z'
            }
          },
          {
            id: 3,
            name: 'E-commerce Store',
            url: 'https://mystore.com',
            status: 'Maintenance',
            version: '6.4.2',
            lastBackup: '2024-06-13T18:45:00Z',
            lastUpdate: '2024-06-08T09:20:00Z',
            storage: {
              used: 5.4,
              total: 10,
              percentage: 54
            },
            plugins: [
              { name: 'Yoast SEO', version: '21.1', status: 'Active', updateAvailable: true },
              { name: 'WooCommerce', version: '8.1.0', status: 'Active', updateAvailable: true },
              { name: 'Elementor', version: '3.15.2', status: 'Active', updateAvailable: true },
              { name: 'WP Rocket', version: '3.15.1', status: 'Active', updateAvailable: false },
              { name: 'WooCommerce Payments', version: '6.4.1', status: 'Active', updateAvailable: false }
            ],
            themes: [
              { name: 'Flatsome', version: '3.17.3', status: 'Active', updateAvailable: false },
              { name: 'Twenty Twenty-Four', version: '1.0', status: 'Inactive', updateAvailable: false }
            ],
            performance: {
              score: 76,
              loadTime: '2.3s',
              pageSize: '3.2 MB'
            },
            security: {
              sslStatus: 'Valid',
              malwareScan: 'Clean',
              firewallStatus: 'Active',
              lastScan: '2024-06-13T08:15:00Z'
            }
          }
        ];
        
        setSites(mockSites);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching WordPress sites:', error);
        setIsLoading(false);
      }
    };

    fetchSites();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would filter sites from the API
    // For demo purposes, we'll just filter the mock data
  };

  const toggleSiteDetails = (siteId) => {
    setExpandedSite(expandedSite === siteId ? null : siteId);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const filteredSites = sites.filter(site => 
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.url.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h2 className="text-2xl font-bold text-gray-800">WordPress Sites</h2>
        <p className="text-gray-600">Manage your WordPress websites, plugins, themes, and backups.</p>
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
              placeholder="Search WordPress sites..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {}}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh sites"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>New WordPress Site</span>
          </button>
        </div>
      </div>

      {/* WordPress Sites */}
      {filteredSites.length > 0 ? (
        <div className="space-y-6">
          {filteredSites.map((site) => (
            <div key={site.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              {/* Site Header */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{site.name}</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <a 
                          href={site.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-main-green transition-colors duration-200 flex items-center"
                        >
                          {site.url}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <span>•</span>
                        <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(site.status)}`}>
                          {site.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleSiteDetails(site.id)}
                      className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
                    >
                      {expandedSite === site.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Site Summary */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">WordPress Version</div>
                    <div className="text-sm font-medium text-gray-900 flex items-center">
                      {site.version}
                      <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Last Backup</div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(site.lastBackup).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Last Update</div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(site.lastUpdate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Storage</div>
                    <div className="text-sm font-medium text-gray-900">
                      {site.storage.used} GB / {site.storage.total} GB
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <a 
                    href={`${site.url}/wp-admin`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    WordPress Admin
                  </a>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <RotateCw className="h-4 w-4 mr-1" />
                    Create Backup
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <Settings className="h-4 w-4 mr-1" />
                    Manage Site
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200">
                    <Shield className="h-4 w-4 mr-1" />
                    Security Scan
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedSite === site.id && (
                <div className="px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Performance */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Performance</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600">Performance Score</span>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full border-2 border-main-green flex items-center justify-center mr-2">
                              <span className="text-xs font-bold text-main-green">{site.performance.score}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">/100</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Load Time:</span>
                            <span className="text-sm font-medium text-gray-900">{site.performance.loadTime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Page Size:</span>
                            <span className="text-sm font-medium text-gray-900">{site.performance.pageSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Security */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Security</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">SSL Certificate:</span>
                            <span className="text-sm font-medium text-green-600 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" /> {site.security.sslStatus}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Malware Scan:</span>
                            <span className="text-sm font-medium text-green-600 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" /> {site.security.malwareScan}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Firewall Status:</span>
                            <span className="text-sm font-medium text-green-600 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" /> {site.security.firewallStatus}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Last Security Scan:</span>
                            <span className="text-sm font-medium text-gray-900">
                              {new Date(site.security.lastScan).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plugins */}
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Plugins ({site.plugins.length})</h4>
                      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updates</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {site.plugins.map((plugin, index) => (
                              <tr key={index}>
                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{plugin.name}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{plugin.version}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    plugin.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {plugin.status}
                                  </span>
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                  {plugin.updateAvailable ? (
                                    <span className="text-yellow-600 flex items-center">
                                      <AlertTriangle className="h-4 w-4 mr-1" /> Update Available
                                    </span>
                                  ) : (
                                    <span className="text-green-600 flex items-center">
                                      <CheckCircle className="h-4 w-4 mr-1" /> Up to date
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Themes */}
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Themes ({site.themes.length})</h4>
                      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updates</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {site.themes.map((theme, index) => (
                              <tr key={index}>
                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{theme.name}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{theme.version}</td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    theme.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {theme.status}
                                  </span>
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                  {theme.updateAvailable ? (
                                    <span className="text-yellow-600 flex items-center">
                                      <AlertTriangle className="h-4 w-4 mr-1" /> Update Available
                                    </span>
                                  ) : (
                                    <span className="text-green-600 flex items-center">
                                      <CheckCircle className="h-4 w-4 mr-1" /> Up to date
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
          <h3 className="text-lg font-medium text-gray-800 mb-2">No WordPress sites found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm
              ? `No results for "${searchTerm}". Try a different search term.`
              : "You don't have any WordPress sites yet."}
          </p>
          {!searchTerm && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Create WordPress Site</span>
            </button>
          )}
        </div>
      )}

      {/* WordPress Tools */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">WordPress Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">One-Click Installer</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Install WordPress with a single click. Choose from various configurations and templates.
            </p>
            <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200">
              Install WordPress
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <RotateCw className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">Backup Manager</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Create, manage, and restore backups of your WordPress sites. Schedule automatic backups.
            </p>
            <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200">
              Manage Backups
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">Security Center</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Scan for malware, monitor security threats, and protect your WordPress sites.
            </p>
            <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200">
              Security Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWordPressSites;