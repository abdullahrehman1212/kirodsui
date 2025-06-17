/**
 * WHMCS API Client
 * 
 * This module provides functions to interact with the WHMCS API through your backend system.
 */

// Define types for WHMCS API responses
interface WHMCSApiResponse {
  result: 'success' | 'error';
  message?: string;
  totalresults?: number;
  [key: string]: any;
}

interface WHMCSClient {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  status: string;
  [key: string]: any;
}

interface WHMCSProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  [key: string]: any;
}

interface WHMCSInvoice {
  id: number;
  invoicenumber: string;
  status: string;
  total: string;
  [key: string]: any;
}

interface WHMCSTicket {
  id: number;
  tid: string;
  subject: string;
  status: string;
  [key: string]: any;
}

/**
 * Make a request to the backend API that communicates with WHMCS
 */
const makeApiRequest = async (action: string, params: Record<string, any> = {}): Promise<WHMCSApiResponse> => {
  try {
    const response = await fetch(`/api/whmcs/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`WHMCS API Error (${action}):`, error);
    
    return {
      result: 'error',
      message: error.message || 'An unknown error occurred'
    };
  }
};

/**
 * Test the WHMCS API connection
 */
export const testApiConnection = async (): Promise<WHMCSApiResponse> => {
  return makeApiRequest('test-connection');
};

/**
 * Get clients from WHMCS
 */
export const getClients = async (params: Record<string, any> = {}): Promise<WHMCSClient[]> => {
  const response = await makeApiRequest('get-clients', params);
  
  if (response.result === 'success' && response.clients) {
    return response.clients;
  }
  
  return [];
};

/**
 * Get a specific client from WHMCS
 */
export const getClient = async (clientId: number): Promise<WHMCSClient | null> => {
  const response = await makeApiRequest('get-client', { clientid: clientId });
  
  if (response.result === 'success') {
    return response.client;
  }
  
  return null;
};

/**
 * Create a client in WHMCS
 */
export const createClient = async (clientData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('create-client', clientData);
};

/**
 * Update a client in WHMCS
 */
export const updateClient = async (clientId: number, clientData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('update-client', { clientid: clientId, ...clientData });
};

/**
 * Get products from WHMCS
 */
export const getProducts = async (params: Record<string, any> = {}): Promise<WHMCSProduct[]> => {
  const response = await makeApiRequest('get-products', params);
  
  if (response.result === 'success' && response.products) {
    return response.products;
  }
  
  return [];
};

/**
 * Get invoices from WHMCS
 */
export const getInvoices = async (params: Record<string, any> = {}): Promise<WHMCSInvoice[]> => {
  const response = await makeApiRequest('get-invoices', params);
  
  if (response.result === 'success' && response.invoices) {
    return response.invoices;
  }
  
  return [];
};

/**
 * Create an invoice in WHMCS
 */
export const createInvoice = async (invoiceData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('create-invoice', invoiceData);
};

/**
 * Get tickets from WHMCS
 */
export const getTickets = async (params: Record<string, any> = {}): Promise<WHMCSTicket[]> => {
  const response = await makeApiRequest('get-tickets', params);
  
  if (response.result === 'success' && response.tickets) {
    return response.tickets;
  }
  
  return [];
};

/**
 * Create a ticket in WHMCS
 */
export const createTicket = async (ticketData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('create-ticket', ticketData);
};

/**
 * Add a ticket reply in WHMCS
 */
export const addTicketReply = async (ticketId: number, message: string, clientId?: number): Promise<WHMCSApiResponse> => {
  const params: Record<string, any> = {
    ticketid: ticketId,
    message
  };
  
  if (clientId) {
    params.clientid = clientId;
  }
  
  return makeApiRequest('add-ticket-reply', params);
};

/**
 * Get orders from WHMCS
 */
export const getOrders = async (params: Record<string, any> = {}): Promise<any[]> => {
  const response = await makeApiRequest('get-orders', params);
  
  if (response.result === 'success' && response.orders) {
    return response.orders;
  }
  
  return [];
};

/**
 * Get services/hosting accounts from WHMCS
 */
export const getServices = async (params: Record<string, any> = {}): Promise<any[]> => {
  const response = await makeApiRequest('get-services', params);
  
  if (response.result === 'success' && response.services) {
    return response.services;
  }
  
  return [];
};

/**
 * Get domains from WHMCS
 */
export const getDomains = async (params: Record<string, any> = {}): Promise<any[]> => {
  const response = await makeApiRequest('get-domains', params);
  
  if (response.result === 'success' && response.domains) {
    return response.domains;
  }
  
  return [];
};

/**
 * Get WHMCS admin users
 */
export const getAdminUsers = async (): Promise<any[]> => {
  const response = await makeApiRequest('get-admin-users');
  
  if (response.result === 'success' && response.users) {
    return response.users;
  }
  
  return [];
};

/**
 * Get system stats from WHMCS
 */
export const getStats = async (): Promise<any> => {
  const response = await makeApiRequest('get-stats');
  
  if (response.result === 'success') {
    return response.stats;
  }
  
  return null;
};

export default {
  testApiConnection,
  getClients,
  getClient,
  createClient,
  updateClient,
  getProducts,
  getInvoices,
  createInvoice,
  getTickets,
  createTicket,
  addTicketReply,
  getOrders,
  getServices,
  getDomains,
  getAdminUsers,
  getStats
};