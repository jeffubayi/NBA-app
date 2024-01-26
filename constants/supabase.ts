import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl ="https://udkewefcavrjldgeckfx.supabase.co"
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVka2V3ZWZjYXZyamxkZ2Vja2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3ODc0NDUsImV4cCI6MjAxMzM2MzQ0NX0.p43IFo68rLqH4a3lm8Ern9-1Ptaeh4IbiC70kopMsQo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})