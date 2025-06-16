import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Paperclip,
  Filter,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTicket, setActiveTicket] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS
        // For demo purposes, we'll use mock data
        const mockTickets = [
          {
            id: 1,
            ticketNumber: 'TKT-001',
            subject: 'Website Migration Question',
            dateCreated: '2024-06-10',
            status: 'Open',
            lastReply: '2024-06-11',
            department: 'Technical Support',
            priority: 'Medium',
            messages: [
              {
                id: 1,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-06-10T14:30:00Z',
                message: 'Hello, I would like to migrate my WordPress website to your hosting. Can you please guide me through the process? Do you offer migration assistance?',
                attachments: []
              },
              {
                id: 2,
                sender: 'Support Agent',
                senderType: 'staff',
                date: '2024-06-11T09:15:00Z',
                message: 'Hello John,\n\nThank you for contacting us. Yes, we do offer free migration assistance for all new customers. Our team can handle the entire migration process for you, ensuring zero downtime and no data loss.\n\nTo get started, please provide the following information:\n\n1. Current hosting provider\n2. WordPress admin credentials\n3. cPanel/FTP credentials for your current hosting\n\nOnce we have this information, we can begin the migration process. The typical migration takes 24-48 hours to complete.\n\nPlease let me know if you have any other questions.\n\nBest regards,\nSupport Team',
                attachments: []
              }
            ]
          },
          {
            id: 2,
            ticketNumber: 'TKT-002',
            subject: 'Email Configuration Issue',
            dateCreated: '2024-06-05',
            status: 'Closed',
            lastReply: '2024-06-07',
            department: 'Technical Support',
            priority: 'High',
            messages: [
              {
                id: 1,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-06-05T10:20:00Z',
                message: "I'm having trouble setting up my email client with the new email account I created. I've followed the instructions but still getting connection errors.",
                attachments: []
              },
              {
                id: 2,
                sender: 'Support Agent',
                senderType: 'staff',
                date: '2024-06-06T11:45:00Z',
                message: 'Hello John,\n\nI\'m sorry to hear you\'re having trouble with your email setup. Let\'s troubleshoot this issue.\n\nCould you please confirm the following settings you\'re using:\n\n1. Incoming server (IMAP/POP3)\n2. Outgoing server (SMTP)\n3. Port numbers\n4. Security settings (SSL/TLS)\n\nAlso, what email client are you using?\n\nBest regards,\nSupport Team',
                attachments: []
              },
              {
                id: 3,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-06-06T14:30:00Z',
                message: "I'm using Outlook and here are my settings:\n\nIMAP: mail.example.com, port 993, SSL\nSMTP: mail.example.com, port 465, SSL\n\nUsername: john@example.com\n\nThe error I'm getting is 'Connection to the server failed'.",
                attachments: []
              },
              {
                id: 4,
                sender: 'Support Agent',
                senderType: 'staff',
                date: '2024-06-07T09:10:00Z',
                message: 'Hello John,\n\nThank you for providing those details. The settings look correct, but I noticed that there might be a firewall or antivirus issue blocking the connection.\n\nPlease try the following:\n\n1. Temporarily disable your firewall/antivirus and test the connection\n2. Try using port 587 for SMTP with TLS encryption instead of port 465\n3. Make sure your password is entered correctly\n\nLet me know if any of these steps resolve the issue.\n\nBest regards,\nSupport Team',
                attachments: []
              },
              {
                id: 5,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-06-07T11:25:00Z',
                message: "That worked! Changing to port 587 with TLS fixed the issue. Thank you for your help!",
                attachments: []
              },
              {
                id: 6,
                sender: 'Support Agent',
                senderType: 'staff',
                date: '2024-06-07T13:40:00Z',
                message: 'Hello John,\n\nI\'m glad to hear that the issue is resolved! Port 587 with TLS is indeed the recommended setting for most modern email clients.\n\nIf you have any other questions or issues, please don\'t hesitate to contact us.\n\nBest regards,\nSupport Team',
                attachments: []
              }
            ]
          },
          {
            id: 3,
            ticketNumber: 'TKT-003',
            subject: 'Billing Question',
            dateCreated: '2024-05-20',
            status: 'Closed',
            lastReply: '2024-05-22',
            department: 'Billing',
            priority: 'Low',
            messages: [
              {
                id: 1,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-05-20T16:45:00Z',
                message: 'I have a question about my recent invoice. I was charged for domain privacy protection, but I thought it was included in my plan. Can you please clarify?',
                attachments: []
              },
              {
                id: 2,
                sender: 'Billing Agent',
                senderType: 'staff',
                date: '2024-05-21T10:30:00Z',
                message: 'Hello John,\n\nThank you for your inquiry about the domain privacy protection charge.\n\nI\'ve checked your account, and you\'re correct - domain privacy protection is included in your Premium plan. This charge was added in error.\n\nI\'ve processed a refund for the domain privacy protection charge, which should appear on your account within 3-5 business days.\n\nI apologize for the confusion and thank you for bringing this to our attention.\n\nBest regards,\nBilling Team',
                attachments: []
              },
              {
                id: 3,
                sender: 'John Doe',
                senderType: 'client',
                date: '2024-05-22T09:15:00Z',
                message: 'Thank you for the quick resolution! I appreciate your help.',
                attachments: []
              }
            ]
          }
        ];
        
        setTickets(mockTickets);
        setTotalPages(Math.ceil(mockTickets.length / 10)); // Assuming 10 tickets per page
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would filter tickets from the API
    // For demo purposes, we'll just filter the mock data
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleReply = (e) => {
    e.preventDefault();
    
    if (!replyText.trim()) return;
    
    // In a real implementation, this would send the reply to the WHMCS API
    // For demo purposes, we'll just update the local state
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === activeTicket.id) {
        const newMessage = {
          id: ticket.messages.length + 1,
          sender: 'John Doe',
          senderType: 'client',
          date: new Date().toISOString(),
          message: replyText,
          attachments: []
        };
        
        return {
          ...ticket,
          messages: [...ticket.messages, newMessage],
          lastReply: new Date().toISOString().split('T')[0]
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    setActiveTicket(updatedTickets.find(ticket => ticket.id === activeTicket.id));
    setReplyText('');
  };

  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'answered':
        return 'bg-blue-100 text-blue-800';
      case 'customer-reply':
        return 'bg-purple-100 text-purple-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = searchTerm === '' || 
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === '' || ticket.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
      </div>
    );
  }

  // If a ticket is selected, show the ticket details
  if (activeTicket) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            onClick={() => setActiveTicket(null)}
            className="flex items-center text-main-green hover:text-secondary-green transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Tickets
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-6">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{activeTicket.subject}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                  <span>Ticket #{activeTicket.ticketNumber}</span>
                  <span>•</span>
                  <span>Created: {new Date(activeTicket.dateCreated).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(activeTicket.status)}`}>
                  {activeTicket.status}
                </span>
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeColor(activeTicket.priority)}`}>
                  {activeTicket.priority}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Department</h4>
                <span className="text-sm text-gray-900">{activeTicket.department}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Conversation</h4>
              
              <div className="space-y-6">
                {activeTicket.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.senderType === 'client' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg rounded-lg p-4 ${
                      message.senderType === 'client' 
                        ? 'bg-main-green/10 text-gray-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{message.sender}</span>
                        <span className="text-xs text-gray-500">{formatDate(message.date)}</span>
                      </div>
                      <div className="whitespace-pre-line text-sm">
                        {message.message}
                      </div>
                      {message.attachments.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <div className="text-xs text-gray-500 mb-1">Attachments:</div>
                          <div className="flex flex-wrap gap-2">
                            {message.attachments.map((attachment, index) => (
                              <a 
                                key={index}
                                href={attachment.url}
                                className="text-xs bg-white px-2 py-1 rounded border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {attachment.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {activeTicket.status !== 'Closed' && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Reply</h4>
                <form onSubmit={handleReply}>
                  <div className="mb-4">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                      placeholder="Type your reply here..."
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-main-green hover:border-main-green transition-colors duration-200"
                    >
                      <Paperclip className="h-4 w-4 mr-1" />
                      Attach File
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-main-green hover:bg-secondary-green transition-colors duration-200"
                    >
                      <Send className="h-4 w-4 mr-1" />
                      Send Reply
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Support Tickets</h2>
        <p className="text-gray-600">View and manage your support tickets and get help from our team.</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
              placeholder="Search tickets..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="open">Open</option>
            <option value="answered">Answered</option>
            <option value="customer-reply">Customer-Reply</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          
          <button
            onClick={() => {}}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh tickets"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          <button
            className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>New Ticket</span>
          </button>
        </div>
      </div>

      {/* Tickets List */}
      {filteredTickets.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTickets.map((ticket) => (
                  <tr 
                    key={ticket.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setActiveTicket(ticket)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{ticket.ticketNumber}</div>
                          <div className="text-sm text-gray-500">{new Date(ticket.dateCreated).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{ticket.subject}</div>
                      <div className="text-xs text-gray-500">
                        {ticket.messages.length} message{ticket.messages.length !== 1 ? 's' : ''}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(ticket.lastReply).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredTickets.length}</span> of{' '}
                  <span className="font-medium">{filteredTickets.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No tickets found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter
              ? `No results for your search. Try different search terms or filters.`
              : "You don't have any support tickets yet."}
          </p>
          {!searchTerm && !statusFilter && (
            <button
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Open New Ticket</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserTickets;