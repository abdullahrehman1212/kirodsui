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
  BarChart3,
  Users,
  Target,
  Smartphone,
  Monitor,
  Settings,
  Play,
  HelpCircle,
  TrendingUp,
  Award,
  Send,
  Eye,
  MousePointer
} from 'lucide-react';

const KirodsReach = () => {
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
      description: 'Perfect for small businesses',
      originalPrice: 1299,
      currentPrice: 699,
      discount: 'SAVE 46%',
      renewalPrice: 1099,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Up to 1,000 contacts', included: true },
        { name: '5,000 emails per month', included: true },
        { name: 'Email templates', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Contact management', included: true },
        { name: 'Mobile responsive emails', included: true },
        { name: 'Email support', included: true },
        { name: 'A/B testing', included: false },
        { name: 'Advanced automation', included: false },
        { name: 'Priority support', included: false }
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Best for growing businesses',
      originalPrice: 2499,
      currentPrice: 1399,
      discount: 'SAVE 44%',
      renewalPrice: 2199,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Up to 10,000 contacts', included: true },
        { name: '50,000 emails per month', included: true },
        { name: 'Premium templates', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Contact segmentation', included: true },
        { name: 'Mobile responsive emails', included: true },
        { name: 'Priority support', included: true },
        { name: 'A/B testing', included: true, badge: 'NEW' },
        { name: 'Marketing automation', included: true },
        { name: 'Landing pages', included: true }
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale campaigns',
      originalPrice: 4999,
      currentPrice: 2799,
      discount: 'SAVE 44%',
      renewalPrice: 4499,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Unlimited contacts', included: true },
        { name: 'Unlimited emails', included: true },
        { name: 'Custom templates', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Advanced segmentation', included: true },
        { name: 'Mobile responsive emails', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Advanced A/B testing', included: true, badge: 'NEW' },
        { name: 'Advanced automation', included: true },
        { name: 'Custom landing pages', included: true },
        { name: 'API access', included: true },
        { name: 'White-label options', included: true }
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
      text: "Create stunning email campaigns with our drag-and-drop editor and professional templates.",
      included: true
    },
    {
      text: "Advanced segmentation helps you target the right audience with personalized messages.",
      included: true
    },
    {
      text: "Automated workflows nurture leads and engage customers at the perfect moment.",
      included: true
    },
    {
      text: "Detailed analytics track opens, clicks, and conversions to optimize your campaigns.",
      included: true
    }
  ];

  const automationFeatures = [
    {
      text: "Welcome series automatically onboard new subscribers with targeted content.",
      included: true
    },
    {
      text: "Abandoned cart recovery emails bring back potential customers automatically.",
      included: true
    },
    {
      text: "Birthday and anniversary campaigns create personal connections with customers.",
      included: true
    },
    {
      text: "Behavioral triggers send relevant emails based on customer actions.",
      included: true
    }
  ];

  const analyticsFeatures = [
    {
      text: "Real-time campaign performance tracking shows opens, clicks, and conversions.",
      included: true
    },
    {
      text: "A/B testing helps optimize subject lines, content, and send times.",
      included: true
    },
    {
      text: "Subscriber growth analytics track list health and engagement trends.",
      included: true
    },
    {
      text: "ROI reporting demonstrates the value of your email marketing efforts.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "Kirods Reach has transformed our email marketing. Our open rates increased by 40% and we're seeing much better engagement!",
      stars: 5
    },
    {
      text: "The automation features are incredible. We set up welcome series and abandoned cart emails that run on autopilot and drive real results.",
      stars: 5
    },
    {
      text: "The analytics dashboard gives us insights we never had before. We can see exactly what's working and optimize our campaigns accordingly.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "What is Kirods Reach?",
      answer: "Kirods Reach is our comprehensive email marketing platform that helps businesses create, send, and track email campaigns. It includes features like drag-and-drop email builder, automation workflows, advanced analytics, and contact management tools."
    },
    {
      question: "How many emails can I send?",
      answer: "Email limits depend on your plan: Starter allows 5,000 emails per month, Professional allows 50,000 emails per month, and Enterprise offers unlimited emails. You can always upgrade if you need to send more emails."
    },
    {
      question: "Can I import my existing email list?",
      answer: "Yes! You can easily import your existing contacts from CSV files, other email platforms, or integrate with popular CRM systems. We'll help ensure your list is properly formatted and compliant with email regulations."
    },
    {
      question: "Are the email templates mobile-responsive?",
      answer: "Absolutely! All our email templates are fully responsive and automatically adapt to different screen sizes. Your emails will look great on desktops, tablets, and smartphones without any additional work required."
    },
    {
      question: "What automation features are included?",
      answer: "Our automation features include welcome series, abandoned cart recovery, birthday campaigns, re-engagement sequences, and behavioral triggers. You can create complex workflows based on subscriber actions, preferences, and engagement history."
    },
    {
      question: "How does A/B testing work?",
      answer: "A/B testing allows you to test different versions of your emails to see what performs better. You can test subject lines, content, images, send times, and more. The system automatically sends the winning version to the rest of your list."
    },
    {
      question: "What analytics and reporting do you provide?",
      answer: "We provide comprehensive analytics including open rates, click-through rates, bounce rates, unsubscribe rates, conversion tracking, revenue attribution, and subscriber growth metrics. You can also create custom reports and export data."
    },
    {
      question: "Do you ensure email deliverability?",
      answer: "Yes! We maintain high deliverability rates through authenticated sending, reputation monitoring, spam testing, and relationships with major email providers. We also provide guidance on best practices to maintain good sender reputation."
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
                <Mail className="h-4 w-4 mr-2" />
                Kirods Reach - Email Marketing
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Reach your audience with powerful email marketing
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Drag & drop email builder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Advanced automation workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Detailed analytics & reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">High deliverability rates</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Starting at Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">699</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Start Free Trial
                  </button>
                  <button className="text-main-green px-8 py-3 rounded-lg font-semibold border border-main-green hover:bg-background-green transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  14-day free trial • No credit card required
                </div>
              </div>
            </div>

            {/* Right Side - Email Campaign Mockup */}
            <div className="relative">
              {/* Campaign Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Open Rate</div>
                  <div className="text-2xl font-bold text-main-green">42.5%</div>
                  <div className="flex items-center justify-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15%
                  </div>
                </div>
              </div>

              {/* Main Email Builder Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Email Builder Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">Email Campaign Builder</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-gray-600" />
                      <Smartphone className="h-4 w-4 text-main-green" />
                    </div>
                  </div>
                </div>

                {/* Email Preview */}
                <div className="p-6">
                  {/* Email Header */}
                  <div className="bg-gradient-to-r from-main-green to-secondary-green rounded-lg p-6 text-white mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold">Summer Sale</div>
                      <div className="text-sm bg-white/20 px-2 py-1 rounded">50% OFF</div>
                    </div>
                    <p className="text-green-100 mb-4">Don't miss our biggest sale of the year!</p>
                    <button className="bg-white text-main-green px-4 py-2 rounded font-medium text-sm">
                      Shop Now
                    </button>
                  </div>

                  {/* Email Content */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                        <div className="text-sm font-medium text-gray-800 mb-1">Product Name</div>
                        <div className="text-main-green font-bold text-sm">Rs. 999</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                        <div className="text-sm font-medium text-gray-800 mb-1">Product Name</div>
                        <div className="text-main-green font-bold text-sm">Rs. 1,499</div>
                      </div>
                    </div>

                    {/* Email Stats */}
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <Eye className="h-5 w-5 text-main-green mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">2,450</div>
                          <div className="text-xs text-gray-600">Opens</div>
                        </div>
                        <div>
                          <MousePointer className="h-5 w-5 text-main-green mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">892</div>
                          <div className="text-xs text-gray-600">Clicks</div>
                        </div>
                        <div>
                          <Target className="h-5 w-5 text-main-green mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">156</div>
                          <div className="text-xs text-gray-600">Conversions</div>
                        </div>
                      </div>
                    </div>
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
              Choose your email marketing plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Powerful email marketing tools for businesses of all sizes. Start free and scale as you grow.
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
            {/* Left Side - Email Builder Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Email Templates */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Email Templates</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-main-green rounded-lg p-3 bg-main-green/5">
                      <div className="w-full h-20 bg-gradient-to-br from-main-green to-secondary-green rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Newsletter</div>
                      <div className="text-xs text-gray-600">Professional design</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Promotion</div>
                      <div className="text-xs text-gray-600">Sales & offers</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Welcome</div>
                      <div className="text-xs text-gray-600">New subscribers</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Event</div>
                      <div className="text-xs text-gray-600">Announcements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Create stunning email campaigns
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

      {/* Automation Features Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Powerful automation workflows
                </h2>
                
                <div className="space-y-6">
                  {automationFeatures.map((feature, index) => (
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

            {/* Right Side - Automation Workflow Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Automation Workflow */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Settings className="h-5 w-5 text-main-green" />
                    <h3 className="font-bold text-gray-800">Welcome Series Automation</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-main-green rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Welcome Email</div>
                        <div className="text-sm text-gray-600">Sent immediately</div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Product Guide</div>
                        <div className="text-sm text-gray-600">Sent after 3 days</div>
                      </div>
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">3</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">Special Offer</div>
                        <div className="text-sm text-gray-600">Sent after 7 days</div>
                      </div>
                      <div className="w-5 h-5 border border-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Automation Stats */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Automation Performance</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-main-green">89%</div>
                      <div className="text-gray-600">Open Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-main-green">34%</div>
                      <div className="text-gray-600">Click Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Analytics Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Analytics Dashboard */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Campaign Analytics</h3>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <Mail className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">12,450</div>
                      <div className="text-sm text-gray-600">Emails Sent</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <Eye className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">42.5%</div>
                      <div className="text-sm text-gray-600">Open Rate</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <MousePointer className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">18.3%</div>
                      <div className="text-sm text-gray-600">Click Rate</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <TrendingUp className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">Rs. 45K</div>
                      <div className="text-sm text-gray-600">Revenue</div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-background-green p-4 rounded-lg">
                    <div className="flex items-end space-x-2 h-24">
                      <div className="bg-main-green w-4 h-12 rounded-t"></div>
                      <div className="bg-main-green w-4 h-16 rounded-t"></div>
                      <div className="bg-main-green w-4 h-20 rounded-t"></div>
                      <div className="bg-main-green w-4 h-24 rounded-t"></div>
                      <div className="bg-main-green w-4 h-18 rounded-t"></div>
                      <div className="bg-main-green w-4 h-22 rounded-t"></div>
                      <div className="bg-main-green w-4 h-20 rounded-t"></div>
                    </div>
                    <div className="text-center text-sm text-gray-600 mt-2">Email Performance (7 days)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Track and optimize your results
                </h2>
                
                <div className="space-y-6">
                  {analyticsFeatures.map((feature, index) => (
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
              Join thousands of businesses that have transformed their email marketing with Kirods Reach.
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
              Kirods Reach FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our email marketing platform.
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
              <h3 className="text-2xl font-bold mb-4">Ready to boost your email marketing?</h3>
              <p className="text-green-100 mb-6">
                Start your free trial today and see how Kirods Reach can transform your email campaigns.
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

export default KirodsReach;