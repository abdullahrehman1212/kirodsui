import React from 'react';
import { Star } from 'lucide-react';

const TrustSection = () => {
  const trustIndicators = [
    {
      name: 'WordPress.org',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-gray-700 font-medium">WordPress.org</span>
        </div>
      ),
      description: 'Recommended by',
      featured: true
    },
    {
      name: 'Trustpilot',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
            <Star className="h-5 w-5 text-white fill-current" />
          </div>
          <span className="text-gray-700 font-bold">Trustpilot</span>
        </div>
      ),
      rating: 4.7,
      reviews: '48,816 reviews',
      stars: 5,
      description: 'TrustScore'
    },
    {
      name: 'Google',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-gray-700 font-bold">Google</span>
        </div>
      ),
      rating: 4.8,
      reviews: '1,237 reviews',
      stars: 5,
      description: 'Rating:'
    },
    {
      name: 'HostAdvice',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">HA</span>
          </div>
          <span className="text-gray-700 font-bold">hostadvice</span>
        </div>
      ),
      rating: 4.6,
      reviews: '2,432 reviews',
      stars: 5,
      description: 'Rating:'
    },
    {
      name: 'WPBeginner',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">WP</span>
          </div>
          <span className="text-gray-700 font-bold">wpbeginner</span>
        </div>
      ),
      rating: 4.7,
      reviews: '874 reviews',
      stars: 5,
      description: 'Rating:'
    }
  ];

  const renderStars = (count, rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(count)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < Math.floor(rating) 
                ? 'text-green-500 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured WordPress Recommendation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-600">Recommended by</div>
              <div className="font-bold text-gray-800">WordPress.org</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.slice(1).map((indicator, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                {indicator.logo}
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-2">
                {renderStars(indicator.stars, indicator.rating)}
              </div>

              {/* Rating and Reviews */}
              <div className="space-y-1">
                <div className="text-sm text-gray-600">
                  {indicator.description} <span className="font-semibold text-gray-800">{indicator.rating}/5</span>
                </div>
                <div className="text-xs text-gray-500">{indicator.reviews}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;