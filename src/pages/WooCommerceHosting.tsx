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
  Play,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  Users,
  TrendingUp,
  Lock,
  Database,
  Server,
  Mail,
  Smartphone,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

const WooCommerceHosting = () => {
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
      id: 'business',
      name: 'Business',
      description: 'Made for basic WooCommerce stores.',
      originalPrice: 2499,
      currentPrice: 799,
      discount: 'SAVE 68%',
      renewalPrice: 2299,
      bonusMonths: '+3 months free',
      popular: true,
      features: {
        basic: [
          { name: 'Up to 50 websites', included: true },
          { name: 'Basic WooCommerce Optimisation', included: true },
          { name: '~100 000 visits monthly', included: true },
          { name: '50 GB NVMe storage', included: true },
          { name: '600 000 files and directories (inodes)', included: true },
          { name: '60 PHP workers', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: 'Free SSL', included: true },
          { name: '5 mailboxes per website - free for 1 year', included: true },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: true }
        ],
        woocommerce: [
          { name: '1-Click WooCommerce setup', included: true },
          { name: 'Multiple payment solutions', included: true },
          { name: 'Local & global shipping', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'Free Amazon affiliate WordPress plugin', included: true },
          { name: 'Free automatic store migration', included: true },
          { name: 'WooCommerce acceleration', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'On-demand backup', included: true },
          { name: 'WordPress staging tool', included: true },
          { name: 'WP-CLI and SSH', included: true }
        ],
        ai: [
          { name: 'AI content creator', included: true },
          { name: 'WordPress AI troubleshooter', included: true },
          { name: 'AI website Builder for WordPress', included: true },
          { name: 'AI assistant', included: true }
        ],
        support: [
          { name: '99.9% uptime guarantee', included: true },
          { name: '30-Day money-back guarantee', included: true },
          { name: '24/7 customer support', included: true },
          { name: 'Daily backups (Rs.7,188 value)', included: true },
          { name: 'Global Data Centres', included: true },
          { name: 'Priority support', included: false }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: true }
        ],
        technical: [
          { name: '100 subdomains', included: true },
          { name: '75 MySQL max user connections', included: true },
          { name: '300 databases', included: true },
          { name: 'Unlimited FTP accounts', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'DNS management', included: true },
          { name: 'Cache manager', included: true }
        ]
      }
    },
    {
      id: 'cloud-startup',
      name: 'Cloud Startup',
      description: 'Suitable for most WooCommerce stores.',
      originalPrice: 5699,
      currentPrice: 2099,
      discount: 'SAVE 63%',
      renewalPrice: 5399,
      bonusMonths: '+3 months free',
      popular: false,
      features: {
        basic: [
          { name: 'Up to 100 websites', included: true },
          { name: 'Standard WooCommerce', included: true },
          { name: '~200 000 visits monthly', included: true },
          { name: '100 GB NVMe storage', included: true },
          { name: '2 000 000 files and directories (inodes)', included: true },
          { name: '100 PHP workers', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: 'Free SSL', included: true },
          { name: '10 mailboxes per website - free for 1 year', included: true },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: true },
          { name: 'Expert ecommerce tech support', included: true },
          { name: 'Dedicated IP address', included: true }
        ],
        woocommerce: [
          { name: '1-Click WooCommerce setup', included: true },
          { name: 'Multiple payment solutions', included: true },
          { name: 'Local & global shipping', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'Free Amazon affiliate WordPress plugin', included: true },
          { name: 'Free automatic store migration', included: true },
          { name: 'WooCommerce acceleration', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'On-demand backup', included: true },
          { name: 'WordPress staging tool', included: true },
          { name: 'WP-CLI and SSH', included: true }
        ],
        ai: [
          { name: 'AI content creator', included: true },
          { name: 'WordPress AI troubleshooter', included: true },
          { name: 'AI website Builder for WordPress', included: true },
          { name: 'AI assistant', included: true }
        ],
        support: [
          { name: '99.9% uptime guarantee', included: true },
          { name: '30-Day money-back guarantee', included: true },
          { name: '24/7 customer support', included: true },
          { name: 'Daily backups (Rs.7,188 value)', included: true },
          { name: 'Global Data Centres', included: true },
          { name: 'Priority support', included: true }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: true }
        ],
        technical: [
          { name: '300 subdomains', included: true },
          { name: '100 MySQL max user connections', included: true },
          { name: '800 databases', included: true },
          { name: 'Unlimited FTP accounts', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'DNS management', included: true },
          { name: 'Cache manager', included: true }
        ]
      }
    }
  ];

  const trustLogos = [
    { name: 'Trustpilot', rating: '4.7', reviews: '46,825', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const faqs = [
    {
      question: "What is WooCommerce hosting?",
      answer: "WooCommerce hosting is specialized WordPress hosting optimized for WooCommerce stores. It includes features like one-click WooCommerce installation, enhanced performance for e-commerce, SSL certificates, payment gateway support, and specialized security measures for online stores."
    },
    {
      question: "How is WooCommerce hosting different from regular WordPress hosting?",
      answer: "WooCommerce hosting is specifically optimized for e-commerce with features like enhanced caching for product pages, payment gateway integrations, SSL certificates for secure transactions, inventory management tools, and specialized support for online store functionality."
    },
    {
      question: "Do you offer free WooCommerce migration?",
      answer: "Yes, we provide completely free WooCommerce store migration for all new customers. Our expert team will migrate your entire store including products, customers, orders, and settings with zero downtime and no data loss."
    },
    {
      question: "What payment gateways are supported?",
      answer: "Our WooCommerce hosting supports all major payment gateways including PayPal, Stripe, Square, Authorize.Net, and many regional payment providers. We also provide SSL certificates required for secure payment processing."
    },
    {
      question: "Can I sell digital and physical products?",
      answer: "Yes, WooCommerce supports both digital downloads and physical products. You can sell software, ebooks, courses, music, physical goods, and even set up subscription-based products with the right extensions."
    },
    {
      question: "How many products can I add to my store?",
      answer: "There's no limit to the number of products you can add. Our hosting plans are designed to handle stores from small catalogs to large inventories with thousands of products, with optimized database performance for product searches."
    },
    {
      question: "Do you provide SSL certificates for secure transactions?",
      answer: "Yes, all our WooCommerce hosting plans include free SSL certificates. This ensures all customer data and payment information is encrypted and secure, which is essential for e-commerce and builds customer trust."
    },
    {
      question: "What shipping options are available?",
      answer: "WooCommerce supports flexible shipping options including flat rate, free shipping, local pickup, and real-time shipping calculations from carriers like UPS, FedEx, and USPS. You can also set up zone-based shipping rates."
    },
    {
      question: "Can I manage inventory and stock levels?",
      answer: "Yes, WooCommerce includes comprehensive inventory management. You can track stock levels, set low stock notifications, manage backorders, and handle inventory for variable products with different sizes, colors, etc."
    },
    {
      question: "How do I handle taxes in my WooCommerce store?",
      answer: "WooCommerce includes built-in tax calculation features. You can set up tax rates by location, product type, or customer class. It also integrates with tax services for automatic tax calculation and compliance."
    },
    {
      question: "What analytics and reporting features are included?",
      answer: "WooCommerce provides detailed analytics including sales reports, customer data, product performance, and revenue tracking. You can also integrate with Google Analytics for advanced e-commerce tracking and insights."
    },
    {
      question: "Can I create discount codes and promotions?",
      answer: "Yes, WooCommerce has built-in coupon functionality. You can create percentage or fixed amount discounts, free shipping coupons, buy-one-get-one offers, and set usage restrictions and expiration dates."
    },
    {
      question: "Is WooCommerce SEO-friendly?",
      answer: "Yes, WooCommerce is built with SEO best practices. It generates SEO-friendly URLs, supports meta descriptions, integrates with SEO plugins like Yoast, and includes structured data for better search engine visibility."
    },
    {
      question: "Can I customize the design of my store?",
      answer: "Absolutely! WooCommerce works with thousands of themes, and you can customize colors, layouts, and functionality. Our hosting includes access to premium themes and page builders for easy customization."
    },
    {
      question: "What customer management features are available?",
      answer: "WooCommerce includes customer accounts, order history, wishlist functionality, and customer communication tools. Customers can track orders, download digital products, and manage their account information."
    },
    {
      question: "Can I set up a multi-vendor marketplace?",
      answer: "Yes, with extensions like WC Vendors or Dokan, you can create a multi-vendor marketplace where multiple sellers can list and sell products through your platform, with commission management and vendor dashboards."
    },
    {
      question: "How do I handle returns and refunds?",
      answer: "WooCommerce includes order management tools for processing refunds and returns. You can set return policies, process partial or full refunds, and manage the entire return workflow from your admin dashboard."
    },
    {
      question: "What backup and security measures are in place?",
      answer: "Our WooCommerce hosting includes daily automated backups, malware scanning, firewall protection, and regular security updates. We also provide staging environments for testing changes safely."
    },
    {
      question: "Can I integrate with third-party services?",
      answer: "Yes, WooCommerce has thousands of extensions for integrating with email marketing tools, accounting software, CRM systems, inventory management, and other business tools to streamline your operations."
    },
    {
      question: "What support do you provide for WooCommerce issues?",
      answer: "Our support team includes WooCommerce experts available 24/7. We help with store setup, plugin conflicts, performance optimization, payment issues, and general WooCommerce troubleshooting and guidance."
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
    const basicFeatures = features.basic || [];
    const displayFeatures = isExpanded ? basicFeatures : basicFeatures.slice(0, 8);

    return displayFeatures.map((feature, index) => (
      <li key={index} className="flex items-center text-sm py-1">
        {feature.included ? (
          <CheckCircle className="h-4 w-4 text-main-green mr-3 flex-shrink-0" />
        ) : (
          <X className="h-4 w-4 text-gray-300 mr-3 flex-shrink-0" />
        )}
        <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
          {feature.name}
        </span>
      </li>
    ));
  };

  const renderExpandedFeatures = (features) => {
    const sections = [
      { title: 'Managed WooCommerce', items: features.woocommerce || [] },
      { title: 'AI features', items: features.ai || [] },
      { title: 'Service and support', items: features.support || [] },
      { title: 'Security', items: features.security || [] },
      { title: 'Technical details', items: features.technical || [] }
    ];

    return sections.map((section, sectionIndex) => (
      <div key={sectionIndex} className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm">{section.title}</h4>
        <ul className="space-y-1">
          {section.items.map((feature, index) => (
            <li key={index} className="flex items-center text-sm py-1">
              {feature.included ? (
                <CheckCircle className="h-4 w-4 text-main-green mr-3 flex-shrink-0" />
              ) : (
                <X className="h-4 w-4 text-gray-300 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center bg-white/20 text-green-100 px-4 py-2 rounded-full text-sm font-medium">
                Up to 68% off WooCommerce hosting
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Start selling with confidence
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-lg text-green-100">Free domain and website migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-lg text-green-100">Quick setup, easy to scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-lg text-green-100">Fully managed maintenance for WooCommerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-lg text-green-100">24/7 customer support</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-green-200">Rs.</span>
                  <span className="text-5xl font-bold">799</span>
                  <span className="text-lg text-green-200">/mo</span>
                </div>
                <div className="text-green-200 font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                    Claim deal
                  </button>
                  <div className="text-sm text-green-200">
                    <Clock className="h-4 w-4 inline mr-1" />
                    03:19:06:55
                  </div>
                </div>

                <div className="flex items-center text-sm text-green-200">
                  <Shield className="h-4 w-4 mr-2" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced E-commerce Mockup */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Main mockup container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 flex items-center">
                    <Lock className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-gray-800 font-medium">Three.Two.Online</span>
                    <span className="text-gray-500 ml-1">.com</span>
                  </div>
                </div>

                {/* Website Content */}
                <div className="relative">
                  {/* Header with SSL indicator */}
                  <div className="absolute top-4 right-4 bg-main-green/90 text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center">
                    <Lock className="h-3 w-3 mr-1" />
                    Secure
                  </div>

                  {/* Main content area */}
                  <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-white p-8">
                    {/* Store header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        Three. Two. Online
                      </h3>
                      <p className="text-gray-600 text-sm">Premium Plant Collection</p>
                    </div>

                    {/* Product grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Product 1 - Cactus */}
                      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 mb-3 flex items-center justify-center h-24">
                          <div className="text-4xl">🌵</div>
                        </div>
                        <h4 className="font-medium text-gray-800 text-sm mb-1">Desert Cactus</h4>
                        <p className="text-main-green font-bold text-sm mb-2">$24.99</p>
                        <button className="w-full bg-main-green text-white text-xs py-2 rounded-lg hover:bg-secondary-green transition-colors duration-300">
                          Add to cart
                        </button>
                      </div>

                      {/* Product 2 - Succulent */}
                      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 mb-3 flex items-center justify-center h-24">
                          <div className="text-4xl">🪴</div>
                        </div>
                        <h4 className="font-medium text-gray-800 text-sm mb-1">Green Succulent</h4>
                        <p className="text-main-green font-bold text-sm mb-2">$18.99</p>
                        <button className="w-full bg-main-green text-white text-xs py-2 rounded-lg hover:bg-secondary-green transition-colors duration-300">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Shield className="h-3 w-3 mr-1 text-green-500" />
                        Secure Checkout
                      </div>
                      <div className="flex items-center">
                        <Truck className="h-3 w-3 mr-1 text-blue-500" />
                        Free Shipping
                      </div>
                    </div>
                  </div>

                  {/* WordPress.org Recommendation Bar */}
                  <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-center space-x-3">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-gray-800 text-sm font-bold">W</span>
                    </div>
                    <span className="text-sm font-medium">Recommended by WordPress.org</span>
                  </div>
                </div>
              </div>

              {/* WooCommerce Logo Badge */}
              <div className="absolute -bottom-4 -right-4 bg-main-green rounded-xl p-3 shadow-lg">
                <div className="text-white font-bold text-lg flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-1" />
                  <span>WOO</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-main-green rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-800">Live Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-gray-200">
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
                    TrustScore {logo.rating} {logo.reviews} reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Recommendation */}
      <section className="py-8 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="font-medium text-gray-800">Recommended by WordPress.org</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Choose your managed WooCommerce plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every Managed WooCommerce plan, recommended by WordPress.org, comes with a free domain name, unlimited free SSL certificates, 100 free email addresses, and a free CDN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
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
                        <span className="text-gray-400 line-through text-sm">Rs. {plan.originalPrice}</span>
                        <span className="bg-secondary-green/20 text-main-green px-2 py-1 rounded text-xs font-medium">
                          {plan.discount}
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-text-dark">Rs. {plan.currentPrice}</span>
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
                      Choose plan
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Renews at Rs.{plan.renewalPrice}/mo for a year. Cancel anytime.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <ul className="space-y-1">
                      {renderFeatureList(plan.features, allPlansExpanded)}
                    </ul>

                    {/* Expanded Features */}
                    {allPlansExpanded && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        {renderExpandedFeatures(plan.features)}
                      </div>
                    )}

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

          {/* Payment Terms */}
          <div className="text-center">
            <button className="text-main-green hover:text-secondary-green font-medium text-sm">
              Payment terms
            </button>
          </div>
        </div>
      </section>

      {/* Launch Quickly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Enhanced WooCommerce Setup Mockup */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
              
              {/* Main setup interface */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* WordPress Admin Bar */}
                <div className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-gray-800 text-xs font-bold">W</span>
                    </div>
                    <span className="text-sm">WordPress Admin</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <ShoppingCart className="h-4 w-4" />
                    <Database className="h-4 w-4" />
                    <Users className="h-4 w-4" />
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>

                {/* AI Product Description Interface */}
                <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">AI Product Description</h3>
                      <p className="text-sm text-gray-600">Powered by AI</p>
                    </div>
                  </div>

                  {/* Add Product Form */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-4">Add Product</h4>
                    <p className="text-sm text-gray-600 mb-4">Describe your product in short</p>
                    
                    {/* Product showcase with smartwatch */}
                    <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 mb-4">
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Smartwatch mockup */}
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl">
                            <div className="w-24 h-24 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                              OS 4.0
                            </div>
                          </div>
                          
                          {/* AI sparkles */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Shopping cart icon */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* AI-generated description */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-800">AI Generated Description</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Premium smartwatch with advanced health monitoring, GPS tracking, and 7-day battery life. Perfect for fitness enthusiasts and tech lovers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-main-green" />
                  <div>
                    <div className="text-sm font-semibold text-text-dark">Setup Complete</div>
                    <div className="text-xs text-gray-600">Ready to sell</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Launch quickly, scale effortlessly
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Skip the complex setup process and get straight to business.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Secure a <span className="font-semibold text-text-dark">free domain</span> for your brand.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Install <span className="font-semibold text-text-dark">WooCommerce in one click</span> and start building your store.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Boost conversions with <span className="font-semibold text-text-dark">AI-generated product descriptions</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Enjoy <span className="font-semibold text-text-dark">high uptime and performance</span>, thanks to stable and secure cloud servers.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Sell hundreds of products <span className="font-semibold text-text-dark">globally</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximum Speed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Maximum speed, maximum profits
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Fast performance keeps users engaged and your profits up.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Deliver a flawless shopping experience with <span className="font-semibold text-text-dark">LiteSpeed</span> web servers and the <span className="font-semibold text-text-dark">LSCWP</span> plugin.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Never lose sales – our well-maintained infrastructure ensures <span className="font-semibold text-text-dark">99.9% uptime</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Object Cache eliminates repeated database queries, <span className="font-semibold text-text-dark">reducing your store response by up to 3x</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our <span className="font-semibold text-text-dark">global CDN</span> distributes content from servers closer to your audience, ensuring faster load times.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Benefit from low latency and speedy internet connectivity, thanks to <span className="font-semibold text-text-dark">IPv6 and HTTP/3</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Performance Dashboard */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
              
              {/* Performance mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Order Summary */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-purple-600 mb-4">Order summary</h3>
                    
                    {/* Sales metrics */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm text-gray-600">Sales</div>
                        <div className="text-3xl font-bold text-gray-800">£1688</div>
                        <div className="text-sm text-green-600">+38%</div>
                      </div>
                      <div className="w-24 h-16 bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg flex items-end justify-center pb-2">
                        <div className="w-1 h-8 bg-purple-500 rounded mr-1"></div>
                        <div className="w-1 h-12 bg-purple-600 rounded mr-1"></div>
                        <div className="w-1 h-6 bg-purple-400 rounded mr-1"></div>
                        <div className="w-1 h-10 bg-purple-500 rounded"></div>
                      </div>
                    </div>

                    {/* Product items */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
                          <div className="text-lg">👟</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Running Shoes</div>
                          <div className="text-sm text-gray-600">Qty: 1</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                          <div className="text-lg">👟</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Sports Sneakers</div>
                          <div className="text-sm text-gray-600">Qty: 1</div>
                        </div>
                      </div>
                    </div>

                    {/* Place order button */}
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
                      Place order
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* PageSpeed Score */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">PageSpeed</h4>
                      <div className="text-sm text-gray-600">Performance Score</div>
                    </div>
                    <div className="relative w-16 h-16">
                      <div className="w-16 h-16 rounded-full border-4 border-main-green flex items-center justify-center bg-gradient-to-br from-main-green to-secondary-green">
                        <span className="text-xl font-bold text-white">99</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-main-green rounded-full flex items-center justify-center">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Security Mockup */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Security interface */}
              <div className="relative">
                {/* Main security visual */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="relative">
                    {/* Helmet with security indicators */}
                    <div className="w-64 h-64 mx-auto relative">
                      {/* Helmet base */}
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Shield className="h-24 w-24 text-white" />
                        </div>
                      </div>
                      
                      {/* Security status popup */}
                      <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-6 w-6 text-main-green" />
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">Your website</div>
                            <div className="font-semibold text-gray-800 text-sm">is safe</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Daily backups indicator */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="text-sm font-medium text-gray-800">Daily Backups</div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-main-green" />
                            <span className="text-xs text-gray-600">Active</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Shopping cart icon */}
                      <div className="absolute bottom-8 right-8 w-12 h-12 bg-main-green rounded-full flex items-center justify-center shadow-lg">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Product label */}
                    <div className="text-center mt-4">
                      <div className="text-white font-medium">Secure helmet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Top-notch security for your online business
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Build a secure ecommerce store that wins customer trust.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Get a <span className="font-semibold text-white">free SSL certificate</span> to protect your client's sensitive information.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Prevent data loss with <span className="font-semibold text-white">automatic backups</span> and save progress with an on-demand backup.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Keep your online store safe with <span className="font-semibold text-white">automatic updates and a vulnerabilities scanner</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Get rid of unwanted traffic with an <span className="font-semibold text-white">advanced firewall</span> and <span className="font-semibold text-white">DDoS protection</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed WooCommerce Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Managed WooCommerce hosting
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  From physical goods to digital downloads and services, our managed hosting for WooCommerce has everything you need to build a profitable online business.
                </p>
                <p className="text-lg text-green-100 mb-8">
                  Integrate payment gateways, add shipping methods, and check built-in analytics and reporting tools – all from a single, user-friendly dashboard.
                </p>
              </div>
            </div>

            {/* Right Side - WooCommerce Dashboard */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Dashboard mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Payment methods section */}
                <div className="p-6 bg-gradient-to-br from-purple-50 to-white">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    {/* Payment options */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-purple-100 rounded-lg">
                        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">WOO</span>
                        </div>
                        <span className="font-medium text-gray-800">WooPay</span>
                        <ArrowRight className="h-4 w-4 text-purple-600 ml-auto" />
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">🍎</span>
                        </div>
                        <span className="font-medium text-gray-800">Apple Pay</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PP</span>
                        </div>
                        <span className="font-medium text-gray-800">PayPal</span>
                      </div>
                    </div>
                    
                    {/* Currency indicator */}
                    <div className="flex items-center justify-end">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">£</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping gateway section */}
                <div className="p-6 bg-white">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-4">Shipping gateway</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {/* Shipping providers */}
                      <div className="bg-blue-600 rounded p-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">USPS</span>
                      </div>
                      <div className="bg-yellow-400 rounded p-2 flex items-center justify-center">
                        <span className="text-black text-xs font-bold">DHL</span>
                      </div>
                      <div className="bg-yellow-800 rounded p-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">UPS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Person using laptop */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                    alt="Person using laptop"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Migration Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Migration Animation */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Migration interface */}
              <div className="relative">
                {/* Walking person with migration flow */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="relative">
                    {/* Migration button */}
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center shadow-lg">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Migrate website
                    </div>
                    
                    {/* Person walking */}
                    <div className="flex items-center justify-center py-8">
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                        alt="Person walking"
                        className="w-48 h-48 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                    
                    {/* Migration completed status */}
                    <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-6 w-6 text-main-green" />
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">Migration</div>
                          <div className="font-semibold text-gray-800 text-sm">completed</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting lines */}
                    <div className="absolute top-1/2 left-8 w-24 h-px bg-white/30"></div>
                    <div className="absolute top-1/2 right-8 w-24 h-px bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Free online store migration
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Hosting a WooCommerce store elsewhere? It's time for an upgrade.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      One quick form – that's all it takes to submit a migration request.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Our dedicated team will move your website data within 24 hours.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      Your eCommerce store will work during the transfer process – you won't lose any sales or customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-background-green to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-main-green to-secondary-green p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
                        alt="Gabrielle Scarlett"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 hover:scale-110 transform">
                          <Play className="h-8 w-8 text-main-green ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/5 rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-4 h-4 bg-accent-green rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <Quote className="h-12 w-12 text-main-green mb-6 opacity-50" />
                    <blockquote className="text-2xl lg:text-3xl font-medium text-text-dark leading-relaxed mb-8">
                      "Migrating to Kirods was <span className="text-main-green">the best decision I ever made</span>."
                    </blockquote>
                  </div>

                  <div className="space-y-4">
                    <button className="text-main-green font-medium hover:text-secondary-green transition-colors duration-300 flex items-center group">
                      <span>Read the full story</span>
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="font-bold text-xl text-text-dark mb-1">
                        Gabrielle Scarlett
                      </div>
                      <div className="text-gray-600">
                        gabriellescarlett.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  24/7 customer support for your online success
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Stay on track – we've got your back every step of the way.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Facing unexpected errors? <span className="font-semibold text-text-dark">Get help via live chat</span> in under a few minutes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Ask anything – our expert agents will be happy to resolve all issues.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Enjoy a smooth conversation in 8+ global languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Support Chat Interface */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
              
              {/* Chat interface */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Chat header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Active</span>
                  </div>
                  <button className="text-white/80 hover:text-white transition-colors duration-300">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Chat messages */}
                <div className="p-6 space-y-6 bg-gradient-to-br from-background-green/30 to-white min-h-[300px]">
                  {/* Customer message */}
                  <div className="flex justify-end">
                    <div className="flex items-end space-x-3 max-w-xs">
                      <div className="bg-main-green text-white px-4 py-3 rounded-2xl rounded-br-md shadow-sm">
                        <p className="text-sm">Hello, I would like to migrate my website to Kirods</p>
                      </div>
                      <img
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                        alt="Customer"
                        className="w-8 h-8 rounded-full object-cover border-2 border-accent-green"
                      />
                    </div>
                  </div>

                  {/* Support response */}
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-3 max-w-sm">
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

                  {/* Typing indicator */}
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

                {/* Chat input */}
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background-green rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-main-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              WooCommerce Hosting FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our WooCommerce hosting services, features, and support. 
              Get the information you need to make the right choice for your online store.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background-green rounded-xl border border-gray-200 hover:border-main-green transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-300"
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
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-green-100 mb-6">
                Our WooCommerce experts are here to help you 24/7. Get personalized assistance for your specific e-commerce needs.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Contact WooCommerce Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your online store?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful online stores powered by our WooCommerce hosting. 
            Get started today with our optimized platform.
          </p>
          <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105">
            Start Your Store Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default WooCommerceHosting;