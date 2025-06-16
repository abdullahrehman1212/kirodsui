import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import SiteSettings from '../../components/admin/SiteSettings';

const AdminSettings = () => {
  const { isAuthenticated, isLoading } = useAdmin();
  const { type = 'general' } = useParams<{ type: string }>();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-green"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  // Validate the type parameter
  const validTypes = ['general', 'seo', 'social', 'analytics'];
  const settingsType = validTypes.includes(type as string) 
    ? type as 'general' | 'seo' | 'social' | 'analytics'
    : 'general';

  return <SiteSettings type={settingsType} />;
};

export default AdminSettings;