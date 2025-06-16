import React, { useState, useRef } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  Upload, 
  Trash2, 
  Search, 
  Image as ImageIcon, 
  File, 
  X,
  Copy,
  ExternalLink,
  Edit
} from 'lucide-react';
import toast from 'react-hot-toast';

const MediaLibrary = () => {
  const { mediaFiles, uploadMedia, deleteMedia } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [altText, setAltText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredMedia = mediaFiles.filter(file => 
    file.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setUploading(true);
    try {
      await uploadMedia(selectedFile, altText);
      setSelectedFile(null);
      setAltText('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
      await deleteMedia(id);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success('Copied to clipboard!'))
      .catch(() => toast.error('Failed to copy'));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileUrl = (filePath: string) => {
    return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/${filePath}`;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Media Library</h2>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200"
        >
          <Upload className="h-5 w-5" />
          <span>Upload New</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
        />
      </div>

      {/* Upload Preview */}
      {selectedFile && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Upload Preview</h3>
            <button
              onClick={() => {
                setSelectedFile(null);
                setAltText('');
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              {selectedFile.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="max-h-40 max-w-full object-contain"
                />
              ) : (
                <File className="h-16 w-16 text-gray-400" />
              )}
            </div>
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  File Name
                </label>
                <div className="text-sm text-gray-800 bg-gray-50 p-2 rounded">
                  {selectedFile.name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  File Size
                </label>
                <div className="text-sm text-gray-800 bg-gray-50 p-2 rounded">
                  {formatFileSize(selectedFile.size)}
                </div>
              </div>
              <div>
                <label htmlFor="alt-text" className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text (for images)
                </label>
                <input
                  id="alt-text"
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
                  placeholder="Describe this image"
                />
              </div>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="w-full bg-main-green text-white py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {uploading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Upload className="h-5 w-5 mr-2" />
                    Upload File
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent"
          placeholder="Search media files..."
        />
      </div>

      {/* Media Grid */}
      {filteredMedia.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((file) => (
            <div key={file.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                {file.mime_type.startsWith('image/') ? (
                  <img
                    src={getFileUrl(file.file_path)}
                    alt={file.alt_text || file.filename}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <File className="h-16 w-16 text-gray-400" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800 truncate" title={file.filename}>
                    {file.filename.length > 20 
                      ? file.filename.substring(0, 20) + '...' 
                      : file.filename}
                  </h4>
                  <span className="text-xs text-gray-500">{formatFileSize(file.file_size)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(getFileUrl(file.file_path))}
                      className="p-1 text-gray-500 hover:text-main-green transition-colors duration-200"
                      title="Copy URL"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <a
                      href={getFileUrl(file.file_path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-500 hover:text-main-green transition-colors duration-200"
                      title="Open in new tab"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      className="p-1 text-gray-500 hover:text-main-green transition-colors duration-200"
                      title="Edit details"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="p-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
                    title="Delete file"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No media files found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm 
              ? `No results for "${searchTerm}". Try a different search term.` 
              : 'Upload your first media file to get started.'}
          </p>
          {!searchTerm && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-secondary-green transition-colors duration-200 mx-auto"
            >
              <Upload className="h-5 w-5" />
              <span>Upload Media</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;