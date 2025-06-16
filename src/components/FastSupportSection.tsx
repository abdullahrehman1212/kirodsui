import React from 'react';
import { CheckCircle, MessageCircle, Clock, Globe, Users, Star } from 'lucide-react';

const FastSupportSection = () => {
  const supportFeatures = [
    {
      text: "Receive professional guidance from our in-house WordPress experts.",
      included: true
    },
    {
      text: "Nobody likes waiting – our average response time is under 3 minutes.",
      included: true
    },
    {
      text: "Our agents live across the globe and speak over 10 languages.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "They are the best when it comes to ease of use and definitely the best immediate support you receive compared to others.",
      stars: 5
    },
    {
      text: "Kirods has been the best web hosting provider I've used. What sets it apart is its exceptional customer support.",
      stars: 5
    },
    {
      text: "Kirods's hosting and website management software are excellent. These are only surpassed by the quality of their support.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-background-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                Fast-responding customer support
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Contact our Customer Success team and get instant support.
              </p>
              
              <div className="space-y-6">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Support Chat Mockup */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
            
            {/* Chat Status */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-main-green text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Active
            </div>

            {/* Chat Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mt-8">
              {/* Chat Messages */}
              <div className="p-6 space-y-6 bg-gradient-to-br from-background-green/30 to-white min-h-[400px]">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-xs">
                    <div className="bg-main-green text-white px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                      <p className="text-sm">Hello, I would like to migrate my website to Kirods</p>
                    </div>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                      alt="Customer"
                      className="w-10 h-10 rounded-full object-cover border-2 border-accent-green"
                    />
                  </div>
                </div>

                {/* Support Response */}
                <div className="flex justify-start">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                      alt="Support Agent"
                      className="w-10 h-10 rounded-full object-cover border-2 border-secondary-green"
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
                      className="w-10 h-10 rounded-full object-cover border-2 border-secondary-green"
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
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Response Time</div>
                  <div className="text-xs text-gray-600">Under 3 minutes</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Languages</div>
                  <div className="text-xs text-gray-600">10+ Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-main-green" />
                <span className="font-bold text-lg text-gray-800 ml-2">Trustpilot</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.stars)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 text-main-green fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastSupportSection;