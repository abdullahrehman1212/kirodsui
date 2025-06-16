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
  Mail,
  Smartphone,
  Monitor,
  Settings,
  Play,
  HelpCircle,
  TrendingUp,
  Award,
  Users,
  Lock,
  Calendar,
  FileText,
  Briefcase
} from 'lucide-react';

const BusinessEmail = () => {
  const [allPlansExpanded, setAllPlansExpanded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleAllPlansFeatures = () => {
    setAllPlansExpanded(prev => !prev);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams',
      originalPrice: 299,
      currentPrice: 149,
      discount: 'SAVE 50%',
      renewalPrice: 249,
      bonusMonths: '+3 months free',
      features: [
        { name: '1 email account', included: true },
        { name: '10 GB storage per account', included: true },
        { name: 'Custom domain email', included: true },
        { name: 'Webmail access', included: true },
        { name: 'Mobile app support', included: true },
        { name: 'Spam protection', included: true },
        { name: 'Email support', included: true },
        { name: 'Calendar integration', included: false },
        { name: 'Advanced security', included: false },
        { name: 'Priority support', included: false }
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Best for growing businesses',
      originalPrice: 599,
      currentPrice: 299,
      discount: 'SAVE 50%',
      renewalPrice: 499,
      bonusMonths: '+3 months free',
      features: [
        { name: '5 email accounts', included: true },
        { name: '25 GB storage per account', included: true },
        { name: 'Custom domain email', included: true },
        { name: 'Webmail access', included: true },
        { name: 'Mobile app support', included: true },
        { name: 'Advanced spam protection', included: true },
        { name: 'Priority support', included: true },
        { name: 'Calendar integration', included: true, badge: 'NEW' },
        { name: 'Contact management', included: true },
        { name: 'Email aliases', included: true }
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      originalPrice: 1299,
      currentPrice: 699,
      discount: 'SAVE 46%',
      renewalPrice: 1099,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Unlimited email accounts', included: true },
        { name: '100 GB storage per account', included: true },
        { name: 'Custom domain email', included: true },
        { name: 'Webmail access', included: true },
        { name: 'Mobile app support', included: true },
        { name: 'Enterprise spam protection', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Calendar integration', included: true, badge: 'NEW' },
        { name: 'Advanced contact management', included: true },
        { name: 'Unlimited email aliases', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'API access', included: true }
      ],
      popular: false
    }
  ];

  const trustLogos = [
    { name: 'Trustpilot', rating: '4.7', reviews: '46,826', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const emailFeatures = [
    {
      text: "Professional email addresses with your domain name to build trust and credibility.",
      included: true
    },
    {
      text: "Advanced spam protection keeps your inbox clean and secure from threats.",
      included: true
    },
    {
      text: "Access your email anywhere with webmail, mobile apps, and desktop clients.",
      included: true
    },
    {
      text: "Generous storage space ensures you never run out of room for important emails.",
      included: true
    }
  ];

  const securityFeatures = [
    {
      text: "Enterprise-grade encryption protects your emails in transit and at rest.",
      included: true
    },
    {
      text: "Two-factor authentication adds an extra layer of security to your account.",
      included: true
    },
    {
      text: "Advanced threat protection blocks malware, phishing, and suspicious attachments.",
      included: true
    },
    {
      text: "Regular security updates and monitoring ensure your email stays protected.",
      included: true
    }
  ];

  const productivityFeatures = [
    {
      text: "Integrated calendar helps you schedule meetings and manage appointments.",
      included: true
    },
    {
      text: "Contact management keeps all your business contacts organized and accessible.",
      included: true
    },
    {
      text: "Email aliases allow you to create multiple addresses for different purposes.",
      included: true
    },
    {
      text: "Mobile synchronization keeps your email, calendar, and contacts in sync.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "Having professional email addresses has made such a difference for our business credibility. Clients take us more seriously now!",
      stars: 5
    },
    {
      text: "The spam protection is excellent - we rarely get unwanted emails anymore. The mobile app works perfectly too.",
      stars: 5
    },
    {
      text: "Setting up was incredibly easy and the support team was very helpful. Great value for professional email hosting.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "What is business email hosting?",
      answer: "Business email hosting provides professional email addresses using your domain name (like yourname@yourbusiness.com) instead of generic providers. It includes advanced features like increased storage, better security, spam protection, and professional support."
    },
    {
      question: "How is this different from free email services?",
      answer: "Unlike free email services, business email hosting uses your domain name, provides better security, more storage, advanced spam protection, priority support, and professional features like calendar integration and contact management. It also doesn't include ads."
    },
    {
      question: "Can I access my email on mobile devices?",
      answer: "Yes! Our business email works with all popular email clients including Outlook, Apple Mail, Thunderbird, and mobile apps on iOS and Android. You can also access your email through our webmail interface from any browser."
    },
    {
      question: "How much storage do I get?",
      answer: "Storage varies by plan: Starter includes 10GB per account, Professional includes 25GB per account, and Enterprise includes 100GB per account. This is typically much more than you'll need for email storage."
    },
    {
      question: "What spam protection is included?",
      answer: "All plans include advanced spam filtering that blocks unwanted emails, phishing attempts, and malware. Our system learns from patterns and continuously updates to protect against new threats. Enterprise plans include additional advanced threat protection."
    },
    {
      question: "Can I create email aliases?",
      answer: "Yes! Professional and Enterprise plans include email aliases, allowing you to create multiple email addresses that forward to your main inbox. This is useful for departments (sales@, support@) or different purposes."
    },
    {
      question: "Is calendar integration included?",
      answer: "Calendar integration is included with Professional and Enterprise plans. You can schedule meetings, set reminders, and share calendars with team members. It syncs across all your devices."
    },
    {
      question: "What if I need to migrate from another email provider?",
      answer: "We provide free email migration assistance to help you transfer your existing emails, contacts, and calendar data from other providers. Our support team will guide you through the entire process to ensure no data is lost."
    }
  ];

  const renderStars = (count) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(count)].map((_, index) => (
          <Star key={index} className="h-4 w-4 text-main-green fill-current" />
        ))}
      </div>
    );
  };

  const renderFeatureList = (features, isExpanded) => {
    const displayFeatures = isExpanded ? features : features.slice(0, 8);

    return displayFeatures.map((feature, index) => (
      <li key={index} className="flex items-center text-sm py-1">
        {feature.included ? (
          <CheckCircle className="h-4 w-4 text-main-green mr-3 flex-shrink-0" />
        ) : (
          <X className="h-4 w-4 text-gray-300 mr-3 flex-shrink-0" />
        )}
        <span className={`flex-1 ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
          {feature.name}
        </span>
        {feature.badge && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ml-2 ${
            feature.badge === 'FREE' ? 'bg-main-green/10 text-main-green' :
            feature.badge === 'NEW' ? 'bg-blue-100 text-blue-600' :
            'bg-gray-100 text-gray-600'
          }`}>
            {feature.badge}
          </span>
        )}
      </li>
    ));
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
                <Briefcase className="h-4 w-4 mr-2" />
                Professional Business Email
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Professional email for your business
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Custom domain email addresses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Advanced spam protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Mobile & desktop access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Calendar & contact integration</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Starting at Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">149</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Get Started
                  </button>
                  <button className="text-main-green px-8 py-3 rounded-lg font-semibold border border-main-green hover:bg-background-green transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    View Demo
                  </button>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  30-day free trial • Easy migration included
                </div>
              </div>
            </div>

            {/* Right Side - Email Interface Mockup */}
            <div className="relative">
              {/* Email Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Inbox</div>
                  <div className="text-lg font-bold text-main-green">12 new</div>
                  <div className="text-xs text-gray-500">messages</div>
                </div>
              </div>

              {/* Main Email Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Email Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">john@mybusiness.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-gray-600" />
                      <Smartphone className="h-4 w-4 text-main-green" />
                    </div>
                  </div>
                </div>

                {/* Email Content */}
                <div className="p-6">
                  {/* Email List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-main-green/10 rounded-lg">
                      <div className="w-8 h-8 bg-main-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                        S
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Sarah Johnson</div>
                        <div className="text-sm text-gray-600">Project Update - Q4 Results</div>
                      </div>
                      <div className="text-xs text-gray-500">2m ago</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-secondary-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Mike Chen</div>
                        <div className="text-sm text-gray-600">Meeting scheduled for tomorrow</div>
                      </div>
                      <div className="text-xs text-gray-500">1h ago</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                        T
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Team Updates</div>
                        <div className="text-sm text-gray-600">Weekly newsletter</div>
                      </div>
                      <div className="text-xs text-gray-500">3h ago</div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Mail className="h-4 w-4 mr-2 text-main-green" />
                      Compose
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Calendar className="h-4 w-4 mr-2 text-main-green" />
                      Calendar
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Users className="h-4 w-4 mr-2 text-main-green" />
                      Contacts
                    </button>
                  </div>
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Choose your business email plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional email solutions for businesses of all sizes. Start with a free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-main-green scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-main-green text-white text-center py-2 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-dark mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-gray-400 line-through text-sm">Rs.{plan.originalPrice}</span>
                        <span className="bg-main-green/10 text-main-green px-2 py-1 rounded text-xs font-medium">
                          {plan.discount}
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-sm text-gray-600">Rs.</span>
                        <span className="text-3xl font-bold text-text-dark">{plan.currentPrice}</span>
                        <span className="text-gray-600 ml-1">/mo</span>
                      </div>
                      {plan.bonusMonths && (
                        <p className="text-main-green text-sm font-medium mt-1">{plan.bonusMonths}</p>
                      )}
                    </div>

                    {/* Choose Plan Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mb-4 ${
                        plan.popular
                          ? 'bg-main-green text-white hover:bg-secondary-green'
                          : 'border-2 border-main-green text-main-green hover:bg-background-green'
                      }`}
                    >
                      Start Free Trial
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Renews at Rs.{plan.renewalPrice}/mo. Cancel anytime.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <ul className="space-y-1">
                      {renderFeatureList(plan.features, allPlansExpanded)}
                    </ul>

                    {/* See All Features Button */}
                    <button
                      onClick={toggleAllPlansFeatures}
                      className="flex items-center justify-center w-full py-2 text-main-green hover:text-secondary-green transition-colors duration-300 text-sm font-medium"
                    >
                      {allPlansExpanded ? (
                        <>
                          <span>See less features</span>
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>See all features</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Email Setup Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Email Setup */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Email Account Setup</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="flex">
                        <input 
                          type="text" 
                          value="john" 
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg"
                          readOnly
                        />
                        <div className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-600">
                          @mybusiness.com
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                      <input 
                        type="text" 
                        value="John Smith" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Storage</label>
                      <div className="bg-background-green p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Used</span>
                          <span className="text-sm font-medium">2.3 GB of 25 GB</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-main-green h-2 rounded-full w-1/12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-main-green text-white py-2 rounded-lg font-medium">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Professional email made simple
                </h2>
                
                <div className="space-y-6">
                  {emailFeatures.map((feature, index) => (
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
                  Enterprise-grade security
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
                      <span className="text-sm text-gray-600">Email Encryption</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Spam Protection</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Enabled</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Two-Factor Auth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">Configured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Threat Protection */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Threat Protection</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Blocked spam today</span>
                      <span className="font-bold text-gray-800">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Malware detected</span>
                      <span className="font-bold text-gray-800">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Phishing attempts</span>
                      <span className="font-bold text-gray-800">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Features Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Calendar Integration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Calendar View */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Integrated Calendar</h3>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div key={i} className={`text-center text-sm py-2 ${
                        i === 15 ? 'bg-main-green text-white rounded' :
                        i === 22 ? 'bg-secondary-green text-white rounded' :
                        'text-gray-700 hover:bg-gray-100 rounded'
                      }`}>
                        {i < 5 ? '' : i - 4}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-main-green/10 rounded">
                      <div className="w-3 h-3 bg-main-green rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">Team Meeting</div>
                        <div className="text-xs text-gray-600">10:00 AM - 11:00 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-secondary-green/10 rounded">
                      <div className="w-3 h-3 bg-secondary-green rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">Client Call</div>
                        <div className="text-xs text-gray-600">2:00 PM - 3:00 PM</div>
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
                  Boost your productivity
                </h2>
                
                <div className="space-y-6">
                  {productivityFeatures.map((feature, index) => (
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
              Join thousands of businesses that trust us with their professional email needs.
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
              Business Email FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our business email hosting services.
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
              <h3 className="text-2xl font-bold mb-4">Ready for professional email?</h3>
              <p className="text-green-100 mb-6">
                Start your free trial today and experience the difference professional email makes for your business.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessEmail;