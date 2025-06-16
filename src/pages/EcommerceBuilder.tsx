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
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Users,
  Truck,
  Smartphone,
  Monitor,
  Palette,
  Settings,
  Play,
  HelpCircle,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const EcommerceBuilder = () => {
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
      description: 'Perfect for small online stores',
      originalPrice: 899,
      currentPrice: 499,
      discount: 'SAVE 44%',
      renewalPrice: 799,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Free custom domain', included: true, badge: 'FREE' },
        { name: '1 online store', included: true },
        { name: 'Up to 100 products', included: true },
        { name: 'Mobile responsive design', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Payment processing', included: true },
        { name: 'Inventory management', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced marketing tools', included: false },
        { name: 'Abandoned cart recovery', included: false },
        { name: 'Multi-currency support', included: false }
      ],
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Best for growing businesses',
      originalPrice: 1599,
      currentPrice: 899,
      discount: 'SAVE 44%',
      renewalPrice: 1399,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Free custom domain', included: true, badge: 'FREE' },
        { name: '1 online store', included: true },
        { name: 'Unlimited products', included: true },
        { name: 'Mobile responsive design', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Payment processing', included: true },
        { name: 'Advanced inventory management', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced marketing tools', included: true, badge: 'NEW' },
        { name: 'Abandoned cart recovery', included: true },
        { name: 'Multi-currency support', included: true },
        { name: 'Discount codes & coupons', included: true }
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale operations',
      originalPrice: 2999,
      currentPrice: 1699,
      discount: 'SAVE 43%',
      renewalPrice: 2699,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Free custom domain', included: true, badge: 'FREE' },
        { name: 'Unlimited stores', included: true },
        { name: 'Unlimited products', included: true },
        { name: 'Mobile responsive design', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Payment processing', included: true },
        { name: 'Enterprise inventory management', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Advanced marketing tools', included: true, badge: 'NEW' },
        { name: 'Abandoned cart recovery', included: true },
        { name: 'Multi-currency support', included: true },
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

  const ecommerceFeatures = [
    {
      text: "Create a professional online store with our drag-and-drop e-commerce builder.",
      included: true
    },
    {
      text: "Accept payments from 100+ payment methods including cards, digital wallets, and bank transfers.",
      included: true
    },
    {
      text: "Manage inventory, track orders, and handle shipping with built-in tools.",
      included: true
    },
    {
      text: "Mobile-optimized checkout process ensures maximum conversion rates.",
      included: true
    }
  ];

  const marketingFeatures = [
    {
      text: "Abandoned cart recovery emails automatically re-engage potential customers.",
      included: true
    },
    {
      text: "SEO optimization tools help your store rank higher in search results.",
      included: true
    },
    {
      text: "Social media integration connects your store with Facebook, Instagram, and more.",
      included: true
    },
    {
      text: "Email marketing campaigns keep customers engaged and drive repeat sales.",
      included: true
    }
  ];

  const analyticsFeatures = [
    {
      text: "Real-time sales dashboard shows your store's performance at a glance.",
      included: true
    },
    {
      text: "Customer behavior analytics help you understand shopping patterns.",
      included: true
    },
    {
      text: "Conversion tracking identifies what's working and what needs improvement.",
      included: true
    },
    {
      text: "Inventory reports ensure you never run out of popular products.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "Setting up my online store was incredibly easy. I was selling products within hours, and the payment processing is seamless!",
      stars: 5
    },
    {
      text: "The marketing tools have helped me increase sales by 40%. The abandoned cart recovery feature alone pays for itself.",
      stars: 5
    },
    {
      text: "I love the analytics dashboard - it gives me insights I never had before. Managing inventory is now a breeze.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "How quickly can I set up my online store?",
      answer: "You can have your online store up and running in minutes! Choose a template, add your products, set up payment methods, and you're ready to start selling. Our intuitive interface makes the entire process quick and straightforward."
    },
    {
      question: "What payment methods can I accept?",
      answer: "Our e-commerce platform supports 100+ payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, bank transfers, and various local payment methods depending on your region."
    },
    {
      question: "Are there any transaction fees?",
      answer: "We don't charge additional transaction fees beyond standard payment processor fees. You keep more of your profits compared to other platforms that charge per-transaction fees on top of payment processing costs."
    },
    {
      question: "Can I manage inventory and shipping?",
      answer: "Yes! Our platform includes comprehensive inventory management tools to track stock levels, set low-stock alerts, and manage variants. For shipping, you can set up shipping zones, rates, and integrate with major carriers for real-time shipping calculations."
    },
    {
      question: "Is my store mobile-friendly?",
      answer: "Absolutely! All our e-commerce templates are fully responsive and optimized for mobile devices. With mobile commerce growing rapidly, we ensure your store provides an excellent shopping experience on smartphones and tablets."
    },
    {
      question: "Can I sell digital products?",
      answer: "Yes, you can sell both physical and digital products. For digital products, our system automatically delivers download links to customers after purchase, handles licensing, and can set download limits or expiration dates."
    },
    {
      question: "What marketing tools are included?",
      answer: "Our platform includes email marketing, abandoned cart recovery, discount codes, social media integration, SEO tools, customer reviews, and analytics. Higher-tier plans include advanced features like customer segmentation and automated marketing campaigns."
    },
    {
      question: "Can I customize the design of my store?",
      answer: "Yes! You can fully customize your store's design using our drag-and-drop editor. Change colors, fonts, layouts, add your branding, and create a unique shopping experience that matches your brand identity."
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
                <ShoppingCart className="h-4 w-4 mr-2" />
                E-commerce Website Builder
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Build your online store and start selling today
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Easy drag & drop store builder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">100+ payment methods supported</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Built-in marketing tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Mobile-optimized checkout</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Starting at Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">499</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Start Selling
                  </button>
                  <button className="text-main-green px-8 py-3 rounded-lg font-semibold border border-main-green hover:bg-background-green transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    View Demo
                  </button>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  14-day free trial • No transaction fees
                </div>
              </div>
            </div>

            {/* Right Side - E-commerce Store Mockup */}
            <div className="relative">
              {/* Sales Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Today's Sales</div>
                  <div className="text-2xl font-bold text-main-green mb-1">Rs. 12,450</div>
                  <div className="flex items-center justify-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24%
                  </div>
                </div>
              </div>

              {/* Main Store Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Store Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">Your Store</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-gray-600" />
                      <Smartphone className="h-4 w-4 text-main-green" />
                    </div>
                  </div>
                </div>

                {/* Store Content */}
                <div className="p-6">
                  {/* Store Banner */}
                  <div className="bg-gradient-to-r from-main-green to-secondary-green rounded-lg p-6 text-white mb-6">
                    <h3 className="text-xl font-bold mb-2">Summer Sale</h3>
                    <p className="text-green-100 mb-3">Up to 50% off selected items</p>
                    <button className="bg-white text-main-green px-4 py-2 rounded font-medium text-sm">
                      Shop Now
                    </button>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Product Name</div>
                      <div className="text-main-green font-bold text-sm">Rs. 1,299</div>
                      <button className="w-full bg-main-green text-white py-1 rounded text-xs mt-2">
                        Add to Cart
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Product Name</div>
                      <div className="text-main-green font-bold text-sm">Rs. 899</div>
                      <button className="w-full bg-main-green text-white py-1 rounded text-xs mt-2">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Store Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-background-green rounded-lg">
                      <Package className="h-5 w-5 text-main-green mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-800">Products</div>
                      <div className="text-sm font-bold text-gray-800">156</div>
                    </div>
                    <div className="text-center p-3 bg-background-green rounded-lg">
                      <Users className="h-5 w-5 text-main-green mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-800">Customers</div>
                      <div className="text-sm font-bold text-gray-800">1,234</div>
                    </div>
                    <div className="text-center p-3 bg-background-green rounded-lg">
                      <BarChart3 className="h-5 w-5 text-main-green mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-800">Orders</div>
                      <div className="text-sm font-bold text-gray-800">89</div>
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
              Choose your e-commerce plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Start selling online with our powerful e-commerce platform. No transaction fees, just success.
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

      {/* E-commerce Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Store Builder Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Product Management */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Product Management</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Premium Headphones</div>
                          <div className="text-sm text-gray-600">Electronics • In Stock: 45</div>
                          <div className="text-main-green font-bold">Rs. 2,999</div>
                        </div>
                        <Settings className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Wireless Speaker</div>
                          <div className="text-sm text-gray-600">Electronics • In Stock: 23</div>
                          <div className="text-main-green font-bold">Rs. 1,599</div>
                        </div>
                        <Settings className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-main-green text-white py-2 rounded-lg font-medium">
                    Add New Product
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Everything you need to sell online
                </h2>
                
                <div className="space-y-6">
                  {ecommerceFeatures.map((feature, index) => (
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

      {/* Marketing Tools Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Powerful marketing tools included
                </h2>
                
                <div className="space-y-6">
                  {marketingFeatures.map((feature, index) => (
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

            {/* Right Side - Marketing Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Email Campaign */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CreditCard className="h-5 w-5 text-main-green" />
                    <h3 className="font-bold text-gray-800">Abandoned Cart Recovery</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Emails sent today</span>
                      <span className="font-bold text-gray-800">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Recovery rate</span>
                      <span className="font-bold text-main-green">18.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Revenue recovered</span>
                      <span className="font-bold text-gray-800">Rs. 4,250</span>
                    </div>
                  </div>
                </div>

                {/* Discount Codes */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Active Promotions</h4>
                  <div className="space-y-2">
                    <div className="bg-background-green p-3 rounded flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">SUMMER20</div>
                        <div className="text-xs text-gray-600">20% off • 45 uses</div>
                      </div>
                      <span className="text-main-green text-sm font-medium">Active</span>
                    </div>
                    <div className="bg-background-green p-3 rounded flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">NEWCUSTOMER</div>
                        <div className="text-xs text-gray-600">15% off • 12 uses</div>
                      </div>
                      <span className="text-main-green text-sm font-medium">Active</span>
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
                {/* Analytics Header */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Sales Analytics</h3>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <DollarSign className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">Rs. 45,230</div>
                      <div className="text-sm text-gray-600">This Month</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">156</div>
                      <div className="text-sm text-gray-600">Orders</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <Users className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">1,234</div>
                      <div className="text-sm text-gray-600">Customers</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <TrendingUp className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">3.2%</div>
                      <div className="text-sm text-gray-600">Conversion</div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-background-green p-4 rounded-lg">
                    <div className="flex items-end space-x-2 h-24">
                      <div className="bg-main-green w-4 h-8 rounded-t"></div>
                      <div className="bg-main-green w-4 h-12 rounded-t"></div>
                      <div className="bg-main-green w-4 h-16 rounded-t"></div>
                      <div className="bg-main-green w-4 h-20 rounded-t"></div>
                      <div className="bg-main-green w-4 h-14 rounded-t"></div>
                      <div className="bg-main-green w-4 h-18 rounded-t"></div>
                      <div className="bg-main-green w-4 h-24 rounded-t"></div>
                    </div>
                    <div className="text-center text-sm text-gray-600 mt-2">Sales Trend (7 days)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Track your success with detailed analytics
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
              What store owners say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful online store owners who've built their business with our platform.
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
              E-commerce Builder FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our e-commerce platform and features.
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
              <h3 className="text-2xl font-bold mb-4">Ready to start selling?</h3>
              <p className="text-green-100 mb-6">
                Launch your online store today and start growing your business with our powerful e-commerce platform.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceBuilder;