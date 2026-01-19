import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This 'supabase' object is your tool to read/write to the database
export const supabase = createClient(supabaseUrl, supabaseKey);
