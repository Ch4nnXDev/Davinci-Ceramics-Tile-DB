import { redirect } from 'next/navigation';
import { createClient } from '../lib/Supabase/server';

export default async function HomeRedirect(): Promise<React.ReactNode> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/catalogue');
  }

  redirect('/login');
}