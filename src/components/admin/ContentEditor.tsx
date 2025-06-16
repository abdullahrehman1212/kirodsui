import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Undo, Eye, Image as ImageIcon, Type, Layout, Columns, Rows, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
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
          
          {content.features.map((feature: any, index: number) => (
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
                    disabled={index === content.features.length - 1}
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
          
          {content.plans.map((plan: any, index: number) => (
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
                    disabled={index === content.plans.length - 1}
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
                  value={plan.features.join('\n')}
                  onChange={(e) => {
                    const features = e.target.value.split('\n').filter(Boolean);
                    setContent(prevContent => {
                      const newContent = { ...prevContent };
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
          
          {content.testimonials.map((testimonial: any, index: number) => (
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
                    disabled={index === content.testimonials.length - 1}
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