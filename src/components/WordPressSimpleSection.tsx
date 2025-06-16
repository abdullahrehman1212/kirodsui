import React from 'react';
import { CheckCircle, Palette, Layout, Wrench } from 'lucide-react';

const WordPressSimpleSection = () => {
  const features = [
    {
      text: "Free 1-click WordPress installation.",
      included: true
    },
    {
      text: "Tailor the site to your liking with our recommended themes and plugins.",
      included: true
    },
    {
      text: "Use the Kirods WordPress plugin to assist your website-building process.",
      included: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - WordPress Builder Mockup */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-background-green rounded-2xl opacity-60 transform rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent-green/30 rounded-2xl transform -rotate-12"></div>
            
            {/* Main Builder Interface */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                  mywordpresssite.com
                </div>
              </div>

              {/* Website Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">+</span>
                      </div>
                      <nav className="flex space-x-4 text-sm">
                        <span>Portfolio</span>
                        <span>About Us</span>
                        <span>Contact</span>
                      </nav>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">
                      Unveiling<br />
                      Minimalist Designs
                    </h1>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium">
                      Explore now
                    </button>
                  </div>
                </div>

                {/* Design Elements Sidebar */}
                <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="space-y-4">
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                    <div className="w-12 h-8 bg-gray-400 rounded"></div>
                    <div className="w-12 h-8 bg-gray-500 rounded"></div>
                  </div>
                </div>

                {/* Color Palette Popup */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Color palette selection</h4>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-blue-600 rounded border-2 border-blue-700"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-pink-600 rounded"></div>
                      <div className="w-6 h-6 bg-pink-500 rounded"></div>
                      <div className="w-6 h-6 bg-pink-300 rounded"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                      <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                      <div className="w-6 h-6 bg-yellow-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Template Selection */}
                <div className="bg-gray-50 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-3"></div>
                      <h5 className="font-semibold text-gray-800 text-sm">Geometric Minimalist</h5>
                      <p className="text-xs text-gray-600">Embracing clean forms and clean spaces for modern simplicity</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="w-full h-24 bg-gray-200 rounded mb-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                WordPress made simple
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether it's an eCommerce site or a blog, get your dream WordPress website ready in no time.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default WordPressSimpleSection;