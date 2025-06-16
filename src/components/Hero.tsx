import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const handleWatchDemo = async () => {
    try {
      const response = await fetch('https://tavusapi.com/v2/conversations', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "22ca90d50715471dbe2791913a7f7842"
        },
        body: JSON.stringify({
          "replica_id": "rb17cf590e15",
          "conversation_name": "Kirods",
          "conversational_context": "Kirods.com is a modern web hosting company that caters to a diverse range of hosting needs, offering robust solutions for individuals, small businesses, and large enterprises. Their services are designed to provide high performance, reliability, and ease of use for customers who demand excellence in their online presence. Here's a detailed overview:\n\nKey Features\nFlexible Hosting Plans:\n\nShared Hosting: Affordable entry-level plans for startups and personal websites.\n\nVPS Hosting: Scalable and customizable for medium to large websites.\n\nDedicated Servers: High-performance hosting for resource-intensive applications.\n\nCloud Hosting: Dynamic and secure cloud-based solutions.\n\nAdvanced Technologies:\n\nSSD Storage: Fast storage solutions ensuring quick data access and better website speed.\n\nCDN Integration: Optimized global delivery for faster loading times worldwide.\n\nAutomatic Backups: Daily backups to secure your data and prevent loss.\n\nOne-Click Installations: Support for popular CMS platforms like WordPress, Joomla, and Drupal.\n\nSecurity Measures:\n\nFree SSL Certificates: Enhanced security and trust for websites.\n\nMalware Scanning & Removal: Regular scans to keep your site safe.\n\nDDoS Protection: Shields against distributed denial-of-service attacks.\n\nDeveloper-Friendly Environment:\n\nSSH Access: Secure remote server management.\n\nGit Integration: Version control support for developers.\n\nMultiple Language Support: PHP, Python, Node.js, and more.\n\nCustomer Support:\n\n24/7 Availability: Round-the-clock support via chat, email, and phone.\n\nKnowledge Base: Extensive resources and tutorials to assist users.\n\nQuick Resolution: Fast response times for troubleshooting and queries.\n\nUnique Selling Points\nCompetitive Pricing: Affordable plans that cater to budget-conscious users without compromising quality.\n\nEco-Friendly Hosting: Commitment to green energy and sustainable practices.\n\nUptime Guarantee: 99.9% uptime ensures minimal downtime and maximum reliability.\n\nEasy Migration: Free migration services for websites hosted elsewhere.\n\nTarget Audience\nBloggers and Content Creators\n\nE-commerce Businesses\n\nDevelopers and Agencies\n\nEnterprises with High Traffic Demands\n\nAdditional Services\nDomain Registration: A variety of domain extensions to choose from.\n\nEmail Hosting: Secure and professional email solutions.\n\nWebsite Builder: Drag-and-drop tools for easy website creation.\n\nReseller Hosting: Tailored solutions for reselling hosting services."
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log('Conversation created successfully:', data);
        
        // Check if conversation_url is available and open it
        if (data.conversation_url) {
          window.open(data.conversation_url, '_blank');
        } else {
          // Fallback: show success message
          alert('Demo conversation initiated successfully! Check console for details.');
        }
      } else {
        console.error('Error creating conversation:', data);
        alert('Unable to start demo at the moment. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-main-green via-secondary-green to-accent-green overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
            Trusted by 10,000+ Businesses
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Premium Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              for Your Business
            </span>
          </h1>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover innovative products and services designed to accelerate your business growth. 
            Join thousands of satisfied customers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={scrollToPricing}
              className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={handleWatchDemo}
              className="text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;