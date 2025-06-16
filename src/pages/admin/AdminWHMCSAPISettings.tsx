import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
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
  Key
} from 'lucide-react';
import toast from 'react-hot-toast';
import WHMCSClientManager from '../../components/admin/WHMCSClientManager';

const AdminWHMCSAPISettings = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const { siteSettings, updateSettings } = useAdmin();
  
  const [formData, setFormData] = useState({
    apiUrl: '',
    apiIdentifier: '',
    apiSecret: '',
    accessKey: '',
    responsiblePerson: '',
    enableClientRegistration: false,
    enableBilling: false,
    enableTicketing: false,
    enableProductManagement: false,
    enableUserManagement: false,
    logApiCalls: true
  });

  useEffect(() => {
    // Load WHMCS API settings
    const apiUrlSetting = siteSettings.find(s => s.setting_key === 'whmcs_apiUrl');
    const apiIdentifierSetting = siteSettings.find(s => s.setting_key === 'whmcs_apiIdentifier');
    const apiSecretSetting = siteSettings.find(s => s.setting_key === 'whmcs_apiSecret');
    const accessKeySetting = siteSettings.find(s => s.setting_key === 'whmcs_accessKey');
    const responsiblePersonSetting = siteSettings.find(s => s.setting_key === 'whmcs_responsiblePerson');
    const enableClientRegistrationSetting = siteSettings.find(s => s.setting_key === 'whmcs_enableClientRegistration');
    const enableBillingSetting = siteSettings.find(s => s.setting_key === 'whmcs_enableBilling');
    const enableTicketingSetting = siteSettings.find(s => s.setting_key === 'whmcs_enableTicketing');
    const enableProductManagementSetting = siteSettings.find(s => s.setting_key === 'whmcs_enableProductManagement');
    const enableUserManagementSetting = siteSettings.find(s => s.setting_key === 'whmcs_enableUserManagement');
    const logApiCallsSetting = siteSettings.find(s => s.setting_key === 'whmcs_logApiCalls');
    
    setFormData({
      apiUrl: apiUrlSetting?.setting_value || '',
      apiIdentifier: apiIdentifierSetting?.setting_value || '',
      apiSecret: apiSecretSetting?.setting_value || '',
      accessKey: accessKeySetting?.setting_value || '',
      responsiblePerson: responsiblePersonSetting?.setting_value || '',
      enableClientRegistration: enableClientRegistrationSetting?.setting_value || false,
      enableBilling: enableBillingSetting?.setting_value || false,
      enableTicketing: enableTicketingSetting?.setting_value || false,
      enableProductManagement: enableProductManagementSetting?.setting_value || false,
      enableUserManagement: enableUserManagementSetting?.setting_value || false,
      logApiCalls: logApiCallsSetting?.setting_value !== false // Default to true
    });

    // Check API connection status
    checkApiConnection();
  }, [siteSettings]);

  const checkApiConnection = async () => {
    setApiStatus('checking');
    
    // In a real implementation, this would make an actual API call to WHMCS
    // For demo purposes, we'll simulate a connection check
    setTimeout(() => {
      if (formData.apiUrl && formData.apiIdentifier && formData.apiSecret) {
        setApiStatus('connected');
      } else {
        setApiStatus('disconnected');
      }
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Update all WHMCS API settings
      const promises = Object.entries(formData).map(([key, value]) => {
        return updateSettings(`whmcs_${key}`, value);
      });
      
      await Promise.all(promises);
      toast.success('WHMCS API settings saved successfully');
      
      // Check connection after saving
      checkApiConnection();
    } catch (error) {
      console.error('Error saving WHMCS API settings:', error);
      toast.error('Failed to save WHMCS API settings');
    } finally {
      setIsLoading(false);
    }
  };

  const renderApiSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-6">API Connection Settings</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="apiUrl" className="block text-sm font-medium text-gray-700 mb-2">
                WHMCS API URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Server className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="apiUrl"
                  name="apiUrl"
                  type="url"
                  value={formData.apiUrl}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="https://your-whmcs-instance.com/includes/api.php"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                The full URL to your WHMCS API endpoint
              </p>
            </div>
            
            <div>
              <label htmlFor="responsiblePerson" className="block text-sm font-medium text-gray-700 mb-2">
                Responsible Person
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="responsiblePerson"
                  name="responsiblePerson"
                  type="text"
                  value={formData.responsiblePerson}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Person responsible for this integration
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="apiIdentifier" className="block text-sm font-medium text-gray-700 mb-2">
                API Identifier
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="apiIdentifier"
                  name="apiIdentifier"
                  type="text"
                  value={formData.apiIdentifier}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="API Identifier"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="apiSecret" className="block text-sm font-medium text-gray-700 mb-2">
                API Secret
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="apiSecret"
                  name="apiSecret"
                  type="password"
                  value={formData.apiSecret}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="API Secret"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="accessKey" className="block text-sm font-medium text-gray-700 mb-2">
                Access Key (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="accessKey"
                  name="accessKey"
                  type="password"
                  value={formData.accessKey}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="Access Key (if required)"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Integration Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="enableClientRegistration"
                  name="enableClientRegistration"
                  type="checkbox"
                  checked={formData.enableClientRegistration}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="enableClientRegistration" className="font-medium text-gray-700 cursor-pointer">
                    Client Registration
                  </label>
                  <p className="text-xs text-gray-500">
                    Allow users to register through WHMCS
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="enableBilling"
                  name="enableBilling"
                  type="checkbox"
                  checked={formData.enableBilling}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="enableBilling" className="font-medium text-gray-700 cursor-pointer">
                    Billing Integration
                  </label>
                  <p className="text-xs text-gray-500">
                    Manage invoices and payments
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="enableTicketing"
                  name="enableTicketing"
                  type="checkbox"
                  checked={formData.enableTicketing}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="enableTicketing" className="font-medium text-gray-700 cursor-pointer">
                    Support Ticketing
                  </label>
                  <p className="text-xs text-gray-500">
                    Manage support tickets through WHMCS
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="enableProductManagement"
                  name="enableProductManagement"
                  type="checkbox"
                  checked={formData.enableProductManagement}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="enableProductManagement" className="font-medium text-gray-700 cursor-pointer">
                    Product Management
                  </label>
                  <p className="text-xs text-gray-500">
                    Sync products and services with WHMCS
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="enableUserManagement"
                  name="enableUserManagement"
                  type="checkbox"
                  checked={formData.enableUserManagement}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="enableUserManagement" className="font-medium text-gray-700 cursor-pointer">
                    User Management
                  </label>
                  <p className="text-xs text-gray-500">
                    Sync users between systems
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <input
                  id="logApiCalls"
                  name="logApiCalls"
                  type="checkbox"
                  checked={formData.logApiCalls}
                  onChange={handleChange}
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="logApiCalls" className="font-medium text-gray-700 cursor-pointer">
                    Log API Calls
                  </label>
                  <p className="text-xs text-gray-500">
                    Keep a record of all API interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex justify-between">
            <div>
              {apiStatus === 'connected' && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Connected to WHMCS API</span>
                </div>
              )}
              {apiStatus === 'disconnected' && (
                <div className="flex items-center text-red-600">
                  <XCircle className="h-5 w-5 mr-2" />
                  <span>Not connected to WHMCS API</span>
                </div>
              )}
              {apiStatus === 'checking' && (
                <div className="flex items-center text-yellow-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600 mr-2"></div>
                  <span>Checking connection...</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={checkApiConnection}
                className="px-4 py-2 border border-main-green text-main-green rounded-lg hover:bg-background-green transition-colors duration-200 flex items-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Test Connection</span>
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-main-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Settings className="h-5 w-5" />
                    <span>Save Settings</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Client Management</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Sync client data between your website and WHMCS. Manage user accounts, permissions, and client information.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Automatic user registration</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Profile synchronization</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Single sign-on capability</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Product Integration</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage your product catalog, pricing, and availability directly from WHMCS. Keep everything in sync automatically.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Product catalog synchronization</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Automatic price updates</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Custom product configurations</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Billing System</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Handle invoices, payments, and subscriptions through WHMCS's robust billing system. Automate recurring billing.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Automated invoicing</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Multiple payment gateways</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-main-green" />
              <span>Subscription management</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">API Documentation</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Available API Endpoints</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono">GetClients</code>
                <span className="text-gray-600">Retrieve client information</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono">GetProducts</code>
                <span className="text-gray-600">Retrieve product information</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono">CreateInvoice</code>
                <span className="text-gray-600">Create a new invoice</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono">GetTickets</code>
                <span className="text-gray-600">Retrieve support tickets</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Example API Request</h4>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`// Example API request to WHMCS
const response = await fetch('${formData.apiUrl || 'https://your-whmcs-instance.com/includes/api.php'}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    identifier: '${formData.apiIdentifier || 'your-identifier'}',
    secret: '${formData.apiSecret ? '********' : 'your-secret'}',
    action: 'GetClients',
    responsetype: 'json',
  })
});

const data = await response.json();
console.log(data);`}
            </pre>
          </div>
          
          <p className="text-sm text-gray-600">
            For complete documentation on the WHMCS API, please refer to the{' '}
            <a 
              href="https://developers.whmcs.com/api/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-main-green hover:text-secondary-green"
            >
              official WHMCS API documentation
            </a>.
          </p>
        </div>
      </div>
    </div>
  );

  const renderClientManager = () => (
    <WHMCSClientManager />
  );

  const renderProductManager = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            WHMCS Product Management is not enabled. Please enable it in the WHMCS API settings tab.
          </p>
        </div>
      </div>
    </div>
  );

  const renderBillingManager = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            WHMCS Billing Integration is not enabled. Please enable it in the WHMCS API settings tab.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTicketManager = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            WHMCS Support Ticketing is not enabled. Please enable it in the WHMCS API settings tab.
          </p>
        </div>
      </div>
    </div>
  );

  const renderApiLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">API Call Logs</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Search logs..."
            />
          </div>
          <button className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200">
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-06-17 10:15:32
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  GetClients
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Retrieved 5 clients
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-06-17 09:45:18
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  GetProducts
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Retrieved 12 products
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-06-17 09:30:05
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  GetTickets
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Error
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Invalid parameters
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPermissionsManager = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-6">WHMCS API Permissions</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Client Management</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_list_clients"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_list_clients" className="text-sm text-gray-700">
                  List Clients
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_view_client"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_view_client" className="text-sm text-gray-700">
                  View Client Details
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_create_client"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_create_client" className="text-sm text-gray-700">
                  Create Clients
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_update_client"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_update_client" className="text-sm text-gray-700">
                  Update Clients
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_delete_client"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_delete_client" className="text-sm text-gray-700">
                  Delete Clients
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Products & Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_list_products"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_list_products" className="text-sm text-gray-700">
                  List Products
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_view_product"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_view_product" className="text-sm text-gray-700">
                  View Product Details
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_create_product"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_create_product" className="text-sm text-gray-700">
                  Create Products
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_update_product"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_update_product" className="text-sm text-gray-700">
                  Update Products
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_delete_product"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_delete_product" className="text-sm text-gray-700">
                  Delete Products
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Billing & Invoices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_list_invoices"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_list_invoices" className="text-sm text-gray-700">
                  List Invoices
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_view_invoice"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_view_invoice" className="text-sm text-gray-700">
                  View Invoice Details
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_create_invoice"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_create_invoice" className="text-sm text-gray-700">
                  Create Invoices
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_update_invoice"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_update_invoice" className="text-sm text-gray-700">
                  Update Invoices
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_delete_invoice"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                />
                <label htmlFor="perm_delete_invoice" className="text-sm text-gray-700">
                  Delete Invoices
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Support & Tickets</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_list_tickets"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_list_tickets" className="text-sm text-gray-700">
                  List Tickets
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_view_ticket"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_view_ticket" className="text-sm text-gray-700">
                  View Ticket Details
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_create_ticket"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_create_ticket" className="text-sm text-gray-700">
                  Create Tickets
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_reply_ticket"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_reply_ticket" className="text-sm text-gray-700">
                  Reply to Tickets
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="perm_close_ticket"
                  className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  checked
                />
                <label htmlFor="perm_close_ticket" className="text-sm text-gray-700">
                  Close Tickets
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-main-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="h-5 w-5" />
              <span>Save Permissions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'settings':
        return renderApiSettings();
      case 'clients':
        return renderClientManager();
      case 'products':
        return renderProductManager();
      case 'billing':
        return renderBillingManager();
      case 'tickets':
        return renderTicketManager();
      case 'logs':
        return renderApiLogs();
      case 'permissions':
        return renderPermissionsManager();
      default:
        return renderApiSettings();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-main-green/10 rounded-lg text-main-green">
          <Server className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">WHMCS API Integration</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
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
              Support Tickets
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

export default AdminWHMCSAPISettings;