import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import LayoutEditor from '../../components/admin/LayoutEditor';

const AdminLayoutEditor = () => {
  const { isAuthenticated, isLoading } = useAdmin();
  const { type = 'header' } = useParams<{ type: string }>();

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
  const validTypes = ['header', 'footer'];
  const layoutType = validTypes.includes(type as string) 
    ? type as 'header' | 'footer'
    : 'header';

  return <LayoutEditor type={layoutType} />;
};

export default AdminLayoutEditor;