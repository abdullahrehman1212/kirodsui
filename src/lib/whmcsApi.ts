/**
 * WHMCS API Client
 * 
 * This module provides functions to interact with the WHMCS API.
 */

import { supabase } from './supabase';

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
 * Get WHMCS API credentials from Supabase settings
 */
const getWHMCSCredentials = async () => {
  try {
    const { data: apiUrlData } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'whmcs_apiUrl')
      .single();
      
    const { data: apiIdentifierData } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'whmcs_apiIdentifier')
      .single();
      
    const { data: apiSecretData } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'whmcs_apiSecret')
      .single();
      
    const { data: accessKeyData } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'whmcs_accessKey')
      .single();
    
    return {
      apiUrl: apiUrlData?.setting_value,
      apiIdentifier: apiIdentifierData?.setting_value,
      apiSecret: apiSecretData?.setting_value,
      accessKey: accessKeyData?.setting_value
    };
  } catch (error) {
    console.error('Error fetching WHMCS credentials:', error);
    throw new Error('Failed to get WHMCS API credentials');
  }
};

/**
 * Log API call to database (if enabled)
 */
const logApiCall = async (action: string, params: any, response: any) => {
  try {
    const { data: logSettingData } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'whmcs_logApiCalls')
      .single();
    
    const shouldLog = logSettingData?.setting_value !== false;
    
    if (shouldLog) {
      // Create a sanitized version of params without sensitive data
      const sanitizedParams = { ...params };
      if (sanitizedParams.password) sanitizedParams.password = '********';
      if (sanitizedParams.secret) sanitizedParams.secret = '********';
      if (sanitizedParams.accesskey) sanitizedParams.accesskey = '********';
      
      // Log to console for demo purposes
      // In a real implementation, you would log to a database table
      console.log('WHMCS API Call:', {
        timestamp: new Date().toISOString(),
        action,
        params: sanitizedParams,
        response: response.result === 'success' 
          ? { result: 'success', totalresults: response.totalresults } 
          : { result: 'error', message: response.message }
      });
    }
  } catch (error) {
    console.error('Error logging API call:', error);
  }
};

/**
 * Make a request to the WHMCS API
 */
const makeApiRequest = async (action: string, params: Record<string, any> = {}): Promise<WHMCSApiResponse> => {
  try {
    const credentials = await getWHMCSCredentials();
    
    if (!credentials.apiUrl || !credentials.apiIdentifier || !credentials.apiSecret) {
      throw new Error('WHMCS API credentials not configured');
    }
    
    const requestParams = {
      identifier: credentials.apiIdentifier,
      secret: credentials.apiSecret,
      action,
      responsetype: 'json',
      ...params
    };
    
    if (credentials.accessKey) {
      requestParams.accesskey = credentials.accessKey;
    }
    
    const response = await fetch(credentials.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(requestParams)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Log the API call
    await logApiCall(action, requestParams, data);
    
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
  return makeApiRequest('GetSystemUrl');
};

/**
 * Get clients from WHMCS
 */
export const getClients = async (params: Record<string, any> = {}): Promise<WHMCSClient[]> => {
  const response = await makeApiRequest('GetClients', params);
  
  if (response.result === 'success' && response.clients && response.clients.client) {
    return response.clients.client;
  }
  
  return [];
};

/**
 * Get a specific client from WHMCS
 */
export const getClient = async (clientId: number): Promise<WHMCSClient | null> => {
  const response = await makeApiRequest('GetClientsDetails', { clientid: clientId });
  
  if (response.result === 'success') {
    return response.client;
  }
  
  return null;
};

/**
 * Create a client in WHMCS
 */
export const createClient = async (clientData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('AddClient', clientData);
};

/**
 * Update a client in WHMCS
 */
export const updateClient = async (clientId: number, clientData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('UpdateClient', { clientid: clientId, ...clientData });
};

/**
 * Get products from WHMCS
 */
export const getProducts = async (params: Record<string, any> = {}): Promise<WHMCSProduct[]> => {
  const response = await makeApiRequest('GetProducts', params);
  
  if (response.result === 'success' && response.products && response.products.product) {
    return response.products.product;
  }
  
  return [];
};

/**
 * Get invoices from WHMCS
 */
export const getInvoices = async (params: Record<string, any> = {}): Promise<WHMCSInvoice[]> => {
  const response = await makeApiRequest('GetInvoices', params);
  
  if (response.result === 'success' && response.invoices && response.invoices.invoice) {
    return response.invoices.invoice;
  }
  
  return [];
};

/**
 * Create an invoice in WHMCS
 */
export const createInvoice = async (invoiceData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('CreateInvoice', invoiceData);
};

/**
 * Get tickets from WHMCS
 */
export const getTickets = async (params: Record<string, any> = {}): Promise<WHMCSTicket[]> => {
  const response = await makeApiRequest('GetTickets', params);
  
  if (response.result === 'success' && response.tickets && response.tickets.ticket) {
    return response.tickets.ticket;
  }
  
  return [];
};

/**
 * Create a ticket in WHMCS
 */
export const createTicket = async (ticketData: Record<string, any>): Promise<WHMCSApiResponse> => {
  return makeApiRequest('OpenTicket', ticketData);
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
  
  return makeApiRequest('AddTicketReply', params);
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
  addTicketReply
};