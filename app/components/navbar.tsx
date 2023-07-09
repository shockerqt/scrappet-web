import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import NavbarNavigation from './navbar-navigation';
// import { switchTheme } from '@/app/actions';

export default function Navbar() {
  return (
    <header className='sticky top-0 w-full bg-neutral-100 transition-colors dark:bg-black'>
      <nav className='m-auto flex h-16 max-w-screen-xl items-center justify-between px-4'>
        {/* LOGO */}
        <Link className='text-3xl font-extrabold' href='/gatos'>
          scrappet.
        </Link>
        <div className='flex items-center gap-4'>
          {/* SEARCH BUTTON */}
          <button className='flex items-center gap-2 rounded bg-neutral-200/50 px-4 py-2 text-sm transition-colors hover:bg-neutral-300/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-600/50 md:text-base'>
            <MagnifyingGlassIcon height='1em' />
            Buscar...
          </button>
          {/* RESPONSIVE MENU BUTTON */}
          <button className='flex md:hidden'>
            <Bars3Icon height='2em' />
          </button>
          {/* NAV LINKS */}
          <div className='hidden items-center gap-4 md:flex '>
            <NavbarNavigation
              navLinks={[
                { name: 'Gatos', href: '/gatos' },
                { name: 'Perros', href: '/perros' },
              ]}
            />
            {/* <form className="flex" action={switchTheme}>
              <button>
                <MoonIcon className="h-6 dark:hidden" />
                <SunIcon className="h-6 hidden dark:block" />
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
