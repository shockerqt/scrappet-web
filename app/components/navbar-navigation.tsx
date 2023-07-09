'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

export default function NavbarNavigation({
  navLinks,}: {
  navLinks: NavLink[];
}) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`flex items-center px-4 py-2 text-center transition-colors hover:bg-neutral-300/50 dark:hover:bg-neutral-600/50 rounded${
              isActive ? ' font-extrabold' : ''
            }`}
            href={link.href}
            key={link.name}
          >
            <span className='w-16'>{link.name}</span>
            <ChevronDownIcon className='mt-0.5 h-4' />
          </Link>
        );
      })}
    </>
  );
}
