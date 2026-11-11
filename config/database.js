window.supabaseUrl = "https://vvycnhmvjcxunotqnexr.supabase.co";
window.supabaseAnonKey = "sb_publishable_Sm_mNM-668AMSZYZwsM5Xw_J0O20Ire";

window.createSupabaseClient = function createSupabaseClient() {
  if (
    !window.supabaseUrl ||
    !window.supabaseAnonKey ||
    (!window.supabaseAnonKey.startsWith("eyJ") &&
      !window.supabaseAnonKey.startsWith("sb_publishable_"))
  ) {
    throw new Error(
      "ยังไม่ได้ใส่ Publishable key ให้ถูกต้อง กรุณาตรวจสอบค่าที่นำมาวาง"
    );
  }

  return window.supabase.createClient(window.supabaseUrl, window.supabaseAnonKey);
};