import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const WordPressHostingFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is WordPress hosting?",
      answer: "WordPress hosting is a specialized hosting service optimized specifically for WordPress websites. It includes features like one-click WordPress installation, automatic updates, enhanced security, and performance optimizations that make running WordPress sites faster and more secure."
    },
    {
      question: "What's the difference between managed and regular WordPress hosting?",
      answer: "Managed WordPress hosting includes automatic updates, daily backups, enhanced security, staging environments, and expert WordPress support. Regular hosting requires you to manage these aspects yourself. Managed hosting is more expensive but saves time and provides better security and performance."
    },
    {
      question: "Do you offer free WordPress migration?",
      answer: "Yes, we offer completely free WordPress migration for all new customers. Our expert migration team will handle the entire process, ensuring zero downtime and no data loss. The migration typically takes 24-48 hours to complete."
    },
    {
      question: "Can I install WordPress myself?",
      answer: "Absolutely! All our hosting plans include one-click WordPress installation through our control panel. You can have WordPress installed and ready to use in just a few minutes. We also provide pre-configured WordPress setups for faster deployment."
    },
    {
      question: "What WordPress themes and plugins are included?",
      answer: "We provide access to hundreds of free WordPress themes and essential plugins. Our hosting includes premium themes, security plugins, backup solutions, and performance optimization tools. You can also install any third-party themes and plugins from the WordPress repository."
    },
    {
      question: "Do you provide WordPress security?",
      answer: "Yes, our WordPress hosting includes comprehensive security features: malware scanning and removal, web application firewall, DDoS protection, SSL certificates, automatic security updates, and regular security monitoring. We also provide login protection and brute force attack prevention."
    },
    {
      question: "How do WordPress backups work?",
      answer: "We perform automatic daily backups of your WordPress site, including files and database. Backups are stored securely for 30 days. You can restore your site to any previous backup point through your control panel, and we also offer on-demand backup creation."
    },
    {
      question: "Can I use WordPress multisite?",
      answer: "Yes, WordPress multisite is supported on our Premium, Business, and Cloud Startup plans. This allows you to manage multiple WordPress sites from a single installation, perfect for agencies or businesses running multiple websites."
    },
    {
      question: "What is WordPress staging?",
      answer: "WordPress staging creates an exact copy of your live website where you can test changes, updates, and new features safely. Once you're satisfied with the changes, you can push them to your live site with one click. This feature is available on Business and higher plans."
    },
    {
      question: "Do you support WooCommerce?",
      answer: "Yes, all our WordPress hosting plans support WooCommerce. Higher-tier plans include WooCommerce optimizations, enhanced performance for online stores, and specialized support for e-commerce functionality. We also provide SSL certificates essential for online transactions."
    },
    {
      question: "What PHP versions do you support?",
      answer: "We support multiple PHP versions including PHP 7.4, 8.0, 8.1, and 8.2. You can easily switch between PHP versions through your control panel. We recommend using the latest stable PHP version for optimal performance and security."
    },
    {
      question: "Can I access my WordPress files via FTP/SSH?",
      answer: "Yes, all plans include FTP access, and Premium plans and above include SSH access. You can manage your WordPress files directly, install custom plugins, modify themes, and perform advanced configurations. We also provide SFTP for secure file transfers."
    },
    {
      question: "What happens if my WordPress site gets hacked?",
      answer: "Our security team monitors for threats 24/7. If malware is detected, we'll clean it automatically. For compromised sites, we provide free malware removal and help restore your site from clean backups. We also implement additional security measures to prevent future attacks."
    },
    {
      question: "Do you offer WordPress performance optimization?",
      answer: "Yes, our WordPress hosting includes LiteSpeed web servers, built-in caching, CDN integration, image optimization, and database optimization. We also provide performance monitoring and recommendations to keep your site running at peak speed."
    },
    {
      question: "Can I install custom WordPress plugins and themes?",
      answer: "Absolutely! You have full control over your WordPress installation. You can install any plugins and themes from the WordPress repository or upload custom ones. We don't restrict plugin installations, giving you complete flexibility."
    },
    {
      question: "What WordPress support do you provide?",
      answer: "Our support team includes WordPress experts available 24/7. We help with WordPress-specific issues, plugin conflicts, theme problems, performance optimization, and general WordPress questions. Premium plans include priority support with faster response times."
    },
    {
      question: "How many WordPress sites can I host?",
      answer: "The number of WordPress sites depends on your plan: Single plan allows 1 site, Premium allows 25 sites, Business allows 50 sites, and Cloud Startup allows 100 sites. All sites on your account share the allocated resources."
    },
    {
      question: "Do you provide WordPress development tools?",
      answer: "Yes, we provide WP-CLI (WordPress command line interface), Git integration, staging environments, SSH access, and database management tools. These tools are perfect for developers who need advanced WordPress development capabilities."
    },
    {
      question: "What is the WordPress AI assistant?",
      answer: "Our WordPress AI assistant helps with content creation, troubleshooting common issues, and website optimization suggestions. It can generate blog posts, fix common WordPress errors, and provide personalized recommendations for improving your site's performance and SEO."
    },
    {
      question: "Can I upgrade my WordPress hosting plan?",
      answer: "Yes, you can upgrade your WordPress hosting plan at any time through your control panel. Upgrades take effect immediately, and you'll only pay the prorated difference. Downgrades take effect at your next billing cycle to ensure you don't lose any paid time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-background-green rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-main-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            WordPress Hosting FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our WordPress hosting services, features, and support. 
            Get the information you need to make the right choice for your WordPress website.
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
              Our WordPress experts are here to help you 24/7. Get personalized assistance for your specific needs.
            </p>
            <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Contact WordPress Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressHostingFAQ;