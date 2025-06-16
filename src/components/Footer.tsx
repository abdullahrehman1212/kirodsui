import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Facebook, Instagram, Linkedin, ChevronDown, ChevronUp, Youtube } from 'lucide-react';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    hosting: false,
    domain: false,
    tools: false,
    information: false,
    company: false,
    support: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = [
    {
      id: 'hosting',
      title: 'HOSTING',
      links: [
        { name: 'Web hosting', path: '/web-hosting' },
        { name: 'WordPress hosting', path: '/wordpress-hosting' },
        { name: 'Managed hosting for WordPress', path: '/wordpress-hosting' },
        { name: 'VPS hosting', path: '/products' },
        { name: 'Business email', path: '/business-email' },
        { name: 'Cloud hosting', path: '/cloud-hosting' },
        { name: 'WooCommerce hosting', path: '/woocommerce-hosting' },
        { name: 'Managed hosting for WooCommerce', path: '/woocommerce-hosting' },
        { name: 'Hosting for agencies', path: '/agency-hosting' },
        { name: 'Minecraft hosting', path: '/products' },
        { name: 'Google Workspace', path: '/products' }
      ]
    },
    {
      id: 'domain',
      title: 'DOMAIN',
      links: [
        { name: 'Domain name search', path: '/domain-search' },
        { name: 'Cheap domain names', path: '/domain-search' },
        { name: 'Free domain', path: '/domain-search' },
        { name: 'WHOIS Lookup', path: '/domain-search' },
        { name: 'Free SSL certificate', path: '/wordpress-hosting' },
        { name: 'Domain transfer', path: '/domain-transfer' },
        { name: 'Domain extensions', path: '/domain-search' }
      ]
    },
    {
      id: 'tools',
      title: 'TOOLS',
      links: [
        { name: 'Horizons AI Web App Builder', path: '/about' },
        { name: 'Website Builder', path: '/website-builder' },
        { name: 'AI Website Builder', path: '/website-builder' },
        { name: 'Ecommerce Website Builder', path: '/ecommerce-builder' },
        { name: 'AI Logo Generator', path: '/products' },
        { name: 'Migrate to Kirods', path: '/wordpress-hosting' },
        { name: 'Kirods API', path: '/products' }
      ]
    },
    {
      id: 'information',
      title: 'INFORMATION',
      links: [
        { name: 'Pricing', path: '/pricing' },
        { name: 'Reviews', path: '#' },
        { name: 'Affiliate program', path: '#' },
        { name: 'Roadmap', path: '#' },
        { name: 'Wall of fame', path: '#' },
        { name: 'System status', path: '#' },
        { name: 'Sitemap', path: '#' }
      ]
    },
    {
      id: 'company',
      title: 'COMPANY',
      links: [
        { name: 'About Kirods', path: '/about' },
        { name: 'Our technology', path: '/about' },
        { name: 'Blog', path: '#' }
      ]
    },
    {
      id: 'support',
      title: 'SUPPORT',
      links: [
        { name: 'Tutorials', path: '#' },
        { name: 'Knowledge Base', path: '#' },
        { name: 'Contact us', path: '/contact' },
        { name: 'Report abuse', path: '/contact' },
        { name: 'WordPress Support', path: '/wordpress-hosting' },
        { name: 'WooCommerce Support', path: '/woocommerce-hosting' }
      ]
    }
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.id}>
              <h3 className="text-sm font-bold text-main-green mb-6 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-main-green transition-colors duration-300 text-sm leading-relaxed hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Collapsible */}
        <div className="md:hidden mb-8">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50 transition-colors duration-300 px-2 rounded-lg"
              >
                <h3 className="text-sm font-bold text-main-green tracking-wider">
                  {section.title}
                </h3>
                <div className="transform transition-transform duration-300">
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSections[section.id] ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-3 px-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-gray-600 hover:text-main-green transition-colors duration-300 text-sm block py-1 leading-relaxed"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info & Social Links */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Logo & Description */}
            <div className="flex-1 max-w-md">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-main-green rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">Kirods</span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Premium solutions and services for businesses of all sizes. 
                Get your business online and growing with our cutting-edge technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 hover:scale-110 transform">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 hover:scale-110 transform">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 hover:scale-110 transform">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {/* Visa */}
                <div className="w-16 h-10 bg-blue-600 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-bold tracking-wider">VISA</span>
                </div>
                
                {/* MasterCard */}
                <div className="w-16 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-bold">MC</span>
                </div>
                
                {/* EasyPaisa */}
                <div className="w-16 h-10 bg-green-600 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">EP</span>
                </div>
                
                {/* JazzCash */}
                <div className="w-16 h-10 bg-purple-600 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">JC</span>
                </div>
              </div>
              <span className="text-gray-500 text-sm">and more</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 text-sm">
                  Privacy policy
                </a>
                <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 text-sm">
                  Refund policy
                </a>
                <a href="#" className="text-gray-500 hover:text-main-green transition-colors duration-300 text-sm">
                  Terms of service
                </a>
              </div>
              <p className="text-gray-500 text-sm">Prices are listed without VAT</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex-1">
              <p className="text-gray-500 text-sm">
                © 2004-2025 Kirods - Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.
              </p>
            </div>
            
            <div className="flex items-center">
              <button className="bg-main-green hover:bg-secondary-green text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-2">
                <span>⚡</span>
                <span>Ask Kodee</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;