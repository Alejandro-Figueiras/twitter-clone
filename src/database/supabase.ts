// Supabase es usado por el momento solo para Storage, como alternativa directa a S3
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
)

export default supabase
