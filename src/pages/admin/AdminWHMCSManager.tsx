import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import WHMCSAPISettings from '../../components/admin/WHMCSAPISettings';
import WHMCSClientManager from '../../components/admin/WHMCSClientManager';
import WHMCSProductManager from '../../components/admin/WHMCSProductManager';
import WHMCSBillingManager from '../../components/admin/WHMCSBillingManager';
import WHMCSTicketManager from '../../components/admin/WHMCSTicketManager';
import WHMCSPermissionsManager from '../../components/admin/WHMCSPermissionsManager';
import WHMCSApiLogs from '../../components/admin/WHMCSApiLogs';
import WHMCSOrderManager from '../../components/admin/WHMCSOrderManager';
import WHMCSUserManager from '../../components/admin/WHMCSUserManager';
import WHMCSPlanManager from '../../components/admin/WHMCSPlanManager';
import WHMCSReportManager from '../../components/admin/WHMCSReportManager';
import WHMCSServiceManager from '../../components/admin/WHMCSServiceManager';
import WHMCSDomainManager from '../../components/admin/WHMCSDomainManager';
import whmcsApi from '../../lib/whmcsApi';
import toast from 'react-hot-toast';

import { 
  Server, 
  Users, 
  Package, 
  CreditCard, 
  MessageCircle, 
  FileText, 
  Settings, 
  Database, 
  Globe, 
  Mail, 
  ShieldCheck, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info, 
  HelpCircle,
  List,
  User,
  UserPlus,
  UserX,
  UserCheck,
  Eye,
  EyeOff,
  DollarSign,
  FileSearch,
  BarChart3,
  Lock,
  Key,
  ShoppingCart,
  Briefcase,
  Activity
} from 'lucide-react';

const AdminWHMCSManager = () => {
  const { isAuthenticated, isLoading } = useAdmin();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [apiStatus, setApiStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const [stats, setStats] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkApiConnection();
    if (activeTab === 'dashboard') {
      fetchStats();
    }
  }, [activeTab]);

  const checkApiConnection = async () => {
    setApiStatus('checking');
    
    try {
      const response = await whmcsApi.testApiConnection();
      
      if (response.result === 'success') {
        setApiStatus('connected');
        setError(null);
      } else {
        setApiStatus('disconnected');
        setError('Could not connect to WHMCS API. Please check your API configuration.');
      }
    } catch (error) {
      console.error('Error checking API connection:', error);
      setApiStatus('disconnected');
      setError('Error connecting to WHMCS API. Please check your configuration.');
    }
  };

  const fetchStats = async () => {
    setStatsLoading(true);
    
    try {
      const statsData = await whmcsApi.getStats();
      
      if (statsData) {
        setStats(statsData);
      } else {
        toast.error('Failed to load WHMCS statistics');
      }
    } catch (error) {
      console.error('Error fetching WHMCS stats:', error);
      toast.error('Failed to load WHMCS statistics');
    } finally {
      setStatsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-green"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const renderActiveTab = () => {
    if (apiStatus === 'disconnected' && activeTab !== 'settings') {
      return (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error || 'WHMCS API connection failed. Please check your API configuration.'}
              </p>
              <p className="text-sm text-red-700 mt-2">
                Go to the <button 
                  onClick={() => setActiveTab('settings')} 
                  className="font-medium underline"
                >
                  API Settings
                </button> tab to configure your WHMCS API credentials.
              </p>
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <WHMCSDashboard stats={stats} isLoading={statsLoading} />;
      case 'settings':
        return <WHMCSAPISettings />;
      case 'clients':
        return <WHMCSClientManager />;
      case 'users':
        return <WHMCSUserManager />;
      case 'products':
        return <WHMCSProductManager />;
      case 'plans':
        return <WHMCSPlanManager />;
      case 'orders':
        return <WHMCSOrderManager />;
      case 'billing':
        return <WHMCSBillingManager />;
      case 'tickets':
        return <WHMCSTicketManager />;
      case 'services':
        return <WHMCSServiceManager />;
      case 'domains':
        return <WHMCSDomainManager />;
      case 'reports':
        return <WHMCSReportManager />;
      case 'logs':
        return <WHMCSApiLogs />;
      case 'permissions':
        return <WHMCSPermissionsManager />;
      default:
        return <WHMCSDashboard stats={stats} isLoading={statsLoading} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-main-green/10 rounded-lg text-main-green">
          <Server className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">WHMCS Management</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3 className="h-5 w-5 inline mr-1" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'settings'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Settings className="h-5 w-5 inline mr-1" />
              API Settings
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'clients'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="h-5 w-5 inline mr-1" />
              Clients
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'users'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="h-5 w-5 inline mr-1" />
              Users
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'products'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Package className="h-5 w-5 inline mr-1" />
              Products
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'plans'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <List className="h-5 w-5 inline mr-1" />
              Plans
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'orders'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ShoppingCart className="h-5 w-5 inline mr-1" />
              Orders
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'billing'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CreditCard className="h-5 w-5 inline mr-1" />
              Billing
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'tickets'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageCircle className="h-5 w-5 inline mr-1" />
              Tickets
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'services'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Briefcase className="h-5 w-5 inline mr-1" />
              Services
            </button>
            <button
              onClick={() => setActiveTab('domains')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'domains'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Globe className="h-5 w-5 inline mr-1" />
              Domains
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileSearch className="h-5 w-5 inline mr-1" />
              Reports
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'logs'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="h-5 w-5 inline mr-1" />
              API Logs
            </button>
            <button
              onClick={() => setActiveTab('permissions')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'permissions'
                  ? 'border-b-2 border-main-green text-main-green'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Lock className="h-5 w-5 inline mr-1" />
              Permissions
            </button>
          </nav>
        </div>
      </div>

      {renderActiveTab()}
    </div>
  );
};

// WHMCS Dashboard Component
interface WHMCSDashboardProps {
  stats: any;
  isLoading: boolean;
}

const WHMCSDashboard: React.FC<WHMCSDashboardProps> = ({ stats, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Could not load WHMCS statistics. Please check your API configuration.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">WHMCS Dashboard</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200">
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-800">Clients</h4>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.clients_total || '0'}</div>
          <p className="text-sm text-gray-600">{stats.clients_active || '0'} active</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span className="font-medium">↑ {stats.clients_growth || '0'}%</span>
            <span className="ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-800">Revenue</h4>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">${stats.income_today || '0'}</div>
          <p className="text-sm text-gray-600">This month</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span className="font-medium">↑ {stats.income_growth || '0'}%</span>
            <span className="ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MessageCircle className="h-5 w-5 text-purple-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-800">Tickets</h4>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.tickets_open || '0'}</div>
          <p className="text-sm text-gray-600">Open tickets</p>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <span className="font-medium">↑ {stats.tickets_growth || '0'}%</span>
            <span className="ml-1">from last week</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-yellow-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-800">Orders</h4>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.orders_today || '0'}</div>
          <p className="text-sm text-gray-600">This month</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span className="font-medium">↑ {stats.orders_growth || '0'}%</span>
            <span className="ml-1">from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
            <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {stats.recent_activity ? (
              stats.recent_activity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-800">{activity.description}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                    <div className="text-sm text-gray-600">{activity.details}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Activity className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No recent activity to display</p>
              </div>
            )}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">API Connection</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Connected</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Database Status</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Healthy</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">WHMCS Version</div>
              <div className="text-sm font-medium text-gray-800">{stats.whmcs_version || 'Unknown'}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Last Sync</div>
              <div className="text-sm font-medium text-gray-800">{stats.last_sync || 'Never'}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Active Services</div>
              <div className="text-sm font-medium text-gray-800">{stats.services_active || '0'}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Active Domains</div>
              <div className="text-sm font-medium text-gray-800">{stats.domains_active || '0'}</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200 flex items-center justify-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync with WHMCS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWHMCSManager;