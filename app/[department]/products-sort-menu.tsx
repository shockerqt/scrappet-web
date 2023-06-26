'use client';

import Link from 'next/link';
import { OpenedMenuContext } from './products-menu-context';
import { useContext } from 'react';

export default function ProductsSortMenu() {
  const isOpened = useContext(OpenedMenuContext);

  return (
    <>
      <nav className={`${isOpened('sort') ? 'absolute' : 'hidden'} justify-end basis-60 grow gap-4`}>
        <h2 className="text-lg font-semibold">Ordenar</h2>
        <menu>
          <li>
            <Link href="#" className="px-3 py-0.5 flex bg-primary-200 dark:bg-primary-700 rounded-lg justify-between">
            Alimentos
            </Link>
          </li>
        </menu>
      </nav>
    </>
  );
}
