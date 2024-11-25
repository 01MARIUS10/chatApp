import { createClient } from '@supabase/supabase-js'

let projectUrl = import.meta.env.VITE_PROJECT_URL;
let anonKey    = import.meta.env.VITE_ANON_KEY; 


export const supabase = createClient(projectUrl,anonKey)