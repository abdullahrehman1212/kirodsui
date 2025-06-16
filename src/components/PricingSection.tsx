import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const PricingSection = () => {
  const [allPlansExpanded, setAllPlansExpanded] = useState(false);

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
          { name: 'Free 7-day Horizons trial', included: false },
          { name: '10 GB SSD storage', included: true },
          { name: 'Hostinger Website Builder', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: false },
          { name: 'Free automatic website migration', included: true }
        ],
        extended: [
          { name: '1 mailbox - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Weekly backups', included: true },
          { name: 'WooCommerce', included: false },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: false },
          { name: 'Dedicated IP address', included: false },
          { name: 'Priority support', included: false }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: false },
          { name: 'WP-CLI and SSH', included: false },
          { name: 'Free Amazon affiliate WordPress plugin', included: false },
          { name: 'WordPress staging tool', included: false },
          { name: 'Object cache for WordPress', included: false },
          { name: 'On-demand backup', included: false },
          { name: 'WordPress AI tools', included: false }
        ],
        builder: [
          { name: 'AI website builder', included: true },
          { name: 'Drag & drop editor', included: true },
          { name: '150 templates', included: true },
          { name: 'Marketing integrations', included: true },
          { name: 'AI image generator', included: false },
          { name: 'AI writer', included: false },
          { name: 'AI blog generator', included: false },
          { name: 'AI SEO tools', included: false },
          { name: 'eCommerce features', included: false },
          { name: '0% transaction fees', included: false },
          { name: '100+ payment methods', included: false }
        ],
        security: [
          { name: 'Standard DDoS protection', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: false },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Secure access manager', included: true }
        ],
        support: [
          { name: '100 GB bandwidth', included: true },
          { name: '99.9% uptime guarantee', included: true },
          { name: 'Global Data Centres', included: true },
          { name: '24/7 customer support', included: true },
          { name: '30-Day money-back guarantee', included: true }
        ],
        technical: [
          { name: '200,000 files and directories (inodes)', included: true },
          { name: '25 PHP workers', included: true },
          { name: '~10,000 visits monthly', included: true },
          { name: '2 subdomains', included: true },
          { name: '25 MySQL max user connections', included: true },
          { name: '2 databases', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'SSH access', included: false },
          { name: 'DNS management', included: true },
          { name: '1 FTP account', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'Cache manager', included: true },
          { name: 'Powerful control panel', included: true }
        ]
      },
      popular: false,
      buttonStyle: 'outline'
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
          { name: 'Free 7-day Horizons trial', included: true },
          { name: '25 GB SSD storage', included: true },
          { name: 'Hostinger Website Builder', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: 'Free automatic website migration', included: true }
        ],
        extended: [
          { name: '2 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Weekly backups', included: true },
          { name: 'Starter WooCommerce', included: true },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: false },
          { name: 'Dedicated IP address', included: false },
          { name: 'Priority support', included: false }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Free Amazon affiliate WordPress plugin', included: false },
          { name: 'WordPress staging tool', included: false },
          { name: 'Object cache for WordPress', included: false },
          { name: 'On-demand backup', included: false },
          { name: 'WordPress AI tools', included: false }
        ],
        builder: [
          { name: 'AI website builder', included: true },
          { name: 'Drag & drop editor', included: true },
          { name: '150 templates', included: true },
          { name: 'Marketing integrations', included: true },
          { name: 'AI image generator', included: false },
          { name: 'AI writer', included: false },
          { name: 'AI blog generator', included: false },
          { name: 'AI SEO tools', included: false },
          { name: 'eCommerce features', included: false },
          { name: '0% transaction fees', included: false },
          { name: '100+ payment methods', included: false }
        ],
        security: [
          { name: 'Standard DDoS protection', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Secure access manager', included: true }
        ],
        support: [
          { name: 'Unlimited bandwidth', included: true },
          { name: '99.9% uptime guarantee', included: true },
          { name: 'Global Data Centres', included: true },
          { name: '24/7 customer support', included: true },
          { name: '30-Day money-back guarantee', included: true }
        ],
        technical: [
          { name: '400,000 files and directories (inodes)', included: true },
          { name: '40 PHP workers', included: true },
          { name: '~25,000 visits monthly', included: true },
          { name: '100 subdomains', included: true },
          { name: '50 MySQL max user connections', included: true },
          { name: '300 databases', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'SSH access', included: true },
          { name: 'DNS management', included: true },
          { name: 'Unlimited FTP accounts', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'Cache manager', included: true },
          { name: 'Powerful control panel', included: true }
        ]
      },
      popular: true,
      buttonStyle: 'filled'
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
          { name: 'Free 7-day Horizons trial', included: true },
          { name: '50 GB NVMe storage', included: true },
          { name: 'Hostinger Website Builder', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: 'Free automatic website migration', included: true }
        ],
        extended: [
          { name: '5 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Daily backups (Rs.7,188 value)', included: true },
          { name: 'Basic WooCommerce Optimisation', included: true },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: true },
          { name: 'Dedicated IP address', included: false },
          { name: 'Priority support', included: false }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Free Amazon affiliate WordPress plugin', included: true },
          { name: 'WordPress staging tool', included: true },
          { name: 'Object cache for WordPress', included: true },
          { name: 'On-demand backup', included: true },
          { name: 'WordPress AI tools', included: true }
        ],
        builder: [
          { name: 'AI website builder', included: true },
          { name: 'Drag & drop editor', included: true },
          { name: '150 templates', included: true },
          { name: 'Marketing integrations', included: true },
          { name: 'AI image generator', included: true },
          { name: 'AI writer', included: true },
          { name: 'AI blog generator', included: true },
          { name: 'AI SEO tools', included: true },
          { name: 'eCommerce features', included: true },
          { name: '0% transaction fees', included: true },
          { name: '100+ payment methods', included: true }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Secure access manager', included: true }
        ],
        support: [
          { name: 'Unlimited bandwidth', included: true },
          { name: '99.9% uptime guarantee', included: true },
          { name: 'Global Data Centres', included: true },
          { name: '24/7 customer support', included: true },
          { name: '30-Day money-back guarantee', included: true }
        ],
        technical: [
          { name: '600,000 files and directories (inodes)', included: true },
          { name: '60 PHP workers', included: true },
          { name: '~100,000 visits monthly', included: true },
          { name: '100 subdomains', included: true },
          { name: '75 MySQL max user connections', included: true },
          { name: '300 databases', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'SSH access', included: true },
          { name: 'DNS management', included: true },
          { name: 'Unlimited FTP accounts', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'Cache manager', included: true },
          { name: 'Powerful control panel', included: true }
        ]
      },
      popular: false,
      buttonStyle: 'outline'
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
          { name: 'Free 7-day Horizons trial', included: true },
          { name: '100 GB NVMe storage', included: true },
          { name: 'Hostinger Website Builder', included: true },
          { name: 'Free domain (Rs.2,499 value)', included: true },
          { name: 'Free automatic website migration', included: true }
        ],
        extended: [
          { name: '10 mailboxes per website - free for 1 year', included: true },
          { name: 'Unlimited free SSL', included: true },
          { name: 'Daily backups (Rs.7,188 value)', included: true },
          { name: 'Standard WooCommerce', included: true },
          { name: 'AI SEO ready', included: true },
          { name: 'Free CDN', included: true },
          { name: 'Dedicated IP address', included: true },
          { name: 'Priority support', included: true }
        ],
        wordpress: [
          { name: 'Free 1-click WordPress installation', included: true },
          { name: 'Free 1-click Google integration', included: true },
          { name: 'Free pre-built templates', included: true },
          { name: 'WordPress acceleration (LiteSpeed)', included: true },
          { name: 'Smart WordPress auto updates', included: true },
          { name: 'WordPress vulnerabilities scanner', included: true },
          { name: 'WordPress compatibility checker', included: true },
          { name: 'WordPress multisite', included: true },
          { name: 'WP-CLI and SSH', included: true },
          { name: 'Free Amazon affiliate WordPress plugin', included: true },
          { name: 'WordPress staging tool', included: true },
          { name: 'Object cache for WordPress', included: true },
          { name: 'On-demand backup', included: true },
          { name: 'WordPress AI tools', included: true }
        ],
        builder: [
          { name: 'AI website builder', included: true },
          { name: 'Drag & drop editor', included: true },
          { name: '150 templates', included: true },
          { name: 'Marketing integrations', included: true },
          { name: 'AI image generator', included: true },
          { name: 'AI writer', included: true },
          { name: 'AI blog generator', included: true },
          { name: 'AI SEO tools', included: true },
          { name: 'eCommerce features', included: true },
          { name: '0% transaction fees', included: true },
          { name: '100+ payment methods', included: true }
        ],
        security: [
          { name: 'Enhanced DDoS protection', included: true },
          { name: 'Malware Scanner', included: true },
          { name: 'Free domain WHOIS privacy protection (Rs.2,499 value)', included: true },
          { name: 'Web application firewall', included: true },
          { name: 'Cloudflare protected nameservers', included: true },
          { name: 'Secure access manager', included: true }
        ],
        support: [
          { name: 'Unlimited bandwidth', included: true },
          { name: '99.9% uptime guarantee', included: true },
          { name: 'Global Data Centres', included: true },
          { name: '24/7 customer support', included: true },
          { name: '30-Day money-back guarantee', included: true }
        ],
        technical: [
          { name: '2,000,000 files and directories (inodes)', included: true },
          { name: '100 PHP workers', included: true },
          { name: '~200,000 visits monthly', included: true },
          { name: '300 subdomains', included: true },
          { name: '100 MySQL max user connections', included: true },
          { name: '800 databases', included: true },
          { name: 'GIT access', included: true },
          { name: 'Multiple PHP versions', included: true },
          { name: 'SSH access', included: true },
          { name: 'DNS management', included: true },
          { name: 'Unlimited FTP accounts', included: true },
          { name: 'Unlimited cronjobs', included: true },
          { name: 'Cache manager', included: true },
          { name: 'Powerful control panel', included: true }
        ]
      },
      popular: false,
      buttonStyle: 'outline'
    }
  ];

  const renderFeatureList = (features, isExpanded) => {
    const basicFeatures = features.basic || [];
    const extendedFeatures = features.extended || [];
    const allFeatures = [
      ...basicFeatures,
      ...(isExpanded ? extendedFeatures : [])
    ];

    return allFeatures.map((feature, index) => (
      <li key={index} className="flex items-center text-sm py-1">
        {feature.included ? (
          <Check className="h-4 w-4 text-main-green mr-3 flex-shrink-0" />
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
      { title: 'Hostinger Website Builder', items: features.builder || [] },
      { title: 'Security', items: features.security || [] },
      { title: 'Service and support', items: features.support || [] },
      { title: 'Technical details', items: features.technical || [] }
    ];

    return sections.map((section, sectionIndex) => (
      <div key={sectionIndex} className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm">{section.title}</h4>
        <ul className="space-y-1">
          {section.items.map((feature, index) => (
            <li key={index} className="flex items-center text-sm py-1">
              {feature.included ? (
                <Check className="h-4 w-4 text-main-green mr-3 flex-shrink-0" />
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
    <section id="pricing-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Pick your perfect plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick your perfect plan and launch online in minutes with AI.
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
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
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
                      plan.buttonStyle === 'filled'
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
  );
};

export default PricingSection;