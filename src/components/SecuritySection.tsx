import React from 'react';
import { Shield, Lock, Cloud, CheckCircle, FileText, Server } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      text: "Secure your files with regular automatic backups and two-factor authentication"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      text: "Encrypt your website traffic with unlimited SSL security certificates"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      text: "Enjoy full protection from DDoS attacks with Cloudflare protected nameservers"
    }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Interactive Security Mockup */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-3"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
            
            {/* Main Content Area */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Central Figure */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                    alt="Security Professional"
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-2xl"
                  />
                  
                  {/* Laptop Overlay */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-2 shadow-xl">
                    <div className="w-24 h-16 bg-gray-900 rounded border border-gray-700 flex items-center justify-center">
                      <div className="w-20 h-12 bg-gradient-to-br from-main-green to-secondary-green rounded flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security UI Elements */}
              <div className="space-y-4">
                {/* SSL Certificate Card */}
                <div className="bg-white rounded-xl p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Lock className="h-6 w-6 text-main-green" />
                      <div>
                        <div className="font-semibold text-gray-800">SSL certificate</div>
                        <div className="text-sm text-gray-600">Security enabled</div>
                      </div>
                    </div>
                    <span className="bg-main-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Daily Backups Card */}
                <div className="bg-white rounded-xl p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary-green p-2 rounded-lg">
                      <Cloud className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 mb-1">DAILY BACKUPS</div>
                      <div className="font-semibold text-gray-800">Files backups</div>
                      <div className="text-sm text-gray-600">Download or restore website file backups</div>
                    </div>
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                </div>

                {/* Server Protection Card */}
                <div className="bg-white rounded-xl p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent-green p-2 rounded-lg">
                      <Server className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">DDoS Protection</div>
                      <div className="text-sm text-gray-600">Cloudflare security layer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-8 w-px h-24 bg-white/30"></div>
              <div className="absolute top-1/2 right-8 w-px h-24 bg-white/30"></div>
              <div className="absolute top-8 left-1/2 w-24 h-px bg-white/30"></div>
              <div className="absolute bottom-8 left-1/2 w-24 h-px bg-white/30"></div>
            </div>

            {/* Floating Security Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">256-bit</div>
                  <div className="text-xs text-gray-600">Encryption</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Total security. Complete confidence.
              </h2>
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={scrollToPricing}
                className="bg-white text-main-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;