import React from 'react';
import { CheckCircle, Zap, Wand2, Brain, Sparkles } from 'lucide-react';

const WordPressAISection = () => {
  const aiFeatures = [
    {
      text: "Easy to start. Describe your idea and get a fully functional site from a single prompt.",
      included: true
    },
    {
      text: "Save money. No need to hire expensive writers to launch your site.",
      included: true
    },
    {
      text: "Save time. Stop staring at a blank page – get your creative juices flowing with AI.",
      included: true
    },
    {
      text: "Stay online. Our AI troubleshooter detects and fixes most common website errors.",
      included: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Publish content faster with WordPress AI tools
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Create websites effortlessly with our AI technology.
              </p>
              
              <div className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - AI Interface Mockup */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
            
            {/* Main AI Interface */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Headphones Product Card */}
              <div className="bg-yellow-400 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                    alt="Headphones"
                    className="w-32 h-32 object-cover rounded-xl mx-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-50"></div>
              </div>

              {/* AI Chat Interface */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tell us about your site</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm">
                    Create electronic shop website with a simple catalog and user-friendly navigation
                  </p>
                </div>
                <button className="w-full bg-main-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300 flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Create a website
                </button>
              </div>

              {/* AI Progress Indicator */}
              <div className="bg-white rounded-xl p-4 mt-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-main-green animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">Brewing content with magic</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-main-green h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WordPress Logo */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressAISection;