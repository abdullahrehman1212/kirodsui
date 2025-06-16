import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Save, 
  Lock, 
  Users, 
  Package, 
  CreditCard, 
  MessageCircle, 
  FileText, 
  Database, 
  Globe, 
  Mail, 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle
} from 'lucide-react';
import toast from 'react-hot-toast';

const WHMCSPermissionsManager = () => {
  const { siteSettings, updateSettings } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  
  const [permissions, setPermissions] = useState({
    // Client Management
    listClients: true,
    viewClientDetails: true,
    createClient: true,
    updateClient: true,
    deleteClient: false,
    
    // Products & Services
    listProducts: true,
    viewProductDetails: true,
    createProduct: false,
    updateProduct: false,
    deleteProduct: false,
    
    // Billing & Invoices
    listInvoices: true,
    viewInvoiceDetails: true,
    createInvoice: true,
    updateInvoice: false,
    deleteInvoice: false,
    
    // Support & Tickets
    listTickets: true,
    viewTicketDetails: true,
    createTicket: true,
    replyTicket: true,
    closeTicket: true,
    
    // Domains
    listDomains: true,
    viewDomainDetails: true,
    registerDomain: true,
    transferDomain: true,
    renewDomain: true,
    
    // System
    viewSystemLogs: true,
    viewApiLogs: true,
    viewActivityLogs: false,
    viewAdminLogs: false
  });

  useEffect(() => {
    // Load permissions from settings
    const permissionsSetting = siteSettings.find(s => s.setting_key === 'whmcs_permissions');
    
    if (permissionsSetting?.setting_value) {
      setPermissions(permissionsSetting.setting_value);
    }
  }, [siteSettings]);

  const handlePermissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setPermissions(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await updateSettings('whmcs_permissions', permissions);
      toast.success('WHMCS permissions saved successfully');
    } catch (error) {
      console.error('Error saving WHMCS permissions:', error);
      toast.error('Failed to save WHMCS permissions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-main-green/10 rounded-lg text-main-green">
          <Lock className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">WHMCS API Permissions</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Client Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="listClients"
                    name="listClients"
                    checked={permissions.listClients}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="listClients" className="text-sm text-gray-700">
                    List Clients
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewClientDetails"
                    name="viewClientDetails"
                    checked={permissions.viewClientDetails}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewClientDetails" className="text-sm text-gray-700">
                    View Client Details
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="createClient"
                    name="createClient"
                    checked={permissions.createClient}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="createClient" className="text-sm text-gray-700">
                    Create Clients
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="updateClient"
                    name="updateClient"
                    checked={permissions.updateClient}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="updateClient" className="text-sm text-gray-700">
                    Update Clients
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="deleteClient"
                    name="deleteClient"
                    checked={permissions.deleteClient}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="deleteClient" className="text-sm text-gray-700">
                    Delete Clients
                  </label>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Products & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="listProducts"
                    name="listProducts"
                    checked={permissions.listProducts}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="listProducts" className="text-sm text-gray-700">
                    List Products
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewProductDetails"
                    name="viewProductDetails"
                    checked={permissions.viewProductDetails}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewProductDetails" className="text-sm text-gray-700">
                    View Product Details
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="createProduct"
                    name="createProduct"
                    checked={permissions.createProduct}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="createProduct" className="text-sm text-gray-700">
                    Create Products
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="updateProduct"
                    name="updateProduct"
                    checked={permissions.updateProduct}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="updateProduct" className="text-sm text-gray-700">
                    Update Products
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="deleteProduct"
                    name="deleteProduct"
                    checked={permissions.deleteProduct}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="deleteProduct" className="text-sm text-gray-700">
                    Delete Products
                  </label>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Billing & Invoices</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="listInvoices"
                    name="listInvoices"
                    checked={permissions.listInvoices}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="listInvoices" className="text-sm text-gray-700">
                    List Invoices
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewInvoiceDetails"
                    name="viewInvoiceDetails"
                    checked={permissions.viewInvoiceDetails}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewInvoiceDetails" className="text-sm text-gray-700">
                    View Invoice Details
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="createInvoice"
                    name="createInvoice"
                    checked={permissions.createInvoice}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="createInvoice" className="text-sm text-gray-700">
                    Create Invoices
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="updateInvoice"
                    name="updateInvoice"
                    checked={permissions.updateInvoice}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="updateInvoice" className="text-sm text-gray-700">
                    Update Invoices
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="deleteInvoice"
                    name="deleteInvoice"
                    checked={permissions.deleteInvoice}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="deleteInvoice" className="text-sm text-gray-700">
                    Delete Invoices
                  </label>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Support & Tickets</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="listTickets"
                    name="listTickets"
                    checked={permissions.listTickets}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="listTickets" className="text-sm text-gray-700">
                    List Tickets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewTicketDetails"
                    name="viewTicketDetails"
                    checked={permissions.viewTicketDetails}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewTicketDetails" className="text-sm text-gray-700">
                    View Ticket Details
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="createTicket"
                    name="createTicket"
                    checked={permissions.createTicket}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="createTicket" className="text-sm text-gray-700">
                    Create Tickets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="replyTicket"
                    name="replyTicket"
                    checked={permissions.replyTicket}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="replyTicket" className="text-sm text-gray-700">
                    Reply to Tickets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="closeTicket"
                    name="closeTicket"
                    checked={permissions.closeTicket}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="closeTicket" className="text-sm text-gray-700">
                    Close Tickets
                  </label>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">System & Logs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewSystemLogs"
                    name="viewSystemLogs"
                    checked={permissions.viewSystemLogs}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewSystemLogs" className="text-sm text-gray-700">
                    View System Logs
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewApiLogs"
                    name="viewApiLogs"
                    checked={permissions.viewApiLogs}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewApiLogs" className="text-sm text-gray-700">
                    View API Logs
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewActivityLogs"
                    name="viewActivityLogs"
                    checked={permissions.viewActivityLogs}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewActivityLogs" className="text-sm text-gray-700">
                    View Activity Logs
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="viewAdminLogs"
                    name="viewAdminLogs"
                    checked={permissions.viewAdminLogs}
                    onChange={handlePermissionChange}
                    className="h-4 w-4 text-main-green focus:ring-main-green border-gray-300 rounded"
                  />
                  <label htmlFor="viewAdminLogs" className="text-sm text-gray-700">
                    View Admin Logs
                  </label>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-main-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    <span>Save Permissions</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WHMCSPermissionsManager;