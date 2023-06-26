import Link from 'next/link';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import NavbarNavigation from './navbar-navigation';
import { switchTheme } from '@/app/actions';


export default function Navbar() {
  return (
    <header className="w-full sticky top-0 mb-4 backdrop-blur-md bg-neutral-100/70 dark:bg-black/80">
      <nav className="max-w-screen-xl m-auto h-16 md:h-24 flex justify-between items-center px-4">
        <Link className="font-extrabold text-3xl" href="/gatos">scrappet.</Link>
        <button className="flex md:hidden"><Bars3Icon className="h-6" /></button>
        <div className="hidden md:flex gap-8 items-center">
          <NavbarNavigation navLinks={[
            { name: 'Gatos', href: '/gatos' },
            { name: 'Perros', href: '/perros' },
          ]} />
          <form className="flex" action={switchTheme}>
            <button>
              <MoonIcon className="h-6 dark:hidden" />
              <SunIcon className="h-6 hidden dark:block" />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
