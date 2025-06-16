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
  Lock,
  Server,
  Database,
  FileText,
  Mail,
  HardDrive,
  Users,
  HelpCircle,
  Sparkles,
  Brain,
  Wand2,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const WebHosting = () => {
  const [allPlansExpanded, setAllPlansExpanded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleAllPlansFeatures = () => {
    setAllPlansExpanded(prev => !prev);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
    { name: 'Trustpilot', rating: '4.7', reviews: '46,826', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const testimonials = [
    {
      text: "Most of the time if there is something I am not sure how to do, I can find an article all about it in their support section. If I can't find a solution I just hop on the live chat and someone is there to help.",
      stars: 5
    },
    {
      text: "I work with almost every hosting company every day, and none of them is as simple as Kirods when managing hosting, SSL, email, file management, domain management and client management.",
      stars: 5
    },
    {
      text: "The most helpful thing about Kirods is the ease of setting up and getting everything up and running. The quick turnaround is what makes this platform different from the others. Plus, the pricing is super competitive, if not the best, currently.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "What is web hosting and why do I need it?",
      answer: "Web hosting is a service that allows your website to be accessible on the internet. When you create a website, all its files, images, and content need to be stored on a server that's connected to the internet 24/7. Web hosting providers like Kirods offer these servers along with the technology and support needed to keep your website running smoothly and accessible to visitors worldwide."
    },
    {
      question: "What's the difference between shared, VPS, and dedicated hosting?",
      answer: "Shared hosting means your website shares server resources with other websites - it's cost-effective for small sites. VPS (Virtual Private Server) gives you dedicated resources within a shared server environment, offering more control and better performance. Dedicated hosting provides an entire server exclusively for your website, offering maximum performance, security, and customization options."
    },
    {
      question: "Do you offer free website migration?",
      answer: "Yes! We provide completely free website migration for all new customers. Our expert migration team will handle the entire process, ensuring zero downtime and no data loss. The migration typically takes 24-48 hours to complete, and we'll keep you updated throughout the process."
    },
    {
      question: "How much storage and bandwidth do I need?",
      answer: "For most small to medium websites, 10-25 GB of storage is sufficient. Our Single plan offers 10 GB, while Premium provides 25 GB. Bandwidth depends on your traffic - our plans range from 100 GB to unlimited. If you're unsure, start with a smaller plan and upgrade as your site grows. We'll help you monitor usage and recommend upgrades when needed."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime for all our hosting services. This means your website will be accessible to visitors 99.9% of the time. If we fail to meet this guarantee, you'll receive service credits. Our robust infrastructure, redundant systems, and 24/7 monitoring ensure your website stays online and performs optimally."
    },
    {
      question: "Can I host multiple websites on one account?",
      answer: "Yes! Most of our plans support multiple websites. The Single plan allows 1 website, Premium supports up to 25 websites, Business supports 50 websites, and Cloud Startup supports up to 100 websites. You can manage all your websites from a single control panel for convenience."
    },
    {
      question: "Do you provide SSL certificates?",
      answer: "Absolutely! All our hosting plans include unlimited free SSL certificates. SSL certificates encrypt the connection between your website and visitors, protecting sensitive data and improving your search engine rankings. We automatically install and renew SSL certificates for all domains on your account."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced professionals who can help with technical issues, account management, and general questions. Average response time is under 2 minutes for live chat, and we offer support in multiple languages."
    },
    {
      question: "Are my website files automatically backed up?",
      answer: "Yes! We perform automatic backups of all websites. Single and Premium plans include weekly backups, while Business and Cloud Startup plans include daily backups. Backups are stored securely for 30 days, and you can restore your website to any previous backup point through your control panel."
    },
    {
      question: "Can I install WordPress and other CMS platforms?",
      answer: "Definitely! We offer one-click installation for WordPress, Joomla, Drupal, and over 100 other popular applications. Our hosting environment is optimized for these platforms, ensuring fast loading times and smooth performance. We also provide managed WordPress hosting with automatic updates and security features."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and offer upgrade options. We don't suspend accounts immediately for minor overages. Instead, we work with you to find the best solution, whether that's upgrading your plan or optimizing your website to reduce resource usage."
    },
    {
      question: "Do you offer email hosting with my domain?",
      answer: "Yes! All hosting plans include professional email hosting with your domain name. You get spam protection, webmail access, and the ability to set up email forwarding. The number of mailboxes varies by plan: Single includes 1 mailbox, Premium includes 2 per website, Business includes 5 per website, and Cloud Startup includes 10 per website."
    },
    {
      question: "Can I upgrade or downgrade my hosting plan?",
      answer: "Yes, you can upgrade or downgrade your hosting plan at any time through your account dashboard. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll prorate any charges accordingly, ensuring you only pay for what you use."
    },
    {
      question: "What programming languages and databases do you support?",
      answer: "We support PHP (multiple versions), Python, Node.js, MySQL, PostgreSQL, and more. Our hosting environment is compatible with most modern web technologies and frameworks. You can switch between different PHP versions through your control panel, and we provide access to databases, FTP, SSH, and other development tools."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, we'll refund your payment in full, no questions asked. This gives you peace of mind to try our services risk-free."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement multiple security layers including DDoS protection, malware scanning, web application firewalls, SSL certificates, and regular security updates. Our data centers are monitored 24/7 and comply with industry security standards. We also provide automatic malware removal and security incident response."
    },
    {
      question: "Can I get a staging environment for testing?",
      answer: "Yes! Business and Cloud Startup plans include staging environments where you can test changes, updates, and new features safely before pushing them to your live website. This ensures your live site remains stable while you experiment with new designs or functionality."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and various local payment methods including EasyPaisa and JazzCash. All transactions are processed securely using industry-standard encryption, and there are no setup fees."
    },
    {
      question: "Do you provide CDN services?",
      answer: "Yes! Business and Cloud Startup plans include free CDN (Content Delivery Network) services. Our CDN speeds up your website by serving content from servers closest to your visitors, reducing loading times and improving user experience globally. This is especially beneficial for websites with international audiences."
    },
    {
      question: "How do I get started with web hosting?",
      answer: "Getting started is easy! Simply choose your hosting plan, complete the signup process, and we'll set up your account immediately. You can then upload your website files, install applications like WordPress with one click, or use our website builder. Our support team is available 24/7 to help you through the process."
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
      { title: 'WordPress Features', items: features.wordpress || [] },
      { title: 'Security Features', items: features.security || [] }
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-secondary-green/20 text-main-green px-4 py-2 rounded-full text-sm font-medium">
                Up to 70% off Web hosting
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Secure. Speedy. The way your website should be
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free domain and website migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Run WordPress and other CMS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Fully Managed Web Hosting</span>
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
                    03:16:53:40
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Right Side - Hosting Dashboard Mockup */}
            <div className="relative">
              {/* Performance Score Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Performance score for</div>
                  <div className="text-sm font-medium text-gray-800 mb-3">mynewpage.online</div>
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

              {/* Main Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Server className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">KIRODS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">SSL certificate</span>
                      <span className="bg-main-green text-white px-2 py-1 rounded text-xs font-medium">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Management Panel */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Management Panel</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-6 h-6 bg-main-green rounded flex items-center justify-center">
                          <span className="text-white text-xs">📊</span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Business</div>
                      <div className="text-xs text-gray-600 mb-2">Active</div>
                      <button className="text-xs text-main-green hover:text-secondary-green">See details</button>
                    </div>
                    
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Globe className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Domain</div>
                      <div className="text-xs text-gray-600 mb-2">Active</div>
                      <button className="text-xs text-main-green hover:text-secondary-green">Manage</button>
                    </div>
                    
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Mail className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Business Email</div>
                      <div className="text-xs text-gray-600 mb-2">Active</div>
                      <button className="text-xs text-main-green hover:text-secondary-green">Manage</button>
                    </div>
                    
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <HardDrive className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Daily backups</div>
                      <div className="text-xs text-gray-600 mb-2">Enabled</div>
                      <button className="text-xs text-main-green hover:text-secondary-green">Manage</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <FileText className="h-4 w-4 mr-2 text-main-green" />
                      File manager
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <Database className="h-4 w-4 mr-2 text-main-green" />
                      Databases
                    </button>
                    <button className="flex items-center justify-center p-3 bg-background-green rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      <div className="w-4 h-4 mr-2 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">W</span>
                      </div>
                      WordPress overview
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-main-green" />
                        <span className="font-medium text-gray-800">Safe</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">No malware found</div>
                      <button className="text-sm text-main-green hover:text-secondary-green">See malware scanner</button>
                    </div>
                    
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                          alt="Migration completed"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-800">Your website migration</div>
                          <div className="text-sm text-gray-600">has been completed</div>
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

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="font-bold text-lg text-gray-800 mb-2">{logo.name}</div>
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
              Pick your perfect plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free.
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
                        <span className="text-gray-400 line-through text-sm">Rs.{plan.originalPrice}</span>
                        <span className="bg-secondary-green/20 text-main-green px-2 py-1 rounded text-xs font-medium">
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

      {/* AI Website Launch Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - AI Interface Mockup */}
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/10 rounded-full opacity-40 blur-2xl"></div>
              
              {/* Main AI Interface */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* AI Content Creation Panel */}
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Automate Your Post Creation with AI</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-main-green rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary-green rounded-full"></div>
                      <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-main-green h-2 rounded-full"></div>
                    </div>
                  </div>
                  <button className="w-full bg-main-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300 flex items-center justify-center">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate content
                  </button>
                </div>

                {/* AI Progress Indicator */}
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-6 w-6 text-main-green animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">Brewing content with magic</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-main-green h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WordPress Logo */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Effortless website launch powered by AI
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      Move your site online seamlessly with our AI-driven <strong>Kirods Blog Theme</strong>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      Use the <strong>AI Assistant</strong> plugin to create original and SEO-friendly content.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      Choose from <strong>AI-selected images</strong> for your content.
                    </p>
                  </div>
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
            {/* Left Side - Performance Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Page Speed Interface */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Page speed</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose a website</label>
                    <input
                      type="text"
                      value="mynewpage.online"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      readOnly
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose a website</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="device" value="desktop" defaultChecked className="mr-2" />
                        <span className="text-sm">Desktop</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="device" value="mobile" className="mr-2" />
                        <span className="text-sm">Mobile</span>
                      </label>
                    </div>
                  </div>

                  <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors">
                    Analyze
                  </button>
                </div>

                {/* Performance Score */}
                <div className="bg-white rounded-2xl p-6 mt-6 shadow-xl">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-800 mb-4">Performance score for mynewpage.online</h4>
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-24 h-24 rounded-full border-8 border-main-green flex items-center justify-center">
                        <span className="text-3xl font-bold text-main-green">99</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
                        <span>0-49</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                        <span>50-89</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-main-green rounded-full mr-1"></div>
                        <span>90-100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Superior website performance
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      <strong>NVMe storage</strong> for a guaranteed minimal latency and maximum speed.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      Deliver lightning-fast browsing experiences through our in-house <strong>CDN</strong>, <strong>ObjectCache</strong>, and cutting-edge <strong>LiteSpeed</strong> Web Server technology.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-lg text-green-100 leading-relaxed">
                      Enjoy <strong>unlimited bandwidth</strong> and manage peak traffic like a pro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Elevation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Web host that elevates your business
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Get ready for traffic surges – try an advanced-level plan for <strong>free with the 24-hour boost feature</strong>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Expand your website's resources with our <strong>scalable web hosting options</strong>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Enhance your online presence with a <strong>free .com, .net, and over 20</strong> domain name extensions.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Enjoy stellar uptime and fast content delivery through our <strong>global data centre network</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Business Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Success Notification */}
                <div className="bg-main-green text-white p-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">The server transfer was successful</span>
                  </div>
                </div>

                {/* Server Location Panel */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Change Your Server Location</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Choose server location</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Europe (United Kingdom)</option>
                      <option>Asia (Singapore)</option>
                      <option>North America (USA)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="w-12 h-12 bg-main-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <Database className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-gray-800">Server Status</div>
                    </div>
                    <div className="text-center p-4 bg-background-green rounded-lg">
                      <div className="w-12 h-12 bg-main-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-gray-800">Plan Boosting is Activated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Migration Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Migration Interface Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Migration Tabs */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex space-x-6">
                    <button className="text-main-green font-medium border-b-2 border-main-green pb-2">WordPress</button>
                    <button className="text-gray-600 hover:text-main-green">cPanel & WHM</button>
                    <button className="text-gray-600 hover:text-main-green">Other control panel</button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-main-green rounded-full flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Migration Form */}
                <div className="p-6">
                  <div className="bg-background-green rounded-lg p-4 mb-6">
                    <h3 className="font-bold text-gray-800 mb-4">1 Select destination website</h3>
                    <input
                      type="text"
                      value="gohandmadecrafts.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      readOnly
                    />
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">2 Provide website files</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">WordPress account login</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          placeholder="WordPress account login"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Username</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="Username"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-main-green/10 border border-main-green rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-main-green" />
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
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Move unlimited websites seamlessly with our <strong>Automatic Website Migration tool</strong>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Leave the heavy lifting to our <strong>dedicated migration team</strong> for a hassle-free transfer.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>No interruptions</strong> – your website remains accessible throughout the entire migration process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-green p-6 rounded-xl shadow-lg">
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
                <div className="mt-4 flex items-center justify-end">
                  <ChevronRight className="h-5 w-5 text-main-green" />
                </div>
              </div>
            ))}
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
                  Secure hosting solutions
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Free SSL certificates</strong> with automatic installation to protect your clients' sensitive data.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Malware scanner</strong> to identify and remove harmful files promptly.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Comprehensive <strong>privacy protection</strong> measures to safeguard your personal information.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Protect your website against unauthorized access with <strong>IP and country blocking</strong>, included with Kirods CDN.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Security Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Security Header */}
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-main-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your website is safe!</h3>
                  <p className="text-gray-600">No malware found over the last 5 days</p>
                </div>

                {/* Security Features */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <span className="font-medium text-gray-800">WHOIS Privacy</span>
                    <span className="bg-main-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      FREE
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-background-green rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Lock className="h-6 w-6 text-main-green" />
                      <span className="font-medium text-gray-800">Security</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background-green rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">SSL certificate</span>
                      <span className="bg-main-green text-white px-3 py-1 rounded-full text-xs font-medium">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Ensure your website data is encrypted with the most recent SSL</p>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our web hosting services, features, and support. 
              Can't find what you're looking for? Contact our support team.
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
                Our web hosting experts are here to help you 24/7. Get personalized assistance for your specific needs.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;