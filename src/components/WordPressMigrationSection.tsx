import React from 'react';
import { CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';

const WordPressMigrationSection = () => {
  const migrationFeatures = [
    {
      text: "Request a site migration via hPanel, our control panel, and we'll handle the rest.",
      included: true
    },
    {
      text: "Sit back and relax – our dedicated migration team will ensure a smooth transition.",
      included: true
    },
    {
      text: "Expect your website to be fully migrated within 24 hours.",
      included: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                Free WordPress website migration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                You're one click away from transferring your WordPress site to Kirods.
              </p>
              
              <div className="space-y-6">
                {migrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-main-green" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="bg-main-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-green transition-all duration-300 hover:scale-105 shadow-lg">
                  Migrate now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Migration Process Mockup */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-background-green to-accent-green/30 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-secondary-green/20 to-background-green rounded-full opacity-40 blur-2xl"></div>
            
            {/* Migration Interface */}
            <div className="relative">
              {/* Running Person */}
              <div className="relative mb-8">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
                  alt="Migration Process"
                  className="w-64 h-64 object-cover rounded-2xl mx-auto shadow-2xl"
                />
                
                {/* Migration Button Overlay */}
                <div className="absolute top-4 left-4 bg-main-green text-white px-4 py-2 rounded-lg font-semibold flex items-center shadow-lg">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Migrate website
                </div>

                {/* Geometric Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-main-green rounded-lg transform rotate-12"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-green rounded-lg transform -rotate-12"></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-accent-green rounded-lg"></div>
              </div>

              {/* Migration Status */}
              <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-main-green rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-dark mb-1">Migration completed</h3>
                    <p className="text-gray-600">Your website has been successfully migrated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Migration Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Migration Time</div>
                  <div className="text-xs text-gray-600">Under 24 hours</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-main-green" />
                <div>
                  <div className="text-sm font-semibold text-text-dark">Zero Downtime</div>
                  <div className="text-xs text-gray-600">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressMigrationSection;