\c hbi_db;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);