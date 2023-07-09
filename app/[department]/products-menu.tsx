'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactElement, useContext } from 'react';
import { OpenedMenuContext, ToggleMenuContext } from './products-menu-context';

interface ProductsFilterProps {
  sortMenu: ReactElement;
  filtersMenu: ReactElement;
}

export default function ProductsFilters({
  sortMenu,
  filtersMenu,
}: ProductsFilterProps) {
  const openedMenu = useContext(OpenedMenuContext);
  const toggleMenu = useContext(ToggleMenuContext);

  const menu = {
    filters: {
      title: 'Filtros',
      element: filtersMenu,
      specialClasses: 'max-sm:right-4 left-4 lg:hidden',
    },
    sort: {
      title: 'Ordenar por',
      element: sortMenu,
      specialClasses: 'right-4 max-sm:left-4',
    },
  };

  return (
    openedMenu !== 'none' && (
      <div
        className={`${menu[openedMenu].specialClasses} container-border-color absolute top-16 rounded border bg-neutral-100 text-sm dark:bg-black sm:w-80`}
      >
        <div className='container-border-color flex items-center justify-between border-b py-1 pl-4 pr-2'>
          <h1>{menu[openedMenu].title}</h1>
          <button
            className='secondary-button rounded px-2 py-2'
            onClick={() => toggleMenu(openedMenu)}
          >
            <XMarkIcon height='1.4em' />
          </button>
        </div>
        <nav className='max-h-96 overflow-y-scroll'>
          {menu[openedMenu].element}
        </nav>
      </div>
    )
  );
}
