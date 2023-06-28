'use client';

import Link from 'next/link';

export default function ProductsSortMenu() {
  const sortOptions = {
    'price-asc': 'Precio: menor a mayor',
    'price-desc': 'Precio: mayor a menor',
    'name-asc': 'Nombre: A-Z',
    'name-desc': 'Nombre: Z-A',
    'popularity-asc': 'Precio: menor a mayor',
    'popularity-desc': 'Precio: menor a mayor',
  };

  return (
    <>
      <menu className="flex flex-col gap-1 py-1">
        {Object.entries(sortOptions).map(([key, label]) => (
          <li key={key}>
            <Link href="#" className="py-2 px-4 flex justify-between secondary-button">
              {label}
            </Link>
          </li>
        ))}
      </menu>
    </>
  );
}
