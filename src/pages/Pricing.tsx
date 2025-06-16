import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, Shield, Zap, Globe, Server, Cloud, Users, Award, MessageCircle, Star, Mail } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState('web-hosting');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const plans = [
    {
      id: 'single',
      name: 'Single',
      description: 'Ideal solution for beginners',
      monthlyPrice: 599,
      annualPrice: 399,
      discount: 'SAVE 71%',
      originalPrice: 1399,
      features: [
        { name: '1 website', included: true },
        { name: 'Managed hosting for WordPress', included: true },
        { name: '~10,000 visits monthly', included: true },
        { name: '10 GB SSD storage', included: true },
        { name: '200,000 files and directories (inodes)', included: true },
        { name: 'Free domain (₹2,499 value)', included: false },
        { name: '1 mailbox - free for 1 year', included: true },
        { name: 'Unlimited free SSL', included: true },
        { name: 'Weekly backups', included: true },
        { name: '100 GB bandwidth', included: true },
        { name: 'AI SEO ready', included: true },
        { name: 'Free CDN', included: false },
        { name: 'WordPress AI tools', included: false },
        { name: 'WordPress staging tool', included: false }
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Everything you need for your website',
      monthlyPrice: 899,
      annualPrice: 599,
      discount: 'SAVE 70%',
      originalPrice: 1999,
      features: [
        { name: '25 websites', included: true },
        { name: 'Managed hosting for WordPress', included: true },
        { name: '~25,000 visits monthly', included: true },
        { name: '25 GB SSD storage', included: true },
        { name: '400,000 files and directories (inodes)', included: true },
        { name: 'Free domain (₹2,499 value)', included: true },
        { name: '2 mailboxes per website - free for 1 year', included: true },
        { name: 'Unlimited free SSL', included: true },
        { name: 'Weekly backups', included: true },
        { name: 'Unlimited bandwidth', included: true },
        { name: 'AI SEO ready', included: true },
        { name: 'Free CDN', included: false },
        { name: 'WordPress AI tools', included: false },
        { name: 'WordPress staging tool', included: false }
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Level up with more power and features',
      monthlyPrice: 1199,
      annualPrice: 799,
      discount: 'SAVE 68%',
      originalPrice: 2499,
      features: [
        { name: '50 websites', included: true },
        { name: 'Managed hosting for WordPress', included: true },
        { name: '~100,000 visits monthly', included: true },
        { name: '50 GB NVMe storage', included: true },
        { name: '600,000 files and directories (inodes)', included: true },
        { name: 'Free domain (₹2,499 value)', included: true },
        { name: '5 mailboxes per website - free for 1 year', included: true },
        { name: 'Unlimited free SSL', included: true },
        { name: 'Daily and on-demand backups', included: true },
        { name: 'Unlimited bandwidth', included: true },
        { name: 'AI SEO ready', included: true },
        { name: 'Free CDN', included: true },
        { name: 'WordPress AI tools', included: true },
        { name: 'WordPress staging tool', included: true }
      ],
      popular: false
    },
    {
      id: 'cloud',
      name: 'Cloud Startup',
      description: 'Optimized performance & resources',
      monthlyPrice: 3099,
      annualPrice: 2099,
      discount: 'SAVE 63%',
      originalPrice: 5699,
      features: [
        { name: '100 websites', included: true },
        { name: 'Managed hosting for WordPress', included: true },
        { name: '~200,000 visits monthly', included: true },
        { name: '100 GB NVMe storage', included: true },
        { name: '2,000,000 files and directories (inodes)', included: true },
        { name: 'Free domain (₹2,499 value)', included: true },
        { name: '10 mailboxes per website - free for 1 year', included: true },
        { name: 'Unlimited free SSL', included: true },
        { name: 'Daily and on-demand backups', included: true },
        { name: 'Unlimited bandwidth', included: true },
        { name: 'AI SEO ready', included: true },
        { name: 'Free CDN', included: true },
        { name: 'WordPress AI tools', included: true },
        { name: 'WordPress staging tool', included: true }
      ],
      popular: false
    }
  ];

  const productComparison = [
    {
      category: 'Web hosting',
      description: 'Perfect for beginners. Everything you need to take your idea online.',
      ecommerce: '600 products',
      simplicity: 'High',
      serverControl: 'Low',
      scalability: 'Medium',
      icon: <Globe className="h-6 w-6" />
    },
    {
      category: 'WordPress hosting',
      description: 'Optimized hosting for the world\'s most popular CMS. For medium size websites.',
      ecommerce: '5,000 products',
      simplicity: 'High',
      serverControl: 'Low',
      scalability: 'Medium',
      icon: <Zap className="h-6 w-6" />
    },
    {
      category: 'Cloud hosting',
      description: 'Take your business to the next level. Perfect for client website management.',
      ecommerce: '5,000 products',
      simplicity: 'High',
      serverControl: 'Low',
      scalability: 'High',
      icon: <Cloud className="h-6 w-6" />
    }
  ];

  const includedFeatures = [
    {
      title: 'Website Builder',
      description: 'Build your website in 3 simple steps, with AI tools. You\'ll be going live in minutes.',
      icon: <Globe className="h-10 w-10 text-main-green" />
    },
    {
      title: 'Total Security',
      description: 'Relax, your websites and visitors are protected by the latest security software.',
      icon: <Shield className="h-10 w-10 text-main-green" />
    },
    {
      title: '99.9% Uptime Guarantee',
      description: 'Our 99.9% uptime guarantee means your website is always available.',
      icon: <Zap className="h-10 w-10 text-main-green" />
    },
    {
      title: 'Simple Dashboard',
      description: 'Designed to be easy-to-use for beginners and professionals alike.',
      icon: <Server className="h-10 w-10 text-main-green" />
    },
    {
      title: '24/7 Customer Support',
      description: 'Access expert support whenever you need it. We typically respond in under 2 minutes.',
      icon: <MessageCircle className="h-10 w-10 text-main-green" />
    }
  ];

  const testimonials = [
    {
      text: "I've tried many hosting providers, but Kirods offers the best value for money. Their customer support is exceptional and the uptime is truly 99.9% as promised.",
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      rating: 5
    },
    {
      text: "The migration process was seamless. My website was transferred without any downtime, and the performance improved significantly after moving to Kirods.",
      name: "Michael Chen",
      company: "E-commerce Store Owner",
      rating: 5
    },
    {
      text: "As a web developer managing multiple client websites, I find Kirods' dashboard incredibly intuitive. The pricing is transparent with no hidden fees.",
      name: "Emily Rodriguez",
      company: "Web Development Studio",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What's included in all hosting plans?",
      answer: "All our hosting plans include SSD storage, free SSL certificates, daily backups, 24/7 support, one-click WordPress installation, and a 99.9% uptime guarantee. Higher-tier plans include additional features like priority support, advanced security, and more storage."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your hosting plan at any time through your account dashboard. Upgrades take effect immediately, and you'll only pay the prorated difference. Downgrades take effect at your next billing cycle."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, we'll refund your payment in full, no questions asked."
    },
    {
      question: "How does the free domain offer work?",
      answer: "Premium plans and above include a free domain registration for the first year. You can choose from a wide range of domain extensions. After the first year, the domain will renew at the standard rate unless you choose not to renew."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and various local payment methods. All transactions are processed securely using industry-standard encryption."
    },
    {
      question: "Can I host multiple websites on one account?",
      answer: "Yes, depending on your plan. The Single plan allows 1 website, Premium allows 25 websites, Business allows 50 websites, and Cloud Startup allows 100 websites. All websites on your account share the allocated resources."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced professionals who can help with technical issues, account management, and general questions. Average response time is under 2 minutes."
    },
    {
      question: "How do I migrate my existing website?",
      answer: "We offer free website migration for all new customers. Our expert team will handle the entire migration process, ensuring zero downtime and no data loss. The migration typically takes 24-48 hours to complete."
    },
    {
      question: "What is the difference between SSD and NVMe storage?",
      answer: "Both SSD (Solid State Drive) and NVMe (Non-Volatile Memory Express) are fast storage technologies, but NVMe is significantly faster. NVMe storage, available in our Business and Cloud plans, offers up to 5x faster read/write speeds compared to traditional SSDs."
    },
    {
      question: "Do you provide email hosting?",
      answer: "Yes, all hosting plans include professional email hosting with your domain name. You get spam protection, webmail access, and the ability to set up email forwarding. Business plans include additional mailboxes and advanced email features."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime for all hosting services. If we fail to meet this guarantee, you'll receive service credits. Our robust infrastructure and redundant systems ensure your website stays online and accessible to your visitors."
    },
    {
      question: "Can I install WordPress and other applications?",
      answer: "Yes, we offer one-click installation for WordPress, Joomla, Drupal, and over 100 other popular applications. Our hosting environment is optimized for these platforms, ensuring fast loading times and smooth performance."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement multiple security layers including DDoS protection, malware scanning, web application firewalls, SSL certificates, and regular security updates. Our data centers are monitored 24/7 and comply with industry security standards."
    },
    {
      question: "Is there a setup fee for new accounts?",
      answer: "No, there are no setup fees for any of our hosting plans. The price you see is the price you pay. We believe in transparent pricing with no hidden costs or surprise charges."
    },
    {
      question: "What happens if I exceed my bandwidth or storage limits?",
      answer: "We'll notify you before you reach your limits and offer upgrade options. We don't suspend accounts immediately for minor overages. Instead, we work with you to find the best solution, whether that's upgrading your plan or optimizing your website."
    },
    {
      question: "Do you provide website building tools?",
      answer: "Yes, we include a drag-and-drop website builder with all hosting plans. It features professional templates, mobile responsiveness, and no coding required. You can create a complete website in minutes, even without technical experience."
    },
    {
      question: "How do I access my hosting control panel?",
      answer: "After signup, you'll receive login credentials for your hosting control panel. You can access it through our website or directly via the provided URL. The control panel gives you complete control over your hosting account and website files."
    },
    {
      question: "What programming languages and databases do you support?",
      answer: "We support PHP (multiple versions), Python, Node.js, MySQL, PostgreSQL, and more. Our hosting environment is compatible with most modern web technologies and frameworks, giving developers flexibility in their projects."
    },
    {
      question: "Can I get a dedicated IP address?",
      answer: "Yes, dedicated IP addresses are available as an add-on service or included with higher-tier plans. A dedicated IP can be useful for SSL certificates, email deliverability, and accessing your website via FTP when DNS changes are propagating."
    },
    {
      question: "Do you offer domain privacy protection?",
      answer: "Yes, domain privacy protection is included free with Premium plans and above. This service hides your personal information from the public WHOIS database, protecting you from spam, identity theft, and unwanted solicitations."
    }
  ];

  const paymentMethods = [
    { name: 'Credit Card', description: 'Visa, MasterCard, American Express' },
    { name: 'PayPal', description: 'Secure PayPal checkout' },
    { name: 'Bank Transfer', description: 'Direct bank transfer' },
    { name: 'Local Payment Methods', description: 'Various local options' }
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background-green to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Launch online: Affordable plans and services
            </h1>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button 
                onClick={() => setActiveTab('web-hosting')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'web-hosting' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>Web hosting</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('website-builder')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'website-builder' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Zap className="h-4 w-4" />
                <span>Website Builder</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('horizons')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'horizons' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Server className="h-4 w-4" />
                <span>Horizons</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('vps-hosting')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'vps-hosting' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Server className="h-4 w-4" />
                <span>VPS hosting</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('domains')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'domains' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>Domains</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('email')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'email' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('n8n-vps')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'n8n-vps' ? 'bg-main-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Server className="h-4 w-4" />
                <span>n8n VPS hosting</span>
              </button>
            </div>
            
            {/* Subscription Length & Type Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              <div>
                <label className="block text-sm text-gray-600 mb-2 text-left">Type of hosting</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 relative">
                  <option>Web hosting</option>
                  <option>WordPress hosting</option>
                  <option>Cloud hosting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2 text-left">Length of subscription</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 relative">
                  <option>48 months</option>
                  <option>24 months</option>
                  <option>12 months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-main-green' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-main-green text-white text-center py-2 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-10' : ''}`}>
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
                        <span className="text-sm text-gray-600">Rs.</span>
                        <span className="text-4xl font-bold text-text-dark">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span className="text-gray-600 ml-1">/mo</span>
                      </div>
                      {isAnnual && plan.id !== 'single' && (
                        <p className="text-main-green text-sm font-medium mt-1">+3 months free</p>
                      )}
                    </div>

                    {/* Choose Plan Button */}
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mb-4 ${
                        plan.popular
                          ? 'bg-main-green text-white hover:bg-secondary-green'
                          : 'border-2 border-main-green text-main-green hover:bg-background-green'
                      }`}
                    >
                      Choose plan
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <ul className="space-y-1">
                      {plan.features.slice(0, 12).map((feature, index) => (
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
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-600">
            All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan.
          </div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Find the right hosting for you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {productComparison.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-4">
                    {index === 0 ? 'FOR SMALL TO MEDIUM WEBSITES' : 
                     index === 1 ? 'FOR FANS OF WORDPRESS' : 
                     'FOR LARGE SCALE PROJECTS'}
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-main-green/10 rounded-lg">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-text-dark">{product.category}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 min-h-[60px]">{product.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ecommerce</span>
                    <span className="font-medium text-text-dark">{product.ecommerce}</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700">Simplicity</span>
                      <span className="font-medium text-text-dark">{product.simplicity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-main-green h-2 rounded-full ${
                        product.simplicity === 'High' ? 'w-full' : 
                        product.simplicity === 'Medium' ? 'w-2/3' : 'w-1/3'
                      }`}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700">Server control</span>
                      <span className="font-medium text-text-dark">{product.serverControl}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-main-green h-2 rounded-full ${
                        product.serverControl === 'High' ? 'w-full' : 
                        product.serverControl === 'Medium' ? 'w-2/3' : 'w-1/3'
                      }`}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700">Scalability</span>
                      <span className="font-medium text-text-dark">{product.scalability}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-main-green h-2 rounded-full ${
                        product.scalability === 'High' ? 'w-full' : 
                        product.scalability === 'Medium' ? 'w-2/3' : 'w-1/3'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
              Compare Plans
            </button>
          </div>
        </div>
      </section>

      {/* Included Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Included with every plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-background-green rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-dark text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust Kirods for their hosting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-text-dark">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              We accept all major payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-background-green rounded-lg p-6 text-center shadow-md">
                <h3 className="font-semibold text-text-dark mb-2">{method.name}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-dark mb-4">
                Special Offers
              </h2>
              <p className="text-xl text-gray-600">
                Limited time deals for new customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-main-green to-secondary-green rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">New Customer Discount</h3>
                <p className="mb-4">Get 50% off your first year with any plan</p>
                <div className="text-2xl font-bold">Use code: WELCOME50</div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary-green to-accent-green rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Startup Discount</h3>
                <p className="mb-4">Startups get 30% off all plans for 6 months</p>
                <div className="text-2xl font-bold">Use code: STARTUP30</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our hosting services and plans
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Choose your perfect plan today and launch your website with confidence.
            All plans come with our 30-day money-back guarantee.
          </p>
          <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;