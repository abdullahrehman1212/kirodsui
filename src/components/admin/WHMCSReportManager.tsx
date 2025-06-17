import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  FileSearch, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar, 
  RefreshCw, 
  Filter,
  ChevronDown,
  ChevronUp,
  Users,
  CreditCard,
  DollarSign,
  ShoppingCart,
  Package,
  Globe,
  Server,
  Clock,
  Printer,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSReportManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reportType, setReportType] = useState('income');
  const [dateRange, setDateRange] = useState('month');
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReportData();
  }, [reportType, dateRange]);

  const fetchReportData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch report data from your backend
      // This is a placeholder for your actual backend API call
      const response = await fetch(`/api/whmcs/reports?type=${reportType}&dateRange=${dateRange}`);
      
      if (response.ok) {
        const data = await response.json();
        setReportData(data);
      } else {
        // For demo purposes, we'll use mock data
        const mockData = generateMockReportData(reportType, dateRange);
        setReportData(mockData);
      }
      
      toast.success('Report data loaded successfully');
    } catch (error) {
      console.error('Error fetching report data:', error);
      setError('Failed to load report data. Please check your backend connection.');
      toast.error('Failed to load report data');
      
      // Fallback to mock data
      const mockData = generateMockReportData(reportType, dateRange);
      setReportData(mockData);
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockReportData = (type, range) => {
    // Generate mock data based on report type and date range
    switch (type) {
      case 'income':
        return {
          title: 'Income Report',
          subtitle: getDateRangeText(range),
          total: '$12,450',
          change: '+12%',
          chartData: [
            { label: 'Jan', value: 8500 },
            { label: 'Feb', value: 9200 },
            { label: 'Mar', value: 8900 },
            { label: 'Apr', value: 10500 },
            { label: 'May', value: 11200 },
            { label: 'Jun', value: 12450 }
          ],
          breakdown: [
            { category: 'Hosting Services', amount: '$7,470', percentage: 60 },
            { category: 'Domain Registrations', amount: '$2,490', percentage: 20 },
            { category: 'SSL Certificates', amount: '$1,245', percentage: 10 },
            { category: 'Other Services', amount: '$1,245', percentage: 10 }
          ]
        };
      case 'clients':
        return {
          title: 'Client Report',
          subtitle: getDateRangeText(range),
          total: '1,245',
          change: '+5.2%',
          chartData: [
            { label: 'Jan', value: 1050 },
            { label: 'Feb', value: 1120 },
            { label: 'Mar', value: 1180 },
            { label: 'Apr', value: 1210 },
            { label: 'May', value: 1230 },
            { label: 'Jun', value: 1245 }
          ],
          breakdown: [
            { category: 'Active Clients', amount: '1,120', percentage: 90 },
            { category: 'Inactive Clients', amount: '125', percentage: 10 }
          ],
          details: {
            newClients: 45,
            returningClients: 1200,
            averageSpend: '$78.50'
          }
        };
      case 'orders':
        return {
          title: 'Order Report',
          subtitle: getDateRangeText(range),
          total: '89',
          change: '+7%',
          chartData: [
            { label: 'Jan', value: 65 },
            { label: 'Feb', value: 72 },
            { label: 'Mar', value: 68 },
            { label: 'Apr', value: 75 },
            { label: 'May', value: 82 },
            { label: 'Jun', value: 89 }
          ],
          breakdown: [
            { category: 'Hosting Orders', amount: '45', percentage: 50 },
            { category: 'Domain Orders', amount: '27', percentage: 30 },
            { category: 'SSL Orders', amount: '9', percentage: 10 },
            { category: 'Other Orders', amount: '8', percentage: 10 }
          ],
          details: {
            pendingOrders: 12,
            completedOrders: 72,
            cancelledOrders: 5
          }
        };
      default:
        return {
          title: 'Income Report',
          subtitle: getDateRangeText(range),
          total: '$12,450',
          change: '+12%',
          chartData: [
            { label: 'Jan', value: 8500 },
            { label: 'Feb', value: 9200 },
            { label: 'Mar', value: 8900 },
            { label: 'Apr', value: 10500 },
            { label: 'May', value: 11200 },
            { label: 'Jun', value: 12450 }
          ]
        };
    }
  };

  const getDateRangeText = (range) => {
    const now = new Date();
    
    switch (range) {
      case 'today':
        return `Today (${now.toLocaleDateString()})`;
      case 'yesterday':
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        return `Yesterday (${yesterday.toLocaleDateString()})`;
      case 'week':
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return `Last 7 Days (${weekAgo.toLocaleDateString()} - ${now.toLocaleDateString()})`;
      case 'month':
        const monthAgo = new Date(now);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return `Last 30 Days (${monthAgo.toLocaleDateString()} - ${now.toLocaleDateString()})`;
      case 'quarter':
        const quarterAgo = new Date(now);
        quarterAgo.setMonth(quarterAgo.getMonth() - 3);
        return `Last 3 Months (${quarterAgo.toLocaleDateString()} - ${now.toLocaleDateString()})`;
      case 'year':
        const yearAgo = new Date(now);
        yearAgo.setFullYear(yearAgo.getFullYear() - 1);
        return `Last 12 Months (${yearAgo.toLocaleDateString()} - ${now.toLocaleDateString()})`;
      default:
        return 'Custom Date Range';
    }
  };

  const getReportIcon = () => {
    switch (reportType) {
      case 'income':
        return <DollarSign className="h-6 w-6 text-green-600" />;
      case 'clients':
        return <Users className="h-6 w-6 text-blue-600" />;
      case 'orders':
        return <ShoppingCart className="h-6 w-6 text-yellow-600" />;
      case 'services':
        return <Package className="h-6 w-6 text-purple-600" />;
      case 'domains':
        return <Globe className="h-6 w-6 text-indigo-600" />;
      default:
        return <BarChart3 className="h-6 w-6 text-gray-600" />;
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              {error}
            </p>
            <p className="text-sm text-red-700 mt-2">
              Please check your backend connection.
            </p>
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
            <FileSearch className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">WHMCS Reports</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchReportData}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh report"
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
          
          <button
            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-gray-200 transition-colors duration-200"
          >
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </button>
        </div>
      </div>
      
      {/* Report Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            >
              <option value="income">Income Report</option>
              <option value="clients">Client Report</option>
              <option value="orders">Order Report</option>
              <option value="services">Services Report</option>
              <option value="domains">Domains Report</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 3 Months</option>
              <option value="year">Last 12 Months</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={fetchReportData}
              disabled={isLoading}
              className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Generate Report
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
        </div>
      ) : reportData ? (
        <div className="space-y-6">
          {/* Report Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gray-100 rounded-lg">
                {getReportIcon()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{reportData.title}</h3>
                <p className="text-sm text-gray-600">{reportData.subtitle}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Total</div>
                <div className="text-3xl font-bold text-gray-900">{reportData.total}</div>
                {reportData.change && (
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-green-600">{reportData.change} from previous period</span>
                  </div>
                )}
              </div>
              
              {reportType === 'clients' && reportData.details && (
                <>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">New Clients</div>
                    <div className="text-3xl font-bold text-gray-900">{reportData.details.newClients}</div>
                    <div className="text-sm text-gray-600 mt-2">This period</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Average Spend</div>
                    <div className="text-3xl font-bold text-gray-900">{reportData.details.averageSpend}</div>
                    <div className="text-sm text-gray-600 mt-2">Per client</div>
                  </div>
                </>
              )}
              
              {reportType === 'orders' && reportData.details && (
                <>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Pending Orders</div>
                    <div className="text-3xl font-bold text-gray-900">{reportData.details.pendingOrders}</div>
                    <div className="text-sm text-gray-600 mt-2">Awaiting processing</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Completed Orders</div>
                    <div className="text-3xl font-bold text-gray-900">{reportData.details.completedOrders}</div>
                    <div className="text-sm text-gray-600 mt-2">Successfully processed</div>
                  </div>
                </>
              )}
              
              {!reportData.details && (
                <>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Period</div>
                    <div className="text-xl font-bold text-gray-900">{reportData.subtitle}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Report Type</div>
                    <div className="text-xl font-bold text-gray-900">{reportData.title}</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Chart Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h4 className="text-lg font-medium text-gray-800 mb-6">
              {reportType === 'income' ? 'Income Trend' : 
               reportType === 'clients' ? 'Client Growth' :
               reportType === 'orders' ? 'Order Trend' :
               reportType === 'services' ? 'Service Distribution' :
               reportType === 'domains' ? 'Domain Distribution' :
               'Data Visualization'}
            </h4>
            
            {/* Simple Chart Visualization */}
            <div className="h-64 flex items-end space-x-2">
              {reportData.chartData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-main-green rounded-t"
                    style={{ 
                      height: `${(item.value / Math.max(...reportData.chartData.map(d => d.value))) * 200}px`,
                      backgroundColor: index % 2 === 0 ? '#2E7D32' : '#4CAF50'
                    }}
                  ></div>
                  <div className="text-xs text-gray-600 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Breakdown Section */}
          {reportData.breakdown && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h4 className="text-lg font-medium text-gray-800 mb-6">Breakdown</h4>
              
              <div className="space-y-4">
                {reportData.breakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.category}</span>
                      <span className="text-sm font-medium text-gray-900">{item.amount || item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-main-green h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 text-right">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <FileSearch className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No report data available</h3>
          <p className="text-gray-600 mb-6">
            Select a report type and date range, then click "Generate Report" to view data.
          </p>
        </div>
      )}
    </div>
  );
};

export default WHMCSReportManager;