const {createClient} = require('@supabase/supabase-js')

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdGJ5dGFydnhsZnJrZ21mYXFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDMzMDkxOSwiZXhwIjoxOTY5OTA2OTE5fQ.05uTZwUnNxBv1udwbD8hvuJT68DcB-CGfwHhlG-C4Xc'
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export default supabase;