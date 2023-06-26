'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { OpenedMenuContext } from './products-menu-context';

export default function ProductsFilters() {
  const isOpened = useContext(OpenedMenuContext);
  const searchParams = useSearchParams();

  const categories = [
    {
      name: 'Alimentos y premios',
      slug: 'alimento',
      attributes: [
        {
          name: 'Etapa de vida',
          slug: 'etapa',
          options: [
            {
              name: 'Kitten',
              slug: 'kitten',
            },
            {
              name: 'Adulto',
              slug: 'adulto',
            },
            {
              name: 'Senior',
              slug: 'senior',
            },
          ],
        },
      ],
    },
  ];


  return (
    <aside className={`${isOpened('filters') ? 'absolute' : 'hidden'} lg:static lg:block basis-60 shrink-0`}>
      <h2 className="text-lg font-semibold mb-4">Categorías</h2>
      <ul>
        {Array.from(Array(9).keys()).map(i => (
          <li key={i}>
            <Link href="#" className="px-3 py-0.5 my-2 flex bg-primary-200 dark:bg-primary-700 rounded-lg justify-between">
              <span>Alimentos</span>
              <span className="text-black/50 dark:text-white/50">92</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
