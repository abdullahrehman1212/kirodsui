import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Undo, Eye, Image as ImageIcon, Type, Layout, Columns, Rows, Plus, Trash2, ArrowUp, ArrowDown, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContentEditorProps {
  page: string;
  section: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ page, section }) => {
  const { siteContent, updateContent, createContent, deleteContent, mediaFiles } = useAdmin();
  const [content, setContent] = useState<any>(null);
  const [originalContent, setOriginalContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  useEffect(() => {
    const contentItem = siteContent.find(
      item => item.page === page && item.section === section
    );
    
    if (contentItem) {
      setContent(contentItem.content);
      setOriginalContent(contentItem.content);
    } else {
      // Initialize with default content structure based on section
      const defaultContent = getDefaultContent(section);
      setContent(defaultContent);
      setOriginalContent(defaultContent);
    }
  }, [siteContent, page, section]);

  const getDefaultContent = (sectionName: string) => {
    // Default content structures for different section types
    switch (sectionName) {
      case 'hero':
        return {
          title: 'Premium Solutions for Your Business',
          subtitle: 'Discover innovative products and services designed to accelerate your business growth.',
          buttonText: 'Get Started Today',
          buttonLink: '#pricing-section',
          secondaryButtonText: 'Watch Demo',
          secondaryButtonLink: '#',
          backgroundImage: ''
        };
      case 'features':
        return {
          title: 'Why Choose Kirods?',
          subtitle: 'Experience the difference with our premium platform designed for performance and reliability.',
          features: [
            {
              title: 'Lightning Fast',
              description: 'Optimized performance and cutting-edge technology for maximum efficiency.',
              icon: 'Zap'
            },
            {
              title: 'Secure & Reliable',
              description: 'Enterprise-grade security with comprehensive protection and monitoring.',
              icon: 'Shield'
            },
            {
              title: '24/7 Support',
              description: 'Expert support team available round the clock to help you succeed.',
              icon: 'Headphones'
            }
          ]
        };
      case 'pricing':
        return {
          title: 'Pick your perfect plan',
          subtitle: 'Pick your perfect plan and launch online in minutes with AI.',
          plans: [
            {
              name: 'Single',
              description: 'Ideal solution for beginners.',
              price: '399',
              originalPrice: '1399',
              features: [
                '1 website',
                'Managed hosting for WordPress',
                '10 GB SSD storage',
                'Free automatic website migration'
              ],
              popular: false
            },
            {
              name: 'Premium',
              description: 'Everything you need to create your website.',
              price: '599',
              originalPrice: '1999',
              features: [
                '25 websites',
                'Managed hosting for WordPress',
                '25 GB SSD storage',
                'Free domain (Rs.2,499 value)'
              ],
              popular: true
            }
          ]
        };
      case 'testimonials':
        return {
          title: 'What Our Customers Say',
          subtitle: 'Join thousands of satisfied customers who trust Kirods for their business success.',
          testimonials: [
            {
              quote: 'I could manage the hosting, domain name, and SSL certificate in one place, which was really refreshing.',
              name: 'Owen Phillips',
              company: 'gatefootforge.co.uk',
              image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
            },
            {
              quote: 'Migrating to Kirods was the best decision I ever made.',
              name: 'Gabrielle Scarlett',
              company: 'gabriellescarlett.com',
              image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
            }
          ]
        };
      case 'trust':
        return {
          title: 'Trusted by Thousands',
          subtitle: 'Join our community of satisfied customers',
          trustLogos: [
            { name: 'Trustpilot', rating: '4.7', reviews: '46,826', stars: 5 },
            { name: 'Google', rating: '4.8', reviews: '1,237', stars: 5 },
            { name: 'hostadvice', rating: '4.6', reviews: '2,432', stars: 5 },
            { name: 'wpbeginner', rating: '4.7', reviews: '874', stars: 5 }
          ]
        };
      case 'about-preview':
        return {
          title: 'About Kirods',
          subtitle: 'Since 2009, Kirods has been at the forefront of business innovation',
          description: 'Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses worldwide.',
          mission: 'To democratize business technology by making premium solutions accessible, reliable, and affordable for companies of all sizes.',
          stats: [
            { value: '10K+', label: 'Happy Customers' },
            { value: '15+', label: 'Years Experience' },
            { value: '50+', label: 'Countries Served' },
            { value: '99.9%', label: 'Success Rate' }
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
        };
      case 'faq':
        return {
          title: 'Frequently Asked Questions',
          subtitle: 'Find answers to common questions about our hosting services, features, and support.',
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
        };
      case 'news':
        return {
          title: 'Latest News & Insights',
          subtitle: 'Stay updated with the latest industry trends, insights, and company news',
          articles: [
            {
              title: 'The Future of Business Technology: Trends to Watch in 2024',
              excerpt: 'Discover the emerging technologies that will shape the business landscape in the coming year.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
              author: 'Sarah Johnson',
              date: '2024-01-15',
              category: 'Technology',
              readTime: '5 min read'
            },
            {
              title: 'How to Scale Your Business with Digital Solutions',
              excerpt: 'Learn proven strategies for leveraging technology to accelerate your business growth.',
              image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
              author: 'Michael Chen',
              date: '2024-01-12',
              category: 'Business',
              readTime: '7 min read'
            },
            {
              title: 'Security Best Practices for Modern Businesses',
              excerpt: 'Essential security measures every business should implement to protect their data and operations.',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
              author: 'Emily Rodriguez',
              date: '2024-01-10',
              category: 'Security',
              readTime: '6 min read'
            }
          ]
        };
      case 'cta':
        return {
          title: 'Ready to Get Started?',
          subtitle: 'Join over 10,000 businesses that trust Kirods for their success. Get started today with our comprehensive solutions and expert support.',
          buttonText: 'Start Your Journey',
          buttonLink: '#pricing-section',
          secondaryButtonText: 'View Our Solutions',
          secondaryButtonLink: '#'
        };
      default:
        return {};
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, path: string | null = null) => {
    const { name, value } = e.target;
    
    if (path) {
      // Handle nested properties (e.g., features[0].title)
      const pathParts = path.split('.');
      setContent(prevContent => {
        const newContent = { ...prevContent };
        let current = newContent;
        
        // Navigate to the nested property
        for (let i = 0; i < pathParts.length - 1; i++) {
          const part = pathParts[i];
          if (part.includes('[')) {
            // Handle array access (e.g., features[0])
            const arrayName = part.split('[')[0];
            const index = parseInt(part.split('[')[1].split(']')[0]);
            current = current[arrayName][index];
          } else {
            current = current[part];
          }
        }
        
        // Set the value
        current[pathParts[pathParts.length - 1]] = value;
        return newContent;
      });
    } else {
      // Handle top-level properties
      setContent(prevContent => ({
        ...prevContent,
        [name]: value
      }));
    }
  };

  const handleAddItem = (arrayPath: string) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const pathParts = arrayPath.split('.');
      let current = newContent;
      
      // Navigate to the array
      for (let i = 0; i < pathParts.length; i++) {
        if (!current[pathParts[i]]) {
          current[pathParts[i]] = [];
        }
        current = current[pathParts[i]];
      }
      
      // Add a new item based on the array type
      if (arrayPath === 'features') {
        current.push({
          title: 'New Feature',
          description: 'Description of the new feature',
          icon: 'Star'
        });
      } else if (arrayPath === 'plans') {
        current.push({
          name: 'New Plan',
          description: 'Description of the new plan',
          price: '999',
          originalPrice: '1999',
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
          popular: false
        });
      } else if (arrayPath === 'testimonials') {
        current.push({
          quote: 'This is a new testimonial',
          name: 'Customer Name',
          company: 'Company Name',
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
        });
      } else if (arrayPath === 'trustLogos') {
        current.push({
          name: 'New Trust Logo',
          rating: '4.5',
          reviews: '1,000',
          stars: 5
        });
      } else if (arrayPath === 'stats') {
        current.push({
          value: 'New Stat',
          label: 'Stat Label'
        });
      } else if (arrayPath === 'team') {
        current.push({
          name: 'Team Member',
          role: 'Role',
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
        });
      } else if (arrayPath === 'faqs') {
        current.push({
          question: 'New Question',
          answer: 'Answer to the new question'
        });
      } else if (arrayPath === 'articles') {
        current.push({
          title: 'New Article Title',
          excerpt: 'Article excerpt goes here',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
          author: 'Author Name',
          date: new Date().toISOString().split('T')[0],
          category: 'Category',
          readTime: '5 min read'
        });
      }
      
      return newContent;
    });
  };

  const handleRemoveItem = (arrayPath: string, index: number) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const pathParts = arrayPath.split('.');
      let current = newContent;
      
      // Navigate to the array
      for (let i = 0; i < pathParts.length; i++) {
        current = current[pathParts[i]];
      }
      
      // Remove the item
      current.splice(index, 1);
      return newContent;
    });
  };

  const handleMoveItem = (arrayPath: string, index: number, direction: 'up' | 'down') => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const pathParts = arrayPath.split('.');
      let current = newContent;
      
      // Navigate to the array
      for (let i = 0; i < pathParts.length; i++) {
        current = current[pathParts[i]];
      }
      
      // Move the item
      if (direction === 'up' && index > 0) {
        const temp = current[index];
        current[index] = current[index - 1];
        current[index - 1] = temp;
      } else if (direction === 'down' && index < current.length - 1) {
        const temp = current[index];
        current[index] = current[index + 1];
        current[index + 1] = temp;
      }
      
      return newContent;
    });
  };

  const handleSelectMedia = (filePath: string) => {
    if (!selectedField) return;
    
    // Update the content with the selected media
    setContent(prevContent => {
      const newContent = { ...prevContent };
      
      if (selectedField.includes('.')) {
        // Handle nested properties
        const pathParts = selectedField.split('.');
        let current = newContent;
        
        // Navigate to the nested property
        for (let i = 0; i < pathParts.length - 1; i++) {
          const part = pathParts[i];
          if (part.includes('[')) {
            // Handle array access
            const arrayName = part.split('[')[0];
            const index = parseInt(part.split('[')[1].split(']')[0]);
            current = current[arrayName][index];
          } else {
            current = current[part];
          }
        }
        
        // Set the value
        current[pathParts[pathParts.length - 1]] = filePath;
      } else {
        // Handle top-level properties
        newContent[selectedField] = filePath;
      }
      
      return newContent;
    });
    
    setShowMediaLibrary(false);
    setSelectedField(null);
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      const contentItem = siteContent.find(
        item => item.page === page && item.section === section
      );
      
      if (contentItem) {
        await updateContent(contentItem.id, content);
      } else {
        await createContent(page, section, 'json', content);
      }
      
      setOriginalContent(content);
      toast.success('Content saved successfully');
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Failed to save content');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your changes? All unsaved changes will be lost.')) {
      setContent(originalContent);
      toast.success('Changes reset');
    }
  };

  const renderField = (label: string, name: string, value: string, path: string | null = null) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value || ''}
        onChange={(e) => handleTextChange(e, path)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
      />
    </div>
  );

  const renderTextArea = (label: string, name: string, value: string, path: string | null = null) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value || ''}
        onChange={(e) => handleTextChange(e, path)}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
      />
    </div>
  );

  const renderImageField = (label: string, name: string, value: string, path: string | null = null) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name={name}
          value={value || ''}
          onChange={(e) => handleTextChange(e, path)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          placeholder="Image URL or path"
        />
        <button
          type="button"
          onClick={() => {
            setSelectedField(path || name);
            setShowMediaLibrary(true);
          }}
          className="bg-background-green text-main-green p-2 rounded-lg hover:bg-main-green/10 transition-colors duration-200"
        >
          <ImageIcon className="h-5 w-5" />
        </button>
      </div>
      {value && (
        <div className="mt-2 p-2 border border-gray-200 rounded-lg">
          <img
            src={value}
            alt={label}
            className="h-20 object-contain mx-auto"
          />
        </div>
      )}
    </div>
  );

  const renderHeroEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Hero Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
          {renderField('Button Text', 'buttonText', content.buttonText)}
          {renderField('Button Link', 'buttonLink', content.buttonLink)}
          {renderField('Secondary Button Text', 'secondaryButtonText', content.secondaryButtonText)}
          {renderField('Secondary Button Link', 'secondaryButtonLink', content.secondaryButtonLink)}
          {renderImageField('Background Image', 'backgroundImage', content.backgroundImage)}
        </div>
      </div>
    );
  };

  const renderFeaturesEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Features Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Features</h3>
            <button
              type="button"
              onClick={() => handleAddItem('features')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.features || []).map((feature: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Feature {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('features', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('features', index, 'down')}
                    disabled={index === (content.features || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('features', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Title', `features[${index}].title`, feature.title, `features[${index}].title`)}
              {renderTextArea('Description', `features[${index}].description`, feature.description, `features[${index}].description`)}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon
                </label>
                <select
                  name={`features[${index}].icon`}
                  value={feature.icon || 'Star'}
                  onChange={(e) => handleTextChange(e, `features[${index}].icon`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                >
                  <option value="Zap">Zap (Lightning)</option>
                  <option value="Shield">Shield (Security)</option>
                  <option value="Headphones">Headphones (Support)</option>
                  <option value="Globe">Globe (Global)</option>
                  <option value="Server">Server (Hosting)</option>
                  <option value="Star">Star (Featured)</option>
                  <option value="Users">Users (Team/Community)</option>
                  <option value="Clock">Clock (Time/Speed)</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPricingEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Pricing Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Pricing Plans</h3>
            <button
              type="button"
              onClick={() => handleAddItem('plans')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.plans || []).map((plan: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Plan {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('plans', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('plans', index, 'down')}
                    disabled={index === (content.plans || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('plans', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Name', `plans[${index}].name`, plan.name, `plans[${index}].name`)}
              {renderTextArea('Description', `plans[${index}].description`, plan.description, `plans[${index}].description`)}
              {renderField('Price', `plans[${index}].price`, plan.price, `plans[${index}].price`)}
              {renderField('Original Price', `plans[${index}].originalPrice`, plan.originalPrice, `plans[${index}].originalPrice`)}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Popular Plan
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={plan.popular || false}
                    onChange={(e) => {
                      setContent(prevContent => {
                        const newContent = { ...prevContent };
                        if (!newContent.plans) newContent.plans = [];
                        newContent.plans[index].popular = e.target.checked;
                        return newContent;
                      });
                    }}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Mark as popular (highlighted plan)</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features (one per line)
                </label>
                <textarea
                  value={(plan.features || []).join('\n')}
                  onChange={(e) => {
                    const features = e.target.value.split('\n').filter(Boolean);
                    setContent(prevContent => {
                      const newContent = { ...prevContent };
                      if (!newContent.plans) newContent.plans = [];
                      newContent.plans[index].features = features;
                      return newContent;
                    });
                  }}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTestimonialsEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Testimonials Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Testimonials</h3>
            <button
              type="button"
              onClick={() => handleAddItem('testimonials')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.testimonials || []).map((testimonial: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Testimonial {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('testimonials', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('testimonials', index, 'down')}
                    disabled={index === (content.testimonials || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('testimonials', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderTextArea('Quote', `testimonials[${index}].quote`, testimonial.quote, `testimonials[${index}].quote`)}
              {renderField('Name', `testimonials[${index}].name`, testimonial.name, `testimonials[${index}].name`)}
              {renderField('Company', `testimonials[${index}].company`, testimonial.company, `testimonials[${index}].company`)}
              {renderImageField('Image', `testimonials[${index}].image`, testimonial.image, `testimonials[${index}].image`)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTrustEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Trust Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Trust Logos</h3>
            <button
              type="button"
              onClick={() => handleAddItem('trustLogos')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.trustLogos || []).map((logo: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Trust Logo {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('trustLogos', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('trustLogos', index, 'down')}
                    disabled={index === (content.trustLogos || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('trustLogos', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Name', `trustLogos[${index}].name`, logo.name, `trustLogos[${index}].name`)}
              {renderField('Rating', `trustLogos[${index}].rating`, logo.rating, `trustLogos[${index}].rating`)}
              {renderField('Reviews', `trustLogos[${index}].reviews`, logo.reviews, `trustLogos[${index}].reviews`)}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stars (1-5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={logo.stars || 5}
                  onChange={(e) => handleTextChange(e, `trustLogos[${index}].stars`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAboutPreviewEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">About Preview Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderField('Subtitle', 'subtitle', content.subtitle)}
          {renderTextArea('Description', 'description', content.description)}
          {renderTextArea('Mission', 'mission', content.mission)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Stats</h3>
            <button
              type="button"
              onClick={() => handleAddItem('stats')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.stats || []).map((stat: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Stat {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('stats', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('stats', index, 'down')}
                    disabled={index === (content.stats || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('stats', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Value', `stats[${index}].value`, stat.value, `stats[${index}].value`)}
              {renderField('Label', `stats[${index}].label`, stat.label, `stats[${index}].label`)}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Team Members</h3>
            <button
              type="button"
              onClick={() => handleAddItem('team')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.team || []).map((member: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Team Member {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('team', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('team', index, 'down')}
                    disabled={index === (content.team || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('team', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Name', `team[${index}].name`, member.name, `team[${index}].name`)}
              {renderField('Role', `team[${index}].role`, member.role, `team[${index}].role`)}
              {renderImageField('Image', `team[${index}].image`, member.image, `team[${index}].image`)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFAQEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">FAQ Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">FAQs</h3>
            <button
              type="button"
              onClick={() => handleAddItem('faqs')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.faqs || []).map((faq: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">FAQ {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('faqs', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('faqs', index, 'down')}
                    disabled={index === (content.faqs || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('faqs', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Question', `faqs[${index}].question`, faq.question, `faqs[${index}].question`)}
              {renderTextArea('Answer', `faqs[${index}].answer`, faq.answer, `faqs[${index}].answer`)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderNewsEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">News & Blog Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Articles</h3>
            <button
              type="button"
              onClick={() => handleAddItem('articles')}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {(content.articles || []).map((article: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Article {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('articles', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('articles', index, 'down')}
                    disabled={index === (content.articles || []).length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('articles', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {renderField('Title', `articles[${index}].title`, article.title, `articles[${index}].title`)}
              {renderTextArea('Excerpt', `articles[${index}].excerpt`, article.excerpt, `articles[${index}].excerpt`)}
              {renderImageField('Image', `articles[${index}].image`, article.image, `articles[${index}].image`)}
              {renderField('Author', `articles[${index}].author`, article.author, `articles[${index}].author`)}
              {renderField('Date', `articles[${index}].date`, article.date, `articles[${index}].date`)}
              {renderField('Category', `articles[${index}].category`, article.category, `articles[${index}].category`)}
              {renderField('Read Time', `articles[${index}].readTime`, article.readTime, `articles[${index}].readTime`)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCTAEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">CTA Section</h3>
          
          {renderField('Title', 'title', content.title)}
          {renderTextArea('Subtitle', 'subtitle', content.subtitle)}
          {renderField('Button Text', 'buttonText', content.buttonText)}
          {renderField('Button Link', 'buttonLink', content.buttonLink)}
          {renderField('Secondary Button Text', 'secondaryButtonText', content.secondaryButtonText)}
          {renderField('Secondary Button Link', 'secondaryButtonLink', content.secondaryButtonLink)}
        </div>
      </div>
    );
  };

  const renderEditor = () => {
    if (!content) return null;
    
    switch (section) {
      case 'hero':
        return renderHeroEditor();
      case 'features':
        return renderFeaturesEditor();
      case 'pricing':
        return renderPricingEditor();
      case 'testimonials':
        return renderTestimonialsEditor();
      case 'trust':
        return renderTrustEditor();
      case 'about-preview':
        return renderAboutPreviewEditor();
      case 'faq':
        return renderFAQEditor();
      case 'news':
        return renderNewsEditor();
      case 'cta':
        return renderCTAEditor();
      default:
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Content Editor</h3>
            <p className="text-gray-600 mb-4">
              This is a generic content editor. You can edit the JSON directly.
            </p>
            <textarea
              value={JSON.stringify(content, null, 2)}
              onChange={(e) => {
                try {
                  setContent(JSON.parse(e.target.value));
                } catch (error) {
                  // Don't update if JSON is invalid
                }
              }}
              rows={20}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent font-mono text-sm"
            />
          </div>
        );
    }
  };

  const renderMediaLibrary = () => {
    if (!showMediaLibrary) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Select Media</h3>
            <button
              onClick={() => setShowMediaLibrary(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto max-h-[calc(80vh-8rem)]">
            {mediaFiles.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {mediaFiles.filter(file => file.mime_type.startsWith('image/')).map(file => {
                  const fileUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/${file.file_path}`;
                  return (
                    <div
                      key={file.id}
                      onClick={() => handleSelectMedia(fileUrl)}
                      className="border border-gray-200 rounded-lg p-2 cursor-pointer hover:border-main-green transition-colors duration-200"
                    >
                      <img
                        src={fileUrl}
                        alt={file.alt_text || file.filename}
                        className="h-24 w-full object-cover rounded mb-2"
                      />
                      <div className="text-xs text-gray-600 truncate" title={file.filename}>
                        {file.filename}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-600">No media files found</p>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={() => setShowMediaLibrary(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Edit {page} - {section.charAt(0).toUpperCase() + section.slice(1)} Section
          </h2>
          <p className="text-gray-600">
            Make changes to the content and click Save to update the website.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
          >
            <Undo className="h-5 w-5" />
            <span>Reset</span>
          </button>
          <a
            href={`/${page === 'home' ? '' : page}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
          >
            <Eye className="h-5 w-5" />
            <span>Preview</span>
          </a>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-4 py-2 bg-main-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Save className="h-5 w-5" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {renderEditor()}
      {renderMediaLibrary()}
    </div>
  );
};

export default ContentEditor;