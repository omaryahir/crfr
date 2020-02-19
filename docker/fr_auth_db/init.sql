
CREATE EXTENSION pgcrypto;
CREATE SCHEMA IF NOT EXISTS "fr_auth_db";
CREATE TABLE IF NOT EXISTS "fr_auth_db"."users" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "first_name" text,
    "last_name" text,
    "username" text NOT NULL,
    "password" text,
    "created" date, 
    PRIMARY KEY ("id")
);