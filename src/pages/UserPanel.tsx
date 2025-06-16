import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { 
  Server, 
  Globe, 
  CreditCard, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Home,
  User,
  Package,
  Mail,
  ShieldCheck,
  Folder,
  Plus,
  RefreshCw,
  ChevronRight,
  Search,
  AlertCircle,
  CheckCircle,
  Clock,
  Calendar,
  DollarSign,
  Download,
  ExternalLink
} from 'lucide-react';
import whmcsApi from '../lib/whmcsApi';
import toast from 'react-hot-toast';

// Import user panel components
import UserDashboard from '../components/user/UserDashboard';
import UserHosting from '../components/user/UserHosting';
import UserDomains from '../components/user/UserDomains';
import UserInvoices from '../components/user/UserInvoices';
import UserTickets from '../components/user/UserTickets';
import UserProfile from '../components/user/UserProfile';
import UserFileManager from '../components/user/UserFileManager';
import UserWordPressSites from '../components/user/UserWordPressSites';

const UserPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // For demo purposes
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [userData, setUserData] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading user data from WHMCS API
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual user data from WHMCS
        // For demo purposes, we'll use mock data
        const mockUserData = {
          id: 12345,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          company: 'Example Corp',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          postcode: '12345',
          country: 'US',
          phoneNumber: '+1 (555) 123-4567',
          status: 'Active',
          joinDate: '2023-01-15',
          lastLogin: '2024-06-17T08:30:00Z'
        };
        
        setUserData(mockUserData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to load user data');
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // In a real implementation, this would call the logout API
    toast.success('Logged out successfully');
    setIsAuthenticated(false);
    navigate('/login');
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { id: 'hosting', label: 'Hosting Services', icon: <Server className="h-5 w-5" /> },
    { id: 'domains', label: 'Domains', icon: <Globe className="h-5 w-5" /> },
    { id: 'wordpress', label: 'WordPress Sites', icon: <Globe className="h-5 w-5" /> },
    { id: 'filemanager', label: 'File Manager', icon: <Folder className="h-5 w-5" /> },
    { id: 'invoices', label: 'Invoices & Billing', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'tickets', label: 'Support Tickets', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="h-5 w-5" /> }
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-green"></div>
        </div>
      );
    }

    switch (activeSection) {
      case 'dashboard':
        return <UserDashboard userData={userData} />;
      case 'hosting':
        return <UserHosting />;
      case 'domains':
        return <UserDomains />;
      case 'wordpress':
        return <UserWordPressSites />;
      case 'filemanager':
        return <UserFileManager />;
      case 'invoices':
        return <UserInvoices />;
      case 'tickets':
        return <UserTickets />;
      case 'profile':
        return <UserProfile userData={userData} />;
      default:
        return <UserDashboard userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="p-2 bg-main-green rounded-lg">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-800">Kirods Client Area</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  <HelpCircle className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  <Settings className="h-5 w-5" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-gray-700">
                      {isLoading ? 'Loading...' : `${userData?.firstName} ${userData?.lastName}`}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-main-green flex items-center justify-center text-white">
                      {isLoading ? '?' : userData?.firstName.charAt(0) + userData?.lastName.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main-green"
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeSection === item.id
                    ? 'bg-main-green text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-main-green'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="text-red-600 hover:bg-red-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row py-6">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <nav className="mt-5 px-2 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'bg-main-green text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-main-green'
                    } group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full mt-8"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </button>
              </nav>
            </div>

            {/* Account Status */}
            <div className="mt-6 bg-white rounded-lg shadow overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900">Account Status</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm text-gray-700">Account Active</span>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>Client ID: {userData?.id || 'Loading...'}</p>
                  <p className="mt-1">Member since: {userData ? new Date(userData.joinDate).toLocaleDateString() : 'Loading...'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:ml-6 flex-1">
            <div className="bg-white rounded-lg shadow">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;