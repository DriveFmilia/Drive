import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqfgqqlbodwtaypsntxt.supabase.co'
const supabaseKey = 'sb_publishable_UDaJ4rfRE1Tp5HH1qeH5ew_i-S1hLeG'

export const supabase = createClient(supabaseUrl, supabaseKey)