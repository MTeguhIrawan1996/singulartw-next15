/* eslint-disable @typescript-eslint/no-explicit-any */
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { env } from '@/env';

// import { Database } from '../../../database.types';

export const createClient = async () => {
  const cookieStore = await cookies();
  return createServerClient<any>(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(async ({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
