import Link from 'next/link';
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import NavbarNavigation from './navbar-navigation';
import { switchTheme } from '@/app/actions';


export default function Navbar() {
  return (
    <header className="w-full sticky top-0 mb-4 backdrop-blur-md bg-neutral-100/70 dark:bg-black/80 transition-colors">
      <nav className="max-w-screen-xl m-auto h-16 md:h-24 flex justify-between items-center px-4">
        {/* LOGO */}
        <Link className="font-extrabold text-3xl" href="/gatos">scrappet.</Link>
        <div className="flex items-center gap-4">
          {/* SEARCH BUTTON */}
          <button className="flex items-center gap-2 py-2 px-4 rounded transition-colors text-sm md:text-base bg-neutral-200/50 hover:bg-neutral-300/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-600/50">
            <MagnifyingGlassIcon height="1em" />
            Buscar...
          </button>
          {/* RESPONSIVE MENU BUTTON */}
          <button className="flex md:hidden">
            <Bars3Icon height="2em" />
          </button>
          {/* NAV LINKS */}
          <div className="hidden md:flex gap-4 items-center ">
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
        </div>
      </nav>
    </header>
  );
}
