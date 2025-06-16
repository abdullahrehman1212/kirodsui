import React from 'react';
import { List, Zap, Gift } from 'lucide-react';

const WebsiteMigrationSection = () => {
  const features = [
    {
      icon: <List className="h-8 w-8" />,
      title: '3 simple steps',
      description: 'Simply pick your plan, fill in the migration request form, submit it and then sit back and relax.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast and secure',
      description: '95% of websites are migrated in under 20 minutes. The other 5% are quicker than the industry average. And, your site stays live the whole time too.'
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Free',
      description: 'Whether you have 1 website to migrate or 100, migration is free with all of our plans.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Website migration. Made simple.
          </h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Currently hosting your website elsewhere? Join the 3+ million website owners who enjoy fast, secure and reliable web hosting here at Kirods. Our 
            expert team will handle everything while your site stays up and running throughout. That's right – no downtime. No data loss. No problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-white/20 p-4 rounded-xl inline-block text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-green-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteMigrationSection;