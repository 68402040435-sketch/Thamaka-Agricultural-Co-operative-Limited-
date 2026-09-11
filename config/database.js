window.supabaseUrl = "https://hsfgltxraiyskdjgxqba.supabase.co";
window.supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZmdsdHhyYWl5c2tkamd4cWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMzMyODYsImV4cCI6MjEwNDYwOTI4Nn0.bCfEtt3HfUrC6kvvIhtyKZGYQfxGOEKlRYXSji2AFDA";

window.createSupabaseClient = function createSupabaseClient() {
  if (
    !window.supabaseUrl ||
    !window.supabaseAnonKey ||
    !window.supabaseAnonKey.startsWith("eyJ")
  ) {
    throw new Error(
      "ยังไม่ได้ใส่ anon key — ไปที่ Project Settings → API แล้วคัดลอก anon public มาวางที่ supabaseAnonKey"
    );
  }

  return window.supabase.createClient(window.supabaseUrl, window.supabaseAnonKey);
};
