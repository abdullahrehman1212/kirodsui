import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import ContentEditor from '../../components/admin/ContentEditor';

const AdminContentEditor = () => {
  const { isAuthenticated, isLoading } = useAdmin();
  const { page = 'home', section = 'hero' } = useParams<{ page: string; section: string }>();

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

  return <ContentEditor page={page} section={section} />;
};

export default AdminContentEditor;