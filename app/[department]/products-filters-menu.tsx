'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsFilters() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState('alimentos');

  const categories = [
    {
      name: 'Alimentos',
      slug: 'alimentos',
      quantity: 103,
      attributes: [
        {
          name: 'Edad',
          slug: 'edad',
          options: [
            { name: 'Kitten', slug: 'kitten', quantity: 31},
            { name: 'Adulto', slug: 'adulto', quantity: 63},
            { name: 'Senior', slug: 'senior', quantity: 8},
          ],
        },
        {
          name: 'Marca',
          slug: 'marca',
          options: [
            {name: 'Acana', slug: 'acana', quantity: 2},
            {name: 'N&D', slug: 'nd', quantity: 3},
            {name: 'Purina', slug: 'purina', quantity: 5},
            {name: 'Acana', slug: 'acana', quantity: 2},
            {name: 'N&D', slug: 'nd', quantity: 3},
            {name: 'Purina', slug: 'purina', quantity: 5},
            {name: 'Acana', slug: 'acana', quantity: 2},
            {name: 'N&D', slug: 'nd', quantity: 3},
            {name: 'Purina', slug: 'purina', quantity: 5},
            {name: 'Acana', slug: 'acana', quantity: 2},
            {name: 'N&D', slug: 'nd', quantity: 3},
            {name: 'Purina', slug: 'purina', quantity: 5},
            {name: 'Acana', slug: 'acana', quantity: 2},
            {name: 'N&D', slug: 'nd', quantity: 3},
            {name: 'Purina', slug: 'purina', quantity: 5},
          ],
        },
      ],
    },
  ];


  return (

    <>
      <section className="my-2 px-2">
        <div className="flex py-1 justify-between items-center">
          <h2 className="">Categoría</h2>
        </div>
        <ul>
          {categories.map(category => (
            <li key={category.slug}>
              <Link href="#" className="px-2 py-0.5 my-1 flex bg-primary-200 dark:bg-primary-800 rounded justify-between">
                <span>{category.name}</span>
                {/* <span className="">{option.quantity}</span> */}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {categories.find(category => category.slug === selected)?.attributes.map(category => (
        <section key={category.slug} className="my-2">
          <div className="flex py-1 px-2 justify-between items-center">
            <h2 className="">{category.name}</h2>
            <button className="flex items-center gap-1 text-xs border container-border-color pl-4 pr-2 py-1 rounded-full secondary-button">
              3 activos
              <XMarkIcon height="1em" />
            </button>
          </div>
          <ul>
            {category.options.map((option, i) => (
              <li key={`${category.slug}-${option.slug}-${i}`}>
                <Link href="#" className="px-4 py-0.5 my-1 flex rounded justify-between secondary-button">
                  <span>{option.name}</span>
                  <span className="">{option.quantity}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
