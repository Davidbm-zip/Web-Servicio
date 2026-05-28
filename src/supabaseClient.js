import { createClient } from '@supabase/supabase-js'

// Estas líneas le dicen a React que busque los datos dentro de tu archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)