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
  Palette,
  Layout,
  Smartphone,
  Monitor,
  Code,
  Wand2,
  Image,
  Type,
  MousePointer,
  Eye,
  Settings,
  Play,
  HelpCircle
} from 'lucide-react';

const WebsiteBuilder = () => {
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
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started',
      originalPrice: 0,
      currentPrice: 0,
      discount: 'FREE FOREVER',
      renewalPrice: 0,
      features: [
        { name: 'Kirods subdomain', included: true },
        { name: '1 website', included: true },
        { name: '50+ templates', included: true },
        { name: 'Drag & drop editor', included: true },
        { name: 'Mobile responsive', included: true },
        { name: 'Basic SEO tools', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Custom domain', included: false },
        { name: 'Remove Kirods branding', included: false },
        { name: 'AI tools', included: false }
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Best for personal websites',
      originalPrice: 599,
      currentPrice: 299,
      discount: 'SAVE 50%',
      renewalPrice: 499,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Free custom domain', included: true, badge: 'FREE' },
        { name: '1 website', included: true },
        { name: '150+ templates', included: true },
        { name: 'Drag & drop editor', included: true },
        { name: 'Mobile responsive', included: true },
        { name: 'Advanced SEO tools', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Remove Kirods branding', included: true },
        { name: 'AI content generator', included: true, badge: 'NEW' },
        { name: 'Priority support', included: true }
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Perfect for growing businesses',
      originalPrice: 1299,
      currentPrice: 699,
      discount: 'SAVE 46%',
      renewalPrice: 1099,
      bonusMonths: '+3 months free',
      features: [
        { name: 'Free custom domain', included: true, badge: 'FREE' },
        { name: '10 websites', included: true },
        { name: '150+ templates', included: true },
        { name: 'Drag & drop editor', included: true },
        { name: 'Mobile responsive', included: true },
        { name: 'Advanced SEO tools', included: true },
        { name: 'SSL certificate', included: true },
        { name: 'Remove Kirods branding', included: true },
        { name: 'AI content generator', included: true, badge: 'NEW' },
        { name: 'Business email', included: true },
        { name: 'Analytics dashboard', included: true },
        { name: 'Priority support', included: true }
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

  const builderFeatures = [
    {
      text: "Create stunning websites with our intuitive drag-and-drop editor - no coding required.",
      included: true
    },
    {
      text: "Choose from 150+ professionally designed templates for any industry or purpose.",
      included: true
    },
    {
      text: "AI-powered content generation helps you create compelling copy in seconds.",
      included: true
    },
    {
      text: "Mobile-responsive designs ensure your site looks perfect on all devices.",
      included: true
    }
  ];

  const aiFeatures = [
    {
      text: "AI Content Writer generates engaging text for your website automatically.",
      included: true
    },
    {
      text: "Smart image suggestions help you find the perfect visuals for your content.",
      included: true
    },
    {
      text: "SEO optimization recommendations improve your search engine rankings.",
      included: true
    },
    {
      text: "Color palette generator creates beautiful, cohesive designs instantly.",
      included: true
    }
  ];

  const designFeatures = [
    {
      text: "Professional templates designed by experts for maximum impact.",
      included: true
    },
    {
      text: "Customizable layouts that adapt to your brand and content needs.",
      included: true
    },
    {
      text: "Advanced typography controls for perfect text presentation.",
      included: true
    },
    {
      text: "Interactive elements and animations to engage your visitors.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "The website builder is incredibly easy to use. I had my site up and running in just a few hours, and it looks professional!",
      stars: 5
    },
    {
      text: "I love the AI features - they helped me write content and choose colors. It's like having a design assistant built right in.",
      stars: 5
    },
    {
      text: "The templates are beautiful and the drag-and-drop editor makes customization so simple. Highly recommend!",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "Do I need coding skills to use the website builder?",
      answer: "No coding skills required! Our drag-and-drop website builder is designed for everyone. Simply choose a template, customize it with your content, and publish your site. The intuitive interface makes it easy to create professional websites without any technical knowledge."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! With our Premium and Business plans, you get a free custom domain for the first year. You can also connect an existing domain you already own. Free plans include a Kirods subdomain (yoursite.kirods.com)."
    },
    {
      question: "Are the websites mobile-friendly?",
      answer: "Absolutely! All our templates are fully responsive and automatically adapt to different screen sizes. Your website will look great on desktops, tablets, and smartphones without any additional work required."
    },
    {
      question: "What AI features are included?",
      answer: "Our AI tools include content generation, image suggestions, SEO optimization recommendations, and color palette creation. The AI can help write compelling copy, suggest relevant images, and provide tips to improve your site's search engine visibility."
    },
    {
      question: "Can I sell products on my website?",
      answer: "Yes! Our Business plan includes e-commerce features that allow you to sell products online. You can add product catalogs, shopping carts, payment processing, and inventory management to create a complete online store."
    },
    {
      question: "How many templates are available?",
      answer: "We offer over 150 professionally designed templates across various industries including business, portfolio, blog, restaurant, fitness, and more. All templates are fully customizable and regularly updated with new designs."
    },
    {
      question: "Can I change my template after publishing?",
      answer: "Yes, you can switch templates at any time. Your content will be preserved when changing templates, though you may need to adjust the layout to fit the new design. We recommend previewing changes before publishing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support through live chat and email. Premium and Business plan users get priority support with faster response times. We also provide extensive documentation, video tutorials, and a community forum."
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
                <Wand2 className="h-4 w-4 mr-2" />
                AI-Powered Website Builder
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Build stunning websites with AI assistance
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Drag & drop editor - no coding required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">150+ professional templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">AI content generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Mobile responsive designs</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Starting at Rs.</span>
                  <span className="text-5xl font-bold text-text-dark">299</span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-main-green font-medium">+3 months free</div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
                    Start Building
                  </button>
                  <button className="text-main-green px-8 py-3 rounded-lg font-semibold border border-main-green hover:bg-background-green transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  Free plan available • No credit card required
                </div>
              </div>
            </div>

            {/* Right Side - Website Builder Mockup */}
            <div className="relative">
              {/* AI Assistant Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="flex items-center space-x-2">
                  <Wand2 className="h-5 w-5 text-main-green" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">AI Assistant</div>
                    <div className="text-xs text-gray-600">Ready to help</div>
                  </div>
                </div>
              </div>

              {/* Main Builder Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Builder Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Layout className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">Website Builder</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-gray-600" />
                      <Smartphone className="h-4 w-4 text-main-green" />
                    </div>
                  </div>
                </div>

                {/* Builder Canvas */}
                <div className="p-6">
                  <div className="bg-gradient-to-br from-main-green to-secondary-green rounded-lg p-6 text-white mb-4">
                    <h3 className="text-xl font-bold mb-2">Your Business Name</h3>
                    <p className="text-green-100 mb-4">Professional services that deliver results</p>
                    <button className="bg-white text-main-green px-4 py-2 rounded font-medium">
                      Get Started
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="bg-background-green p-4 rounded-lg">
                      <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Drag elements here</span>
                    <Eye className="h-4 w-4" />
                  </div>
                </div>

                {/* Design Tools Sidebar */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <div className="grid grid-cols-4 gap-2">
                    <button className="p-2 bg-white rounded border border-gray-200 hover:border-main-green transition-colors">
                      <Type className="h-4 w-4 text-gray-600 mx-auto" />
                    </button>
                    <button className="p-2 bg-white rounded border border-gray-200 hover:border-main-green transition-colors">
                      <Image className="h-4 w-4 text-gray-600 mx-auto" />
                    </button>
                    <button className="p-2 bg-white rounded border border-gray-200 hover:border-main-green transition-colors">
                      <Palette className="h-4 w-4 text-gray-600 mx-auto" />
                    </button>
                    <button className="p-2 bg-main-green rounded border border-main-green">
                      <Wand2 className="h-4 w-4 text-white mx-auto" />
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
              Choose your perfect plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Start for free or upgrade to unlock advanced features and remove limitations.
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
                      {plan.originalPrice > 0 && (
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-gray-400 line-through text-sm">Rs.{plan.originalPrice}</span>
                          <span className="bg-main-green/10 text-main-green px-2 py-1 rounded text-xs font-medium">
                            {plan.discount}
                          </span>
                        </div>
                      )}
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
                          : plan.currentPrice === 0
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'border-2 border-main-green text-main-green hover:bg-background-green'
                      }`}
                    >
                      {plan.currentPrice === 0 ? 'Start Free' : 'Choose Plan'}
                    </button>

                    {plan.renewalPrice > 0 && (
                      <p className="text-xs text-gray-500 text-center">
                        Renews at Rs.{plan.renewalPrice}/mo. Cancel anytime.
                      </p>
                    )}
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

      {/* Builder Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Builder Interface Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Template Selection */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Choose a Template</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-main-green rounded-lg p-3 bg-main-green/5">
                      <div className="w-full h-24 bg-gradient-to-br from-main-green to-secondary-green rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Business Pro</div>
                      <div className="text-xs text-gray-600">Professional services</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Creative Studio</div>
                      <div className="text-xs text-gray-600">Portfolio & gallery</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">Restaurant</div>
                      <div className="text-xs text-gray-600">Food & dining</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-main-green transition-colors">
                      <div className="w-full h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded mb-2"></div>
                      <div className="text-sm font-medium text-gray-800">E-commerce</div>
                      <div className="text-xs text-gray-600">Online store</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Powerful drag & drop builder
                </h2>
                
                <div className="space-y-6">
                  {builderFeatures.map((feature, index) => (
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

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-powered design assistance
                </h2>
                
                <div className="space-y-6">
                  {aiFeatures.map((feature, index) => (
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

            {/* Right Side - AI Interface Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* AI Content Generator */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Wand2 className="h-5 w-5 text-main-green" />
                    <h3 className="font-bold text-gray-800">AI Content Generator</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">What's your business about?</label>
                      <input 
                        type="text" 
                        value="Professional web design services" 
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                        readOnly
                      />
                    </div>
                    <button className="w-full bg-main-green text-white py-2 rounded-lg font-medium text-sm">
                      Generate Content
                    </button>
                  </div>
                </div>

                {/* Generated Content Preview */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Generated Content:</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="bg-background-green p-3 rounded">
                      "Transform your online presence with our expert web design services..."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">AI generated in 2.3s</span>
                      <button className="text-main-green text-xs font-medium">Use This</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Features Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Design Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Color Palette */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Design Customization</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Color Palette</label>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-main-green rounded border-2 border-gray-300"></div>
                        <div className="w-8 h-8 bg-secondary-green rounded"></div>
                        <div className="w-8 h-8 bg-accent-green rounded"></div>
                        <div className="w-8 h-8 bg-gray-800 rounded"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Typography</label>
                      <select className="w-full p-2 border border-gray-300 rounded text-sm">
                        <option>Inter - Modern & Clean</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Layout Style</label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="border-2 border-main-green bg-main-green/10 p-2 rounded text-center">
                          <div className="w-full h-8 bg-main-green/20 rounded mb-1"></div>
                          <div className="text-xs">Modern</div>
                        </div>
                        <div className="border border-gray-300 p-2 rounded text-center">
                          <div className="w-full h-8 bg-gray-200 rounded mb-1"></div>
                          <div className="text-xs">Classic</div>
                        </div>
                        <div className="border border-gray-300 p-2 rounded text-center">
                          <div className="w-full h-8 bg-gray-200 rounded mb-1"></div>
                          <div className="text-xs">Minimal</div>
                        </div>
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
                  Professional design made simple
                </h2>
                
                <div className="space-y-6">
                  {designFeatures.map((feature, index) => (
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
              What our users say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who've built amazing websites with our builder.
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
              Website Builder FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our website builder and features.
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
              <h3 className="text-2xl font-bold mb-4">Ready to start building?</h3>
              <p className="text-green-100 mb-6">
                Create your website today with our powerful, easy-to-use builder.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Start Building Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteBuilder;