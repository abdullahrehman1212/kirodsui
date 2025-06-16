import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import WHMCSAPISettings from '../../components/admin/WHMCSAPISettings';

const AdminWHMCSAPI = () => {
  const { isAuthenticated, isLoading } = useAdmin();

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

  return <WHMCSAPISettings />;
};

export default AdminWHMCSAPI;