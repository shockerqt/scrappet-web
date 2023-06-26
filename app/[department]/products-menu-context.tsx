'use client';

import React, { createContext, useState } from 'react';

export type ProductsMenu = 'none' | 'filters' | 'sort';

export const OpenedMenuContext = createContext<(menu: ProductsMenu) => boolean>(() => false);
export const ToggleMenuContext = createContext<(menu: ProductsMenu) => void>(() => {});

export default function ProductsMenuProvider({ children }: React.PropsWithChildren) {
  const [openedMenu, setOpenedMenu] = useState<ProductsMenu>('none');

  const toggle = (menu: ProductsMenu) => {
    if (openedMenu === menu) setOpenedMenu('none');
    else setOpenedMenu(menu);
  };

  const isOpened = (menu: ProductsMenu) => openedMenu === menu;

  return (
    <OpenedMenuContext.Provider value={isOpened}>
      <ToggleMenuContext.Provider value={toggle}>
        {children}
      </ToggleMenuContext.Provider>
    </OpenedMenuContext.Provider>
  );
}
