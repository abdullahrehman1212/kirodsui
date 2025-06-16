import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Save, 
  Undo, 
  Eye, 
  FileText, 
  Image as ImageIcon, 
  Code, 
  Trash2, 
  Plus,
  Upload,
  RefreshCw
} from 'lucide-react';
import toast from 'react-hot-toast';

interface ContentEditorProps {
  page: string;
  section: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ page, section }) => {
  const { siteContent, updateContent, createContent, mediaFiles } = useAdmin();
  const [content, setContent] = useState<any>(null);
  const [originalContent, setOriginalContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contentType, setContentType] = useState('json');

  useEffect(() => {
    // Find the content for this page and section
    const contentItem = siteContent.find(
      item => item.page === page && item.section === section
    );
    
    if (contentItem) {
      setContent(contentItem.content);
      setOriginalContent(contentItem.content);
      setContentType(contentItem.content_type);
    } else {
      // Initialize with default content structure based on page and section
      const defaultContent = getDefaultContent(page, section);
      setContent(defaultContent);
      setOriginalContent(defaultContent);
    }
  }, [siteContent, page, section]);

  const getDefaultContent = (page: string, section: string) => {
    // Return default content structure based on page and section
    // This is a simplified example - in a real implementation, you would have more comprehensive defaults
    
    if (page === 'home') {
      if (section === 'hero') {
        return {
          title: 'Premium Solutions for Your Business',
          subtitle: 'Discover innovative products and services designed to accelerate your business growth. Join thousands of satisfied customers worldwide.',
          buttonText: 'Get Started Today',
          buttonLink: '#pricing-section',
          secondaryButtonText: 'Watch Demo',
          secondaryButtonLink: '#',
          backgroundImage: ''
        };
      } else if (section === 'features') {
        return {
          title: 'Why Choose Kirods?',
          subtitle: 'Experience the difference with our premium platform designed for performance and reliability.',
          features: [
            {
              icon: 'Zap',
              title: 'Lightning Fast',
              description: 'Optimized performance and cutting-edge technology for maximum efficiency.',
              color: 'bg-secondary-green'
            },
            {
              icon: 'Shield',
              title: 'Secure & Reliable',
              description: 'Enterprise-grade security with comprehensive protection and monitoring.',
              color: 'bg-main-green'
            },
            {
              icon: 'Headphones',
              title: '24/7 Support',
              description: 'Expert support team available round the clock to help you succeed.',
              color: 'bg-accent-green'
            }
          ]
        };
      }
    }
    
    // Default empty content
    return {};
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, path: string | null = null) => {
    const { name, value } = e.target;
    
    if (path) {
      // Handle nested properties
      const pathParts = path.split('.');
      setContent(prevContent => {
        const newContent = { ...prevContent };
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

  const handleAddItem = (arrayPath: string, defaultItem: any) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const pathParts = arrayPath.split('.');
      let current = newContent;
      
      // Navigate to the array
      for (let i = 0; i < pathParts.length; i++) {
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
      
      // Add the new item
      current.push(defaultItem);
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
      
      // Remove the item
      current.splice(index, 1);
      return newContent;
    });
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
        await createContent(page, section, contentType, content);
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

  const renderHeroEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Title
            </label>
            <textarea
              name="title"
              value={content.title || ''}
              onChange={handleTextChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter hero title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Subtitle
            </label>
            <textarea
              name="subtitle"
              value={content.subtitle || ''}
              onChange={handleTextChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter hero subtitle"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Button Text
            </label>
            <input
              type="text"
              name="buttonText"
              value={content.buttonText || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter button text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Button Link
            </label>
            <input
              type="text"
              name="buttonLink"
              value={content.buttonLink || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter button link"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Button Text
            </label>
            <input
              type="text"
              name="secondaryButtonText"
              value={content.secondaryButtonText || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter secondary button text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Button Link
            </label>
            <input
              type="text"
              name="secondaryButtonLink"
              value={content.secondaryButtonLink || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter secondary button link"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Image URL (Optional)
          </label>
          <input
            type="text"
            name="backgroundImage"
            value={content.backgroundImage || ''}
            onChange={handleTextChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="Enter image URL or select from media library"
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave empty to use the default gradient background
          </p>
        </div>
      </div>
    );
  };

  const renderFeaturesEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Section Title
            </label>
            <input
              type="text"
              name="title"
              value={content.title || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter section title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Section Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              value={content.subtitle || ''}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Enter section subtitle"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Features
            </label>
            <button
              type="button"
              onClick={() => handleAddItem('features', {
                icon: 'Zap',
                title: 'New Feature',
                description: 'Description of the new feature',
                color: 'bg-main-green'
              })}
              className="p-1 text-main-green hover:text-secondary-green"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {content.features && content.features.map((feature: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Feature {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => handleRemoveItem('features', index)}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon
                  </label>
                  <select
                    value={feature.icon || ''}
                    onChange={(e) => handleTextChange(e, `features[${index}].icon`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  >
                    <option value="Zap">Zap (Lightning)</option>
                    <option value="Shield">Shield (Security)</option>
                    <option value="Headphones">Headphones (Support)</option>
                    <option value="Globe">Globe (World)</option>
                    <option value="Server">Server (Hosting)</option>
                    <option value="Lock">Lock (Security)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <select
                    value={feature.color || ''}
                    onChange={(e) => handleTextChange(e, `features[${index}].color`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  >
                    <option value="bg-main-green">Main Green</option>
                    <option value="bg-secondary-green">Secondary Green</option>
                    <option value="bg-accent-green">Accent Green</option>
                    <option value="bg-blue-500">Blue</option>
                    <option value="bg-purple-500">Purple</option>
                    <option value="bg-yellow-500">Yellow</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={feature.title || ''}
                  onChange={(e) => handleTextChange(e, `features[${index}].title`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="Feature title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={feature.description || ''}
                  onChange={(e) => handleTextChange(e, `features[${index}].description`)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="Feature description"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderEditor = () => {
    if (!content) return null;
    
    if (page === 'home') {
      if (section === 'hero') {
        return renderHeroEditor();
      } else if (section === 'features') {
        return renderFeaturesEditor();
      }
    }
    
    // Default JSON editor for other sections
    return (
      <div>
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
          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-main-green focus:border-transparent"
        />
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
            Edit {page.charAt(0).toUpperCase() + page.slice(1)} - {section.charAt(0).toUpperCase() + section.slice(1)} Section
          </h2>
          <p className="text-gray-600">
            Customize the content for this section of your website.
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
            href="/"
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

      <div className="bg-white rounded-xl shadow-md p-6">
        {renderEditor()}
      </div>
    </div>
  );
};

export default ContentEditor;