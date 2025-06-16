import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
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
    },
    {
      question: "Can I migrate my existing website for free?",
      answer: "Absolutely! We offer free website migration for all new customers. Our expert team will handle the entire migration process, ensuring zero downtime and no data loss. The migration typically takes 24-48 hours to complete."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced professionals who can help with technical issues, account management, and general questions. Average response time is under 2 minutes."
    },
    {
      question: "Is my website data backed up automatically?",
      answer: "Yes, we perform automatic daily backups of all websites. Backups are stored securely for 30 days, and you can restore your website to any previous backup point through your control panel. Premium plans include on-demand backup options."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement multiple security layers including DDoS protection, malware scanning, web application firewalls, SSL certificates, and regular security updates. Our data centers are monitored 24/7 and comply with industry security standards."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your hosting plan at any time through your account dashboard. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll prorate any charges accordingly."
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
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and various local payment methods. All transactions are processed securely using industry-standard encryption."
    },
    {
      question: "Do you offer domain registration services?",
      answer: "Yes, we offer domain registration and management services for all popular extensions (.com, .net, .org, etc.). Many hosting plans include a free domain for the first year, and we provide easy domain management tools."
    },
    {
      question: "Is there a setup fee for new accounts?",
      answer: "No, there are no setup fees for any of our hosting plans. The price you see is the price you pay. We believe in transparent pricing with no hidden costs or surprise charges."
    },
    {
      question: "Can I host multiple websites on one account?",
      answer: "Yes, most of our hosting plans support multiple websites. The number of websites you can host depends on your plan level. You can manage all your websites from a single control panel for convenience."
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-background-green rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-main-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our hosting services, features, and support. 
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
      </div>
    </section>
  );
};

export default FAQSection;