import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { cookies } from 'next/headers';

import NavbarNavigation from './navbar-navigation';
import { switchTheme } from '@/app/actions';


export default function Navbar() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <header className="w-full sticky top-0 mb-4 backdrop-blur-md bg-neutral-100/80 dark:bg-black/80">
      <nav className="max-w-screen-xl m-auto h-20 md:h-24 flex justify-between items-center px-4">
        <Link className="font-extrabold text-3xl" href="/gatos">scrappet.</Link>
        <div className="hidden md:flex gap-8 items-center">
          <NavbarNavigation navLinks={[
            { name: 'Gatos', href: '/gatos' },
            { name: 'Perros', href: '/perros' },
          ]} />
          <form className="flex" action={switchTheme}>
            <button>{theme?.value === 'dark' ? <SunIcon className="h-6" /> : <MoonIcon className="h-6" />}</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
