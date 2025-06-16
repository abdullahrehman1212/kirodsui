import React from 'react';
import { Server, Cloud, Globe, Shield, Zap, HardDrive } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Business Solutions',
      description: 'Comprehensive business management platform',
      features: ['Project Management', 'Team Collaboration', 'Analytics Dashboard', '24/7 Support'],
      price: '$79.99/month',
      color: 'bg-main-green'
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions',
      features: ['Auto-scaling', 'Global CDN', 'Real-time Monitoring', 'API Integration'],
      price: '$149.99/month',
      color: 'bg-secondary-green'
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: 'Enterprise Platform',
      description: 'Enterprise-grade solutions for large organizations',
      features: ['Custom Development', 'Dedicated Support', 'Advanced Security', 'SLA Guarantee'],
      price: '$299.99/month',
      color: 'bg-accent-green'
    }
  ];

  const specifications = [
    {
      category: 'Performance',
      items: [
        { name: 'Processing Power', value: 'High-performance computing' },
        { name: 'Memory', value: 'Up to 512GB RAM' },
        { name: 'Storage', value: 'NVMe SSD technology' },
        { name: 'Network', value: '10Gbps connectivity' }
      ]
    },
    {
      category: 'Security',
      items: [
        { name: 'Encryption', value: '256-bit AES encryption' },
        { name: 'Authentication', value: 'Multi-factor authentication' },
        { name: 'Compliance', value: 'SOC 2, ISO 27001' },
        { name: 'Monitoring', value: '24/7 security monitoring' }
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Availability', value: '24/7/365' },
        { name: 'Response Time', value: '< 5 minutes' },
        { name: 'Channels', value: 'Phone, Email, Chat' },
        { name: 'Documentation', value: 'Comprehensive guides' }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-gradient-to-br from-background-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Products & Services
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive business solutions designed to meet your needs, from small startups to enterprise organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${product.color} p-4 rounded-lg inline-block text-white mb-6`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 text-main-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-text-dark mb-4">{product.price}</div>
                  <button className="w-full bg-main-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Detailed technical information about our platform infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-background-green rounded-xl p-8">
                <h3 className="text-xl font-bold text-text-dark mb-6">{spec.category}</h3>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="text-text-dark font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our team can design a custom solution tailored to your specific business requirements.
          </p>
          <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;