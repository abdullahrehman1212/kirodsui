import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  ShoppingCart, 
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
  User,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSOrderManager = () => {
  const { siteSettings } = useAdmin();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Check if WHMCS product management is enabled
    const enableProductManagementSetting = siteSettings.find(
      s => s.setting_key === 'whmcs_enableProductManagement'
    );
    
    setIsEnabled(enableProductManagementSetting?.setting_value === true);
    
    if (enableProductManagementSetting?.setting_value === true) {
      fetchOrders();
    }
  }, [siteSettings]);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call the actual WHMCS API
      // For demo purposes, we'll use mock data
      const mockOrders = [
        {
          id: 1,
          orderNumber: 'ORD-001',
          client: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
          },
          dateCreated: '2024-06-15',
          total: '$99.99',
          status: 'Pending',
          paymentMethod: 'Credit Card',
          items: [
            { type: 'Product', description: 'Premium WordPress Hosting', amount: '$9.99/mo', setupFee: '$0.00' },
            { type: 'Domain', description: 'example.com (1 year)', amount: '$14.99', setupFee: '$0.00' },
            { type: 'Addon', description: 'SSL Certificate', amount: '$24.99/yr', setupFee: '$0.00' }
          ]
        },
        {
          id: 2,
          orderNumber: 'ORD-002',
          client: {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
          },
          dateCreated: '2024-06-14',
          total: '$149.99',
          status: 'Active',
          paymentMethod: 'PayPal',
          items: [
            { type: 'Product', description: 'Cloud Hosting', amount: '$19.99/mo', setupFee: '$0.00' },
            { type: 'Domain', description: 'janesmith.com (1 year)', amount: '$14.99', setupFee: '$0.00' }
          ]
        },
        {
          id: 3,
          orderNumber: 'ORD-003',
          client: {
            id: 3,
            name: 'Robert Johnson',
            email: 'robert.johnson@example.com'
          },
          dateCreated: '2024-06-13',
          total: '$299.99',
          status: 'Cancelled',
          paymentMethod: 'Credit Card',
          items: [
            { type: 'Product', description: 'Dedicated Server', amount: '$99.99/mo', setupFee: '$49.99' },
            { type: 'Domain', description: 'robertjohnson.com (1 year)', amount: '$14.99', setupFee: '$0.00' }
          ]
        },
        {
          id: 4,
          orderNumber: 'ORD-004',
          client: {
            id: 4,
            name: 'Emily Williams',
            email: 'emily.williams@example.com'
          },
          dateCreated: '2024-06-12',
          total: '$79.99',
          status: 'Fraud',
          paymentMethod: 'Credit Card',
          items: [
            { type: 'Product', description: 'Business Email', amount: '$4.99/mo', setupFee: '$0.00' },
            { type: 'Domain', description: 'emilywilliams.com (1 year)', amount: '$14.99', setupFee: '$0.00' }
          ]
        },
        {
          id: 5,
          orderNumber: 'ORD-005',
          client: {
            id: 5,
            name: 'Michael Brown',
            email: 'michael.brown@example.com'
          },
          dateCreated: '2024-06-11',
          total: '$199.99',
          status: 'Complete',
          paymentMethod: 'Bank Transfer',
          items: [
            { type: 'Product', description: 'VPS Hosting', amount: '$49.99/mo', setupFee: '$0.00' },
            { type: 'Domain', description: 'michaelbrown.com (1 year)', amount: '$14.99', setupFee: '$0.00' }
          ]
        }
      ];
      
      setOrders(mockOrders);
      setTotalPages(Math.ceil(mockOrders.length / 10)); // Assuming 10 orders per page
      
      toast.success('Orders loaded successfully');
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to load orders');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchOrders();
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'complete':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'fraud':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchTerm === '' || 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || order.status.toLowerCase() === statusFilter.toLowerCase();
    
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

  // If an order is selected, show the order details
  if (selectedOrder) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedOrder(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Orders
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Download className="h-4 w-4 inline mr-1" />
              Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Order #{selectedOrder.orderNumber}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>Date: {new Date(selectedOrder.dateCreated).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Client: {selectedOrder.client.name}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Client Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{selectedOrder.client.name}</div>
                      <div className="text-sm text-gray-500">{selectedOrder.client.email}</div>
                    </div>
                  </div>
                  <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
                    View Client Profile
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Order Details</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Payment Method:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(selectedOrder.dateCreated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Order Items</h4>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Setup Fee</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.setupFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Order Total</div>
                <div className="text-2xl font-bold text-gray-900">{selectedOrder.total}</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between">
              <div className="space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  Cancel Order
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  Mark as Fraud
                </button>
              </div>
              <div className="space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <Edit className="h-4 w-4 inline mr-1" />
                  Edit Order
                </button>
                <button className="px-4 py-2 bg-main-green text-white rounded-lg text-sm font-medium hover:bg-secondary-green transition-colors duration-200">
                  <CheckCircle className="h-4 w-4 inline mr-1" />
                  Accept Order
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
          <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS Order Manager</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchOrders}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh orders"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Create Order</span>
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
              placeholder="Search orders..."
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
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="complete">Complete</option>
            <option value="cancelled">Cancelled</option>
            <option value="fraud">Fraud</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredOrders.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
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
                {filteredOrders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                          <div className="text-xs text-gray-500">ID: {order.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.client.name}</div>
                      <div className="text-sm text-gray-500">{order.client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.dateCreated).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOrder(order);
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of{' '}
                  <span className="font-medium">{filteredOrders.length}</span> results
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
          <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No orders found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter
              ? `No results for your search. Try different search terms or filters.`
              : 'No orders have been created yet.'}
          </p>
          {!searchTerm && !statusFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Create First Order</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WHMCSOrderManager;