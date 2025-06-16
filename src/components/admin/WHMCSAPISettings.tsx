import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Save, 
  Server, 
  Key, 
  User, 
  Users, 
  Package, 
  CreditCard, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle,
  Settings,
  BarChart3
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSAPISettings = () => {
  const { siteSettings, updateSettings } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{success: boolean; message: string} | null>(null);
  
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
  }, [siteSettings]);

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
    } catch (error) {
      console.error('Error saving WHMCS API settings:', error);
      toast.error('Failed to save WHMCS API settings');
    } finally {
      setIsLoading(false);
    }
  };

  const testApiConnection = async () => {
    setIsTesting(true);
    setTestResult(null);
    
    try {
      // In a real implementation, you would make an actual API call to WHMCS
      // For this demo, we'll simulate a successful connection after a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate API test result
      if (formData.apiUrl && formData.apiIdentifier && formData.apiSecret) {
        setTestResult({
          success: true,
          message: 'Successfully connected to WHMCS API. Version: 8.6.1'
        });
        toast.success('API connection successful!');
      } else {
        setTestResult({
          success: false,
          message: 'Connection failed. Please check your API credentials and URL.'
        });
        toast.error('API connection failed');
      }
    } catch (error) {
      console.error('Error testing API connection:', error);
      setTestResult({
        success: false,
        message: 'Connection error. Please check your network and try again.'
      });
      toast.error('API connection test failed');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-main-green/10 rounded-lg text-main-green">
          <Server className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">WHMCS API Integration</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            
            <div className="border-t border-gray-200 pt-6">
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
              <button
                type="button"
                onClick={testApiConnection}
                disabled={isTesting}
                className="px-4 py-2 border border-main-green text-main-green rounded-lg hover:bg-background-green transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTesting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-main-green"></div>
                ) : (
                  <>
                    <RefreshCw className="h-5 w-5" />
                    <span>Test Connection</span>
                  </>
                )}
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
                    <Save className="h-5 w-5" />
                    <span>Save Settings</span>
                  </>
                )}
              </button>
            </div>
            
            {testResult && (
              <div className={`p-4 rounded-lg ${
                testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-start space-x-3">
                  {testResult.success ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <div>
                    <h4 className={`font-medium ${testResult.success ? 'text-green-800' : 'text-red-800'}`}>
                      {testResult.success ? 'Connection Successful' : 'Connection Failed'}
                    </h4>
                    <p className={`text-sm ${testResult.success ? 'text-green-600' : 'text-red-600'}`}>
                      {testResult.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
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
};

export default WHMCSAPISettings;