import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  FileText, 
  Search, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  Download,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Eye
} from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase } from '../../lib/supabase';

const WHMCSApiLogs = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [actionFilter, setActionFilter] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would fetch logs from the database
      // For demo purposes, we'll use mock data
      const mockLogs = [
        {
          id: 1,
          action: 'GetClients',
          params: { 
            limit: 10, 
            offset: 0 
          },
          response: { 
            result: 'success', 
            totalresults: 5, 
            clients: { 
              client: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' }
              ]
            }
          },
          status: 'success',
          created_at: '2024-06-17T10:15:32Z'
        },
        {
          id: 2,
          action: 'GetProducts',
          params: { 
            limit: 10, 
            offset: 0 
          },
          response: { 
            result: 'success', 
            totalresults: 12, 
            products: { 
              product: [
                { id: 1, name: 'Basic Hosting' },
                { id: 2, name: 'Premium Hosting' }
              ]
            }
          },
          status: 'success',
          created_at: '2024-06-17T09:45:18Z'
        },
        {
          id: 3,
          action: 'GetTickets',
          params: { 
            clientid: 'invalid' 
          },
          response: { 
            result: 'error', 
            message: 'Client ID not found' 
          },
          status: 'error',
          created_at: '2024-06-17T09:30:05Z'
        },
        {
          id: 4,
          action: 'CreateInvoice',
          params: { 
            userid: 1, 
            items: [
              { description: 'Hosting Service', amount: 9.99 }
            ]
          },
          response: { 
            result: 'success', 
            invoiceid: 1001 
          },
          status: 'success',
          created_at: '2024-06-16T14:22:10Z'
        },
        {
          id: 5,
          action: 'AddTicketReply',
          params: { 
            ticketid: 123, 
            message: 'This is a reply to the ticket.' 
          },
          response: { 
            result: 'success' 
          },
          status: 'success',
          created_at: '2024-06-16T11:05:45Z'
        }
      ];
      
      setLogs(mockLogs);
      setTotalPages(Math.ceil(mockLogs.length / 10)); // Assuming 10 logs per page
      
      // In a real implementation, you would fetch from the database
      // const { data, error } = await supabase
      //   .from('whmcs_api_logs')
      //   .select('*')
      //   .order('created_at', { ascending: false });
      
      // if (error) throw error;
      // setLogs(data || []);
      // setTotalPages(Math.ceil((data?.length || 0) / 10));
      
      toast.success('API logs loaded successfully');
    } catch (error) {
      console.error('Error fetching API logs:', error);
      toast.error('Failed to load API logs');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLogs();
  };

  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleActionFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActionFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateRange(e.target.value);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const viewLogDetails = (log) => {
    setSelectedLog(log);
  };

  const closeLogDetails = () => {
    setSelectedLog(null);
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = searchTerm === '' || 
      log.action.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || log.status === statusFilter;
    const matchesAction = actionFilter === '' || log.action === actionFilter;
    
    // Date range filtering
    let matchesDateRange = true;
    if (dateRange !== 'all') {
      const logDate = new Date(log.created_at);
      const now = new Date();
      
      if (dateRange === 'today') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        matchesDateRange = logDate >= today;
      } else if (dateRange === 'yesterday') {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        matchesDateRange = logDate >= yesterday && logDate < today;
      } else if (dateRange === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        matchesDateRange = logDate >= weekAgo;
      } else if (dateRange === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        matchesDateRange = logDate >= monthAgo;
      }
    }
    
    return matchesSearch && matchesStatus && matchesAction && matchesDateRange;
  });

  // Get unique actions for filter dropdown
  const uniqueActions = [...new Set(logs.map(log => log.action))];

  if (selectedLog) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={closeLogDetails}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Logs
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Download className="h-4 w-4 inline mr-1" />
              Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">API Call: {selectedLog.action}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>ID: {selectedLog.id}</span>
                  <span>•</span>
                  <span>Time: {formatDate(selectedLog.created_at)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  selectedLog.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {selectedLog.status === 'success' ? 'Success' : 'Error'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Request Parameters</h4>
                <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                    {JSON.stringify(selectedLog.params, null, 2)}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Response</h4>
                <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                    {JSON.stringify(selectedLog.response, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Information</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Timestamp</div>
                    <div className="text-sm text-gray-900">{formatDate(selectedLog.created_at)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Status</div>
                    <div className="text-sm text-gray-900 capitalize">{selectedLog.status}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">API Action</div>
                    <div className="text-sm text-gray-900">{selectedLog.action}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Response Time</div>
                    <div className="text-sm text-gray-900">235ms</div>
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
          <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
            <FileText className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS API Logs</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchLogs}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh logs"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <Download className="h-4 w-4 inline mr-1" />
            Export Logs
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
              placeholder="Search API actions..."
            />
          </div>
        </form>
        
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="block pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
          </select>
          
          <select
            value={actionFilter}
            onChange={handleActionFilterChange}
            className="block pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Actions</option>
            {uniqueActions.map(action => (
              <option key={action} value={action}>{action}</option>
            ))}
          </select>
          
          <select
            value={dateRange}
            onChange={handleDateRangeChange}
            className="block pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : filteredLogs.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLogs.map((log) => (
                  <tr 
                    key={log.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => viewLogDetails(log)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(log.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {log.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {log.status === 'success' ? 'Success' : 'Error'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.status === 'success' 
                        ? log.response.totalresults 
                          ? `Retrieved ${log.response.totalresults} results` 
                          : 'Operation completed successfully'
                        : log.response.message || 'Error occurred'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            viewLogDetails(log);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredLogs.length}</span> of{' '}
                  <span className="font-medium">{filteredLogs.length}</span> results
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
          <h3 className="text-lg font-medium text-gray-800 mb-2">No API logs found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter || actionFilter || dateRange !== 'all'
              ? `No results for your search. Try different search terms or filters.`
              : 'No API calls have been logged yet.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default WHMCSApiLogs;