import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Settings, BarChart3 } from 'lucide-react';
import toast from 'react-hot-toast';

interface SettingsProps {
  type: 'general' | 'seo' | 'social' | 'analytics';
}

const SiteSettings: React.FC<SettingsProps> = ({ type }) => {
  const { siteSettings, updateSettings } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    // Initialize form data from settings
    const initialData: Record<string, any> = {};
    
    siteSettings.forEach(setting => {
      // Only include settings relevant to the current type
      if (setting.setting_key.startsWith(type)) {
        const key = setting.setting_key.replace(`${type}_`, '');
        initialData[key] = setting.setting_value;
      }
    });
    
    // Set defaults for general settings
    if (type === 'general' && Object.keys(initialData).length === 0) {
      initialData.site_title = 'Kirods - Premium Business Solutions';
      initialData.site_description = 'Premium solutions and services for your business needs.';
      initialData.contact_email = 'hello@kirods.com';
      initialData.contact_phone = '+1 (555) 123-4567';
      initialData.contact_address = '123 Business Ave, Tech City, TC 12345';
    }
    
    // Set defaults for SEO settings
    if (type === 'seo' && Object.keys(initialData).length === 0) {
      initialData.meta_title = 'Kirods - Premium Business Solutions | Innovation & Excellence';
      initialData.meta_description = 'Premium solutions and services for your business needs. Trusted by thousands of customers worldwide.';
      initialData.meta_keywords = 'kirods, business solutions, premium services, technology, innovation';
      initialData.og_title = 'Kirods - Premium Business Solutions';
      initialData.og_description = 'Premium solutions and services for your business needs. Trusted by thousands of customers worldwide.';
      initialData.twitter_title = 'Kirods - Premium Business Solutions';
      initialData.twitter_description = 'Premium solutions and services for your business needs. Trusted by thousands of customers worldwide.';
    }
    
    // Set defaults for social settings
    if (type === 'social' && Object.keys(initialData).length === 0) {
      initialData.facebook = 'https://facebook.com/kirods';
      initialData.twitter = 'https://twitter.com/kirods';
      initialData.instagram = 'https://instagram.com/kirods';
      initialData.linkedin = 'https://linkedin.com/company/kirods';
      initialData.youtube = 'https://youtube.com/c/kirods';
    }
    
    // Set defaults for analytics settings
    if (type === 'analytics' && Object.keys(initialData).length === 0) {
      initialData.google_analytics_id = '';
      initialData.facebook_pixel_id = '';
      initialData.enable_analytics = false;
    }
    
    setFormData(initialData);
  }, [siteSettings, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Update all settings for this type
      const promises = Object.entries(formData).map(([key, value]) => {
        return updateSettings(`${type}_${key}`, value);
      });
      
      await Promise.all(promises);
      toast.success('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setIsLoading(false);
    }
  };

  const renderGeneralSettings = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="site_title" className="block text-sm font-medium text-gray-700 mb-2">
            Site Title
          </label>
          <input
            id="site_title"
            name="site_title"
            type="text"
            value={formData.site_title || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="site_tagline" className="block text-sm font-medium text-gray-700 mb-2">
            Site Tagline
          </label>
          <input
            id="site_tagline"
            name="site_tagline"
            type="text"
            value={formData.site_tagline || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="site_description" className="block text-sm font-medium text-gray-700 mb-2">
          Site Description
        </label>
        <textarea
          id="site_description"
          name="site_description"
          rows={3}
          value={formData.site_description || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
        />
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              name="contact_email"
              type="email"
              value={formData.contact_email || ''}
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <input
              name="contact_phone"
              type="text"
              value={formData.contact_phone || ''}
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              name="contact_address"
              type="text"
              value={formData.contact_address || ''}
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Address"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Regional Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone || 'UTC'}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="Asia/Kolkata">India Standard Time (IST)</option>
            </select>
          </div>
          <div>
            <label htmlFor="date_format" className="block text-sm font-medium text-gray-700 mb-2">
              Date Format
            </label>
            <select
              id="date_format"
              name="date_format"
              value={formData.date_format || 'MM/DD/YYYY'}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );

  const renderSeoSettings = () => (
    <>
      <div className="mb-6">
        <label htmlFor="meta_title" className="block text-sm font-medium text-gray-700 mb-2">
          Meta Title
        </label>
        <input
          id="meta_title"
          name="meta_title"
          type="text"
          value={formData.meta_title || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Recommended length: 50-60 characters
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
          Meta Description
        </label>
        <textarea
          id="meta_description"
          name="meta_description"
          rows={3}
          value={formData.meta_description || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Recommended length: 150-160 characters
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="meta_keywords" className="block text-sm font-medium text-gray-700 mb-2">
          Meta Keywords
        </label>
        <input
          id="meta_keywords"
          name="meta_keywords"
          type="text"
          value={formData.meta_keywords || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Separate keywords with commas
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Open Graph Settings</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="og_title" className="block text-sm font-medium text-gray-700 mb-2">
              OG Title
            </label>
            <input
              id="og_title"
              name="og_title"
              type="text"
              value={formData.og_title || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="og_description" className="block text-sm font-medium text-gray-700 mb-2">
              OG Description
            </label>
            <textarea
              id="og_description"
              name="og_description"
              rows={2}
              value={formData.og_description || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="og_image" className="block text-sm font-medium text-gray-700 mb-2">
              OG Image URL
            </label>
            <input
              id="og_image"
              name="og_image"
              type="text"
              value={formData.og_image || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Twitter Card Settings</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="twitter_title" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Title
            </label>
            <input
              id="twitter_title"
              name="twitter_title"
              type="text"
              value={formData.twitter_title || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="twitter_description" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Description
            </label>
            <textarea
              id="twitter_description"
              name="twitter_description"
              rows={2}
              value={formData.twitter_description || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="twitter_image" className="block text-sm font-medium text-gray-700 mb-2">
              Twitter Image URL
            </label>
            <input
              id="twitter_image"
              name="twitter_image"
              type="text"
              value={formData.twitter_image || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );

  const renderSocialSettings = () => (
    <>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Facebook className="h-5 w-5 text-blue-600" />
          <input
            name="facebook"
            type="text"
            value={formData.facebook || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="Facebook URL"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Twitter className="h-5 w-5 text-blue-400" />
          <input
            name="twitter"
            type="text"
            value={formData.twitter || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="Twitter URL"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Instagram className="h-5 w-5 text-pink-600" />
          <input
            name="instagram"
            type="text"
            value={formData.instagram || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="Instagram URL"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Linkedin className="h-5 w-5 text-blue-700" />
          <input
            name="linkedin"
            type="text"
            value={formData.linkedin || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="LinkedIn URL"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Youtube className="h-5 w-5 text-red-600" />
          <input
            name="youtube"
            type="text"
            value={formData.youtube || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="YouTube URL"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Social Sharing</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              id="enable_social_sharing"
              name="enable_social_sharing"
              type="checkbox"
              checked={formData.enable_social_sharing || false}
              onChange={handleChange}
              className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
            />
            <label htmlFor="enable_social_sharing" className="text-sm text-gray-700">
              Enable social sharing buttons on pages
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="enable_social_follow"
              name="enable_social_follow"
              type="checkbox"
              checked={formData.enable_social_follow || false}
              onChange={handleChange}
              className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
            />
            <label htmlFor="enable_social_follow" className="text-sm text-gray-700">
              Show social follow buttons in footer
            </label>
          </div>
        </div>
      </div>
    </>
  );

  const renderAnalyticsSettings = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <input
            id="enable_analytics"
            name="enable_analytics"
            type="checkbox"
            checked={formData.enable_analytics || false}
            onChange={handleChange}
            className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
          />
          <label htmlFor="enable_analytics" className="text-sm font-medium text-gray-700">
            Enable Analytics Tracking
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="google_analytics_id" className="block text-sm font-medium text-gray-700 mb-2">
            Google Analytics Tracking ID
          </label>
          <input
            id="google_analytics_id"
            name="google_analytics_id"
            type="text"
            value={formData.google_analytics_id || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter your Google Analytics tracking ID (e.g., UA-XXXXXXXXX-X or G-XXXXXXXXXX)
          </p>
        </div>

        <div>
          <label htmlFor="facebook_pixel_id" className="block text-sm font-medium text-gray-700 mb-2">
            Facebook Pixel ID
          </label>
          <input
            id="facebook_pixel_id"
            name="facebook_pixel_id"
            type="text"
            value={formData.facebook_pixel_id || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="XXXXXXXXXXXXXXXXXX"
          />
        </div>

        <div>
          <label htmlFor="hotjar_id" className="block text-sm font-medium text-gray-700 mb-2">
            Hotjar Site ID
          </label>
          <input
            id="hotjar_id"
            name="hotjar_id"
            type="text"
            value={formData.hotjar_id || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
            placeholder="XXXXXXX"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Custom Tracking Code</h3>
        <div>
          <label htmlFor="custom_head_code" className="block text-sm font-medium text-gray-700 mb-2">
            Custom Code (Head)
          </label>
          <textarea
            id="custom_head_code"
            name="custom_head_code"
            rows={4}
            value={formData.custom_head_code || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent font-mono text-sm"
            placeholder="<!-- Add custom code for the <head> section here -->"
          />
          <p className="text-xs text-gray-500 mt-1">
            This code will be added to the <code>&lt;head&gt;</code> section of all pages
          </p>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    switch (type) {
      case 'general':
        return renderGeneralSettings();
      case 'seo':
        return renderSeoSettings();
      case 'social':
        return renderSocialSettings();
      case 'analytics':
        return renderAnalyticsSettings();
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'general':
        return 'General Settings';
      case 'seo':
        return 'SEO Settings';
      case 'social':
        return 'Social Media Settings';
      case 'analytics':
        return 'Analytics Settings';
      default:
        return 'Settings';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'general':
        return <Settings className="h-6 w-6" />;
      case 'seo':
        return <Globe className="h-6 w-6" />;
      case 'social':
        return <Facebook className="h-6 w-6" />;
      case 'analytics':
        return <BarChart3 className="h-6 w-6" />;
      default:
        return <Settings className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-main-green/10 rounded-lg text-main-green">
          {getIcon()}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{getTitle()}</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit}>
          {renderContent()}

          <div className="border-t border-gray-200 pt-6 mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-main-green text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  <span>Save Settings</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiteSettings;