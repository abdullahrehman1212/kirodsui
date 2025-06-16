import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
          Ready to Get Started?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Join over 10,000 businesses that trust Kirods for their success. 
          Get started today with our comprehensive solutions and expert support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToPricing}
            className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300">
            View Our Solutions
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