import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kacyjsnjnazjkzhntqeq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3lqc25qbmF6amt6aG50cWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4OTk3NzksImV4cCI6MjA1NTQ3NTc3OX0.Id_ZCq-uB4pCxACRFkXR9cUtL37StB4rpwyr1n3ZEE4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
