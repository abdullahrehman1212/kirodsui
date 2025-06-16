import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Globe, 
  Database, 
  HardDrive, 
  Cpu, 
  RefreshCw, 
  ExternalLink, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  Zap,
  Lock,
  Mail,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UserHosting = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        const mockServices = [
          {
            id: 1,
            name: 'Premium WordPress Hosting',
            domain: 'example.com',
            nextDueDate: '2024-07-15',
            status: 'Active',
            price: '$9.99',
            billingCycle: 'Monthly',
            serverDetails: {
              serverName: 'WP-Server-01',
              ipAddress: '123.456.789.012',
              location: 'US East',
              operatingSystem: 'CentOS 7',
              webServer: 'LiteSpeed',
              phpVersion: '8.1',
              mysqlVersion: '8.0'
            },
            resources: {
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
            },
            features: [
              'LiteSpeed Web Server',
              'Free SSL Certificate',
              'Daily Backups',
              'Malware Protection',
              'WordPress Toolkit',
              'Email Accounts',
              'MySQL Databases',
              'FTP Access'
            ]
          },
          {
            id: 2,
            name: 'Cloud Hosting',
            domain: 'mybusiness.net',
            nextDueDate: '2024-08-01',
            status: 'Active',
            price: '$19.99',
            billingCycle: 'Monthly',
            serverDetails: {
              serverName: 'Cloud-Server-05',
              ipAddress: '234.567.890.123',
              location: 'EU Central',
              operatingSystem: 'Ubuntu 22.04',
              webServer: 'Nginx',
              phpVersion: '8.2',
              mysqlVersion: '8.0'
            },
            resources: {
              diskUsage: {
                used: 15.5,
                total: 50,
                percentage: 31
              },
              bandwidth: {
                used: 78,
                total: 200,
                percentage: 39
              },
              emailAccounts: {
                used: 5,
                total: 25,
                percentage: 20
              },
              databases: {
                used: 4,
                total: 20,
                percentage: 20
              }
            },
            features: [
              'Nginx Web Server',
              'Free SSL Certificate',
              'Daily Backups',
              'Malware Protection',
              'Email Accounts',
              'MySQL Databases',
              'FTP Access',
              'SSH Access',
              'Redis Cache'
            ]
          },
          {
            id: 3,
            name: 'Email Hosting',
            domain: 'example.com',
            nextDueDate: '2024-07-15',
            status: 'Active',
            price: '$4.99',
            billingCycle: 'Monthly',
            serverDetails: {
              serverName: 'Mail-Server-03',
              ipAddress: '345.678.901.234',
              location: 'US East',
              operatingSystem: 'CentOS 7',
              mailServer: 'Postfix',
              spamFilter: 'SpamAssassin',
              antiVirus: 'ClamAV'
            },
            resources: {
              diskUsage: {
                used: 2.3,
                total: 10,
                percentage: 23
              },
              emailAccounts: {
                used: 3,
                total: 10,
                percentage: 30
              }
            },
            features: [
              'Webmail Access',
              'IMAP/POP3 Support',
              'Spam Protection',
              'Virus Scanning',
              'Email Forwarding',
              'Email Filters',
              'Catch-All Email',
              'Mailing Lists'
            ]
          }
        ];
        
        setServices(mockServices);
        setActiveService(mockServices[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching hosting services:', error);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
        <h2 className="text-2xl font-bold text-gray-800">Hosting Services</h2>
        <p className="text-gray-600">Manage your hosting services and server resources.</p>
      </div>

      {/* Service Selection */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`bg-white rounded-xl shadow-sm p-6 border cursor-pointer transition-all duration-200 ${
                activeService?.id === service.id 
                  ? 'border-main-green ring-1 ring-main-green' 
                  : 'border-gray-200 hover:border-main-green'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex-shrink-0 h-10 w-10 bg-main-green/10 rounded-full flex items-center justify-center">
                  <Server className="h-5 w-5 text-main-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {service.domain}
                  </p>
                </div>
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <p>Next due: {new Date(service.nextDueDate).toLocaleDateString()}</p>
                <p>{service.price} / {service.billingCycle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeService && (
        <>
          {/* Service Details */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Service Details</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Server className="h-5 w-5 text-main-green" />
                    <h4 className="text-lg font-medium text-gray-800">{activeService.name}</h4>
                  </div>
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(activeService.status)}`}>
                    {activeService.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-3">Service Information</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Domain:</span>
                        <span className="text-sm text-gray-900">{activeService.domain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Price:</span>
                        <span className="text-sm text-gray-900">{activeService.price} / {activeService.billingCycle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Next Due Date:</span>
                        <span className="text-sm text-gray-900">{new Date(activeService.nextDueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className={`text-sm font-medium ${
                          activeService.status.toLowerCase() === 'active' ? 'text-green-600' : 'text-gray-900'
                        }`}>{activeService.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-3">Server Information</h5>
                    <div className="space-y-2">
                      {activeService.serverDetails.serverName && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Server:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.serverName}</span>
                        </div>
                      )}
                      {activeService.serverDetails.ipAddress && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">IP Address:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.ipAddress}</span>
                        </div>
                      )}
                      {activeService.serverDetails.location && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Location:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.location}</span>
                        </div>
                      )}
                      {activeService.serverDetails.operatingSystem && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">OS:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.operatingSystem}</span>
                        </div>
                      )}
                      {activeService.serverDetails.webServer && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Web Server:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.webServer}</span>
                        </div>
                      )}
                      {activeService.serverDetails.phpVersion && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">PHP Version:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.phpVersion}</span>
                        </div>
                      )}
                      {activeService.serverDetails.mysqlVersion && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">MySQL Version:</span>
                          <span className="text-sm text-gray-900">{activeService.serverDetails.mysqlVersion}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Usage */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Resource Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeService.resources.diskUsage && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Disk Usage</h4>
                    <span className="text-xs font-medium text-gray-500">
                      {activeService.resources.diskUsage.used} GB / {activeService.resources.diskUsage.total} GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-main-green h-2.5 rounded-full" 
                      style={{ width: `${activeService.resources.diskUsage.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{activeService.resources.diskUsage.percentage}% used</span>
                    <span>{activeService.resources.diskUsage.total - activeService.resources.diskUsage.used} GB free</span>
                  </div>
                </div>
              )}
              
              {activeService.resources.bandwidth && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Bandwidth</h4>
                    <span className="text-xs font-medium text-gray-500">
                      {activeService.resources.bandwidth.used} GB / {activeService.resources.bandwidth.total} GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${activeService.resources.bandwidth.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{activeService.resources.bandwidth.percentage}% used</span>
                    <span>{activeService.resources.bandwidth.total - activeService.resources.bandwidth.used} GB free</span>
                  </div>
                </div>
              )}
              
              {activeService.resources.emailAccounts && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Email Accounts</h4>
                    <span className="text-xs font-medium text-gray-500">
                      {activeService.resources.emailAccounts.used} / {activeService.resources.emailAccounts.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-500 h-2.5 rounded-full" 
                      style={{ width: `${activeService.resources.emailAccounts.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{activeService.resources.emailAccounts.percentage}% used</span>
                    <span>{activeService.resources.emailAccounts.total - activeService.resources.emailAccounts.used} accounts available</span>
                  </div>
                </div>
              )}
              
              {activeService.resources.databases && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Databases</h4>
                    <span className="text-xs font-medium text-gray-500">
                      {activeService.resources.databases.used} / {activeService.resources.databases.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-yellow-500 h-2.5 rounded-full" 
                      style={{ width: `${activeService.resources.databases.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{activeService.resources.databases.percentage}% used</span>
                    <span>{activeService.resources.databases.total - activeService.resources.databases.used} databases available</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
                <div className="p-3 bg-main-green/10 rounded-full mb-3">
                  <ExternalLink className="h-6 w-6 text-main-green" />
                </div>
                <span className="text-sm font-medium text-gray-800">cPanel Login</span>
              </Link>
              
              <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">Database Manager</span>
              </Link>
              
              <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
                <div className="p-3 bg-purple-100 rounded-full mb-3">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">Email Manager</span>
              </Link>
              
              <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
                <div className="p-3 bg-yellow-100 rounded-full mb-3">
                  <Settings className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">Service Settings</span>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Features & Tools</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h4 className="font-medium text-gray-800">Included with your plan</h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserHosting;