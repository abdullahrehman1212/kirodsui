import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const CTASection = () => {
  const { siteContent } = useAdmin();
  const [content, setContent] = useState({
    title: 'Ready to Get Started?',
    subtitle: 'Join over 10,000 businesses that trust Kirods for their success. Get started today with our comprehensive solutions and expert support.',
    buttonText: 'Start Your Journey',
    buttonLink: '#pricing-section',
    secondaryButtonText: 'View Our Solutions',
    secondaryButtonLink: '#'
  });

  useEffect(() => {
    // Load content from database if available
    const ctaContent = siteContent.find(
      item => item.page === 'home' && item.section === 'cta'
    );
    
    if (ctaContent) {
      setContent(ctaContent.content);
    }
  }, [siteContent]);

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
    <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {content.title}
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToPricing}
            className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 flex items-center"
          >
            {content.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300">
            {content.secondaryButtonText}
          </button>
        </div>
        
        <div className="mt-8 text-green-100 text-sm">
          No setup fees • 30-day money-back guarantee
        </div>
      </div>
    </section>
  );
};

export default CTASection;