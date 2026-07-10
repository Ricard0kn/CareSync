-- Tables that covers agencies
CREATE TABLE IF NOT EXISTS agencies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL UNIQUE, 
  phone VARCHAR(20), 
  is_active BOOLEAN NOT NULL DEFAULT TRUE, 
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  agency_id INT REFERENCES agencies(id),
  plan VARCHAR(100),
  status VARCHAR(50),
  start_date DATE DEFAULT NOW(),
  end_date DATE,
  amount NUMERIC(10,2),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Invoices
CREATE TABLE IF NOT EXISTS invoices (
  id SERIAL PRIMARY KEY,
  agency_id INT REFERENCES agencies(id),
  subscription_id INT REFERENCES subscriptions(id),
  Invoice_number VARCHAR(100) NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  invoice_date DATE,
  due_date DATE,
  paid_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  invoice_id INT REFERENCES invoices(id),
  amount NUMERIC(10,2),
  method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(100) UNIQUE,
  paid_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Table that stores users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  agency_id INT REFERENCES agencies(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  last_login DATE DEFAULT NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Roles
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Permissions
CREATE TABLE IF NOT EXISTS permissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  module VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- User Permissions
CREATE TABLE IF NOT EXISTS user_permissions (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  -- FOREIGN KEY 
  granted_id INT,
  FOREIGN KEY(granted_id) REFERENCES users(id),
  permission_id INT,
  FOREIGN KEY(permission_id) REFERENCES permissions(id),
  -- Log
  granted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- USER Roles
CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT REFERENCES users(id),
    role_id INT REFERENCES roles(id),
    PRIMARY KEY(user_id, role_id)
);
-- Clients
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  agency_id INT REFERENCES agencies(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  address TEXT,
  status VARCHAR(20) DEFAULT 'Active',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Client Assignments
CREATE TABLE IF NOT EXISTS client_assignment (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  user_id INT REFERENCES users(id),
  role_type VARCHAR(20) NOT NULL UNIQUE,
  assigned_by INT REFERENCES users(id),
  assigned_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);
-- Notes
CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  author_id INT REFERENCES users(id),
  note_type VARCHAR(50),
  title VARCHAR(255),
  content TEXT,
  service_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'Draft'
);
-- Supervision Notes
CREATE TABLE IF NOT EXISTS supervision_notes (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  author_id INT REFERENCES users(id),
  supervisor_id INT REFERENCES users(id),
  content TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'Draft'
);
-- Docuements
CREATE TABLE IF NOT EXISTS documents (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  uploaded_by INT REFERENCES users(id),
  document_type VARCHAR(50),
  file_name VARCHAR(255),
  file_url TEXT,
  uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'Active'
);
-- Assesments
CREATE TABLE IF NOT EXISTS assessments (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  author_id INT REFERENCES users(id),
  assessment_type VARCHAR(50),
  title VARCHAR(255),
  content TEXT,
  assessment_date DATE,
  due_date DATE NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'Draft'
);
-- Documentation Review
CREATE TABLE IF NOT EXISTS documentation_reviews (
  id SERIAL PRIMARY KEY,
  document_type VARCHAR(50),
  document_id INT REFERENCES documents(id),
  reviewer_id INT REFERENCES users(id),
  reviewer_role VARCHAR(30),
  status VARCHAR(20),
  feedback TEXT NULL,
  reviewed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Tasks
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id),
  assigned_to INT REFERENCES users(id),
  description TEXT,
  due_date TIMESTAMP,
  status VARCHAR(250),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
