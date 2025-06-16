/*
  # Admin System Database Schema

  1. New Tables
    - `site_content` - Stores all website content by page and section
    - `site_settings` - Stores global site settings
    - `media_files` - Stores information about uploaded media files
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create site_content table
CREATE TABLE IF NOT EXISTS site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('text', 'image', 'json')),
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(page, section)
);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create media_files table
CREATE TABLE IF NOT EXISTS media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL UNIQUE,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Allow authenticated users to read site_content"
  ON site_content
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert site_content"
  ON site_content
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update site_content"
  ON site_content
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete site_content"
  ON site_content
  FOR DELETE
  TO authenticated
  USING (true);

-- Site settings policies
CREATE POLICY "Allow authenticated users to read site_settings"
  ON site_settings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert site_settings"
  ON site_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update site_settings"
  ON site_settings
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete site_settings"
  ON site_settings
  FOR DELETE
  TO authenticated
  USING (true);

-- Media files policies
CREATE POLICY "Allow authenticated users to read media_files"
  ON media_files
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert media_files"
  ON media_files
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update media_files"
  ON media_files
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete media_files"
  ON media_files
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Create policy to allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload files"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media');

-- Create policy to allow authenticated users to update files
CREATE POLICY "Allow authenticated users to update files"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media');

-- Create policy to allow authenticated users to delete files
CREATE POLICY "Allow authenticated users to delete files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'media');

-- Create policy to allow public access to media files
CREATE POLICY "Allow public access to media files"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'media');