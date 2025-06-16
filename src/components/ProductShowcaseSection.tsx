import React, { useState } from 'react';
import { 
  Tag, 
  Globe, 
  Server, 
  Shield, 
  Smartphone, 
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Lock,
  Cloud,
  Mail,
  Database,
  Wifi
} from 'lucide-react';

const ProductShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState('promos');

  const tabs = [
    { id: 'promos', label: 'Promos', icon: <Tag className="h-5 w-5" /> },
    { id: 'domains', label: 'Domains', icon: <Globe className="h-5 w-5" /> },
    { id: 'wordpress', label: 'WordPress', icon: <Zap className="h-5 w-5" /> },
    { id: 'hosting', label: 'Hosting', icon: <Server className="h-5 w-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'apps', label: 'Apps', icon: <Smartphone className="h-5 w-5" /> }
  ];

  const promoProducts = [
    {
      title: 'Get WordPress hosting + free domain for only',
      price: '$4.91/mo',
      originalPrice: null,
      badge: 'Free domain',
      badgeColor: 'bg-accent-green',
      description: 'Perfect for WordPress websites',
      cta: 'Get the deal',
      highlight: true,
      features: ['Free domain included', 'WordPress optimized', 'SSL certificate', '24/7 support']
    },
    {
      title: '.DESIGN',
      subtitle: 'DOMAINS',
      price: '$3.98/yr',
      originalPrice: '$49.98/yr',
      badge: '92% off',
      badgeColor: 'bg-red-500',
      description: 'Perfect for creative professionals',
      cta: 'Register now',
      features: ['Creative domain extension', 'Professional branding', 'Easy management', 'DNS control']
    },
    {
      title: 'Starter Email',
      subtitle: 'PROFESSIONAL EMAIL',
      price: '$0.00/2 mo',
      originalPrice: '$1.24/mo',
      badge: 'Free trial',
      badgeColor: 'bg-accent-green',
      description: 'Professional email solution',
      cta: 'Get it free',
      features: ['Professional email', 'Spam protection', 'Mobile access', 'Calendar sync']
    }
  ];

  const domainProducts = [
    {
      title: "Don't miss this $1 sale, that's .XYZ at 93% off.",
      price: null,
      badge: '93% off',
      badgeColor: 'bg-red-500',
      cta: 'Register now',
      highlight: true,
      features: ['Limited time offer', 'Perfect for startups', 'Easy registration', 'Full DNS control']
    },
    {
      title: '.SPACE',
      subtitle: 'DOMAINS',
      price: '$0.98/yr',
      originalPrice: '$1.78/yr',
      badge: '45% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Modern extension', 'Great for tech', 'Professional look', 'Easy setup']
    },
    {
      title: 'Register a .CA today for a chance to WIN! Rules apply.',
      price: null,
      badge: 'Contest',
      badgeColor: 'bg-purple-500',
      cta: 'Register now',
      highlight: true,
      features: ['Canadian domain', 'Win prizes', 'Professional extension', 'Local presence']
    },
    {
      title: '.LONDON',
      subtitle: 'DOMAINS',
      price: '$8.98/yr',
      originalPrice: '$36.98/yr',
      badge: '76% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Location-based', 'Local SEO boost', 'Professional', 'Memorable']
    },
    {
      title: '.CLOUD',
      subtitle: 'DOMAINS',
      price: '$2.98/yr',
      originalPrice: '$26.98/yr',
      badge: '89% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Tech-focused', 'Modern appeal', 'Cloud branding', 'Future-ready']
    },
    {
      title: '.ASIA',
      subtitle: 'DOMAINS',
      price: '$1.98/yr',
      originalPrice: '$14.48/yr',
      badge: '86% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Regional focus', 'Asian market', 'Cultural relevance', 'Business growth']
    }
  ];

  const wordpressProducts = [
    {
      title: 'WordPress Starter',
      subtitle: 'MANAGED WORDPRESS',
      price: '$0.00/1st mo',
      originalPrice: '$6.88/mo',
      badge: 'Free trial',
      badgeColor: 'bg-accent-green',
      description: 'Perfect for WordPress beginners',
      cta: 'Try now',
      features: ['1-click WordPress install', 'Free themes', 'Plugin support', 'Daily backups']
    },
    {
      title: 'WordPress Turbo',
      subtitle: 'MANAGED WORDPRESS',
      price: '$12.88/mo',
      badge: null,
      cta: 'Get offer',
      features: ['Enhanced performance', 'Advanced caching', 'Priority support', 'Staging environment']
    },
    {
      title: 'WordPress Supersonic',
      subtitle: 'MANAGED WORDPRESS',
      price: '$19.88/mo',
      badge: null,
      cta: 'Get offer',
      features: ['Maximum speed', 'CDN included', 'Expert support', 'Advanced security']
    },
    {
      title: 'WordPress Pro',
      subtitle: 'MANAGED WORDPRESS',
      price: '$2.91/mo',
      originalPrice: '$6.88/mo',
      badge: '58% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Professional features', 'E-commerce ready', 'SEO tools', 'Analytics']
    },
    {
      title: 'WordPress Business',
      subtitle: 'MANAGED WORDPRESS',
      price: '$4.91/mo',
      originalPrice: '$12.88/mo',
      badge: '62% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Business tools', 'Team collaboration', 'Advanced plugins', 'White-label']
    },
    {
      title: 'WordPress Enterprise',
      subtitle: 'MANAGED WORDPRESS',
      price: '$2.98/mo',
      originalPrice: '$19.88/mo',
      badge: '70% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Enterprise features', 'Dedicated resources', 'Custom solutions', 'SLA guarantee']
    }
  ];

  const hostingProducts = [
    {
      title: 'Choose Singapore Web Hosting and be faster for audiences in Asia.',
      price: null,
      badge: 'New',
      badgeColor: 'bg-accent-green',
      cta: 'Get hosting',
      highlight: true,
      features: ['Asia-optimized', 'Fast loading', 'Local support', 'High performance']
    },
    {
      title: 'All Plans',
      subtitle: 'SHARED HOSTING',
      price: '$1.58/mo',
      originalPrice: '$4.48/mo',
      badge: '65% off',
      badgeColor: 'bg-red-500',
      cta: 'Shop plans',
      features: ['Unlimited bandwidth', 'Free SSL', 'cPanel included', '99.9% uptime']
    },
    {
      title: 'Stellar Plus',
      subtitle: 'SHARED HOSTING',
      price: '$2.28/mo',
      originalPrice: '$6.48/mo',
      badge: '65% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Enhanced resources', 'Priority support', 'Advanced features', 'Free domain']
    },
    {
      title: 'VPS Hosting',
      subtitle: 'VPS HOSTING',
      price: '$6.88/mo',
      originalPrice: '$9.88/mo',
      badge: 'Up to 30% off',
      badgeColor: 'bg-red-500',
      cta: 'Get VPS',
      features: ['Dedicated resources', 'Root access', 'Scalable', 'SSD storage']
    },
    {
      title: 'WordPress Starter',
      subtitle: 'MANAGED WORDPRESS',
      price: '$0.00/1st mo',
      originalPrice: '$6.88/mo',
      badge: 'Free trial',
      badgeColor: 'bg-accent-green',
      cta: 'Try now',
      features: ['WordPress optimized', 'Auto updates', 'Security scanning', 'Expert support']
    },
    {
      title: 'Starter Email',
      subtitle: 'PROFESSIONAL EMAIL',
      price: '$0.00/2 mo',
      originalPrice: '$1.24/mo',
      badge: 'Free trial',
      badgeColor: 'bg-accent-green',
      cta: 'Get it free',
      features: ['Professional email', 'Calendar sync', 'Mobile apps', 'Spam protection']
    }
  ];

  const securityProducts = [
    {
      title: 'Domain Vault',
      subtitle: 'SECURITY',
      price: '$1.88/mo',
      badge: 'New',
      badgeColor: 'bg-accent-green',
      cta: 'Start trial',
      features: ['Domain protection', 'Transfer lock', 'Privacy protection', 'Monitoring']
    },
    {
      title: 'PositiveSSL Wildcard',
      subtitle: 'SECURITY',
      price: '$39.99/yr',
      originalPrice: '$44.39/yr',
      badge: '10% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Wildcard protection', 'Unlimited subdomains', 'Strong encryption', 'Browser trust']
    },
    {
      title: 'FastVPN',
      subtitle: 'SECURITY',
      price: '$0.99/mo',
      originalPrice: '$7.88/mo',
      badge: '87% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Global servers', 'No logs policy', 'Fast speeds', 'Multiple devices']
    },
    {
      title: 'PremiumDNS',
      subtitle: 'SECURITY',
      price: '$4.88/yr',
      badge: null,
      cta: 'Get offer',
      features: ['Enhanced DNS', 'DDoS protection', 'Global network', 'Fast resolution']
    },
    {
      title: 'PositiveSSL',
      subtitle: 'SECURITY',
      price: '$5.99/yr',
      originalPrice: '$6.99/yr',
      badge: '14% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Domain validation', 'Quick issuance', 'Browser compatibility', '99.9% recognition']
    },
    {
      title: 'PositiveSSL Multi domain',
      subtitle: 'SECURITY',
      price: '$19.50/yr',
      originalPrice: '$23.40/yr',
      badge: '17% off',
      badgeColor: 'bg-red-500',
      cta: 'Get offer',
      features: ['Multiple domains', 'SAN certificate', 'Cost effective', 'Easy management']
    }
  ];

  const appProducts = [
    {
      title: 'Website Builder Pro',
      subtitle: 'WEBSITE TOOLS',
      price: '$9.99/mo',
      originalPrice: '$19.99/mo',
      badge: '50% off',
      badgeColor: 'bg-red-500',
      cta: 'Get started',
      features: ['Drag & drop', 'Mobile responsive', 'E-commerce ready', 'SEO tools']
    },
    {
      title: 'Email Marketing Suite',
      subtitle: 'MARKETING TOOLS',
      price: '$14.99/mo',
      originalPrice: '$29.99/mo',
      badge: '50% off',
      badgeColor: 'bg-red-500',
      cta: 'Start campaign',
      features: ['Email automation', 'Analytics', 'Templates', 'A/B testing']
    },
    {
      title: 'Backup Pro',
      subtitle: 'BACKUP TOOLS',
      price: '$4.99/mo',
      originalPrice: '$9.99/mo',
      badge: '50% off',
      badgeColor: 'bg-red-500',
      cta: 'Secure now',
      features: ['Automated backups', 'Cloud storage', 'One-click restore', 'Scheduling']
    },
    {
      title: 'SEO Toolkit',
      subtitle: 'SEO TOOLS',
      price: '$19.99/mo',
      originalPrice: '$39.99/mo',
      badge: '50% off',
      badgeColor: 'bg-red-500',
      cta: 'Boost rankings',
      features: ['Keyword research', 'Site audit', 'Rank tracking', 'Competitor analysis']
    },
    {
      title: 'Analytics Pro',
      subtitle: 'ANALYTICS TOOLS',
      price: '$12.99/mo',
      originalPrice: '$24.99/mo',
      badge: '48% off',
      badgeColor: 'bg-red-500',
      cta: 'Track now',
      features: ['Advanced analytics', 'Custom reports', 'Real-time data', 'Goal tracking']
    },
    {
      title: 'Security Scanner',
      subtitle: 'SECURITY TOOLS',
      price: '$7.99/mo',
      originalPrice: '$15.99/mo',
      badge: '50% off',
      badgeColor: 'bg-red-500',
      cta: 'Scan now',
      features: ['Malware detection', 'Vulnerability scan', 'Real-time alerts', 'Auto cleanup']
    }
  ];

  const getProducts = () => {
    switch (activeTab) {
      case 'promos': return promoProducts;
      case 'domains': return domainProducts;
      case 'wordpress': return wordpressProducts;
      case 'hosting': return hostingProducts;
      case 'security': return securityProducts;
      case 'apps': return appProducts;
      default: return promoProducts;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'promos': return 'Explore current top deals';
      case 'domains': return 'Search the most popular domains';
      case 'wordpress': return 'Find your ideal WordPress hosting';
      case 'hosting': return 'Give your idea a home';
      case 'security': return 'Keep your site safe';
      case 'apps': return 'Enhance your website';
      default: return 'Explore current top deals';
    }
  };

  const getTabSubtitle = () => {
    switch (activeTab) {
      case 'promos': return 'Check out our best deals across our product range, and get what your website needs.';
      case 'domains': return 'Discover the latest domain deals and check our pricing on hundreds of TLDs.';
      case 'wordpress': return 'Host WordPress your way with Managed WordPress or Shared Hosting.';
      case 'hosting': return 'Discover our top hosting plans and prices, and get your idea up-and-running online.';
      case 'security': return 'Take the strain out of website safety with our low-cost, high-performance security products.';
      case 'apps': return 'Powerful applications and tools to enhance your website functionality.';
      default: return 'Check out our best deals across our product range, and get what your website needs.';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Buy a domain and everything else you need
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-2xl p-2 shadow-lg max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent-green text-white shadow-md'
                  : 'text-gray-600 hover:text-main-green hover:bg-background-green'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {getTabTitle()}
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {getTabSubtitle()}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getProducts().map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                product.highlight ? 'ring-2 ring-main-green' : ''
              }`}
            >
              {/* Product Header */}
              <div className={`p-6 ${product.highlight ? 'bg-gradient-to-r from-main-green to-secondary-green text-white' : ''}`}>
                {product.badge && (
                  <div className="flex justify-between items-start mb-4">
                    <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${product.highlight ? 'text-white' : 'text-text-dark'}`}>
                  {product.title}
                </h3>
                
                {product.subtitle && (
                  <p className={`text-sm font-medium mb-3 ${product.highlight ? 'text-green-100' : 'text-gray-500'}`}>
                    {product.subtitle}
                  </p>
                )}

                {product.description && (
                  <p className={`text-sm mb-4 ${product.highlight ? 'text-green-100' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                )}

                {/* Pricing */}
                {product.price && (
                  <div className="mb-4">
                    {product.originalPrice && (
                      <div className={`text-sm line-through mb-1 ${product.highlight ? 'text-green-200' : 'text-gray-400'}`}>
                        Instead of {product.originalPrice}
                      </div>
                    )}
                    <div className={`text-2xl font-bold ${product.highlight ? 'text-white' : 'text-text-dark'}`}>
                      {product.price}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Features */}
              <div className="p-6 pt-0">
                {product.features && (
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-main-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  product.highlight
                    ? 'bg-white text-main-green hover:bg-green-50'
                    : 'bg-main-green text-white hover:bg-secondary-green'
                }`}>
                  {product.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;