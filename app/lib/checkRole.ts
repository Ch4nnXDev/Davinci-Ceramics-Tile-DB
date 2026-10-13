import { createClient } from "./Supabase/server";



const checkRole = async (userId: string) => {
  const supabase = await createClient(); 
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data?.role ?? false;
};

export default checkRole;