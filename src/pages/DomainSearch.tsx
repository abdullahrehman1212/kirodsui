import React, { useState } from 'react';
import { 
  CheckCircle, 
  X, 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  Globe,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Search,
  Lock,
  Smartphone,
  Monitor,
  Settings,
  Play,
  HelpCircle,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

const DomainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const domainExtensions = [
    { extension: '.com', price: 899, originalPrice: 1299, popular: true },
    { extension: '.net', price: 1099, originalPrice: 1599, popular: false },
    { extension: '.org', price: 1199, originalPrice: 1699, popular: false },
    { extension: '.info', price: 599, originalPrice: 999, popular: false },
    { extension: '.biz', price: 799, originalPrice: 1199, popular: false },
    { extension: '.co', price: 2499, originalPrice: 3499, popular: true },
    { extension: '.io', price: 3999, originalPrice: 5499, popular: true },
    { extension: '.tech', price: 2999, originalPrice: 4499, popular: false }
  ];

  const trustLogos = [
    { name: 'Trustpilot', rating: '4.7', reviews: '46,826', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const domainFeatures = [
    {
      text: "Search from over 400 domain extensions to find the perfect match for your brand.",
      included: true
    },
    {
      text: "Free WHOIS privacy protection keeps your personal information secure.",
      included: true
    },
    {
      text: "Easy domain management with DNS controls and forwarding options.",
      included: true
    },
    {
      text: "24/7 expert support to help you with domain setup and configuration.",
      included: true
    }
  ];

  const securityFeatures = [
    {
      text: "Domain lock protection prevents unauthorized transfers.",
      included: true
    },
    {
      text: "Two-factor authentication secures your domain account.",
      included: true
    },
    {
      text: "SSL certificates available for enhanced website security.",
      included: true
    },
    {
      text: "Regular security monitoring and threat detection.",
      included: true
    }
  ];

  const managementFeatures = [
    {
      text: "Intuitive control panel for easy domain management.",
      included: true
    },
    {
      text: "Bulk domain operations for managing multiple domains.",
      included: true
    },
    {
      text: "Auto-renewal options to prevent domain expiration.",
      included: true
    },
    {
      text: "Domain forwarding and subdomain management.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "Finding the perfect domain was so easy! The search tool showed me great alternatives when my first choice wasn't available.",
      stars: 5
    },
    {
      text: "The domain management interface is intuitive and the free privacy protection is a great bonus. Highly recommend!",
      stars: 5
    },
    {
      text: "Great prices and excellent customer support. They helped me transfer my domain seamlessly from another provider.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "How do I search for available domains?",
      answer: "Simply enter your desired domain name in our search tool above. We'll instantly check availability across hundreds of extensions and suggest alternatives if your first choice isn't available. You can also browse by category or use our domain generator for creative suggestions."
    },
    {
      question: "What's included with domain registration?",
      answer: "Every domain registration includes free WHOIS privacy protection, DNS management, email forwarding, domain forwarding, and 24/7 customer support. You also get access to our easy-to-use control panel for managing all your domain settings."
    },
    {
      question: "How long does domain registration take?",
      answer: "Domain registration is instant for most extensions. Once you complete your purchase, your domain will be active within minutes. Some country-specific domains may require additional verification and can take 24-48 hours to become fully active."
    },
    {
      question: "Can I transfer my existing domain?",
      answer: "Yes! We offer free domain transfers for most extensions. The process typically takes 5-7 days and includes extending your domain registration by one year. We'll guide you through the entire transfer process and handle all the technical details."
    },
    {
      question: "What is WHOIS privacy protection?",
      answer: "WHOIS privacy protection hides your personal contact information from public domain databases, protecting you from spam, identity theft, and unwanted solicitations. This service is included free with all domain registrations."
    },
    {
      question: "How do I renew my domain?",
      answer: "You can renew your domain through your account dashboard at any time. We also offer auto-renewal services to ensure your domain never expires accidentally. We'll send you renewal reminders well before your domain expires."
    },
    {
      question: "What happens if my domain expires?",
      answer: "If your domain expires, it enters a grace period where you can still renew it at the regular price. After that, it goes into a redemption period with higher fees. Eventually, expired domains are released back to the public for registration."
    },
    {
      question: "Can I use my domain with any hosting provider?",
      answer: "Yes! Domains registered with us can be used with any hosting provider. You can easily update your domain's DNS settings to point to your chosen hosting service. We also offer seamless integration with our hosting services."
    }
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search results
    setTimeout(() => {
      const results = domainExtensions.map(ext => ({
        domain: searchTerm + ext.extension,
        available: Math.random() > 0.3, // 70% chance of being available
        price: ext.price,
        originalPrice: ext.originalPrice,
        popular: ext.popular
      }));
      
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
  };

  const renderStars = (count) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(count)].map((_, index) => (
          <Star key={index} className="h-4 w-4 text-main-green fill-current" />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-main-green/10 text-main-green px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="h-4 w-4 mr-2" />
                Domain Name Search
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Find your perfect domain name
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Search 400+ domain extensions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free WHOIS privacy protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Easy domain management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">24/7 expert support</span>
                </div>
              </div>

              {/* Domain Search */}
              <div className="bg-background-green p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search for your domain</h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter your domain name"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="bg-main-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300 disabled:opacity-50 flex items-center"
                  >
                    {isSearching ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-2" />
                Free privacy protection • Instant activation
              </div>
            </div>

            {/* Right Side - Domain Search Results Mockup */}
            <div className="relative">
              {/* Popular Extensions Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Most Popular</div>
                  <div className="text-lg font-bold text-main-green">.com</div>
                  <div className="text-xs text-gray-500">Rs. 899/year</div>
                </div>
              </div>

              {/* Main Search Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Search Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Search className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">Domain Search Results</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {searchResults.length > 0 ? `${searchResults.length} results` : 'Ready to search'}
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="p-6">
                  {searchResults.length === 0 ? (
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Enter a domain name to see availability</p>
                      </div>
                      
                      {/* Popular Extensions Preview */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Popular Extensions</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {domainExtensions.slice(0, 4).map((ext, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-3 text-center">
                              <div className="font-bold text-gray-800">{ext.extension}</div>
                              <div className="text-main-green font-semibold">Rs. {ext.price}/yr</div>
                              {ext.originalPrice > ext.price && (
                                <div className="text-xs text-gray-500 line-through">Rs. {ext.originalPrice}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {searchResults.slice(0, 6).map((result, index) => (
                        <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${
                          result.available ? 'border-main-green bg-main-green/5' : 'border-gray-200 bg-gray-50'
                        }`}>
                          <div className="flex items-center space-x-3">
                            {result.available ? (
                              <CheckCircle className="h-5 w-5 text-main-green" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400" />
                            )}
                            <div>
                              <div className="font-medium text-gray-800">{result.domain}</div>
                              {result.popular && (
                                <div className="text-xs text-main-green font-medium">Popular choice</div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            {result.available ? (
                              <>
                                <div className="font-bold text-main-green">Rs. {result.price}/yr</div>
                                {result.originalPrice > result.price && (
                                  <div className="text-xs text-gray-500 line-through">Rs. {result.originalPrice}</div>
                                )}
                              </>
                            ) : (
                              <div className="text-gray-500 text-sm">Taken</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background-green border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="font-bold text-lg text-gray-800">{logo.name}</div>
                  <div className="flex justify-center mb-2">
                    {renderStars(logo.stars)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Rating: {logo.rating}/5 {logo.reviews} reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Extensions Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Popular domain extensions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose from hundreds of domain extensions at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainExtensions.map((ext, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  ext.popular ? 'ring-2 ring-main-green' : ''
                }`}
              >
                {ext.popular && (
                  <div className="bg-main-green text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                    Popular
                  </div>
                )}
                
                <div className="text-3xl font-bold text-gray-800 mb-2">{ext.extension}</div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-main-green">Rs. {ext.price}</div>
                  <div className="text-sm text-gray-600">/year</div>
                  {ext.originalPrice > ext.price && (
                    <div className="text-sm text-gray-500 line-through mt-1">Rs. {ext.originalPrice}</div>
                  )}
                </div>

                <button className="w-full bg-main-green text-white py-2 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Domain Management Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Domain Management Interface */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Domain Management</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-800">mybusiness.com</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-main-green rounded-full"></div>
                          <span className="text-sm text-gray-600">Active</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">Expires: Dec 15, 2025</div>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">DNS</button>
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">Privacy</button>
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">Renew</button>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-800">mystore.co</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-main-green rounded-full"></div>
                          <span className="text-sm text-gray-600">Active</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">Expires: Mar 22, 2025</div>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">DNS</button>
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">Privacy</button>
                        <button className="text-xs bg-background-green text-gray-700 py-1 px-2 rounded">Renew</button>
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
                  Everything you need for domain success
                </h2>
                
                <div className="space-y-6">
                  {domainFeatures.map((feature, index) => (
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

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Advanced domain security
                </h2>
                
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
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

            {/* Right Side - Security Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Security Status */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-main-green" />
                    <h3 className="font-bold text-gray-800">Security Status</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Domain Lock</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Enabled</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">WHOIS Privacy</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Protected</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">2FA</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Recent Activity</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">DNS updated</span>
                      <span className="text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Domain renewed</span>
                      <span className="text-gray-500">3 days ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Privacy enabled</span>
                      <span className="text-gray-500">1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - DNS Management Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* DNS Management */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">DNS Management</h3>
                  <div className="space-y-3">
                    <div className="bg-background-green p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">A Record</div>
                          <div className="text-sm text-gray-600">@ → 192.168.1.1</div>
                        </div>
                        <Settings className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="bg-background-green p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">CNAME</div>
                          <div className="text-sm text-gray-600">www → @</div>
                        </div>
                        <Settings className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="bg-background-green p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">MX Record</div>
                          <div className="text-sm text-gray-600">mail.example.com</div>
                        </div>
                        <Settings className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-main-green text-white py-2 rounded-lg font-medium">
                    Add Record
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Easy domain management
                </h2>
                
                <div className="space-y-6">
                  {managementFeatures.map((feature, index) => (
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

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              What our customers say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join millions of satisfied customers who trust us with their domain needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-green p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-main-green rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="font-bold text-lg text-gray-800">Trustpilot</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background-green rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-main-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Domain Registration FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about domain registration and management.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-main-green transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-text-dark pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-main-green" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-main-green to-secondary-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to register your domain?</h3>
              <p className="text-green-100 mb-6">
                Find the perfect domain name for your business and get started today.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Search Domains Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomainSearch;