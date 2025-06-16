import React, { useEffect, useState } from 'react';
import { Shield, Zap, Headphones, Globe, Server, Lock } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Features = () => {
  const { siteContent } = useAdmin();
  const [content, setContent] = useState({
    title: 'Why Choose Kirods?',
    subtitle: 'Experience the difference with our premium platform designed for performance and reliability.',
    features: [
      {
        icon: <Zap className="h-8 w-8" />,
        title: 'Lightning Fast',
        description: 'Optimized performance and cutting-edge technology for maximum efficiency.',
        color: 'bg-secondary-green'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Secure & Reliable',
        description: 'Enterprise-grade security with comprehensive protection and monitoring.',
        color: 'bg-main-green'
      },
      {
        icon: <Headphones className="h-8 w-8" />,
        title: '24/7 Support',
        description: 'Expert support team available round the clock to help you succeed.',
        color: 'bg-accent-green'
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Global Reach',
        description: 'Worldwide presence with local expertise for optimal service delivery.',
        color: 'bg-secondary-green'
      },
      {
        icon: <Server className="h-8 w-8" />,
        title: 'Scalable Solutions',
        description: 'Grow from startup to enterprise with our flexible and adaptable platform.',
        color: 'bg-main-green'
      },
      {
        icon: <Lock className="h-8 w-8" />,
        title: 'Advanced Security',
        description: 'Multi-layered protection with advanced threat detection and prevention.',
        color: 'bg-accent-green'
      }
    ]
  });

  useEffect(() => {
    // Load content from database if available
    const featuresContent = siteContent.find(
      item => item.page === 'home' && item.section === 'features'
    );
    
    if (featuresContent) {
      setContent(featuresContent.content);
    }
  }, [siteContent]);

  // Function to render the correct icon based on the icon name
  const renderIcon = (iconName) => {
    const iconSize = "h-8 w-8";
    switch(iconName) {
      case 'Zap': return <Zap className={iconSize} />;
      case 'Shield': return <Shield className={iconSize} />;
      case 'Headphones': return <Headphones className={iconSize} />;
      case 'Globe': return <Globe className={iconSize} />;
      case 'Server': return <Server className={iconSize} />;
      case 'Lock': return <Lock className={iconSize} />;
      default: return <Zap className={iconSize} />;
    }
  };

  return (
    <section className="py-16 bg-background-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(content.features || []).map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`${feature.color} p-3 rounded-lg inline-block text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {typeof feature.icon === 'string' ? renderIcon(feature.icon) : feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;