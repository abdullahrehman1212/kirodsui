import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, SiteContent, SiteSettings, MediaFile } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AdminContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  siteContent: SiteContent[];
  siteSettings: SiteSettings[];
  mediaFiles: MediaFile[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateContent: (id: string, content: any) => Promise<void>;
  createContent: (page: string, section: string, contentType: string, content: any) => Promise<void>;
  deleteContent: (id: string) => Promise<void>;
  updateSettings: (key: string, value: any) => Promise<void>;
  uploadMedia: (file: File, altText?: string) => Promise<MediaFile | null>;
  deleteMedia: (id: string) => Promise<void>;
  refreshData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [siteContent, setSiteContent] = useState<SiteContent[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      if (data.user) {
        setIsAuthenticated(true);
        toast.success('Login successful!');
        return true;
      }
      return false;
    } catch (error) {
      toast.error('Login failed');
      return false;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      setSiteContent([]);
      setSiteSettings([]);
      setMediaFiles([]);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const loadData = async () => {
    try {
      // Load site content
      const { data: contentData, error: contentError } = await supabase
        .from('site_content')
        .select('*')
        .order('page', { ascending: true });

      if (contentError) throw contentError;
      setSiteContent(contentData || []);

      // Load site settings
      const { data: settingsData, error: settingsError } = await supabase
        .from('site_settings')
        .select('*');

      if (settingsError) throw settingsError;
      setSiteSettings(settingsData || []);

      // Load media files
      const { data: mediaData, error: mediaError } = await supabase
        .from('media_files')
        .select('*')
        .order('created_at', { ascending: false });

      if (mediaError) throw mediaError;
      setMediaFiles(mediaData || []);

    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load data');
    }
  };

  const updateContent = async (id: string, content: any) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setSiteContent(prev => 
        prev.map(item => 
          item.id === id 
            ? { ...item, content, updated_at: new Date().toISOString() }
            : item
        )
      );

      toast.success('Content updated successfully');
    } catch (error) {
      console.error('Error updating content:', error);
      toast.error('Failed to update content');
    }
  };

  const createContent = async (page: string, section: string, contentType: string, content: any) => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .insert([{
          page,
          section,
          content_type: contentType,
          content
        }])
        .select()
        .single();

      if (error) throw error;

      setSiteContent(prev => [...prev, data]);
      toast.success('Content created successfully');
    } catch (error) {
      console.error('Error creating content:', error);
      toast.error('Failed to create content');
    }
  };

  const deleteContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSiteContent(prev => prev.filter(item => item.id !== id));
      toast.success('Content deleted successfully');
    } catch (error) {
      console.error('Error deleting content:', error);
      toast.error('Failed to delete content');
    }
  };

  const updateSettings = async (key: string, value: any) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: key,
          setting_value: value,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      setSiteSettings(prev => {
        const existing = prev.find(s => s.setting_key === key);
        if (existing) {
          return prev.map(s => 
            s.setting_key === key 
              ? { ...s, setting_value: value, updated_at: new Date().toISOString() }
              : s
          );
        } else {
          return [...prev, {
            id: Date.now().toString(),
            setting_key: key,
            setting_value: value,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }];
        }
      });

      toast.success('Settings updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
      toast.error('Failed to update settings');
    }
  };

  const uploadMedia = async (file: File, altText?: string): Promise<MediaFile | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `media/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: mediaData, error: insertError } = await supabase
        .from('media_files')
        .insert([{
          filename: file.name,
          file_path: filePath,
          file_size: file.size,
          mime_type: file.type,
          alt_text: altText
        }])
        .select()
        .single();

      if (insertError) throw insertError;

      setMediaFiles(prev => [mediaData, ...prev]);
      toast.success('Media uploaded successfully');
      return mediaData;
    } catch (error) {
      console.error('Error uploading media:', error);
      toast.error('Failed to upload media');
      return null;
    }
  };

  const deleteMedia = async (id: string) => {
    try {
      const mediaFile = mediaFiles.find(m => m.id === id);
      if (!mediaFile) return;

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('media')
        .remove([mediaFile.file_path]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('media_files')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      setMediaFiles(prev => prev.filter(m => m.id !== id));
      toast.success('Media deleted successfully');
    } catch (error) {
      console.error('Error deleting media:', error);
      toast.error('Failed to delete media');
    }
  };

  const refreshData = async () => {
    await loadData();
  };

  const value: AdminContextType = {
    isAuthenticated,
    isLoading,
    siteContent,
    siteSettings,
    mediaFiles,
    login,
    logout,
    updateContent,
    createContent,
    deleteContent,
    updateSettings,
    uploadMedia,
    deleteMedia,
    refreshData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};