import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';
import ProductShowcaseSection from '../components/ProductShowcaseSection';
import WebsiteMigrationSection from '../components/WebsiteMigrationSection';
import CustomerTestimonials from '../components/CustomerTestimonials';
import SupportSection from '../components/SupportSection';
import SecuritySection from '../components/SecuritySection';
import AboutPreview from '../components/AboutPreview';
import Features from '../components/Features';
import FAQSection from '../components/FAQSection';
import NewsBlog from '../components/NewsBlog';
import CTASection from '../components/CTASection';
import { useAdmin } from '../contexts/AdminContext';

const Home = () => {
  const { refreshData } = useAdmin();

  useEffect(() => {
    // Refresh data when component mounts to ensure we have the latest content
    refreshData();
  }, []);

  return (
    <div>
      <Hero />
      <TrustSection />
      <PricingSection />
      <ProductShowcaseSection />
      <WebsiteMigrationSection />
      <CustomerTestimonials />
      <SupportSection />
      <SecuritySection />
      <AboutPreview />
      <Features />
      <FAQSection />
      <NewsBlog />
      <CTASection />
    </div>
  );
};

export default Home;