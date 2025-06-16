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
  Users,
  Settings,
  BarChart3,
  Layers,
  Database,
  Server,
  Lock,
  Mail,
  HardDrive,
  FileText,
  Briefcase,
  Target,
  TrendingUp,
  Smartphone,
  Monitor,
  Palette,
  Code,
  HelpCircle
} from 'lucide-react';

const AgencyHosting = () => {
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
      id: 'startup',
      name: 'Startup',
      description: 'Optimised for business and eCommerce websites',
      originalPrice: 5699,
      currentPrice: 2099,
      discount: 'SAVE 63%',
      renewalPrice: 5399,
      bonusMonths: '+3 months free',
      resources: {
        cpu: '2 CPU cores',
        ram: '3 GB RAM',
        storage: '100 GB NVMe storage',
        inodes: '2 000 000 inodes (files and directories)',
        phpWorkers: '100 PHP workers',
        websites: '100 websites'
      },
      features: [
        { name: 'Domain included (Rs.2,499 value)', included: true, badge: 'FREE' },
        { name: 'Unlimited SSL', included: true, badge: 'FREE' },
        { name: '7-day Horizons trial', included: true, badge: 'FREE' },
        { name: '10 mailboxes per website - free for 1 year', included: true, badge: 'FREE' },
        { name: 'Managed hosting for WordPress and WooCommerce', included: true },
        { name: 'CDN included', included: true },
        { name: 'Dedicated IP address', included: true },
        { name: 'Priority 24/7 expert support', included: true, badge: 'NEW' },
        { name: '30-Day money-back guarantee', included: true },
        { name: 'AI SEO ready', included: true }
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Optimized for scaling professional websites.',
      originalPrice: 11799,
      currentPrice: 3099,
      discount: 'SAVE 74%',
      renewalPrice: 11099,
      bonusMonths: '+3 months free',
      resources: {
        cpu: '4 CPU cores',
        ram: '6 GB RAM',
        storage: '200 GB NVMe storage',
        inodes: '3 000 000 inodes (files and directories)',
        phpWorkers: '200 PHP workers',
        websites: '100 websites'
      },
      features: [
        { name: 'Domain included (Rs.2,499 value)', included: true, badge: 'FREE' },
        { name: 'Unlimited SSL', included: true, badge: 'FREE' },
        { name: '7-day Horizons trial', included: true, badge: 'FREE' },
        { name: '10 mailboxes per website - free for 1 year', included: true, badge: 'FREE' },
        { name: 'Managed hosting for WordPress and WooCommerce', included: true },
        { name: 'CDN included', included: true },
        { name: 'Dedicated IP address', included: true },
        { name: 'Priority 24/7 expert support', included: true, badge: 'NEW' },
        { name: '30-Day money-back guarantee', included: true },
        { name: 'AI SEO ready', included: true }
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Maximum performance for your websites.',
      originalPrice: 18499,
      currentPrice: 6399,
      discount: 'SAVE 65%',
      renewalPrice: 17499,
      bonusMonths: '+3 months free',
      resources: {
        cpu: '6 CPU cores',
        ram: '12 GB RAM',
        storage: '300 GB NVMe storage',
        inodes: '4 000 000 inodes (files and directories)',
        phpWorkers: '300 PHP workers',
        websites: '100 websites'
      },
      features: [
        { name: 'Domain included (Rs.2,499 value)', included: true, badge: 'FREE' },
        { name: 'Unlimited SSL', included: true, badge: 'FREE' },
        { name: '7-day Horizons trial', included: true, badge: 'FREE' },
        { name: '10 mailboxes per website - free for 1 year', included: true, badge: 'FREE' },
        { name: 'Managed hosting for WordPress and WooCommerce', included: true },
        { name: 'CDN included', included: true },
        { name: 'Dedicated IP address', included: true },
        { name: 'Priority 24/7 expert support', included: true, badge: 'NEW' },
        { name: '30-Day money-back guarantee', included: true },
        { name: 'AI SEO ready', included: true }
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

  const agencyFeatures = [
    {
      text: "Get ready for traffic surges – try an advanced-level plan for free with the 24-hour boost feature.",
      included: true
    },
    {
      text: "Expand your website's resources with our scalable agency hosting options.",
      included: true
    },
    {
      text: "Enhance your online presence with a free .com, .net, and over 20 domain name extensions.",
      included: true
    },
    {
      text: "Enjoy stellar uptime and fast content delivery through our global data centre network.",
      included: true
    }
  ];

  const performanceFeatures = [
    {
      text: "NVMe storage for a guaranteed minimal latency and maximum speed.",
      included: true
    },
    {
      text: "Deliver lightning-fast browsing experiences through our in-house CDN, ObjectCache, and cutting-edge LiteSpeed Web Server technology.",
      included: true
    },
    {
      text: "Enjoy unlimited bandwidth and manage peak traffic like a pro.",
      included: true
    }
  ];

  const managementFeatures = [
    {
      text: "Move unlimited websites seamlessly with our Automatic Website Migration tool.",
      included: true
    },
    {
      text: "Leave the heavy lifting to our dedicated migration team for a hassle-free transfer.",
      included: true
    },
    {
      text: "No interruptions – your website remains accessible throughout the entire migration process.",
      included: true
    }
  ];

  const securityFeatures = [
    {
      text: "Our automated malware checker identifies and eliminates harmful files.",
      included: true
    },
    {
      text: "Shield your website from all kinds of threats with a superior web application firewall.",
      included: true
    },
    {
      text: "DDoS countermeasures protect your site by repelling malicious traffic.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "Most of the time if there is something I am not sure how to do, I can find an article all about it in their support section. If I can't find a solution I just hop on the live chat and someone is there to help.",
      stars: 5
    },
    {
      text: "I work with almost every hosting company every day, and none of them is as simple as Hostinger when managing hosting, SSL, email, file management, domain management and client management.",
      stars: 5
    },
    {
      text: "The most helpful thing about Hostinger is the ease of setting up and getting everything up and running. The quick turnaround is what makes this platform different from the others. Plus, the pricing is super competitive, if not the best, currently.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "What is agency hosting?",
      answer: "Agency hosting is a specialized hosting solution designed for web agencies, freelancers, and developers who manage multiple client websites. It provides the tools, resources, and features needed to efficiently host and manage numerous websites from a single account with white-label options and client management tools."
    },
    {
      question: "How many client websites can I host?",
      answer: "Depending on your plan, you can host up to 100 websites. Our Startup plan supports multiple sites, Professional plan offers enhanced resources for more sites, and Enterprise plan provides maximum capacity for large agencies managing extensive client portfolios."
    },
    {
      question: "Do you offer white-label hosting solutions?",
      answer: "Yes, our agency hosting plans include white-label options that allow you to brand the hosting experience with your agency's logo and colors. You can provide hosting services to your clients under your own brand while we handle the technical infrastructure."
    },
    {
      question: "Can I manage client access and permissions?",
      answer: "Absolutely! Our agency hosting platform includes comprehensive client management tools. You can create separate client accounts, set specific permissions, provide limited access to their websites, and manage billing independently for each client."
    },
    {
      question: "What tools are included for agency management?",
      answer: "Our agency hosting includes project management tools, client communication features, automated billing systems, performance monitoring dashboards, bulk website management, staging environments, and detailed analytics for all hosted websites."
    },
    {
      question: "Do you provide reseller hosting options?",
      answer: "Yes, our agency hosting plans include reseller capabilities. You can create hosting packages for your clients, set your own pricing, manage billing, and provide technical support while we handle the server infrastructure and maintenance."
    },
    {
      question: "How does billing work for multiple clients?",
      answer: "We offer flexible billing options including consolidated billing for your agency or separate billing for individual clients. You can set up automated invoicing, manage payment methods for each client, and track hosting expenses across all your projects."
    },
    {
      question: "What support do you provide for agencies?",
      answer: "Agency hosting includes priority 24/7 support with dedicated account managers for larger plans. We provide technical assistance, help with client migrations, offer training resources, and maintain comprehensive documentation for agency-specific features."
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
                Up to 74% off Agency hosting
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Agency hosting built for professionals
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free domain and website migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">White-label hosting solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Client management dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Priority 24/7 expert support</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">3,099</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Claim deal
                  </button>
                  <div className="text-sm text-gray-600">
                    <Clock className="h-4 w-4 inline mr-1" />
                    03:16:53:40
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Right Side - Agency Dashboard Mockup */}
            <div className="relative">
              {/* Client Management Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Active Clients</div>
                  <div className="text-2xl font-bold text-main-green mb-2">24</div>
                  <div className="text-xs text-gray-500">Websites managed</div>
                </div>
              </div>

              {/* Main Agency Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">AGENCY DASHBOARD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">All systems operational</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Client Portfolio</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">TechCorp Ltd.</div>
                          <div className="font-medium text-gray-800">5 websites</div>
                        </div>
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">StartupXYZ</div>
                          <div className="font-medium text-gray-800">3 websites</div>
                        </div>
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">E-Shop Pro</div>
                          <div className="font-medium text-gray-800">8 websites</div>
                        </div>
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">BlogNetwork</div>
                          <div className="font-medium text-gray-800">12 websites</div>
                        </div>
                        <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Users className="h-4 w-4 mr-2 text-main-green" />
                      Manage Clients
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <BarChart3 className="h-4 w-4 mr-2 text-main-green" />
                      Analytics
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Settings className="h-4 w-4 mr-2 text-main-green" />
                      White-label
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-main-green" />
                        <span className="font-medium text-gray-800">Performance</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">Average load time: 1.2s</div>
                      <div className="text-xs text-gray-500">99.9% uptime this month</div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-main-green rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800">All backups</div>
                          <div className="text-sm text-gray-600">completed successfully</div>
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
              Pick your perfect agency plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional hosting solutions designed specifically for agencies managing multiple client websites.
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
                      Choose plan
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      For 48-month term. Rs. {plan.renewalPrice}/mo when you renew
                    </p>
                  </div>

                  {/* Resources */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">RESOURCES</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>{plan.resources.cpu}</div>
                      <div>{plan.resources.ram}</div>
                      <div>{plan.resources.storage}</div>
                      <div>{plan.resources.inodes}</div>
                      <div>{plan.resources.phpWorkers}</div>
                      <div>{plan.resources.websites}</div>
                    </div>
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

          {/* Payment Terms */}
          <div className="text-center">
            <button className="text-main-green hover:text-secondary-green font-medium text-sm">
              Payment terms
            </button>
          </div>
        </div>
      </section>

      {/* Agency Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Agency Management Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Server Transfer Success */}
                <div className="bg-main-green text-white p-4 flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-medium">The server transfer was successful</span>
                </div>

                {/* Server Location Change */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Change Your Server Location</h3>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose server location</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Europe (United Kingdom)</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <Database className="h-8 w-8 text-main-green mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Database</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <CheckCircle className="h-8 w-8 text-main-green mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Plan Boosting is Activated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Agency hosting that elevates your business
                </h2>
                
                <div className="space-y-6">
                  {agencyFeatures.map((feature, index) => (
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

      {/* Performance Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Superior website performance
                </h2>
                
                <div className="space-y-6">
                  {performanceFeatures.map((feature, index) => (
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

            {/* Right Side - Performance Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Page Speed Tool */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Page speed</h3>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose a website</label>
                    <input 
                      type="text" 
                      value="mynewpage.online" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose a website</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="device" className="mr-2" defaultChecked />
                        <span className="text-sm">Desktop</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="device" className="mr-2" />
                        <span className="text-sm">Mobile</span>
                      </label>
                    </div>
                  </div>
                  <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium">
                    Analyze
                  </button>
                </div>

                {/* Performance Score */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800">Performance score for</h4>
                      <p className="text-sm text-gray-600">mynewpage.online</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-main-green flex items-center justify-center">
                      <span className="text-2xl font-bold text-main-green">99</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
                      <span>0-49</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                      <span>50-89</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-main-green rounded-full mr-1"></div>
                      <span>90-100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Migration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Migration Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Migration Interface */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-main-green text-white rounded-lg text-sm font-medium">
                        WordPress
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        cPanel & WHM
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        Other control panel
                      </button>
                    </div>
                    <ArrowRight className="h-6 w-6 text-main-green" />
                  </div>

                  <div className="bg-background-green p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-gray-800 mb-4">1 Select destination website</h3>
                    <input 
                      type="text" 
                      value="gohandmadecrafts.com" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      readOnly
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-4">2 Provide website files</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">WordPress account login</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="WordPress account login"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Username</label>
                          <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Username"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Password</label>
                          <input 
                            type="password" 
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-main-green/10 border border-main-green rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-main-green" />
                    <span className="text-main-green font-medium">Migration request was submitted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Website migration made easy
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

      {/* Security Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Enterprise-grade security
                </h2>
                
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
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

            {/* Right Side - Security Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-main-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your websites are safe</h3>
                  <p className="text-gray-600 mb-6">All security measures are active and protecting your clients</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-green p-4 rounded-lg">
                      <Lock className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">SSL Active</div>
                      <div className="text-xs text-gray-600">All sites protected</div>
                    </div>
                    <div className="bg-background-green p-4 rounded-lg">
                      <Shield className="h-6 w-6 text-main-green mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Firewall</div>
                      <div className="text-xs text-gray-600">Threats blocked</div>
                    </div>
                  </div>
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
              What agencies say about us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of agencies who trust Kirods for their client hosting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-green p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-main-green rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-bold text-lg text-gray-800">Google</span>
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
              Agency Hosting FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our agency hosting services and features.
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
              <h3 className="text-2xl font-bold mb-4">Need help with your agency?</h3>
              <p className="text-green-100 mb-6">
                Our agency specialists are here to help you succeed. Get personalized assistance for your hosting needs.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Contact Agency Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgencyHosting;