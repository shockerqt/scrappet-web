'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface NavLink {
  name: string;
  href: string;
}

export default function NavbarNavigation({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`flex items-center text-center transition-colors hover:bg-neutral-300/50 dark:hover:bg-neutral-600/50 py-2 px-4 rounded${isActive ? ' font-extrabold' : ''}`}
            href={link.href}
            key={link.name}
          >
            <span className="w-16">{link.name}</span>
            <ChevronDownIcon className="h-4 mt-0.5" />
          </Link>
        );
      })}
    </>
  );
}
