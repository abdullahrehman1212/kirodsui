/*
  # Add WHMCS API logs table

  1. New Tables
    - `whmcs_api_logs`
      - `id` (uuid, primary key)
      - `action` (text)
      - `params` (jsonb)
      - `response` (jsonb)
      - `status` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `whmcs_api_logs` table
    - Add policy for authenticated users to read whmcs_api_logs
    - Add policy for authenticated users to insert whmcs_api_logs
*/

-- Create WHMCS API logs table
CREATE TABLE IF NOT EXISTS whmcs_api_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action TEXT NOT NULL,
  params JSONB NOT NULL,
  response JSONB NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE whmcs_api_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Allow authenticated users to read whmcs_api_logs"
  ON whmcs_api_logs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert whmcs_api_logs"
  ON whmcs_api_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);