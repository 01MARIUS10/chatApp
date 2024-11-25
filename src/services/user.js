import { supabase } from '../librairies/supabaseClient.js'

async function getAllUser(){
        const { data } = await supabase.from('profiles').select()
        return data;
}

export { getAllUser }