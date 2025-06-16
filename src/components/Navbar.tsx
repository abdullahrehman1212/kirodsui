import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Zap, 
  ChevronDown,
  Server,
  Globe,
  ShoppingCart,
  Smartphone,
  Cloud,
  Database,
  Mail,
  Search,
  ArrowRight,
  BookOpen,
  Video,
  MessageCircle,
  HelpCircle,
  FileText,
  Users,
  Briefcase
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesDropdown = {
    sections: [
      {
        title: 'HOSTING',
        items: [
          {
            icon: <Globe className="h-5 w-5" />,
            title: 'Managed hosting for WordPress',
            description: 'Optimized hosting for the world\'s most popular CMS',
            badge: 'AI-POWERED',
            badgeColor: 'bg-purple-100 text-purple-600',
            link: '/wordpress-hosting'
          },
          {
            icon: <ShoppingCart className="h-5 w-5" />,
            title: 'Managed hosting for WooCommerce',
            description: 'Build and grow an ecommerce website',
            link: '/woocommerce-hosting'
          },
          {
            icon: <Server className="h-5 w-5" />,
            title: 'Web hosting',
            description: 'Secure, speedy, reliable, hosting for your website',
            link: '/web-hosting'
          },
          {
            icon: <Cloud className="h-5 w-5" />,
            title: 'Cloud hosting',
            description: 'Scalable cloud infrastructure for growing businesses',
            link: '/cloud-hosting'
          },
          {
            icon: <Briefcase className="h-5 w-5" />,
            title: 'Agency hosting',
            description: 'Professional hosting solutions for agencies',
            link: '/agency-hosting'
          }
        ]
      },
      {
        title: 'WEBSITES',
        items: [
          {
            icon: <Globe className="h-5 w-5" />,
            title: 'Website Builder',
            description: 'Create a site or an online store in 3 easy steps',
            badge: 'AI-POWERED',
            badgeColor: 'bg-purple-100 text-purple-600',
            link: '/website-builder'
          },
          {
            icon: <ShoppingCart className="h-5 w-5" />,
            title: 'Ecommerce Website Builder',
            description: 'Get straight to business with an online store',
            badge: 'AI-POWERED',
            badgeColor: 'bg-purple-100 text-purple-600',
            link: '/ecommerce-builder'
          },
          {
            icon: <Smartphone className="h-5 w-5" />,
            title: 'Horizons',
            description: 'Build a custom no-code website or web app in minutes',
            badge: 'AI-POWERED',
            badgeColor: 'bg-purple-100 text-purple-600',
            link: '/about'
          }
        ]
      },
      {
        title: 'DOMAINS',
        items: [
          {
            icon: <Search className="h-5 w-5" />,
            title: 'Domain name search',
            description: 'Find and register your website address',
            badge: 'AI-POWERED',
            badgeColor: 'bg-purple-100 text-purple-600',
            link: '/domain-search'
          },
          {
            icon: <ArrowRight className="h-5 w-5" />,
            title: 'Domain transfer',
            description: 'Already have a domain? Transfer it to Kirods.',
            link: '/domain-transfer'
          }
        ]
      },
      {
        title: 'EMAIL',
        items: [
          {
            icon: <Mail className="h-5 w-5" />,
            title: 'Kirods Reach',
            description: 'Create and send email campaigns with AI',
            badge: 'NEW',
            badgeColor: 'bg-green-100 text-green-600',
            link: '/kirods-reach'
          },
          {
            icon: <Mail className="h-5 w-5" />,
            title: 'Business email',
            description: 'Build your brand with professional email addresses',
            link: '/business-email'
          }
        ]
      }
    ],
    bottomSection: {
      title: 'Migrate a website',
      description: 'Migrate a site from elsewhere, fast and free',
      icon: <ArrowRight className="h-5 w-5" />,
      link: '/wordpress-hosting'
    }
  };

  const exploreDropdown = {
    items: [
      {
        icon: <BookOpen className="h-5 w-5" />,
        title: 'Blog',
        description: 'Our latest news and updates',
        link: '#'
      },
      {
        icon: <FileText className="h-5 w-5" />,
        title: 'Features and tools',
        description: 'Latest product releases and features',
        link: '/products'
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: 'Our story',
        description: 'How we got here and where we\'re going',
        link: '/about'
      }
    ],
    featured: {
      title: 'Client stories',
      description: 'Our clients\' successes are our favorite stories',
      link: '#'
    }
  };

  const supportDropdown = {
    items: [
      {
        icon: <HelpCircle className="h-5 w-5" />,
        title: 'Knowledge Base',
        description: 'Advice and answers to all of your FAQs',
        link: '#'
      },
      {
        icon: <Video className="h-5 w-5" />,
        title: 'Tutorials',
        description: 'Videos and articles to help you achieve your online success story',
        link: '#'
      },
      {
        icon: <MessageCircle className="h-5 w-5" />,
        title: 'Contact',
        description: 'How to reach us',
        link: '/contact'
      }
    ],
    featured: {
      title: 'How to make a website',
      description: 'A step-by-step guide to building and launching a website',
      link: '#'
    }
  };

  const navItems = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Services', path: '/products', hasDropdown: true, dropdown: 'services' },
    { name: 'Explore', path: '#', hasDropdown: true, dropdown: 'explore' },
    { name: 'Support', path: '#', hasDropdown: true, dropdown: 'support' },
    { name: 'Horizons', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-main-green rounded-lg group-hover:bg-secondary-green transition-all duration-300 ease-in-out">
              <Zap className="h-6 w-6 text-white group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            </div>
            <span className="text-xl font-bold text-text-dark group-hover:text-main-green transition-colors duration-300 ease-in-out">
              Kirods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative dropdown-container"
              >
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownClick(item.dropdown)}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out relative group ${
                      location.pathname === item.path
                        ? 'text-main-green bg-background-green'
                        : 'text-text-dark hover:text-main-green hover:bg-background-green'
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                    <ChevronDown className={`ml-1 h-4 w-4 transition-all duration-300 ease-in-out ${
                      activeDropdown === item.dropdown ? 'rotate-180 text-main-green' : 'group-hover:text-main-green'
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out relative group ${
                      location.pathname === item.path
                        ? 'text-main-green bg-background-green'
                        : 'text-text-dark hover:text-main-green hover:bg-background-green'
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.dropdown === 'services' && activeDropdown === 'services' && (
                  <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50"
                       style={{ 
                         width: '900px',
                         maxWidth: '90vw',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         opacity: 1,
                         visibility: 'visible'
                       }}>
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesDropdown.sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                              {section.title}
                            </h3>
                            <div className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <Link key={itemIndex} to={item.link} className="cursor-pointer block">
                                  <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-background-green transition-colors duration-300">
                                    <div className="text-main-green mt-1 flex-shrink-0">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between mb-1">
                                        <h4 className="font-medium text-text-dark text-sm leading-tight">
                                          {item.title}
                                        </h4>
                                        {item.badge && (
                                          <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ml-2 ${item.badgeColor}`}>
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-600 leading-tight">{item.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link to={servicesDropdown.bottomSection.link} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl cursor-pointer hover:bg-purple-100 transition-colors duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="text-purple-600">
                              {servicesDropdown.bottomSection.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-text-dark">
                                {servicesDropdown.bottomSection.title}
                              </h4>
                              <p className="text-sm text-gray-600">{servicesDropdown.bottomSection.description}</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-purple-600" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Explore Dropdown */}
                {item.dropdown === 'explore' && activeDropdown === 'explore' && (
                  <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50"
                       style={{ 
                         width: '400px',
                         maxWidth: '90vw',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         opacity: 1,
                         visibility: 'visible'
                       }}>
                    <div className="p-6">
                      <div className="space-y-2 mb-6">
                        {exploreDropdown.items.map((item, index) => (
                          <Link key={index} to={item.link} className="cursor-pointer block">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background-green transition-colors duration-300">
                              <div className="text-main-green mt-1">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-medium text-text-dark mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-100 pt-6">
                        <Link to={exploreDropdown.featured.link} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors duration-300">
                          <div>
                            <h4 className="font-medium text-text-dark mb-1">
                              {exploreDropdown.featured.title}
                            </h4>
                            <p className="text-sm text-gray-600">{exploreDropdown.featured.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 ml-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Support Dropdown */}
                {item.dropdown === 'support' && activeDropdown === 'support' && (
                  <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50"
                       style={{ 
                         width: '400px',
                         maxWidth: '90vw',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         opacity: 1,
                         visibility: 'visible'
                       }}>
                    <div className="p-6">
                      <div className="space-y-2 mb-6">
                        {supportDropdown.items.map((item, index) => (
                          <Link key={index} to={item.link} className="cursor-pointer block">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background-green transition-colors duration-300">
                              <div className="text-main-green mt-1">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-medium text-text-dark mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-100 pt-6">
                        <Link to={supportDropdown.featured.link} className="flex items-center justify-between p-4 bg-green-50 rounded-xl cursor-pointer hover:bg-green-100 transition-colors duration-300">
                          <div>
                            <h4 className="font-medium text-text-dark mb-1">
                              {supportDropdown.featured.title}
                            </h4>
                            <p className="text-sm text-gray-600">{supportDropdown.featured.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 ml-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-main-green transition-colors duration-300 ease-in-out cursor-pointer group">
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-3 group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              <span>English</span>
              <ChevronDown className="h-3 w-3 transition-transform duration-300 ease-in-out" />
            </div>
            <button className="px-4 py-2 text-sm font-medium text-text-dark border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-main-green hover:text-main-green transition-all duration-300 ease-in-out relative group">
              <span className="relative">
                Log in
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-dark hover:bg-background-green hover:text-main-green transition-all duration-300 ease-in-out"
            >
              <div className="transition-transform duration-300 ease-in-out">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-lg shadow-lg">
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out animate-slide-in-left ${
                    location.pathname === item.path
                      ? 'text-main-green bg-background-green'
                      : 'text-text-dark hover:text-main-green hover:bg-background-green'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                </Link>
              ))}
              
              {/* WordPress Hosting Link for Mobile */}
              <Link
                to="/wordpress-hosting"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/wordpress-hosting'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  WordPress Hosting
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* WooCommerce Hosting Link for Mobile */}
              <Link
                to="/woocommerce-hosting"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/woocommerce-hosting'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  WooCommerce Hosting
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Web Hosting Link for Mobile */}
              <Link
                to="/web-hosting"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/web-hosting'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Web Hosting
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Cloud Hosting Link for Mobile */}
              <Link
                to="/cloud-hosting"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/cloud-hosting'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Cloud Hosting
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Agency Hosting Link for Mobile */}
              <Link
                to="/agency-hosting"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/agency-hosting'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Agency Hosting
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Website Builder Link for Mobile */}
              <Link
                to="/website-builder"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/website-builder'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Website Builder
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Ecommerce Builder Link for Mobile */}
              <Link
                to="/ecommerce-builder"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/ecommerce-builder'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Ecommerce Builder
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Domain Search Link for Mobile */}
              <Link
                to="/domain-search"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/domain-search'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Domain Search
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Domain Transfer Link for Mobile */}
              <Link
                to="/domain-transfer"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/domain-transfer'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Domain Transfer
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Kirods Reach Link for Mobile */}
              <Link
                to="/kirods-reach"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/kirods-reach'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Kirods Reach
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>

              {/* Business Email Link for Mobile */}
              <Link
                to="/business-email"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === '/business-email'
                    ? 'text-main-green bg-background-green'
                    : 'text-text-dark hover:text-main-green hover:bg-background-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  Business Email
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-main-green transition-colors duration-300 ease-in-out cursor-pointer group px-4 py-2">
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-3 group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                  <span>English</span>
                </div>
                <button className="w-full px-4 py-3 text-sm font-medium text-text-dark border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-main-green hover:text-main-green transition-all duration-300 ease-in-out mt-2 relative group">
                  <span className="relative">
                    Log in
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-main-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;