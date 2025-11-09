/*
  # Teacher Account Registration System

  1. New Tables
    - `teacher_accounts`
      - `id` (uuid, primary key) - Unique identifier
      - `username` (text, unique) - Teacher username
      - `email` (text, unique) - Teacher email (verified)
      - `password_hash` (text) - Encrypted password
      - `email_verified` (boolean) - Email verification status
      - `verification_token` (text, nullable) - Email verification token
      - `created_at` (timestamptz) - Account creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `teacher_profiles`
      - `id` (uuid, primary key) - Unique identifier
      - `account_id` (uuid, foreign key) - Links to teacher_accounts
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
    
    - `teacher_education`
      - `id` (uuid, primary key) - Unique identifier
      - `account_id` (uuid, foreign key) - Links to teacher_accounts
      - `highest_qualification` (text) - e.g., Bachelor, Master, PhD
      - `graduation_year` (text) - Year of graduation
      - `university` (text) - University/Institution name
      - `specialization` (text) - Subject of specialization
      - `years_of_experience` (text) - Teaching experience range
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `teacher_institution`
      - `id` (uuid, primary key) - Unique identifier
      - `account_id` (uuid, foreign key) - Links to teacher_accounts
      - `institution_type` (text) - 'school' or 'college'
      - `institution_name` (text) - School/College name
      - `grades` (text, nullable) - Comma-separated grades for school
      - `stream` (text, nullable) - Stream for college
      - `branch` (text, nullable) - Branch for college
      - `year` (text, nullable) - Year for college
      - `subjects` (text) - Comma-separated subjects
      - `courses` (text) - Comma-separated courses
      - `certifications` (text, nullable) - Professional certifications
      - `languages` (text) - Comma-separated languages known
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
    - Educational and institution details can be updated
*/

CREATE TABLE IF NOT EXISTS teacher_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  email_verified boolean DEFAULT false,
  verification_token text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS teacher_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES teacher_accounts(id) ON DELETE CASCADE,
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

CREATE TABLE IF NOT EXISTS teacher_education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES teacher_accounts(id) ON DELETE CASCADE,
  highest_qualification text NOT NULL,
  graduation_year text NOT NULL,
  university text NOT NULL,
  specialization text NOT NULL,
  years_of_experience text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(account_id)
);

CREATE TABLE IF NOT EXISTS teacher_institution (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid NOT NULL REFERENCES teacher_accounts(id) ON DELETE CASCADE,
  institution_type text NOT NULL,
  institution_name text NOT NULL,
  grades text,
  stream text,
  branch text,
  year text,
  subjects text NOT NULL,
  courses text NOT NULL,
  certifications text,
  languages text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(account_id)
);

ALTER TABLE teacher_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_education ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_institution ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own account"
  ON teacher_accounts FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own account"
  ON teacher_accounts FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own profile"
  ON teacher_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = account_id);

CREATE POLICY "Users can insert own profile"
  ON teacher_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can update own profile"
  ON teacher_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = account_id)
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can read own education"
  ON teacher_education FOR SELECT
  TO authenticated
  USING (auth.uid() = account_id);

CREATE POLICY "Users can insert own education"
  ON teacher_education FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can update own education"
  ON teacher_education FOR UPDATE
  TO authenticated
  USING (auth.uid() = account_id)
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can read own institution"
  ON teacher_institution FOR SELECT
  TO authenticated
  USING (auth.uid() = account_id);

CREATE POLICY "Users can insert own institution"
  ON teacher_institution FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = account_id);

CREATE POLICY "Users can update own institution"
  ON teacher_institution FOR UPDATE
  TO authenticated
  USING (auth.uid() = account_id)
  WITH CHECK (auth.uid() = account_id);

CREATE INDEX IF NOT EXISTS idx_teacher_profiles_account_id ON teacher_profiles(account_id);
CREATE INDEX IF NOT EXISTS idx_teacher_education_account_id ON teacher_education(account_id);
CREATE INDEX IF NOT EXISTS idx_teacher_institution_account_id ON teacher_institution(account_id);
CREATE INDEX IF NOT EXISTS idx_teacher_accounts_email ON teacher_accounts(email);
CREATE INDEX IF NOT EXISTS idx_teacher_accounts_username ON teacher_accounts(username);
