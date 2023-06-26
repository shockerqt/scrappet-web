'use client';

import { useContext } from 'react';
import { ProductsMenu, ToggleMenuContext } from './products-menu-context';

interface Props {
  children: React.ReactNode;
  className: string;
  menu: ProductsMenu
}

export default function ProductsToggleButton({ children, className, menu }: Props) {
  const toggle = useContext(ToggleMenuContext);

  return (
    <button onClick={() => toggle(menu)} className={className}>
      {children}
    </button>

  );
}
