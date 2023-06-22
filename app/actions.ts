'use server';

import { cookies } from 'next/headers';

export async function switchTheme() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  cookieStore.set('theme', theme?.value === 'dark' ? 'light' : 'dark');
}
