import { createClient } from "@supabase/supabase-js";

export const supabase_keys = {
  PROJECT_REFERENCE: "voxekoyxjkvtppdaepuq",
  PROJECT_URL: "https://voxekoyxjkvtppdaepuq.supabase.co",
  PROJECT_PUBLIC_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZveGVrb3l4amt2dHBwZGFlcHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUyNjE1NDMsImV4cCI6MTk2MDgzNzU0M30.qmG1mSJ-WzDMMKq3uXdCBOxmmNlUq3TOw9lasUcDfw8",
  PROJECT_SECRET:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZveGVrb3l4amt2dHBwZGFlcHVxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTI2MTU0MywiZXhwIjoxOTYwODM3NTQzfQ.U7mcacu8UHpXW4UXGDSlxDTzGGlm6d_TIa6NP8XoRGU",
  JWT_SECRET: "32722309-070d-4387-a2ff-fd852a2894b2",
  DB_HOST: "db.voxekoyxjkvtppdaepuq.supabase.co",
  DB_NAME: "postgres",
  DB_PORT: "5432",
  DB_USER: "postgres",
  DB_PASSWORD: "Rupam12345Kairi@",
  DB_URL:
    "postgresql://postgres:Rupam12345Kairi@@db.voxekoyxjkvtppdaepuq.supabase.co:5432/postgres",
};

export const supabase = createClient(
  supabase_keys.PROJECT_URL,
  supabase_keys.PROJECT_PUBLIC_KEY
);
