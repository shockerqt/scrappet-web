'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
            className={`w-16 text-center${isActive ? ' font-bold' : ''}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
