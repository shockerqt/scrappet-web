'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactElement, useContext, useRef } from 'react';
import { OpenedMenuContext, ToggleMenuContext } from './products-menu-context';

interface ProductsFilterProps {
  sortMenu: ReactElement;
  filtersMenu: ReactElement;
}

export default function ProductsFilters({ sortMenu, filtersMenu }: ProductsFilterProps) {
  const openedMenu = useContext(OpenedMenuContext);
  const toggleMenu = useContext(ToggleMenuContext);
  const menuRef = useRef(null);

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
    openedMenu !== 'none' &&
    <div ref={menuRef} className={`${menu[openedMenu].specialClasses} rounded absolute sm:w-80 top-16 bg-neutral-100 dark:bg-black border container-border-color text-sm`}>
      <div className="pl-4 pr-2 py-1 flex items-center justify-between border-b container-border-color">
        <h1>{menu[openedMenu].title}</h1>
        <button
          className="secondary-button py-2 px-2 rounded"
          onClick={() => toggleMenu(openedMenu)}
        >
          <XMarkIcon height="1.4em" />
        </button>
      </div>
      <nav className="max-h-96 overflow-y-scroll">
        {menu[openedMenu].element}
      </nav>
    </div>
  );
}
