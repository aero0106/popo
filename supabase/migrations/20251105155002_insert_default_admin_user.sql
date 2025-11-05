/*
  # Insert Default Admin User

  Inserts a default admin user for authentication.
  Email: admin@ogssolution.com
  Password: AdminPassword123
  
  The password is hashed using SHA-256.
*/

INSERT INTO admin_users (email, password_hash, created_at)
VALUES (
  'admin@ogssolution.com',
  '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
  now()
)
ON CONFLICT (email) DO NOTHING;