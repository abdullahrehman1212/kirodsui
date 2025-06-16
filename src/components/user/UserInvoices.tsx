import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Search, 
  Download, 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Filter,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UserInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchInvoices = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        const mockInvoices = [
          {
            id: 1,
            invoiceNumber: 'INV-001',
            dateCreated: '2024-06-01',
            dateDue: '2024-06-15',
            total: '$34.97',
            status: 'Paid',
            items: [
              { description: 'Premium WordPress Hosting - example.com', amount: '$9.99' },
              { description: 'Cloud Hosting - mybusiness.net', amount: '$19.99' },
              { description: 'Email Hosting - example.com', amount: '$4.99' }
            ],
            paymentMethod: 'Credit Card',
            transactionId: 'TXN123456'
          },
          {
            id: 2,
            invoiceNumber: 'INV-002',
            dateCreated: '2024-07-01',
            dateDue: '2024-07-15',
            total: '$34.97',
            status: 'Unpaid',
            items: [
              { description: 'Premium WordPress Hosting - example.com', amount: '$9.99' },
              { description: 'Cloud Hosting - mybusiness.net', amount: '$19.99' },
              { description: 'Email Hosting - example.com', amount: '$4.99' }
            ]
          },
          {
            id: 3,
            invoiceNumber: 'INV-003',
            dateCreated: '2024-05-01',
            dateDue: '2024-05-15',
            total: '$34.97',
            status: 'Paid',
            items: [
              { description: 'Premium WordPress Hosting - example.com', amount: '$9.99' },
              { description: 'Cloud Hosting - mybusiness.net', amount: '$19.99' },
              { description: 'Email Hosting - example.com', amount: '$4.99' }
            ],
            paymentMethod: 'PayPal',
            transactionId: 'TXN123455'
          },
          {
            id: 4,
            invoiceNumber: 'INV-004',
            dateCreated: '2024-04-01',
            dateDue: '2024-04-15',
            total: '$34.97',
            status: 'Paid',
            items: [
              { description: 'Premium WordPress Hosting - example.com', amount: '$9.99' },
              { description: 'Cloud Hosting - mybusiness.net', amount: '$19.99' },
              { description: 'Email Hosting - example.com', amount: '$4.99' }
            ],
            paymentMethod: 'Credit Card',
            transactionId: 'TXN123454'
          },
          {
            id: 5,
            invoiceNumber: 'INV-005',
            dateCreated: '2024-03-01',
            dateDue: '2024-03-15',
            total: '$34.97',
            status: 'Paid',
            items: [
              { description: 'Premium WordPress Hosting - example.com', amount: '$9.99' },
              { description: 'Cloud Hosting - mybusiness.net', amount: '$19.99' },
              { description: 'Email Hosting - example.com', amount: '$4.99' }
            ],
            paymentMethod: 'Credit Card',
            transactionId: 'TXN123453'
          }
        ];
        
        setInvoices(mockInvoices);
        setTotalPages(Math.ceil(mockInvoices.length / 10)); // Assuming 10 invoices per page
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would filter invoices from the API
    // For demo purposes, we'll just filter the mock data
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'unpaid':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'refunded':
        return 'bg-purple-100 text-purple-800';
      case 'collections':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = searchTerm === '' || 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || invoice.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

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
        <h2 className="text-2xl font-bold text-gray-800">Invoices & Billing</h2>
        <p className="text-gray-600">View and manage your invoices, payments, and billing information.</p>
      </div>

      {/* Search and Filters */}
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
              placeholder="Search invoices..."
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
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="overdue">Overdue</option>
            <option value="cancelled">Cancelled</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Billing Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Billing Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">Due Soon</h4>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$34.97</div>
            <p className="text-sm text-gray-600">Due on July 15, 2024</p>
            <button className="mt-4 w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200">
              Pay Now
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">Last Payment</h4>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$34.97</div>
            <p className="text-sm text-gray-600">Paid on June 15, 2024</p>
            <button className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              View Receipt
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-800">Payment Method</h4>
            </div>
            <div className="flex items-center space-x-3 mb-1">
              <CreditCard className="h-5 w-5 text-gray-500" />
              <span className="text-gray-900">Visa ending in 4242</span>
            </div>
            <p className="text-sm text-gray-600">Expires 12/2025</p>
            <button className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              Update Payment Method
            </button>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      {filteredInvoices.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
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
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{invoice.invoiceNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(invoice.dateCreated).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(invoice.dateDue).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-gray-500 hover:text-main-green transition-colors duration-200">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="text-gray-500 hover:text-main-green transition-colors duration-200">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        {invoice.status === 'Unpaid' && (
                          <button className="bg-main-green text-white px-2 py-1 rounded text-xs font-medium hover:bg-secondary-green transition-colors duration-200">
                            Pay Now
                          </button>
                        )}
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredInvoices.length}</span> of{' '}
                  <span className="font-medium">{filteredInvoices.length}</span> results
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
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No invoices found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter
              ? `No results for your search. Try different search terms or filters.`
              : "You don't have any invoices yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserInvoices;