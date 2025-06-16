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
  Cloud,
  Server,
  Database,
  HardDrive,
  Cpu,
  Activity,
  BarChart3,
  Network,
  Lock,
  Users,
  Mail,
  FileText,
  Settings,
  Gauge,
  TrendingUp,
  Layers,
  Wifi,
  MonitorSpeaker
} from 'lucide-react';

const CloudHosting = () => {
  const [allPlansExpanded, setAllPlansExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleAllPlansFeatures = () => {
    setAllPlansExpanded(prev => !prev);
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
      features: {
        basic: [
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
        ]
      },
      popular: true
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
      features: {
        basic: [
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
        ]
      },
      popular: false
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
      features: {
        basic: [
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
        ]
      },
      popular: false
    }
  ];

  const trustLogos = [
    { name: 'Trustpilot', rating: '4.7', reviews: '46,824', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const testimonials = [
    {
      quote: "The cloud hosting performance is incredible. Our website loads 3x faster and handles traffic spikes effortlessly.",
      name: "Sarah Johnson",
      company: "E-commerce Director",
      website: "techstore.com",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    },
    {
      quote: "Scaling our infrastructure was seamless. The auto-scaling features saved us during our biggest sales event.",
      name: "Michael Chen",
      company: "CTO",
      website: "growthstartup.io",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    },
    {
      quote: "The reliability and uptime are unmatched. Our business depends on being online 24/7 and Kirods delivers.",
      name: "Emily Rodriguez",
      company: "Operations Manager",
      website: "alwaysonline.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    }
  ];

  const cloudFeatures = [
    {
      text: "Auto-scaling resources that adapt to your traffic demands in real-time.",
      included: true
    },
    {
      text: "99.99% uptime guarantee with redundant infrastructure across multiple data centers.",
      included: true
    },
    {
      text: "Global CDN with 200+ edge locations for lightning-fast content delivery worldwide.",
      included: true
    },
    {
      text: "Enterprise-grade security with DDoS protection and automated threat detection.",
      included: true
    }
  ];

  const performanceFeatures = [
    {
      text: "NVMe SSD storage for guaranteed minimal latency and maximum speed.",
      included: true
    },
    {
      text: "Deliver lightning-fast browsing experiences through our in-house CDN, ObjectCache, and cutting-edge LiteSpeed Web Server technology.",
      included: true
    },
    {
      text: "Enjoy unlimited bandwidth and manage peak traffic like a pro.",
      included: true
    },
    {
      text: "Experience reduced latency and fast data transfer with IPv6 and HTTP/3.",
      included: true
    }
  ];

  const securityFeatures = [
    {
      text: "Advanced DDoS protection with real-time threat monitoring and mitigation.",
      included: true
    },
    {
      text: "Automated malware scanning and removal with instant threat response.",
      included: true
    },
    {
      text: "Web Application Firewall (WAF) protecting against OWASP Top 10 vulnerabilities.",
      included: true
    },
    {
      text: "SSL/TLS encryption with automatic certificate management and renewal.",
      included: true
    }
  ];

  const managementFeatures = [
    {
      text: "Intuitive cloud dashboard with real-time resource monitoring and analytics.",
      included: true
    },
    {
      text: "One-click scaling to handle traffic spikes without downtime.",
      included: true
    },
    {
      text: "Automated daily backups with point-in-time recovery options.",
      included: true
    },
    {
      text: "API access for seamless integration with your existing tools and workflows.",
      included: true
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
        <span className={`flex-1 ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
          {feature.name}
        </span>
        {feature.badge && (
          <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
                Up to 74% off Cloud hosting
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Scalable. Reliable. The cloud hosting your business deserves
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Auto-scaling cloud infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">99.99% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Global CDN with 200+ edge locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Enterprise-grade security</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">2,099</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Claim deal
                  </button>
                  <div className="text-sm text-gray-600">
                    <Clock className="h-4 w-4 inline mr-1" />
                    03:20:54:13
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Right Side - Cloud Infrastructure Mockup */}
            <div className="relative">
              {/* Cloud Performance Score */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Cloud performance</div>
                  <div className="text-sm font-medium text-gray-800 mb-3">mycloud.online</div>
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="w-16 h-16 rounded-full border-4 border-main-green flex items-center justify-center">
                      <span className="text-xl font-bold text-main-green">99</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mt-2 text-xs">
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

              {/* Main Cloud Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-5 w-5 text-main-green" />
                      <span className="font-semibold text-gray-800">KIRODS CLOUD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Auto-scaling</span>
                      <span className="bg-main-green text-white px-2 py-1 rounded text-xs font-medium">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cloud Resources */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Cloud Resources</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">CPU Usage</div>
                          <div className="font-medium text-gray-800">45%</div>
                        </div>
                        <Cpu className="h-6 w-6 text-main-green" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-main-green h-2 rounded-full w-[45%]"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Memory</div>
                          <div className="font-medium text-gray-800">2.1/6 GB</div>
                        </div>
                        <Database className="h-6 w-6 text-secondary-green" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-secondary-green h-2 rounded-full w-[35%]"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Storage</div>
                          <div className="font-medium text-gray-800">45/200 GB</div>
                        </div>
                        <HardDrive className="h-6 w-6 text-accent-green" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-accent-green h-2 rounded-full w-[22%]"></div>
                      </div>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Bandwidth</div>
                          <div className="font-medium text-gray-800">Unlimited</div>
                        </div>
                        <Activity className="h-6 w-6 text-main-green" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-main-green h-2 rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <BarChart3 className="h-4 w-4 mr-2 text-main-green" />
                      Analytics
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Settings className="h-4 w-4 mr-2 text-main-green" />
                      Scale
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Shield className="h-4 w-4 mr-2 text-main-green" />
                      Security
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-main-green" />
                        <span className="font-medium text-gray-800">Auto-scaling</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">Resources scale automatically</div>
                      <button className="text-sm text-main-green hover:text-secondary-green">Configure scaling</button>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-main-green rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800">Global CDN</div>
                          <div className="text-sm text-gray-600">200+ edge locations</div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-main-green" />
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
              Choose your cloud hosting plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Scalable cloud hosting solutions designed to grow with your business. Get started with confidence with our 30-day money-back guarantee.
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

                    <p className="text-xs text-gray-500 text-center mb-4">
                      For 48-month term. Rs. {plan.renewalPrice}/mo when you renew
                    </p>

                    {/* Choose Plan Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mb-6 ${
                        plan.popular
                          ? 'bg-main-green text-white hover:bg-secondary-green'
                          : 'border-2 border-main-green text-main-green hover:bg-background-green'
                      }`}
                    >
                      Choose plan
                    </button>

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

      {/* Cloud Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Effortless scalability powered by cloud
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experience the power of cloud hosting with automatic scaling, global reach, and enterprise-grade reliability.
                </p>
                
                <div className="space-y-6">
                  {cloudFeatures.map((feature, index) => (
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

            {/* Right Side - Cloud Scaling Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Scaling Header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Auto-scaling Dashboard</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">3x</div>
                      <div className="text-sm text-green-100">Traffic Spike</div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Resources</span>
                          <span className="text-sm">Auto-scaling</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white/30 rounded p-2 text-center">
                            <Server className="h-4 w-4 mx-auto mb-1" />
                            <div className="text-xs">2 → 6</div>
                          </div>
                          <div className="bg-white/30 rounded p-2 text-center">
                            <Database className="h-4 w-4 mx-auto mb-1" />
                            <div className="text-xs">3GB → 9GB</div>
                          </div>
                          <div className="bg-white/30 rounded p-2 text-center">
                            <Cpu className="h-4 w-4 mx-auto mb-1" />
                            <div className="text-xs">Auto</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scaling Stats */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Current Load</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">High</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Response Time</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">145ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Uptime</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">99.99%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Performance Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Performance Header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Global Performance</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">99</span>
                      </div>
                      <div className="text-sm">Performance Score</div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-sm mb-2">Global CDN Status</div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-white/30 rounded p-2 text-center">
                            <div className="w-2 h-2 bg-accent-green rounded-full mx-auto mb-1"></div>
                            <div className="text-xs">US</div>
                          </div>
                          <div className="bg-white/30 rounded p-2 text-center">
                            <div className="w-2 h-2 bg-accent-green rounded-full mx-auto mb-1"></div>
                            <div className="text-xs">EU</div>
                          </div>
                          <div className="bg-white/30 rounded p-2 text-center">
                            <div className="w-2 h-2 bg-accent-green rounded-full mx-auto mb-1"></div>
                            <div className="text-xs">ASIA</div>
                          </div>
                          <div className="bg-white/30 rounded p-2 text-center">
                            <div className="w-2 h-2 bg-accent-green rounded-full mx-auto mb-1"></div>
                            <div className="text-xs">AU</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Load Time</span>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-main-green" />
                      <span className="text-sm text-gray-600">0.8s</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">CDN Cache Hit</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Superior website performance
                </h2>
                
                <div className="space-y-6">
                  {performanceFeatures.map((feature, index) => (
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
      <section className="py-20 bg-white">
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
                {/* Security Header */}
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-main-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cloud is secure</h3>
                  <p className="text-gray-600">All security measures active</p>
                </div>

                {/* Security Stats */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Lock className="h-6 w-6 text-main-green" />
                      <span className="font-medium text-gray-800">SSL/TLS Encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-main-green" />
                      <span className="font-medium text-gray-800">DDoS Protection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Network className="h-6 w-6 text-main-green" />
                      <span className="font-medium text-gray-800">Web Application Firewall</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Management Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Management Header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Cloud Management</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-green-100">Monitoring</div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-sm mb-2">Resource Usage</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">CPU</span>
                            <div className="w-20 bg-white/30 rounded-full h-2">
                              <div className="bg-accent-green h-2 rounded-full w-[45%]"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">RAM</span>
                            <div className="w-20 bg-white/30 rounded-full h-2">
                              <div className="bg-accent-green h-2 rounded-full w-[35%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Management Features */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Auto Backup</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Daily</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">API Access</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Effortless cloud management
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

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              What our cloud customers say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that trust Kirods Cloud for their hosting needs.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-background-green to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-main-green to-secondary-green p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                      {testimonials[currentTestimonial].hasVideo && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 hover:scale-110 transform">
                            <Play className="h-8 w-8 text-main-green ml-1" />
                          </button>
                        </div>
                      )}
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
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>

                  <div className="space-y-4">
                    <button className="text-main-green font-medium hover:text-secondary-green transition-colors duration-300 flex items-center group">
                      <span>Read the full story</span>
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="font-bold text-xl text-text-dark mb-1">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].company} | {testimonials[currentTestimonial].website}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-main-green scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Cloud Hosting FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our cloud hosting services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is cloud hosting?",
                answer: "Cloud hosting uses multiple servers to host websites, providing better reliability, scalability, and performance compared to traditional hosting. Resources are distributed across multiple servers, ensuring your website stays online even if one server fails."
              },
              {
                question: "How does auto-scaling work?",
                answer: "Our auto-scaling feature automatically adjusts your server resources based on traffic demands. When traffic increases, additional CPU, RAM, and bandwidth are allocated instantly. When traffic decreases, resources scale down to optimize costs."
              },
              {
                question: "What's included in the cloud hosting plans?",
                answer: "All plans include NVMe SSD storage, unlimited bandwidth, free SSL certificates, global CDN, automated backups, DDoS protection, 24/7 monitoring, and our intuitive cloud management dashboard."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades are processed at your next billing cycle. All data and configurations are preserved during plan changes."
              },
              {
                question: "What is the uptime guarantee?",
                answer: "We provide a 99.99% uptime guarantee for all cloud hosting plans. Our redundant infrastructure and automatic failover systems ensure maximum availability for your websites."
              },
              {
                question: "How secure is cloud hosting?",
                answer: "Our cloud hosting includes enterprise-grade security features: DDoS protection, web application firewall, malware scanning, SSL certificates, automated security updates, and 24/7 security monitoring."
              },
              {
                question: "Do you provide backups?",
                answer: "Yes, we perform automated daily backups of all your data. Backups are stored across multiple locations and retained for 30 days. You can restore from any backup point through your dashboard."
              },
              {
                question: "What support is available?",
                answer: "Cloud hosting customers receive priority 24/7 support from our cloud specialists. Support is available via live chat, email, and phone with average response times under 2 minutes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-main-green transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer hover:bg-background-green rounded-xl transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-text-dark pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to scale with cloud hosting?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Kirods Cloud for reliable, scalable hosting solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 flex items-center">
              Start Your Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300">
              View All Plans
            </button>
          </div>
          
          <div className="mt-8 text-green-100 text-sm">
            No setup fees • 30-day money-back guarantee • 24/7 support
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;