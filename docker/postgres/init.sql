-- Jaguar database initialization script

-- Unprivileged user 'jaguar'
--
-- Should have full access to the 'jaguar' database and no other
-- privileges
CREATE USER jaguar
    WITH ENCRYPTED PASSWORD 'jaguar';

-- Main app database 'jaguar'
CREATE DATABASE jaguar;

GRANT ALL PRIVILEGES ON DATABASE jaguar TO jaguar;
