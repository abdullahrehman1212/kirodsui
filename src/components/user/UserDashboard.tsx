import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Globe, 
  CreditCard, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Calendar,
  ArrowRight,
  Package,
  HardDrive,
  Database,
  Zap,
  BarChart3,
  DollarSign,
  Mail,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserDashboardProps {
  userData: any;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userData }) => {
  const [services, setServices] = useState([]);
  const [domains, setDomains] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        
        // Mock services data
        const mockServices = [
          {
            id: 1,
            name: 'Premium WordPress Hosting',
            domain: 'example.com',
            nextDueDate: '2024-07-15',
            status: 'Active',
            price: '$9.99',
            billingCycle: 'Monthly'
          },
          {
            id: 2,
            name: 'Cloud Hosting',
            domain: 'mybusiness.net',
            nextDueDate: '2024-08-01',
            status: 'Active',
            price: '$19.99',
            billingCycle: 'Monthly'
          },
          {
            id: 3,
            name: 'Email Hosting',
            domain: 'example.com',
            nextDueDate: '2024-07-15',
            status: 'Active',
            price: '$4.99',
            billingCycle: 'Monthly'
          }
        ];
        
        // Mock domains data
        const mockDomains = [
          {
            id: 1,
            domain: 'example.com',
            registrationDate: '2023-07-15',
            expiryDate: '2024-07-15',
            status: 'Active',
            autoRenew: true
          },
          {
            id: 2,
            domain: 'mybusiness.net',
            registrationDate: '2023-08-01',
            expiryDate: '2024-08-01',
            status: 'Active',
            autoRenew: true
          }
        ];
        
        // Mock invoices data
        const mockInvoices = [
          {
            id: 1,
            invoiceNumber: 'INV-001',
            dateCreated: '2024-06-01',
            dateDue: '2024-06-15',
            total: '$34.97',
            status: 'Paid'
          },
          {
            id: 2,
            invoiceNumber: 'INV-002',
            dateCreated: '2024-07-01',
            dateDue: '2024-07-15',
            total: '$34.97',
            status: 'Unpaid'
          }
        ];
        
        // Mock tickets data
        const mockTickets = [
          {
            id: 1,
            ticketNumber: 'TKT-001',
            subject: 'Website Migration Question',
            dateCreated: '2024-06-10',
            status: 'Open',
            lastReply: '2024-06-11'
          }
        ];
        
        setServices(mockServices);
        setDomains(mockDomains);
        setInvoices(mockInvoices);
        setTickets(mockTickets);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
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
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'unpaid':
        return 'bg-yellow-100 text-yellow-800';
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'answered':
        return 'bg-purple-100 text-purple-800';
      case 'closed':
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
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userData.firstName}!</h2>
        <p className="text-gray-600">Here's an overview of your account and services.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">{services.length} Services</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Hosting Services</h3>
          <p className="text-sm text-gray-600">All services are active</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Globe className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">{domains.length} Domains</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Domain Names</h3>
          <p className="text-sm text-gray-600">All domains are active</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">{invoices.filter(inv => inv.status === 'Unpaid').length} Unpaid</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Invoices</h3>
          <p className="text-sm text-gray-600">You have {invoices.filter(inv => inv.status === 'Unpaid').length} unpaid invoice(s)</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-purple-600">{tickets.filter(ticket => ticket.status === 'Open').length} Open</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Support Tickets</h3>
          <p className="text-sm text-gray-600">You have {tickets.filter(ticket => ticket.status === 'Open').length} open ticket(s)</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Your Services</h3>
          <Link to="#" onClick={() => {}} className="text-main-green hover:text-secondary-green text-sm font-medium flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Due Date
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
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-main-green/10 rounded-full flex items-center justify-center">
                          <Server className="h-5 w-5 text-main-green" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.price} / {service.billingCycle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.domain}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(service.nextDueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(service.status)}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to="#" className="text-main-green hover:text-secondary-green">
                        Manage
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Domains */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Your Domains</h3>
          <Link to="#" onClick={() => {}} className="text-main-green hover:text-secondary-green text-sm font-medium flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
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
                {domains.map((domain) => (
                  <tr key={domain.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{domain.domain}</div>
                          <div className="text-sm text-gray-500">
                            {domain.autoRenew ? 'Auto-renew enabled' : 'Auto-renew disabled'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(domain.registrationDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(domain.expiryDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(domain.status)}`}>
                        {domain.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to="#" className="text-main-green hover:text-secondary-green">
                        Manage
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activity & Billing Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    Invoice #INV-002 created
                  </p>
                  <p className="text-sm text-gray-500">
                    A new invoice has been created for your services.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    2 days ago
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    Payment received
                  </p>
                  <p className="text-sm text-gray-500">
                    Your payment for invoice #INV-001 has been processed successfully.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    5 days ago
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    Support ticket updated
                  </p>
                  <p className="text-sm text-gray-500">
                    Your support ticket #TKT-001 has been updated with a new reply.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    1 week ago
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center">
              <Link to="#" className="text-sm font-medium text-main-green hover:text-secondary-green">
                View All Activity
              </Link>
            </div>
          </div>
        </div>

        {/* Billing Summary */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Billing Summary</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Current Billing Cycle</span>
                </div>
                <span className="text-sm text-gray-600">June 1 - June 30, 2024</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Payment Method</span>
                </div>
                <span className="text-sm text-gray-600">Visa ending in 4242</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Next Invoice</span>
                </div>
                <span className="text-sm text-gray-600">July 1, 2024</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Total Due</span>
                </div>
                <span className="text-lg font-bold text-main-green">$34.97</span>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between">
              <Link to="#" className="text-sm font-medium text-main-green hover:text-secondary-green">
                View Invoices
              </Link>
              <Link to="#" className="text-sm font-medium text-main-green hover:text-secondary-green">
                Make Payment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Server Status & Resources */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Server Status & Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-700">Disk Usage</h4>
              <span className="text-xs font-medium text-gray-500">8.2 GB / 25 GB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-main-green h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>33% used</span>
              <span>16.8 GB free</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-700">Bandwidth</h4>
              <span className="text-xs font-medium text-gray-500">45 GB / 100 GB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>45% used</span>
              <span>55 GB free</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-700">Email Accounts</h4>
              <span className="text-xs font-medium text-gray-500">3 / 10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>30% used</span>
              <span>7 accounts available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-main-green/10 rounded-full mb-3">
              <Server className="h-6 w-6 text-main-green" />
            </div>
            <span className="text-sm font-medium text-gray-800">cPanel Login</span>
          </Link>
          
          <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-blue-100 rounded-full mb-3">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-800">WordPress Admin</span>
          </Link>
          
          <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-purple-100 rounded-full mb-3">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-800">Webmail</span>
          </Link>
          
          <Link to="#" className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-yellow-100 rounded-full mb-3">
              <HelpCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-gray-800">Open Ticket</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;