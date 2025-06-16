import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  File, 
  Upload, 
  Download, 
  Trash2, 
  Edit, 
  Plus, 
  RefreshCw, 
  Search,
  ArrowLeft,
  Eye,
  Copy,
  FileText,
  Image as ImageIcon,
  Code,
  Archive,
  Video,
  Music,
  FilePlus,
  FolderPlus,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import toast from 'react-hot-toast';

const UserFileManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [fileStructure, setFileStructure] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'size', 'date'
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'

  useEffect(() => {
    // Simulate loading data from WHMCS API
    const fetchFileStructure = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch actual data from WHMCS/cPanel API
        // For demo purposes, we'll use mock data
        const mockFileStructure = {
          '/': [
            {
              name: 'public_html',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'logs',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'backup',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: '.htaccess',
              type: 'file',
              size: 1024,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'htaccess'
            }
          ],
          '/public_html': [
            {
              name: 'index.php',
              type: 'file',
              size: 2048,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'php'
            },
            {
              name: 'wp-config.php',
              type: 'file',
              size: 4096,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'php'
            },
            {
              name: 'wp-content',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'wp-includes',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'wp-admin',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'style.css',
              type: 'file',
              size: 8192,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'css'
            },
            {
              name: 'logo.png',
              type: 'file',
              size: 51200,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'png'
            }
          ],
          '/public_html/wp-content': [
            {
              name: 'themes',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'plugins',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            },
            {
              name: 'uploads',
              type: 'directory',
              size: 0,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: 'drwxr-xr-x'
            }
          ],
          '/public_html/wp-content/uploads': [
            {
              name: 'hero-image.jpg',
              type: 'file',
              size: 1024000,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'jpg'
            },
            {
              name: 'product-catalog.pdf',
              type: 'file',
              size: 2048000,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'pdf'
            },
            {
              name: 'company-video.mp4',
              type: 'file',
              size: 15360000,
              lastModified: '2024-06-01T10:30:00Z',
              permissions: '-rw-r--r--',
              extension: 'mp4'
            }
          ]
        };
        
        setFileStructure(mockFileStructure);
        setCurrentItems(mockFileStructure['/']);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching file structure:', error);
        setIsLoading(false);
      }
    };

    fetchFileStructure();
  }, []);

  const navigateToPath = (path) => {
    setSelectedItems([]);
    setCurrentPath(path);
    setCurrentItems(fileStructure[path] || []);
  };

  const navigateUp = () => {
    if (currentPath === '/') return;
    
    const pathParts = currentPath.split('/').filter(Boolean);
    pathParts.pop();
    const newPath = pathParts.length === 0 ? '/' : `/${pathParts.join('/')}`;
    
    navigateToPath(newPath);
  };

  const navigateToFolder = (folderName) => {
    const newPath = currentPath === '/' ? `/${folderName}` : `${currentPath}/${folderName}`;
    navigateToPath(newPath);
  };

  const toggleItemSelection = (item) => {
    if (selectedItems.some(selected => selected.name === item.name)) {
      setSelectedItems(selectedItems.filter(selected => selected.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would search files from the API
    // For demo purposes, we'll just filter the current items
  };

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      // Toggle direction if clicking the same criteria
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new criteria and default to ascending
      setSortBy(criteria);
      setSortDirection('asc');
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (item) => {
    if (item.type === 'directory') {
      return <Folder className="h-6 w-6 text-yellow-500" />;
    }
    
    switch (item.extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
        return <ImageIcon className="h-6 w-6 text-blue-500" />;
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-6 w-6 text-blue-700" />;
      case 'xls':
      case 'xlsx':
        return <FileText className="h-6 w-6 text-green-700" />;
      case 'ppt':
      case 'pptx':
        return <FileText className="h-6 w-6 text-orange-500" />;
      case 'zip':
      case 'rar':
      case 'tar':
      case 'gz':
        return <Archive className="h-6 w-6 text-purple-500" />;
      case 'mp4':
      case 'avi':
      case 'mov':
        return <Video className="h-6 w-6 text-pink-500" />;
      case 'mp3':
      case 'wav':
      case 'ogg':
        return <Music className="h-6 w-6 text-green-500" />;
      case 'html':
      case 'css':
      case 'js':
      case 'php':
        return <Code className="h-6 w-6 text-indigo-500" />;
      default:
        return <File className="h-6 w-6 text-gray-500" />;
    }
  };

  const sortedItems = [...currentItems].sort((a, b) => {
    // Always put directories first
    if (a.type === 'directory' && b.type !== 'directory') return -1;
    if (a.type !== 'directory' && b.type === 'directory') return 1;
    
    // Then sort by the selected criteria
    switch (sortBy) {
      case 'name':
        return sortDirection === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case 'size':
        return sortDirection === 'asc' 
          ? a.size - b.size
          : b.size - a.size;
      case 'date':
        return sortDirection === 'asc' 
          ? new Date(a.lastModified) - new Date(b.lastModified)
          : new Date(b.lastModified) - new Date(a.lastModified);
      default:
        return 0;
    }
  });

  const filteredItems = sortedItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breadcrumbs = currentPath.split('/').filter(Boolean);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-green"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">File Manager</h2>
        <p className="text-gray-600">Manage your website files and directories.</p>
      </div>

      {/* Toolbar */}
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
              placeholder="Search files and folders..."
            />
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateToPath(currentPath)}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title="Refresh"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200"
            title={viewMode === 'grid' ? 'List View' : 'Grid View'}
          >
            {viewMode === 'grid' ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            )}
          </button>
          
          <div className="relative">
            <button
              className="bg-main-green text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-secondary-green transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
              <span>New</span>
            </button>
            {/* Dropdown menu would go here */}
          </div>
          
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center space-x-1 hover:bg-blue-700 transition-colors duration-200"
            disabled={selectedItems.length === 0}
          >
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 mb-4 overflow-x-auto whitespace-nowrap pb-2">
        <button
          onClick={() => navigateToPath('/')}
          className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200"
        >
          Root
        </button>
        
        {breadcrumbs.map((part, index) => (
          <React.Fragment key={index}>
            <span className="text-gray-500">/</span>
            <button
              onClick={() => navigateToPath('/' + breadcrumbs.slice(0, index + 1).join('/'))}
              className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200"
            >
              {part}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Action Bar */}
      {selectedItems.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200" title="Download">
              <Download className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-main-green transition-colors duration-200" title="Rename">
              <Edit className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-red-600 transition-colors duration-200" title="Delete">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* File List */}
      {filteredItems.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentPath !== '/' && (
              <div
                onClick={navigateUp}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:border-main-green transition-colors duration-200 cursor-pointer flex flex-col items-center justify-center"
              >
                <div className="p-3 bg-gray-100 rounded-full mb-2">
                  <ArrowLeft className="h-6 w-6 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-800 truncate w-full text-center">
                  ..
                </span>
              </div>
            )}
            
            {filteredItems.map((item) => (
              <div
                key={item.name}
                onClick={() => item.type === 'directory' ? navigateToFolder(item.name) : toggleItemSelection(item)}
                className={`bg-white rounded-lg shadow-sm p-4 border cursor-pointer transition-all duration-200 ${
                  selectedItems.some(selected => selected.name === item.name)
                    ? 'border-main-green ring-1 ring-main-green'
                    : 'border-gray-200 hover:border-main-green'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gray-100 rounded-full mb-2">
                    {getFileIcon(item)}
                  </div>
                  <span className="text-sm font-medium text-gray-800 truncate w-full text-center">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.type === 'directory' ? '--' : formatFileSize(item.size)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('name')}
                        className="flex items-center"
                      >
                        Name
                        {sortBy === 'name' && (
                          sortDirection === 'asc' ? 
                            <ChevronUp className="h-4 w-4 ml-1" /> : 
                            <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('size')}
                        className="flex items-center"
                      >
                        Size
                        {sortBy === 'size' && (
                          sortDirection === 'asc' ? 
                            <ChevronUp className="h-4 w-4 ml-1" /> : 
                            <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('date')}
                        className="flex items-center"
                      >
                        Last Modified
                        {sortBy === 'date' && (
                          sortDirection === 'asc' ? 
                            <ChevronUp className="h-4 w-4 ml-1" /> : 
                            <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Permissions
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentPath !== '/' && (
                    <tr className="hover:bg-gray-50 cursor-pointer" onClick={navigateUp}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <ArrowLeft className="h-5 w-5 text-gray-400" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">..</div>
                            <div className="text-xs text-gray-500">Parent Directory</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        --
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        --
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        --
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        --
                      </td>
                    </tr>
                  )}
                  
                  {filteredItems.map((item) => (
                    <tr 
                      key={item.name} 
                      className={`hover:bg-gray-50 cursor-pointer ${
                        selectedItems.some(selected => selected.name === item.name)
                          ? 'bg-main-green/5'
                          : ''
                      }`}
                      onClick={() => item.type === 'directory' ? navigateToFolder(item.name) : toggleItemSelection(item)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {getFileIcon(item)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.type === 'directory' ? '--' : formatFileSize(item.size)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.lastModified).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                        {item.permissions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          {item.type === 'file' && (
                            <>
                              <button className="text-gray-500 hover:text-main-green transition-colors duration-200">
                                <Download className="h-4 w-4" />
                              </button>
                              <button className="text-gray-500 hover:text-main-green transition-colors duration-200">
                                <Eye className="h-4 w-4" />
                              </button>
                            </>
                          )}
                          <button className="text-gray-500 hover:text-main-green transition-colors duration-200">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-gray-500 hover:text-red-600 transition-colors duration-200">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <Folder className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No files found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm
              ? `No results for "${searchTerm}". Try a different search term.`
              : "This directory is empty."}
          </p>
          {!searchTerm && (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200"
              >
                <FilePlus className="h-5 w-5" />
                <span>Create File</span>
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
              >
                <FolderPlus className="h-5 w-5" />
                <span>Create Folder</span>
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors duration-200"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Files</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Storage Usage */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Storage Usage</h3>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-gray-700">Disk Usage</h4>
            <span className="text-xs font-medium text-gray-500">8.2 GB / 25 GB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-main-green h-2.5 rounded-full" style={{ width: '33%' }}></div>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>33% used</span>
            <span>16.8 GB free</span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <ImageIcon className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium text-gray-700">Images</span>
              </div>
              <div className="text-sm font-medium text-gray-900">3.2 GB</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Video className="h-4 w-4 text-pink-500" />
                <span className="text-xs font-medium text-gray-700">Videos</span>
              </div>
              <div className="text-sm font-medium text-gray-900">2.8 GB</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Code className="h-4 w-4 text-indigo-500" />
                <span className="text-xs font-medium text-gray-700">Code Files</span>
              </div>
              <div className="text-sm font-medium text-gray-900">1.5 GB</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="text-xs font-medium text-gray-700">Other</span>
              </div>
              <div className="text-sm font-medium text-gray-900">0.7 GB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFileManager;