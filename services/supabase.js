import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qzteqcfttljuntrzpfpa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dGVxY2Z0dGxqdW50cnpwZnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NzAwMTIsImV4cCI6MjAyNDE0NjAxMn0.sXGxz3Mor9FQx5NBk3Dd5uVHyHOYZNw92QES_5tJDag';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
