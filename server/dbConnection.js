import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'; // to access enviroment variables.

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);

export default supabase;
