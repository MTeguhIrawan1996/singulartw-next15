/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserClient } from '@supabase/ssr';

import { env } from '@/env';

// import { Database } from '../../../database.types';

export function createClient() {
  return createBrowserClient<any>(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
