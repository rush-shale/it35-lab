import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lyjwfpsvyfmqtyhqhirc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5andmcHN2eWZtcXR5aHFoaXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NTk3NTQsImV4cCI6MjA1ODQzNTc1NH0.yai4R6Bd7GzsDcHu6o-vLJtQGcqg5a3ZQKf--oYkCKA';

export const supabase = createClient(supabaseUrl, supabaseKey);