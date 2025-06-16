import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play } from 'lucide-react';

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I could manage the hosting, domain name, and SSL certificate in one place, which was really refreshing.",
      name: "Owen Phillips",
      company: "gatefootforge.co.uk",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true,
      fullStoryLink: "#"
    },
    {
      id: 2,
      quote: "Migrating to Kirods was the best decision I ever made.",
      name: "Gabrielle Scarlett",
      company: "gabriellescarlett.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true,
      fullStoryLink: "#"
    },
    {
      id: 3,
      quote: "We honestly reference Kirods as the benchmark for our engineers when providing support.",
      name: "Charlie Low and Dale Comely",
      company: "nohma.com",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: true,
      fullStoryLink: "#"
    },
    {
      id: 4,
      quote: "The performance improvements were immediate. Our site loads 3x faster now and our customers notice the difference.",
      name: "Sarah Johnson",
      company: "techstartup.io",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: false,
      fullStoryLink: "#"
    },
    {
      id: 5,
      quote: "24/7 support that actually responds in minutes, not hours. Game changer for our business operations.",
      name: "Michael Chen",
      company: "digitalagency.com",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      hasVideo: false,
      fullStoryLink: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Kirods for their business success. 
            Here's what they have to say about their experience.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-gradient-to-br from-background-green to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Image Section */}
              <div className="relative bg-gradient-to-br from-main-green to-secondary-green p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                    {currentTestimonial.hasVideo && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 hover:scale-110 transform">
                          <Play className="h-8 w-8 text-main-green ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-4 h-4 bg-accent-green rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-main-green mb-6 opacity-50" />
                  <blockquote className="text-2xl lg:text-3xl font-medium text-text-dark leading-relaxed mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <button className="text-main-green font-medium hover:text-secondary-green transition-colors duration-300 flex items-center group">
                    <span>Read the full story</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="font-bold text-xl text-text-dark mb-1">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-gray-600">
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-main-green scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Customer Logos/Stats */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            Trusted by thousands of businesses worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-main-green mb-2">10,000+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-main-green mb-2">99.9%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-main-green mb-2">50+</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-main-green mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;