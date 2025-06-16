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
  RefreshCw,
  Lock,
  Smartphone,
  Monitor,
  Settings,
  Play,
  HelpCircle,
  TrendingUp,
  Award,
  Users,
  FileText
} from 'lucide-react';

const DomainTransfer = () => {
  const [transferDomain, setTransferDomain] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [transferStep, setTransferStep] = useState(1);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const transferSteps = [
    {
      step: 1,
      title: 'Enter Domain',
      description: 'Enter the domain you want to transfer'
    },
    {
      step: 2,
      title: 'Authorization Code',
      description: 'Provide the EPP/Auth code from your current registrar'
    },
    {
      step: 3,
      title: 'Verification',
      description: 'We verify the domain and initiate the transfer'
    },
    {
      step: 4,
      title: 'Complete',
      description: 'Transfer completes in 5-7 days'
    }
  ];

  const trustLogos = [
    { name: 'Trustpilot', rating: '4.7', reviews: '46,826', stars: 5 },
    { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
    { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
    { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
  ];

  const transferFeatures = [
    {
      text: "Free domain transfers for most extensions with 1-year extension included.",
      included: true
    },
    {
      text: "Expert transfer assistance to guide you through the entire process.",
      included: true
    },
    {
      text: "No downtime during transfer - your website stays online throughout.",
      included: true
    },
    {
      text: "Free WHOIS privacy protection and DNS management included.",
      included: true
    }
  ];

  const securityFeatures = [
    {
      text: "Secure transfer process with domain lock protection during transfer.",
      included: true
    },
    {
      text: "Email verification ensures only authorized transfers proceed.",
      included: true
    },
    {
      text: "Transfer protection prevents unauthorized domain hijacking.",
      included: true
    },
    {
      text: "Backup DNS ensures continuous website availability.",
      included: true
    }
  ];

  const supportFeatures = [
    {
      text: "24/7 transfer support team available throughout the process.",
      included: true
    },
    {
      text: "Real-time transfer status updates via email and dashboard.",
      included: true
    },
    {
      text: "Free post-transfer setup assistance and optimization.",
      included: true
    },
    {
      text: "Money-back guarantee if transfer fails due to our error.",
      included: true
    }
  ];

  const testimonials = [
    {
      text: "The domain transfer was seamless! The support team guided me through every step and my website never went down.",
      stars: 5
    },
    {
      text: "I was worried about transferring my business domain, but the process was smooth and completed faster than expected.",
      stars: 5
    },
    {
      text: "Excellent service! They handled all the technical details and kept me informed throughout the transfer process.",
      stars: 5
    }
  ];

  const faqs = [
    {
      question: "How long does a domain transfer take?",
      answer: "Most domain transfers complete within 5-7 days. The exact time depends on the domain extension and how quickly the current registrar responds to the transfer request. We'll keep you updated throughout the process with real-time status notifications."
    },
    {
      question: "Will my website go down during the transfer?",
      answer: "No! Your website will remain online throughout the entire transfer process. We maintain your existing DNS settings and only update the registrar information. There's no interruption to your website, email, or other services."
    },
    {
      question: "What is an authorization code (EPP code)?",
      answer: "An authorization code (also called EPP code or transfer key) is a unique password for your domain that proves you own it. You can get this code from your current registrar's control panel or by contacting their support team."
    },
    {
      question: "How much does domain transfer cost?",
      answer: "Domain transfers are free for most extensions, and we include a 1-year extension to your domain registration. You only pay the standard renewal price for the extension year. Some premium domains may have different pricing."
    },
    {
      question: "Can I transfer a recently registered domain?",
      answer: "Domains must be at least 60 days old before they can be transferred, as per ICANN regulations. If your domain was registered or transferred within the last 60 days, you'll need to wait until this period expires."
    },
    {
      question: "What happens to my DNS settings?",
      answer: "We automatically import your existing DNS settings during the transfer to ensure no service interruption. After the transfer, you can modify these settings through our advanced DNS management interface if needed."
    },
    {
      question: "Can I cancel a domain transfer?",
      answer: "Yes, you can cancel a domain transfer before it completes. However, once the transfer is approved by both registrars and completes, it cannot be reversed. You would need to initiate a new transfer back to the previous registrar."
    },
    {
      question: "What if my transfer fails?",
      answer: "If a transfer fails, we'll help identify the issue and guide you through resolving it. Common issues include incorrect authorization codes, domain locks, or expired contact information. Our support team will assist you throughout the process."
    }
  ];

  const handleTransferStart = () => {
    if (transferDomain.trim()) {
      setTransferStep(2);
    }
  };

  const handleAuthCodeSubmit = () => {
    if (authCode.trim()) {
      setTransferStep(3);
      // Simulate verification process
      setTimeout(() => {
        setTransferStep(4);
      }, 2000);
    }
  };

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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-main-green/10 text-main-green px-4 py-2 rounded-full text-sm font-medium">
                <RefreshCw className="h-4 w-4 mr-2" />
                Domain Transfer Service
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Transfer your domain with confidence
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Free transfers with 1-year extension</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">No website downtime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">Expert transfer assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-main-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">5-7 day completion</span>
                </div>
              </div>

              {/* Transfer Form */}
              <div className="bg-background-green p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Start your domain transfer</h3>
                
                {transferStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Domain to transfer
                      </label>
                      <input
                        type="text"
                        value={transferDomain}
                        onChange={(e) => setTransferDomain(e.target.value)}
                        placeholder="example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={handleTransferStart}
                      className="w-full bg-main-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300"
                    >
                      Check Transfer Eligibility
                    </button>
                  </div>
                )}

                {transferStep === 2 && (
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600 mb-2">
                      Transferring: <span className="font-medium">{transferDomain}</span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Authorization Code (EPP Code)
                      </label>
                      <input
                        type="text"
                        value={authCode}
                        onChange={(e) => setAuthCode(e.target.value)}
                        placeholder="Enter EPP/Auth code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Get this from your current registrar's control panel
                      </p>
                    </div>
                    <button
                      onClick={handleAuthCodeSubmit}
                      className="w-full bg-main-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300"
                    >
                      Initiate Transfer
                    </button>
                  </div>
                )}

                {transferStep === 3 && (
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green mx-auto"></div>
                    <div>
                      <div className="font-medium text-gray-800">Verifying domain...</div>
                      <div className="text-sm text-gray-600">This may take a few moments</div>
                    </div>
                  </div>
                )}

                {transferStep === 4 && (
                  <div className="text-center space-y-4">
                    <CheckCircle className="h-12 w-12 text-main-green mx-auto" />
                    <div>
                      <div className="font-bold text-gray-800 text-lg">Transfer Initiated!</div>
                      <div className="text-sm text-gray-600">
                        We've started the transfer process. You'll receive email updates on the progress.
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setTransferStep(1);
                        setTransferDomain('');
                        setAuthCode('');
                      }}
                      className="text-main-green font-medium hover:text-secondary-green transition-colors duration-300"
                    >
                      Transfer Another Domain
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-2" />
                Secure transfer process • Money-back guarantee
              </div>
            </div>

            {/* Right Side - Transfer Process Mockup */}
            <div className="relative">
              {/* Transfer Progress Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Transfer Progress</div>
                  <div className="text-lg font-bold text-main-green">Step 3 of 4</div>
                  <div className="text-xs text-gray-500">In progress</div>
                </div>
              </div>

              {/* Main Transfer Interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Transfer Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RefreshCw className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-800">Domain Transfer</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      mybusiness.com
                    </div>
                  </div>
                </div>

                {/* Transfer Steps */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Transfer Progress</h3>
                  
                  <div className="space-y-4">
                    {transferSteps.map((step, index) => (
                      <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg ${
                        index < 3 ? 'bg-main-green/10' : 'bg-gray-50'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index < 2 ? 'bg-main-green text-white' :
                          index === 2 ? 'bg-yellow-500 text-white' :
                          'bg-gray-300 text-gray-600'
                        }`}>
                          {index < 2 ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : index === 2 ? (
                            <Clock className="h-5 w-5" />
                          ) : (
                            <span className="text-sm font-bold">{step.step}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                        </div>
                        {index === 2 && (
                          <div className="text-sm text-yellow-600 font-medium">In Progress</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Transfer Details */}
                  <div className="mt-6 bg-background-green p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Transfer Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domain:</span>
                        <span className="font-medium">mybusiness.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Started:</span>
                        <span className="font-medium">Dec 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected completion:</span>
                        <span className="font-medium">Dec 22, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Extension added:</span>
                        <span className="font-medium text-main-green">+1 year</span>
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

      {/* Transfer Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Why transfer your domain to us?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience better domain management with our advanced features and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Benefits List */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-6">
                  Transfer benefits
                </h3>
                
                <div className="space-y-6">
                  {transferFeatures.map((feature, index) => (
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

            {/* Right Side - Pricing Comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Transfer Pricing</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-main-green/10 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-800">.com Transfer</div>
                    <div className="text-sm text-gray-600">Includes 1-year extension</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-main-green">FREE</div>
                    <div className="text-sm text-gray-500">+ Rs. 899 renewal</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-800">.net Transfer</div>
                    <div className="text-sm text-gray-600">Includes 1-year extension</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-main-green">FREE</div>
                    <div className="text-sm text-gray-500">+ Rs. 1,099 renewal</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-800">.org Transfer</div>
                    <div className="text-sm text-gray-600">Includes 1-year extension</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-main-green">FREE</div>
                    <div className="text-sm text-gray-500">+ Rs. 1,199 renewal</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background-green rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>What's included:</strong> Free WHOIS privacy, DNS management, 
                  email forwarding, and 24/7 support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Secure transfer process
                </h2>
                
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
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

            {/* Right Side - Security Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Security Checklist */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-main-green" />
                    <h3 className="font-bold text-gray-800">Transfer Security</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                      <span className="text-sm text-gray-700">Domain ownership verified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                      <span className="text-sm text-gray-700">Authorization code validated</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                      <span className="text-sm text-gray-700">Email confirmation sent</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-700">Awaiting registrar approval</span>
                    </div>
                  </div>
                </div>

                {/* Transfer Timeline */}
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Transfer Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Day 1: Request initiated</span>
                      <CheckCircle className="h-4 w-4 text-main-green" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Day 2-3: Verification</span>
                      <Clock className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Day 5-7: Transfer complete</span>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features Section */}
      <section className="py-20 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Support Interface */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Support Chat */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Transfer Support</h3>
                  <div className="space-y-4">
                    <div className="bg-background-green p-3 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Support Agent</div>
                      <div className="text-gray-800">
                        "I'll help you with your domain transfer. Do you have the authorization code from your current registrar?"
                      </div>
                    </div>
                    <div className="bg-main-green/10 p-3 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">You</div>
                      <div className="text-gray-800">
                        "Yes, I have the EPP code. How long will the transfer take?"
                      </div>
                    </div>
                    <div className="bg-background-green p-3 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Support Agent</div>
                      <div className="text-gray-800">
                        "Great! The transfer typically takes 5-7 days. I'll guide you through each step."
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <button className="bg-main-green text-white px-4 py-2 rounded-lg text-sm">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Expert transfer support
                </h2>
                
                <div className="space-y-6">
                  {supportFeatures.map((feature, index) => (
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
              Join thousands of satisfied customers who've successfully transferred their domains to us.
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
              Domain Transfer FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about domain transfers and our process.
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
              <h3 className="text-2xl font-bold mb-4">Ready to transfer your domain?</h3>
              <p className="text-green-100 mb-6">
                Start your free domain transfer today and experience better domain management.
              </p>
              <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                Start Transfer Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomainTransfer;