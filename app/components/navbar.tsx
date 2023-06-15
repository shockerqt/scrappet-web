import Link from 'next/link';
import NavbarNavigation from './navbar-navigation';
import { switchTheme } from '@/app/actions';

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="max-w-screen-xl m-auto h-24 flex justify-between items-center px-4">
        <Link className="font-extrabold text-3xl" href="/gatos">scrappet.</Link>
        <div className="flex gap-8">
          <NavbarNavigation navLinks={[
            { name: 'Gatos', href: '/gatos' },
            { name: 'Perros', href: '/perros' },
          ]} />
          <form action={switchTheme}>
            <button>ñ</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
