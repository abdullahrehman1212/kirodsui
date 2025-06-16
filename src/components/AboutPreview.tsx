import React, { useEffect, useState } from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const AboutPreview = () => {
  const { siteContent } = useAdmin();
  const [content, setContent] = useState({
    title: 'About Kirods',
    subtitle: 'Since 2009, Kirods has been at the forefront of business innovation',
    description: 'Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses worldwide.',
    mission: 'To democratize business technology by making premium solutions accessible, reliable, and affordable for companies of all sizes.',
    stats: [
      { icon: <Users className="h-8 w-8" />, value: '10K+', label: 'Happy Customers', color: 'text-main-green' },
      { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Years Experience', color: 'text-secondary-green' },
      { icon: <Globe className="h-8 w-8" />, value: '50+', label: 'Countries Served', color: 'text-accent-green' },
      { icon: <TrendingUp className="h-8 w-8" />, value: '99.9%', label: 'Success Rate', color: 'text-main-green' }
    ],
    team: [
      {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      {
        name: 'Michael Chen',
        role: 'CTO',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      {
        name: 'Emily Rodriguez',
        role: 'Head of Operations',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      }
    ]
  });

  useEffect(() => {
    // Load content from database if available
    const aboutContent = siteContent.find(
      item => item.page === 'home' && item.section === 'about-preview'
    );
    
    if (aboutContent) {
      setContent(aboutContent.content);
    }
  }, [siteContent]);

  // Function to render the correct icon based on the icon name or use the existing icon component
  const renderIcon = (icon) => {
    if (typeof icon === 'string') {
      const iconSize = "h-8 w-8";
      switch(icon) {
        case 'Users': return <Users className={iconSize} />;
        case 'Award': return <Award className={iconSize} />;
        case 'Globe': return <Globe className={iconSize} />;
        case 'TrendingUp': return <TrendingUp className={iconSize} />;
        default: return <Users className={iconSize} />;
      }
    }
    return icon; // If it's already a component, return as is
  };

  return (
    <section className="py-16 bg-background-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {content.description}
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-text-dark mb-3">Our Mission</h3>
              <p className="text-gray-600">
                {content.mission}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-main-green mb-1">2009</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-main-green mb-1">500+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {(content.stats || []).map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    {renderIcon(stat.icon)}
                  </div>
                  <div className="text-2xl font-bold text-text-dark mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-text-dark mb-4">Leadership Team</h3>
              <div className="flex space-x-4">
                {(content.team || []).map((member, index) => (
                  <div key={index} className="text-center flex-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <div className="text-sm font-semibold text-text-dark">{member.name}</div>
                    <div className="text-xs text-gray-600">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;