
/* -- Postgres Extensions -- */
CREATE EXTENSION pgcrypto;

/* -- Creating the schema and the users table -- */
CREATE SCHEMA IF NOT EXISTS "fr_auth_db";
CREATE TABLE IF NOT EXISTS "fr_auth_db"."users" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "first_name" text,
    "last_name" text,
    "username" text NOT NULL,
    "password" text,
    "created" timestamp DEFAULT current_timestamp, 
    PRIMARY KEY ("id")
);

/* -- Insert initial user --- */
INSERT INTO "fr_auth_db"."users" (first_name, last_name, username, password) VALUES ('admin', '', 'admin', '123');
