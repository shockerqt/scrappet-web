'use client';

import { useContext, useRef } from 'react';
import { ProductsMenu, ToggleMenuContext } from './products-menu-context';

interface Props {
  children: React.ReactNode;
  className: string;
  menu: ProductsMenu;
}

export default function ProductsToggleButton({
  children,
  className,
  menu,
}: Props) {
  const toggle = useContext(ToggleMenuContext);
  const menuRef = useRef(null);

  return (
    <button
      ref={menuRef}
      onClick={(event) => {
        toggle(menu);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
