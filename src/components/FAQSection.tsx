import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { siteContent } = useAdmin();
  const [content, setContent] = useState({
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our hosting services, features, and support. Can\'t find what you\'re looking for? Contact our support team.',
    faqs: [
      {
        question: "What is included in my hosting plan?",
        answer: "All hosting plans include SSD storage, free SSL certificates, daily backups, 24/7 support, one-click WordPress installation, and a 99.9% uptime guarantee. Higher-tier plans include additional features like priority support, advanced security, and more storage."
      },
      {
        question: "How long does it take to set up my website?",
        answer: "Your hosting account is activated instantly upon payment confirmation. You can start building your website immediately using our website builder or upload your existing files. Most websites are live within minutes of setup."
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, we'll refund your payment in full, no questions asked."
      }
    ]
  });

  useEffect(() => {
    // Load content from database if available
    const faqContent = siteContent.find(
      item => item.page === 'home' && item.section === 'faq'
    );
    
    if (faqContent) {
      setContent(faqContent.content);
    }
  }, [siteContent]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-background-green rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-main-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {(content.faqs || []).map((faq, index) => (
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
      </div>
    </section>
  );
};

export default FAQSection;