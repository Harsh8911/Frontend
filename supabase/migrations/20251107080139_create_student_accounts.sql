/*
  # Student Account Registration System

  1. New Tables
    - `student_accounts`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique) - Student email (verified)
      - `password_hash` (text) - Encrypted password
      - `email_verified` (boolean) - Email verification status
      - `verification_token` (text, nullable) - Email verification token
      - `created_at` (timestamptz) - Account creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `student_profiles`
      - `id` (uuid, primary key) - Unique identifier
      - `account_id` (uuid, foreign key) - Links to student_accounts
      - `first_name` (text) - First name
      - `middle_name` (text, nullable) - Middle name
      - `surname` (text) - Last name/surname
      - `phone_number` (text) - Contact number
      - `date_of_birth` (date) - Birth date
      - `city` (text) - City
      - `state` (text) - State
      - `country` (text) - Country
      - `pincode` (text) - Postal code
      - `photo_url` (text, nullable) - Profile photo URL
      - `created_at` (timestamptz) - Profile creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `student_education`
      - `id` (uuid, primary key) - Unique identifier
      - `account_id` (uuid, foreign key) - Links to student_accounts
      - `education_level` (text) - e.g., 'school', 'college'
      - `class_grade` (text) - Class/Grade (1-12) or college year
      - `institution_name` (text) - School/College name
      - `stream_dept` (text, nullable) - Stream (Science/Arts/Commerce) or Department
      - `semester` (text, nullable) - For college students
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for users to read their own data

  3. Important Notes
    - Passwords will be hashed before storage
    - Email verification required before full access
    - Personal details are locked after submission
    - Educational details can be updated
*/

-- Create student_accounts table
CREATE TABLE IF NOT EXISTS student_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  email_verified boolean DEFAULT false,
  verification_token text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create student_profiles table
CREATE TABLE IF NOT EXISTS student_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  middle_name text,
  surname text NOT NULL,
  phone_number text NOT NULL,
  date_of_birth date NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  country text NOT NULL,
  pincode text NOT NULL,
  photo_url text,
  profile_locked boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(account_id)
);

-- Create student_education table
CREATE TABLE IF NOT EXISTS student_education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
  education_level text NOT NULL,
  class_grade text NOT NULL,
  institution_name text NOT NULL,
  stream_dept text,
  semester text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(account_id)
);

-- Enable RLS
ALTER TABLE student_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_education ENABLE ROW LEVEL SECURITY;

-- Policies for student_accounts
CREATE POLICY "Users can read own account"
  ON student_accounts FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own account"
  ON student_accounts FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policies for student_profiles
CREATE POLICY "Users can read own profile"
  ON student_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = account_id);

CREATE POLICY "Users can insert own profile"
  ON student_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can update own profile"
  ON student_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = account_id)
  WITH CHECK (auth.uid() = account_id);

-- Policies for student_education
CREATE POLICY "Users can read own education"
  ON student_education FOR SELECT
  TO authenticated
  USING (auth.uid() = account_id);

CREATE POLICY "Users can insert own education"
  ON student_education FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can update own education"
  ON student_education FOR UPDATE
  TO authenticated
  USING (auth.uid() = account_id)
  WITH CHECK (auth.uid() = account_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_student_profiles_account_id ON student_profiles(account_id);
CREATE INDEX IF NOT EXISTS idx_student_education_account_id ON student_education(account_id);
CREATE INDEX IF NOT EXISTS idx_student_accounts_email ON student_accounts(email);
