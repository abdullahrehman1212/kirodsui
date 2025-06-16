import React from 'react';
import { Shield, Mail, Terminal, Users, Globe, Award } from 'lucide-react';

const AllInclusiveSection = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Free SSL certificate',
      description: 'Hosting multiple sites? Enjoy unlimited free SSL certificates to ensure their security.',
      color: 'text-main-green'
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: 'Business email address',
      description: 'Register up to 100 domain-specific email addresses at no cost.',
      color: 'text-secondary-green'
    },
    {
      icon: <Terminal className="h-12 w-12" />,
      title: 'WP-CLI and SSH',
      description: 'Effortlessly manage your site on the go using WP-CLI, SSH, and SFTP.',
      color: 'text-accent-green'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Access management',
      description: 'Give your clients the access they need to your hosting platform.',
      color: 'text-main-green'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Content delivery network',
      description: 'Boost website speed and deliver content faster to your global audience.',
      color: 'text-secondary-green'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: '99.9% uptime guarantee',
      description: 'Stay online at all times – our web hosting service comes with a 99.9% uptime guarantee.',
      color: 'text-accent-green'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            All-inclusive Hosting for WordPress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all the resources you need in one web hosting account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className={`${feature.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">
              Everything you need for WordPress success
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our all-inclusive hosting plans provide you with the tools, security, and support 
              needed to build and maintain successful WordPress websites.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-main-green mb-2">100+</div>
                <div className="text-gray-600 text-sm">Free Email Accounts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-main-green mb-2">Unlimited</div>
                <div className="text-gray-600 text-sm">SSL Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-main-green mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-main-green mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInclusiveSection;