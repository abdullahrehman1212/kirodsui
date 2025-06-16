import React from 'react';
import { MessageCircle, Clock, Globe, CheckCircle, X } from 'lucide-react';

const SupportSection = () => {
  const supportFeatures = [
    {
      icon: <CheckCircle className="h-5 w-5 text-main-green" />,
      text: "Access expert support whenever you need it via live chat and email"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-main-green" />,
      text: "Our specialists are fluent in 8+ languages so you can be sure communication will be smooth"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-main-green" />,
      text: "Spend less time waiting, our speedy support team typically responds in under 2 minutes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                Here to help 24/7
              </h2>
              <div className="space-y-6">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-all duration-300 hover:scale-105 flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </button>
              <button className="border-2 border-main-green text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-background-green transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Side - Chat Interface Mockup */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
            
            {/* Chat Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-main-green to-secondary-green px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Active</span>
                </div>
                <button className="text-white/80 hover:text-white transition-colors duration-300">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-6 bg-gradient-to-br from-background-green/30 to-white min-h-[300px]">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-xs">
                    <div className="bg-main-green text-white px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                      <p className="text-sm">Hello, I would like to migrate my website to Kirods.</p>
                    </div>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                      alt="Customer"
                      className="w-8 h-8 rounded-full object-cover border-2 border-accent-green"
                    />
                  </div>
                </div>

                {/* Support Response */}
                <div className="flex justify-start">
                  <div className="flex items-end space-x-3 max-w-xs">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                      alt="Support Agent"
                      className="w-8 h-8 rounded-full object-cover border-2 border-secondary-green"
                    />
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                      <p className="text-sm leading-relaxed">
                        Hi, I'll be glad to help you out.<br />
                        It's just three simple steps.<br />
                        Let me show you how.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex justify-start">
                  <div className="flex items-end space-x-3">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                      alt="Support Agent"
                      className="w-8 h-8 rounded-full object-cover border-2 border-secondary-green"
                    />
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-main-green rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-secondary-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-main-green focus:border-transparent transition-all duration-300"
                    disabled
                  />
                  <button className="bg-main-green text-white p-2 rounded-full hover:bg-secondary-green transition-colors duration-300">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Avg. Response</div>
                  <div className="text-xs text-gray-600">Under 2 minutes</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Languages</div>
                  <div className="text-xs text-gray-600">8+ Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;