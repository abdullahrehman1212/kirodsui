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
  ChevronRight
} from 'lucide-react';
import WordPressAISection from '../components/WordPressAISection';
import WordPressSimpleSection from '../components/WordPressSimpleSection';
import FastSupportSection from '../components/FastSupportSection';
import WordPressMigrationSection from '../components/WordPressMigrationSection';
import AllInclusiveSection from '../components/AllInclusiveSection';
import WordPressHostingFAQ from '../components/WordPressHostingFAQ';

const WordPressHosting = () => {
  const [allPlansExpanded, setAllPlansExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleAllPlansFeatures = () => {
    setAllPlansExpanded(prev => !prev);
  };

  const plans = [
    {
      id: 'single',
      name: 'Single',
      description: 'Ideal solution for beginners.',
      originalPrice: 1399,
      currentPrice: 399,
      discount: 'SAVE 71%',
      renewalPrice: 999,
      features: {
        basic: [
          { name: '1 website', included: true },
          { name: 'Managed hosting for WordPress', included: true },
          { name: '~10 000 visits monthly', included: true },
          { name: '10 GB SSD storage', included: true },
          { name: '200 000 files and directories (inodes)', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: false },
          { name: '1 mailbox - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Weekly backups', included: true },
          { name: 'Unlimited bandwidth', included: true },
          { name: 'Free pre-built templates', included: true }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: false },
          { name: 'WP-CLI and SSH', included: false },
          { name: 'Starter WooCommerce', included: false }
        ],
        ai: [
          { name: 'AI content creator', included: false },
          { name: 'WordPress AI troubleshooter', included: false },
          { name: 'AI website Builder for WordPress', included: false },
          { name: 'AI assistant', included: false }
        ],
        security: [
          { name: 'Standard DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection', included: false }
        ]
      },
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Everything you need to create your website.',
      originalPrice: 1999,
      currentPrice: 599,
      discount: 'SAVE 70%',
      renewalPrice: 1699,
      bonusMonths: '+3 months free',
      features: {
        basic: [
          { name: '25 websites', included: true },
          { name: 'Managed hosting for WordPress', included: true },
          { name: '~25 000 visits monthly', included: true },
          { name: '25 GB SSD storage', included: true },
          { name: '400 000 files and directories (inodes)', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: '2 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Weekly backups', included: true },
          { name: 'Unlimited bandwidth', included: true },
          { name: 'Free pre-built templates', included: true }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Starter WooCommerce', included: true }
        ],
        ai: [
          { name: 'AI content creator', included: false },
          { name: 'WordPress AI troubleshooter', included: false },
          { name: 'AI website Builder for WordPress', included: false },
          { name: 'AI assistant', included: false }
        ],
        security: [
          { name: 'Standard DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection', included: true }
        ]
      },
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Level up with more power and enhanced features.',
      originalPrice: 2499,
      currentPrice: 799,
      discount: 'SAVE 68%',
      renewalPrice: 2299,
      bonusMonths: '+3 months free',
      features: {
        basic: [
          { name: '50 websites', included: true },
          { name: 'Managed hosting for WordPress', included: true },
          { name: '~100 000 visits monthly', included: true },
          { name: '50 GB NVMe storage', included: true },
          { name: '600 000 files and directories (inodes)', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: '5 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Daily and on-demand backups', included: true },
          { name: 'Unlimited bandwidth', included: true },
          { name: 'Free pre-built templates', included: true }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Basic WooCommerce Optimisation', included: true }
        ],
        ai: [
          { name: 'AI content creator', included: true },
          { name: 'WordPress AI troubleshooter', included: true },
          { name: 'AI website Builder for WordPress', included: true },
          { name: 'AI assistant', included: true }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection', included: true }
        ]
      },
      popular: false
    },
    {
      id: 'cloud-startup',
      name: 'Cloud Startup',
      description: 'Enjoy optimized performance & powerful resources.',
      originalPrice: 5699,
      currentPrice: 2099,
      discount: 'SAVE 63%',
      renewalPrice: 5399,
      bonusMonths: '+3 months free',
      features: {
        basic: [
          { name: '100 websites', included: true },
          { name: 'Managed hosting for WordPress', included: true },
          { name: '~200 000 visits monthly', included: true },
          { name: '100 GB NVMe storage', included: true },
          { name: '2 000 000 files and directories (inodes)', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: '10 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Daily and on-demand backups', included: true },
          { name: 'Unlimited bandwidth', included: true },
          { name: 'Free pre-built templates', included: true }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Standard WooCommerce', included: true }
        ],
        ai: [
          { name: 'AI content creator', included: true },
          { name: 'WordPress AI troubleshooter', included: true },
          { name: 'AI website Builder for WordPress', included: true },
          { name: 'AI assistant', included: true }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Secure access manager', included: true },
          { name: 'Free domain WHOIS privacy protection', included: true }
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
      quote: "If the customer comes to us, they usually want us to give them the best solution. When that happens, 99% of the time, we build a WordPress site for them on Kirods.",
      name: "Dino Valdez",
      company: "Co-founder of RSNL Creative",
      website: "rsnlcreative.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    },
    {
      quote: "I could manage the hosting, domain name, and SSL certificate in one place, which was really refreshing.",
      name: "Owen Phillips",
      company: "Founder",
      website: "gatefootforge.co.uk",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    },
    {
      quote: "Migrating to Kirods was the best decision I ever made.",
      name: "Gabrielle Scarlett",
      company: "Digital Creator",
      website: "gabriellescarlett.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true
    }
  ];

  const performanceFeatures = [
    {
      text: "Enjoy a stable performance with LiteSpeed web servers and the LSCWP Cache plugin.",
      included: true
    },
    {
      text: "Speed up your website by up to 40% using Kirods CDN. Features include code minification, data centre rerouting, and auto image optimisation.",
      included: true
    },
    {
      text: "Enable Object Cache and make your website 3x faster.",
      included: true
    },
    {
      text: "Experience reduced latency and fast data transfer with IPv6 and HTTP/3.",
      included: true
    }
  ];

  const performanceTestimonials = [
    {
      company: "bitcatcha",
      text: "Speed test results of our Kirods US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!"
    },
    {
      company: "wpbeginner",
      text: "If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes."
    },
    {
      company: "Website Planet",
      text: "The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised."
    }
  ];

  const managedWordPressFeatures = [
    {
      text: "Create a staging site in one click for seamless testing.",
      included: true
    },
    {
      text: "Receive update notifications for your WordPress version, themes, and plugins.",
      included: true
    },
    {
      text: "Automated daily or weekly backups to safekeep your website files.",
      included: true
    },
    {
      text: "Access advanced tools – WP-CLI, SSH access, Git integration, and PHP version control.",
      included: true
    }
  ];

  const managedWordPressTestimonials = [
    {
      text: "I've been a web developer for 20 years. I trust Kirods to host my clients' websites. It's so easy to set up and deploy websites on their control panel.",
      stars: 5
    },
    {
      text: "Never had an issue, the dashboard is top-notch. I use Kirods for my digital marketing agency, with 100+ clients hosted on their servers.",
      stars: 5
    },
    {
      text: "The fast speed, control panel, and anti-malware are excellent. The service is great, with many features that other companies don't offer.",
      stars: 5
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

  const securityTestimonials = [
    {
      company: "PCMAG.COM",
      text: "Kirods proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period."
    },
    {
      company: "CNET.com",
      text: "Plans include SSL certificates and all servers have an advanced security module to protect your data."
    },
    {
      company: "SFGATE",
      text: "With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured."
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
      { title: 'Managed hosting for WordPress', items: features.wordpress || [] },
      { title: 'AI features', items: features.ai || [] },
      { title: 'Security', items: features.security || [] }
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background-green to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-secondary-green/20 text-main-green px-4 py-2 rounded-full text-sm font-medium">
                Up to 70% off WordPress hosting
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Managed hosting for WordPress built for speed
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free domain and website migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free AI website builder for WordPress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Fully managed maintenance for WordPress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">24/7 customer support</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">599</span>
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

            {/* Right Side - Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-main-green rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">K</span>
                      </div>
                      <span className="font-semibold text-gray-800">KIRODS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Your website is running smoothly</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h3>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">W</span>
                    </div>
                    <span className="font-medium text-gray-800">mywordpresspage.com</span>
                    <button className="bg-main-green/10 text-main-green px-3 py-1 rounded text-sm font-medium">
                      Admin Panel
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Domain</div>
                          <div className="font-medium text-gray-800">Active</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Hosting</div>
                          <div className="font-medium text-gray-800">Active</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Free Email</div>
                          <div className="font-medium text-gray-800">Active</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Backups</div>
                          <div className="font-medium text-gray-800">Daily</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Performance score</div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="relative w-16 h-16">
                      <div className="w-16 h-16 rounded-full border-4 border-main-green flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">99</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Desktop device</div>
                      <div className="text-sm text-gray-600">Last scan 4 days ago</div>
                    </div>
                  </div>
                </div>

                {/* WordPress Recommendation */}
                <div className="bg-main-green text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-main-green text-sm font-bold">W</span>
                    </div>
                    <span className="font-medium">Recommended by WordPress.org</span>
                  </div>
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
                    Rating: {logo.rating}/5 {logo.reviews} reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
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
              Choose the best managed Hosting for WordPress plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Officially recommended by WordPress.org, our hosting services offer top-notch performance, AI tools, 24/7 support, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      {/* Customer Testimonials Section */}
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

      {/* Ultra-fast Performance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Performance Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Performance Header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">PageSpeed Insights</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">99</span>
                      </div>
                      <div className="text-sm">Desktop device</div>
                    </div>
                    <div className="flex-1">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
                        alt="Website Preview"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">CDN Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Litespeed</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Ultra-fast performance
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Deliver better user experience, improve search engine rankings, and boost your conversion rates with faster load times.
                </p>
                
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

          {/* Performance Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg text-gray-800 mb-4">{testimonial.company}</div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed WordPress Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Managed hosting for WordPress
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Unlock the full potential of your WordPress sites with our feature-packed hosting.
                </p>
                
                <div className="space-y-6">
                  {managedWordPressFeatures.map((feature, index) => (
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

            {/* Right Side - WordPress Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* WordPress Header */}
                <div className="bg-gradient-to-r from-main-green to-secondary-green p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-sm">Your website is up to date</span>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2"
                      alt="WordPress Site"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-main-green/80 text-white px-3 py-1 rounded-lg">
                      <Shield className="h-4 w-4 inline mr-1" />
                      Memories Secured
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">W</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WordPress Stats */}
                <div className="p-6">
                  <div className="flex items-center justify-between p-3 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">Daily Backup</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WordPress Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {managedWordPressTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-green p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-main-green" />
                  <span className="font-bold text-lg text-gray-800 ml-2">Trustpilot</span>
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

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Security Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Security Header */}
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-main-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your website is safe</h3>
                </div>

                {/* Security Stats */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-main-green" />
                      <span className="font-medium text-gray-800">CDN Status</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-main-green rounded-full"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Reliable security features
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
          </div>

          {/* Security Testimonials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg text-gray-800 mb-4">{testimonial.company}</div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress AI Section */}
      <WordPressAISection />

      {/* WordPress Simple Section */}
      <WordPressSimpleSection />

      {/* Fast Support Section */}
      <FastSupportSection />

      {/* WordPress Migration Section */}
      <WordPressMigrationSection />

      {/* All Inclusive Section */}
      <AllInclusiveSection />

      {/* FAQ Section */}
      <WordPressHostingFAQ />
    </div>
  );
};

export default WordPressHosting;