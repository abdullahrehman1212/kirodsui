import React from 'react';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '10K+', label: 'Happy Customers' },
    { icon: <Globe className="h-8 w-8" />, value: '50', label: 'Countries Served' },
    { icon: <Award className="h-8 w-8" />, value: '99.9%', label: 'Success Rate' },
    { icon: <Clock className="h-8 w-8" />, value: '15+', label: 'Years of Experience' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in business technology',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology expert driving our innovation',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Ensuring exceptional customer experience',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      name: 'David Kim',
      role: 'Head of Sales',
      bio: 'Building relationships and driving growth',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-gradient-to-br from-background-green to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              About Kirods
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're passionate about providing innovative business solutions that help companies 
              of all sizes succeed in today's digital landscape. Since 2009, we've been committed 
              to delivering exceptional service and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize business technology by making it accessible, reliable, and affordable 
                for everyone. We believe that every business, regardless of size, deserves 
                enterprise-grade solutions to compete and thrive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts works around the clock to ensure your business operations 
                are always optimized, secure, and performing at their best. We're not just a 
                service provider; we're your technology partner.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-main-green mb-2">2009</h3>
                  <p className="text-gray-600">Founded</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-main-green mb-2">500+</h3>
                  <p className="text-gray-600">Team Members</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-main-green to-secondary-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-green-100">Always pushing the boundaries of technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Reliability</h4>
                    <p className="text-green-100">Consistent performance you can count on</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-green-100">Exceeding expectations in everything we do</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Here's what we've accomplished together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-main-green mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-text-dark mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind Kirods' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-text-dark mb-2">{member.name}</h3>
                <p className="text-main-green font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-main-green to-secondary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the Kirods difference today. Join thousands of satisfied customers 
            who trust us with their business success.
          </p>
          <button className="bg-white text-main-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;