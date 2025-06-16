import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Undo, Eye, Palette, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const ThemeEditor = () => {
  const { siteSettings, updateSettings } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  const [colors, setColors] = useState({
    mainGreen: '#2E7D32',
    secondaryGreen: '#4CAF50',
    accentGreen: '#81C784',
    backgroundGreen: '#F1F8E9',
    textDark: '#212121'
  });
  const [originalColors, setOriginalColors] = useState({
    mainGreen: '#2E7D32',
    secondaryGreen: '#4CAF50',
    accentGreen: '#81C784',
    backgroundGreen: '#F1F8E9',
    textDark: '#212121'
  });

  useEffect(() => {
    // Load colors from settings
    const mainGreenSetting = siteSettings.find(s => s.setting_key === 'theme_mainGreen');
    const secondaryGreenSetting = siteSettings.find(s => s.setting_key === 'theme_secondaryGreen');
    const accentGreenSetting = siteSettings.find(s => s.setting_key === 'theme_accentGreen');
    const backgroundGreenSetting = siteSettings.find(s => s.setting_key === 'theme_backgroundGreen');
    const textDarkSetting = siteSettings.find(s => s.setting_key === 'theme_textDark');
    
    const loadedColors = {
      mainGreen: mainGreenSetting?.setting_value || '#2E7D32',
      secondaryGreen: secondaryGreenSetting?.setting_value || '#4CAF50',
      accentGreen: accentGreenSetting?.setting_value || '#81C784',
      backgroundGreen: backgroundGreenSetting?.setting_value || '#F1F8E9',
      textDark: textDarkSetting?.setting_value || '#212121'
    };
    
    setColors(loadedColors);
    setOriginalColors(loadedColors);
  }, [siteSettings]);

  const handleColorChange = (colorKey: string, value: string) => {
    setColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Update all color settings
      const promises = Object.entries(colors).map(([key, value]) => {
        return updateSettings(`theme_${key}`, value);
      });
      
      await Promise.all(promises);
      setOriginalColors(colors);
      toast.success('Theme colors saved successfully');
      
      // Prompt to refresh the page to see changes
      if (window.confirm('Theme colors have been saved. Refresh the page to see the changes?')) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving theme:', error);
      toast.error('Failed to save theme colors');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your changes? All unsaved changes will be lost.')) {
      setColors(originalColors);
      toast.success('Changes reset');
    }
  };

  const colorPresets = [
    {
      name: 'Default Green',
      colors: {
        mainGreen: '#2E7D32',
        secondaryGreen: '#4CAF50',
        accentGreen: '#81C784',
        backgroundGreen: '#F1F8E9',
        textDark: '#212121'
      }
    },
    {
      name: 'Ocean Blue',
      colors: {
        mainGreen: '#1565C0',
        secondaryGreen: '#1976D2',
        accentGreen: '#64B5F6',
        backgroundGreen: '#E3F2FD',
        textDark: '#212121'
      }
    },
    {
      name: 'Purple Elegance',
      colors: {
        mainGreen: '#6A1B9A',
        secondaryGreen: '#8E24AA',
        accentGreen: '#BA68C8',
        backgroundGreen: '#F3E5F5',
        textDark: '#212121'
      }
    },
    {
      name: 'Warm Orange',
      colors: {
        mainGreen: '#E65100',
        secondaryGreen: '#EF6C00',
        accentGreen: '#FFB74D',
        backgroundGreen: '#FFF3E0',
        textDark: '#212121'
      }
    },
    {
      name: 'Teal Calm',
      colors: {
        mainGreen: '#00695C',
        secondaryGreen: '#00796B',
        accentGreen: '#4DB6AC',
        backgroundGreen: '#E0F2F1',
        textDark: '#212121'
      }
    }
  ];

  const applyPreset = (preset: any) => {
    setColors(preset.colors);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Theme & Colors</h2>
          <p className="text-gray-600">
            Customize the color scheme of your website.
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
        {/* Color Picker */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-6">Color Scheme</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Green (Primary Color)
                </label>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg border border-gray-300" 
                    style={{ backgroundColor: colors.mainGreen }}
                  ></div>
                  <input
                    type="text"
                    value={colors.mainGreen}
                    onChange={(e) => handleColorChange('mainGreen', e.target.value)}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <input
                    type="color"
                    value={colors.mainGreen}
                    onChange={(e) => handleColorChange('mainGreen', e.target.value)}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Used for primary buttons, links, and important UI elements
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Green
                </label>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg border border-gray-300" 
                    style={{ backgroundColor: colors.secondaryGreen }}
                  ></div>
                  <input
                    type="text"
                    value={colors.secondaryGreen}
                    onChange={(e) => handleColorChange('secondaryGreen', e.target.value)}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <input
                    type="color"
                    value={colors.secondaryGreen}
                    onChange={(e) => handleColorChange('secondaryGreen', e.target.value)}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Used for hover states, gradients, and secondary UI elements
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accent Green
                </label>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg border border-gray-300" 
                    style={{ backgroundColor: colors.accentGreen }}
                  ></div>
                  <input
                    type="text"
                    value={colors.accentGreen}
                    onChange={(e) => handleColorChange('accentGreen', e.target.value)}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <input
                    type="color"
                    value={colors.accentGreen}
                    onChange={(e) => handleColorChange('accentGreen', e.target.value)}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Used for accents, highlights, and tertiary UI elements
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background Green
                </label>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg border border-gray-300" 
                    style={{ backgroundColor: colors.backgroundGreen }}
                  ></div>
                  <input
                    type="text"
                    value={colors.backgroundGreen}
                    onChange={(e) => handleColorChange('backgroundGreen', e.target.value)}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <input
                    type="color"
                    value={colors.backgroundGreen}
                    onChange={(e) => handleColorChange('backgroundGreen', e.target.value)}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Used for section backgrounds and subtle UI elements
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Dark
                </label>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg border border-gray-300" 
                    style={{ backgroundColor: colors.textDark }}
                  ></div>
                  <input
                    type="text"
                    value={colors.textDark}
                    onChange={(e) => handleColorChange('textDark', e.target.value)}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  />
                  <input
                    type="color"
                    value={colors.textDark}
                    onChange={(e) => handleColorChange('textDark', e.target.value)}
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Used for headings and primary text content
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview and Presets */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Preview</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.backgroundGreen }}>
                <h4 className="text-lg font-bold mb-2" style={{ color: colors.textDark }}>
                  Section Title
                </h4>
                <p className="text-gray-600 mb-4">
                  This is how your content will look with the selected colors.
                </p>
                <button
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: colors.mainGreen }}
                >
                  Primary Button
                </button>
                <div className="mt-3">
                  <a href="#" className="text-sm font-medium" style={{ color: colors.secondaryGreen }}>
                    Text Link
                  </a>
                </div>
              </div>
              
              <div className="p-4 rounded-lg" style={{ background: `linear-gradient(to right, ${colors.mainGreen}, ${colors.secondaryGreen})` }}>
                <h4 className="text-lg font-bold mb-2 text-white">
                  Gradient Section
                </h4>
                <p className="text-white/80 mb-4">
                  Gradient backgrounds will use your primary and secondary colors.
                </p>
                <button
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: 'white', color: colors.mainGreen }}
                >
                  Inverted Button
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.mainGreen }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.secondaryGreen }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.accentGreen }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.backgroundGreen }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.textDark }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Color Presets</h3>
            
            <div className="space-y-3">
              {colorPresets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => applyPreset(preset)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-800">{preset.name}</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.colors.mainGreen }}></div>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.colors.secondaryGreen }}></div>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.colors.accentGreen }}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;