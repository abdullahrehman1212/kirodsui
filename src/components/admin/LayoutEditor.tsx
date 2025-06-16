import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Undo, Eye, Plus, Trash2, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';

interface LayoutEditorProps {
  type: 'header' | 'footer';
}

const LayoutEditor: React.FC<LayoutEditorProps> = ({ type }) => {
  const { siteContent, updateContent, createContent } = useAdmin();
  const [content, setContent] = useState<any>(null);
  const [originalContent, setOriginalContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  useEffect(() => {
    const contentItem = siteContent.find(
      item => item.page === 'layout' && item.section === type
    );
    
    if (contentItem) {
      setContent(contentItem.content);
      setOriginalContent(contentItem.content);
    } else {
      // Initialize with default content structure
      const defaultContent = getDefaultContent(type);
      setContent(defaultContent);
      setOriginalContent(defaultContent);
    }
  }, [siteContent, type]);

  const getDefaultContent = (layoutType: string) => {
    if (layoutType === 'header') {
      return {
        logo: {
          text: 'Kirods',
          icon: 'Zap'
        },
        mainMenu: [
          { name: 'Pricing', path: '/pricing', hasDropdown: false },
          { 
            name: 'Services', 
            path: '/products', 
            hasDropdown: true,
            dropdown: 'services',
            items: [
              { name: 'WordPress Hosting', path: '/wordpress-hosting' },
              { name: 'Web Hosting', path: '/web-hosting' },
              { name: 'Cloud Hosting', path: '/cloud-hosting' },
              { name: 'Agency Hosting', path: '/agency-hosting' },
              { name: 'Website Builder', path: '/website-builder' },
              { name: 'Ecommerce Builder', path: '/ecommerce-builder' }
            ]
          },
          { 
            name: 'Explore', 
            path: '#', 
            hasDropdown: true,
            dropdown: 'explore',
            items: [
              { name: 'Blog', path: '#' },
              { name: 'Features and tools', path: '/products' },
              { name: 'Our story', path: '/about' }
            ]
          },
          { 
            name: 'Support', 
            path: '#', 
            hasDropdown: true,
            dropdown: 'support',
            items: [
              { name: 'Knowledge Base', path: '#' },
              { name: 'Tutorials', path: '#' },
              { name: 'Contact', path: '/contact' }
            ]
          },
          { name: 'Horizons', path: '/about' }
        ]
      };
    } else if (layoutType === 'footer') {
      return {
        logo: {
          text: 'Kirods',
          icon: 'Zap'
        },
        description: 'Premium solutions and services for businesses of all sizes. Get your business online and growing with our cutting-edge technology.',
        sections: [
          {
            title: 'HOSTING',
            links: [
              { name: 'Web hosting', path: '/web-hosting' },
              { name: 'WordPress hosting', path: '/wordpress-hosting' },
              { name: 'Cloud hosting', path: '/cloud-hosting' },
              { name: 'WooCommerce hosting', path: '/woocommerce-hosting' },
              { name: 'Agency hosting', path: '/agency-hosting' }
            ]
          },
          {
            title: 'DOMAIN',
            links: [
              { name: 'Domain name search', path: '/domain-search' },
              { name: 'Domain transfer', path: '/domain-transfer' }
            ]
          },
          {
            title: 'TOOLS',
            links: [
              { name: 'Website Builder', path: '/website-builder' },
              { name: 'Ecommerce Website Builder', path: '/ecommerce-builder' }
            ]
          },
          {
            title: 'COMPANY',
            links: [
              { name: 'About Kirods', path: '/about' },
              { name: 'Contact us', path: '/contact' }
            ]
          }
        ],
        socialLinks: [
          { platform: 'Facebook', url: '#' },
          { platform: 'Twitter', url: '#' },
          { platform: 'Instagram', url: '#' },
          { platform: 'LinkedIn', url: '#' },
          { platform: 'YouTube', url: '#' }
        ],
        copyright: '© 2004-2025 Kirods - Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.'
      };
    }
    
    return {};
  };

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
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

  const handleMoveItem = (arrayPath: string, index: number, direction: 'up' | 'down') => {
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

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      const contentItem = siteContent.find(
        item => item.page === 'layout' && item.section === type
      );
      
      if (contentItem) {
        await updateContent(contentItem.id, content);
      } else {
        await createContent('layout', type, 'json', content);
      }
      
      setOriginalContent(content);
      toast.success('Layout saved successfully');
    } catch (error) {
      console.error('Error saving layout:', error);
      toast.error('Failed to save layout');
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

  const renderHeaderEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Logo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Text
              </label>
              <input
                type="text"
                value={content.logo.text || ''}
                onChange={(e) => handleTextChange(e, 'logo.text')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Icon
              </label>
              <select
                value={content.logo.icon || 'Zap'}
                onChange={(e) => handleTextChange(e, 'logo.icon')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              >
                <option value="Zap">Zap (Lightning)</option>
                <option value="Shield">Shield (Security)</option>
                <option value="Globe">Globe (World)</option>
                <option value="Server">Server (Hosting)</option>
                <option value="Cloud">Cloud (Cloud Services)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Main Navigation</h3>
            <button
              type="button"
              onClick={() => handleAddItem('mainMenu', { name: 'New Item', path: '/', hasDropdown: false })}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {content.mainMenu.map((item: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Menu Item {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('mainMenu', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('mainMenu', index, 'down')}
                    disabled={index === content.mainMenu.length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('mainMenu', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={item.name || ''}
                    onChange={(e) => handleTextChange(e, `mainMenu[${index}].name`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Path
                  </label>
                  <input
                    type="text"
                    value={item.path || ''}
                    onChange={(e) => handleTextChange(e, `mainMenu[${index}].path`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.hasDropdown || false}
                    onChange={(e) => {
                      setContent(prevContent => {
                        const newContent = { ...prevContent };
                        newContent.mainMenu[index].hasDropdown = e.target.checked;
                        if (e.target.checked && !newContent.mainMenu[index].dropdown) {
                          newContent.mainMenu[index].dropdown = `dropdown_${index}`;
                          newContent.mainMenu[index].items = [];
                        }
                        return newContent;
                      });
                    }}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Has Dropdown Menu</span>
                </div>
              </div>
              
              {item.hasDropdown && (
                <div className="ml-4 pl-4 border-l-2 border-gray-200">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dropdown ID
                    </label>
                    <input
                      type="text"
                      value={item.dropdown || ''}
                      onChange={(e) => handleTextChange(e, `mainMenu[${index}].dropdown`)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-700">
                        Dropdown Items
                      </label>
                      <button
                        type="button"
                        onClick={() => handleAddItem(`mainMenu[${index}].items`, { name: 'New Dropdown Item', path: '/' })}
                        className="p-1 text-main-green hover:text-secondary-green"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {item.items && item.items.map((subItem: any, subIndex: number) => (
                      <div key={subIndex} className="flex items-center space-x-2 mt-2">
                        <input
                          type="text"
                          value={subItem.name || ''}
                          onChange={(e) => handleTextChange(e, `mainMenu[${index}].items[${subIndex}].name`)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                          placeholder="Item name"
                        />
                        <input
                          type="text"
                          value={subItem.path || ''}
                          onChange={(e) => handleTextChange(e, `mainMenu[${index}].items[${subIndex}].path`)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                          placeholder="Item path"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(`mainMenu[${index}].items`, subIndex)}
                          className="p-1 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFooterEditor = () => {
    if (!content) return null;
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Footer Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Text
              </label>
              <input
                type="text"
                value={content.logo.text || ''}
                onChange={(e) => handleTextChange(e, 'logo.text')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Icon
              </label>
              <select
                value={content.logo.icon || 'Zap'}
                onChange={(e) => handleTextChange(e, 'logo.icon')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              >
                <option value="Zap">Zap (Lightning)</option>
                <option value="Shield">Shield (Security)</option>
                <option value="Globe">Globe (World)</option>
                <option value="Server">Server (Hosting)</option>
                <option value="Cloud">Cloud (Cloud Services)</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Footer Description
            </label>
            <textarea
              value={content.description || ''}
              onChange={(e) => handleTextChange(e, 'description')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Copyright Text
            </label>
            <input
              type="text"
              value={content.copyright || ''}
              onChange={(e) => handleTextChange(e, 'copyright')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Footer Sections</h3>
            <button
              type="button"
              onClick={() => handleAddItem('sections', { title: 'NEW SECTION', links: [] })}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {content.sections.map((section: any, index: number) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-800">Section {index + 1}</h4>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMoveItem('sections', index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem('sections', index, 'down')}
                    disabled={index === content.sections.length - 1}
                    className="p-1 text-gray-500 hover:text-main-green disabled:opacity-30"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('sections', index)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section Title
                </label>
                <input
                  type="text"
                  value={section.title || ''}
                  onChange={(e) => handleTextChange(e, `sections[${index}].title`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Links
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem(`sections[${index}].links`, { name: 'New Link', path: '/' })}
                    className="p-1 text-main-green hover:text-secondary-green"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                {section.links.map((link: any, linkIndex: number) => (
                  <div key={linkIndex} className="flex items-center space-x-2 mt-2">
                    <input
                      type="text"
                      value={link.name || ''}
                      onChange={(e) => handleTextChange(e, `sections[${index}].links[${linkIndex}].name`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                      placeholder="Link name"
                    />
                    <input
                      type="text"
                      value={link.path || ''}
                      onChange={(e) => handleTextChange(e, `sections[${index}].links[${linkIndex}].path`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                      placeholder="Link path"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(`sections[${index}].links`, linkIndex)}
                      className="p-1 text-gray-500 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">Social Links</h3>
            <button
              type="button"
              onClick={() => handleAddItem('socialLinks', { platform: 'New Platform', url: '#' })}
              className="bg-main-green text-white p-2 rounded-lg hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          
          {content.socialLinks.map((link: any, index: number) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <select
                value={link.platform || ''}
                onChange={(e) => handleTextChange(e, `socialLinks[${index}].platform`)}
                className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              >
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="YouTube">YouTube</option>
                <option value="Pinterest">Pinterest</option>
                <option value="TikTok">TikTok</option>
              </select>
              <input
                type="text"
                value={link.url || ''}
                onChange={(e) => handleTextChange(e, `socialLinks[${index}].url`)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                placeholder="URL"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('socialLinks', index)}
                className="p-1 text-gray-500 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderEditor = () => {
    if (!content) return null;
    
    switch (type) {
      case 'header':
        return renderHeaderEditor();
      case 'footer':
        return renderFooterEditor();
      default:
        return null;
    }
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
            Edit {type.charAt(0).toUpperCase() + type.slice(1)}
          </h2>
          <p className="text-gray-600">
            Customize the {type} layout and navigation.
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

      {renderEditor()}
    </div>
  );
};

export default LayoutEditor;