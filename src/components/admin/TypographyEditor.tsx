import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Undo, Eye, Type, Plus, Minus } from 'lucide-react';
import toast from 'react-hot-toast';

const TypographyEditor = () => {
  const { siteSettings, updateSettings } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  const [typography, setTypography] = useState({
    fontFamily: 'Inter, sans-serif',
    headingFontFamily: 'Inter, sans-serif',
    baseFontSize: '16px',
    headingScale: '1.2',
    lineHeight: '1.6',
    headingLineHeight: '1.2',
    fontWeights: ['300', '400', '500', '600', '700', '800', '900']
  });
  const [originalTypography, setOriginalTypography] = useState({
    fontFamily: 'Inter, sans-serif',
    headingFontFamily: 'Inter, sans-serif',
    baseFontSize: '16px',
    headingScale: '1.2',
    lineHeight: '1.6',
    headingLineHeight: '1.2',
    fontWeights: ['300', '400', '500', '600', '700', '800', '900']
  });

  useEffect(() => {
    // Load typography settings
    const fontFamilySetting = siteSettings.find(s => s.setting_key === 'typography_fontFamily');
    const headingFontFamilySetting = siteSettings.find(s => s.setting_key === 'typography_headingFontFamily');
    const baseFontSizeSetting = siteSettings.find(s => s.setting_key === 'typography_baseFontSize');
    const headingScaleSetting = siteSettings.find(s => s.setting_key === 'typography_headingScale');
    const lineHeightSetting = siteSettings.find(s => s.setting_key === 'typography_lineHeight');
    const headingLineHeightSetting = siteSettings.find(s => s.setting_key === 'typography_headingLineHeight');
    const fontWeightsSetting = siteSettings.find(s => s.setting_key === 'typography_fontWeights');
    
    const loadedTypography = {
      fontFamily: fontFamilySetting?.setting_value || 'Inter, sans-serif',
      headingFontFamily: headingFontFamilySetting?.setting_value || 'Inter, sans-serif',
      baseFontSize: baseFontSizeSetting?.setting_value || '16px',
      headingScale: headingScaleSetting?.setting_value || '1.2',
      lineHeight: lineHeightSetting?.setting_value || '1.6',
      headingLineHeight: headingLineHeightSetting?.setting_value || '1.2',
      fontWeights: fontWeightsSetting?.setting_value || ['300', '400', '500', '600', '700', '800', '900']
    };
    
    setTypography(loadedTypography);
    setOriginalTypography(loadedTypography);
  }, [siteSettings]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTypography(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFontWeightChange = (weight: string, checked: boolean) => {
    setTypography(prev => {
      const newWeights = checked
        ? [...prev.fontWeights, weight].sort((a, b) => parseInt(a) - parseInt(b))
        : prev.fontWeights.filter(w => w !== weight);
      
      return {
        ...prev,
        fontWeights: newWeights
      };
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Update all typography settings
      const promises = Object.entries(typography).map(([key, value]) => {
        return updateSettings(`typography_${key}`, value);
      });
      
      await Promise.all(promises);
      setOriginalTypography(typography);
      toast.success('Typography settings saved successfully');
      
      // Prompt to refresh the page to see changes
      if (window.confirm('Typography settings have been saved. Refresh the page to see the changes?')) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving typography:', error);
      toast.error('Failed to save typography settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your changes? All unsaved changes will be lost.')) {
      setTypography(originalTypography);
      toast.success('Changes reset');
    }
  };

  const fontOptions = [
    { value: 'Inter, sans-serif', label: 'Inter (Default)' },
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: 'Helvetica, sans-serif', label: 'Helvetica' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Verdana, sans-serif', label: 'Verdana' },
    { value: 'Roboto, sans-serif', label: 'Roboto' },
    { value: 'Open Sans, sans-serif', label: 'Open Sans' },
    { value: 'Lato, sans-serif', label: 'Lato' },
    { value: 'Montserrat, sans-serif', label: 'Montserrat' },
    { value: 'Poppins, sans-serif', label: 'Poppins' },
    { value: 'Playfair Display, serif', label: 'Playfair Display' },
    { value: 'Merriweather, serif', label: 'Merriweather' }
  ];

  const fontWeightOptions = [
    { value: '100', label: 'Thin (100)' },
    { value: '200', label: 'Extra Light (200)' },
    { value: '300', label: 'Light (300)' },
    { value: '400', label: 'Regular (400)' },
    { value: '500', label: 'Medium (500)' },
    { value: '600', label: 'Semi Bold (600)' },
    { value: '700', label: 'Bold (700)' },
    { value: '800', label: 'Extra Bold (800)' },
    { value: '900', label: 'Black (900)' }
  ];

  const calculateHeadingSizes = () => {
    const baseSize = parseFloat(typography.baseFontSize);
    const scale = parseFloat(typography.headingScale);
    
    return {
      h1: `${(baseSize * Math.pow(scale, 4)).toFixed(1)}px`,
      h2: `${(baseSize * Math.pow(scale, 3)).toFixed(1)}px`,
      h3: `${(baseSize * Math.pow(scale, 2)).toFixed(1)}px`,
      h4: `${(baseSize * Math.pow(scale, 1)).toFixed(1)}px`,
      h5: `${baseSize.toFixed(1)}px`,
      h6: `${(baseSize * 0.9).toFixed(1)}px`
    };
  };

  const headingSizes = calculateHeadingSizes();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Typography</h2>
          <p className="text-gray-600">
            Customize the fonts and typography of your website.
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Typography Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-6">Font Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Body Font
                </label>
                <select
                  name="fontFamily"
                  value={typography.fontFamily}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                >
                  {fontOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Font used for body text and general content
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heading Font
                </label>
                <select
                  name="headingFontFamily"
                  value={typography.headingFontFamily}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                >
                  {fontOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Font used for headings (h1-h6)
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Base Font Size
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => {
                      const currentSize = parseFloat(typography.baseFontSize);
                      if (currentSize > 12) {
                        setTypography(prev => ({
                          ...prev,
                          baseFontSize: `${currentSize - 1}px`
                        }));
                      }
                    }}
                    className="p-2 bg-gray-100 rounded-l-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    name="baseFontSize"
                    value={typography.baseFontSize}
                    onChange={handleChange}
                    className="w-20 px-3 py-2 border-y border-gray-300 text-center focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const currentSize = parseFloat(typography.baseFontSize);
                      if (currentSize < 24) {
                        setTypography(prev => ({
                          ...prev,
                          baseFontSize: `${currentSize + 1}px`
                        }));
                      }
                    }}
                    className="p-2 bg-gray-100 rounded-r-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Base size for all text (default: 16px)
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heading Scale
                </label>
                <input
                  type="range"
                  name="headingScale"
                  min="1.1"
                  max="1.5"
                  step="0.05"
                  value={typography.headingScale}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1.1</span>
                  <span>{typography.headingScale}</span>
                  <span>1.5</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Scale factor between heading levels
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Body Line Height
                </label>
                <input
                  type="range"
                  name="lineHeight"
                  min="1.2"
                  max="2"
                  step="0.1"
                  value={typography.lineHeight}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1.2</span>
                  <span>{typography.lineHeight}</span>
                  <span>2.0</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Line height for body text (default: 1.6)
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heading Line Height
                </label>
                <input
                  type="range"
                  name="headingLineHeight"
                  min="1"
                  max="1.6"
                  step="0.05"
                  value={typography.headingLineHeight}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1.0</span>
                  <span>{typography.headingLineHeight}</span>
                  <span>1.6</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Line height for headings (default: 1.2)
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-6">Font Weights</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {fontWeightOptions.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`weight-${option.value}`}
                    checked={typography.fontWeights.includes(option.value)}
                    onChange={(e) => handleFontWeightChange(option.value, e.target.checked)}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor={`weight-${option.value}`} className="ml-2 text-sm text-gray-700">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Select which font weights to include. Using fewer weights improves performance.
            </p>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Typography Preview</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Headings</h4>
                <div 
                  className="space-y-3 p-4 bg-gray-50 rounded-lg"
                  style={{ fontFamily: typography.headingFontFamily }}
                >
                  <div style={{ fontSize: headingSizes.h1, lineHeight: typography.headingLineHeight, fontWeight: 700 }}>
                    Heading 1
                  </div>
                  <div style={{ fontSize: headingSizes.h2, lineHeight: typography.headingLineHeight, fontWeight: 700 }}>
                    Heading 2
                  </div>
                  <div style={{ fontSize: headingSizes.h3, lineHeight: typography.headingLineHeight, fontWeight: 600 }}>
                    Heading 3
                  </div>
                  <div style={{ fontSize: headingSizes.h4, lineHeight: typography.headingLineHeight, fontWeight: 600 }}>
                    Heading 4
                  </div>
                  <div style={{ fontSize: headingSizes.h5, lineHeight: typography.headingLineHeight, fontWeight: 500 }}>
                    Heading 5
                  </div>
                  <div style={{ fontSize: headingSizes.h6, lineHeight: typography.headingLineHeight, fontWeight: 500 }}>
                    Heading 6
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Body Text</h4>
                <div 
                  className="p-4 bg-gray-50 rounded-lg"
                  style={{ 
                    fontFamily: typography.fontFamily,
                    fontSize: typography.baseFontSize,
                    lineHeight: typography.lineHeight
                  }}
                >
                  <p className="mb-4">
                    This is a paragraph of text that demonstrates how body content will appear on your website. 
                    The font family, size, and line height settings affect how readable your content is.
                  </p>
                  <p>
                    Good typography improves readability and user experience. It helps guide users through your 
                    content and establishes visual hierarchy.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Font Weights</h4>
                <div 
                  className="space-y-2 p-4 bg-gray-50 rounded-lg"
                  style={{ 
                    fontFamily: typography.fontFamily,
                    fontSize: typography.baseFontSize
                  }}
                >
                  {typography.fontWeights.map(weight => (
                    <div key={weight} style={{ fontWeight: weight }}>
                      {weight}: The quick brown fox jumps over the lazy dog
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Typography Tips</h3>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <Type className="h-4 w-4 text-main-green mt-0.5" />
                <p>Use no more than 2-3 font weights for better performance</p>
              </div>
              <div className="flex items-start space-x-2">
                <Type className="h-4 w-4 text-main-green mt-0.5" />
                <p>Line height of 1.5-1.6 is ideal for body text readability</p>
              </div>
              <div className="flex items-start space-x-2">
                <Type className="h-4 w-4 text-main-green mt-0.5" />
                <p>16px is the recommended minimum font size for body text</p>
              </div>
              <div className="flex items-start space-x-2">
                <Type className="h-4 w-4 text-main-green mt-0.5" />
                <p>Using the same font for headings and body text creates a clean, cohesive look</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyEditor;