import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, Settings, FileText, Image, Users, Menu, X, LogOut, Home, ShoppingBag, DollarSign, Info, Phone, Globe, Mail, ChevronDown, ChevronRight, Palette, Type, Layout, Navigation, FolderRoot as Footer, Server, Database, Package, CreditCard, MessageCircle, List, User, FileSearch, BarChart3 } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['pages']);
  const location = useLocation();
  const { logout } = useAdmin();

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: '/admin',
      exact: true
    },
    {
      id: 'pages',
      title: 'Pages & Content',
      icon: <FileText className="h-5 w-5" />,
      children: [
        {
          id: 'home',
          title: 'Home Page',
          icon: <Home className="h-4 w-4" />,
          children: [
            { title: 'Hero Section', path: '/admin/pages/home/hero' },
            { title: 'Trust Section', path: '/admin/pages/home/trust' },
            { title: 'Pricing Section', path: '/admin/pages/home/pricing' },
            { title: 'Features Section', path: '/admin/pages/home/features' },
            { title: 'Testimonials', path: '/admin/pages/home/testimonials' },
            { title: 'About Preview', path: '/admin/pages/home/about-preview' },
            { title: 'FAQ Section', path: '/admin/pages/home/faq' },
            { title: 'News & Blog', path: '/admin/pages/home/news' },
            { title: 'CTA Section', path: '/admin/pages/home/cta' }
          ]
        },
        {
          id: 'products',
          title: 'Products Page',
          icon: <ShoppingBag className="h-4 w-4" />,
          children: [
            { title: 'Product Showcase', path: '/admin/pages/products/showcase' },
            { title: 'Specifications', path: '/admin/pages/products/specs' },
            { title: 'Custom Solutions', path: '/admin/pages/products/custom' }
          ]
        },
        {
          id: 'pricing',
          title: 'Pricing Page',
          icon: <DollarSign className="h-4 w-4" />,
          children: [
            { title: 'Pricing Plans', path: '/admin/pages/pricing/plans' },
            { title: 'Features Comparison', path: '/admin/pages/pricing/comparison' },
            { title: 'Payment Methods', path: '/admin/pages/pricing/payment' }
          ]
        },
        {
          id: 'about',
          title: 'About Page',
          icon: <Info className="h-4 w-4" />,
          children: [
            { title: 'Company Info', path: '/admin/pages/about/company' },
            { title: 'Team Section', path: '/admin/pages/about/team' },
            { title: 'Statistics', path: '/admin/pages/about/stats' }
          ]
        },
        {
          id: 'contact',
          title: 'Contact Page',
          icon: <Phone className="h-4 w-4" />,
          children: [
            { title: 'Contact Info', path: '/admin/pages/contact/info' },
            { title: 'Contact Form', path: '/admin/pages/contact/form' },
            { title: 'Location Map', path: '/admin/pages/contact/map' }
          ]
        },
        {
          id: 'hosting-pages',
          title: 'Hosting Pages',
          icon: <Globe className="h-4 w-4" />,
          children: [
            { title: 'WordPress Hosting', path: '/admin/pages/wordpress-hosting' },
            { title: 'Web Hosting', path: '/admin/pages/web-hosting' },
            { title: 'Cloud Hosting', path: '/admin/pages/cloud-hosting' },
            { title: 'Agency Hosting', path: '/admin/pages/agency-hosting' }
          ]
        },
        {
          id: 'service-pages',
          title: 'Service Pages',
          icon: <Mail className="h-4 w-4" />,
          children: [
            { title: 'Domain Search', path: '/admin/pages/domain-search' },
            { title: 'Domain Transfer', path: '/admin/pages/domain-transfer' },
            { title: 'Website Builder', path: '/admin/pages/website-builder' },
            { title: 'E-commerce Builder', path: '/admin/pages/ecommerce-builder' },
            { title: 'Business Email', path: '/admin/pages/business-email' },
            { title: 'Kirods Reach', path: '/admin/pages/kirods-reach' }
          ]
        }
      ]
    },
    {
      id: 'layout',
      title: 'Layout & Design',
      icon: <Layout className="h-5 w-5" />,
      children: [
        {
          id: 'header',
          title: 'Header & Navigation',
          icon: <Navigation className="h-4 w-4" />,
          path: '/admin/layout/header'
        },
        {
          id: 'footer',
          title: 'Footer',
          icon: <Footer className="h-4 w-4" />,
          path: '/admin/layout/footer'
        },
        {
          id: 'theme',
          title: 'Theme & Colors',
          icon: <Palette className="h-4 w-4" />,
          path: '/admin/layout/theme'
        },
        {
          id: 'typography',
          title: 'Typography',
          icon: <Type className="h-4 w-4" />,
          path: '/admin/layout/typography'
        }
      ]
    },
    {
      id: 'media',
      title: 'Media Library',
      icon: <Image className="h-5 w-5" />,
      path: '/admin/media'
    },
    {
      id: 'whmcs',
      title: 'WHMCS Integration',
      icon: <Server className="h-5 w-5" />,
      children: [
        { 
          title: 'API Settings', 
          icon: <Settings className="h-4 w-4" />,
          path: '/admin/whmcs-api' 
        },
        { 
          title: 'WHMCS Manager', 
          icon: <Database className="h-4 w-4" />,
          path: '/admin/whmcs-manager' 
        }
      ]
    },
    {
      id: 'settings',
      title: 'Site Settings',
      icon: <Settings className="h-5 w-5" />,
      children: [
        { title: 'General Settings', path: '/admin/settings/general' },
        { title: 'SEO Settings', path: '/admin/settings/seo' },
        { title: 'Social Media', path: '/admin/settings/social' },
        { title: 'Analytics', path: '/admin/settings/analytics' }
      ]
    }
  ];

  const renderMenuItem = (item: any, level = 0) => {
    const isActive = item.path && location.pathname === item.path;
    const isExpanded = expandedMenus.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="mb-1">
        {item.path ? (
          <Link
            to={item.path}
            className={`flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-main-green text-white shadow-md'
                : 'text-gray-700 hover:bg-background-green hover:text-main-green'
            } ${level > 0 ? 'ml-4' : ''}`}
          >
            {item.icon}
            <span className="ml-3">{item.title}</span>
          </Link>
        ) : (
          <button
            onClick={() => hasChildren && toggleMenu(item.id)}
            className={`w-full flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-all duration-200 text-gray-700 hover:bg-background-green hover:text-main-green ${
              level > 0 ? 'ml-4' : ''
            }`}
          >
            <div className="flex items-center">
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </div>
            {hasChildren && (
              <div className="transform transition-transform duration-200">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
            )}
          </button>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children.map((child: any) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-main-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-bold text-gray-800">Kirods Admin</span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Sidebar Menu */}
        {sidebarOpen && (
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {menuItems.map(item => renderMenuItem(item))}
            </nav>
          </div>
        )}

        {/* Sidebar Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome back, Admin
              </div>
              <div className="w-8 h-8 bg-main-green rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;