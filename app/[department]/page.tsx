interface PageProps {
  params: {
    department: string;
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const departments = [
    { department: 'gatos' },
    { department: 'perros' },
  ];

  return departments;
}

import { Bars3BottomRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { Suspense } from 'react';
import ProductsFilters from './products-filters';
import ProductsGrid from './products-grid';
import ProductsPagination from './products-pagination';
import ProductsSortMenu from './products-sort-menu';
import ProductsGridFallback from './products-grid-fallback';
import ProductsToggleButton from './products-toggle-button';

export default function Page({ params, searchParams }: PageProps) {
  // console.log(params, searchParams);

  return (
    <div className="max-w-screen-xl m-auto grid gap-4">
      {/* THE IMAGE BLOCK */}
      <div className="grid grid-cols-1 grid-rows-1 px-4">
        <Image className="m-auto object-cover rounded-3xl h-20" src="/cats.jpg" alt="" width={1024} height={572} />
      </div>

      <header className="flex px-4 gap-2 lg:gap-8 items-center mb-4 py-2 justify-between bg-neutral-100/80 dark:bg-black/90">
        {/* FILTERS MOBILE BUTTON */}
        <div className="basis-60 grow lg:grow-0 text-xs sm:text-sm">
          <ProductsToggleButton
            menu="filters"
            className="flex items-center gap-1 justify-center lg:hidden border border-neutral-400 w-20 md:w-24 py-2 rounded-md"
          >
            <FunnelIcon className="h-4" /> Filtrar
          </ProductsToggleButton>
        </div>
        {/* PAGINATION */}
        <nav className="">
          <Suspense fallback={<div>Loading</div>}>
            <ProductsPagination />
          </Suspense>
        </nav>
        {/* SORT MOBILE BUTTON */}
        <div className="basis-60 grow justify flex justify-end text-xs sm:text-sm">
          <ProductsToggleButton menu="sort" className="flex items-center gap-1 justify-center border border-neutral-400 w-20 md:w-24 py-2 rounded-md">
            <Bars3BottomRightIcon className="h-4" /> Ordenar
          </ProductsToggleButton>
        </div>
        {/* SORT MENU */}
        <Suspense>
          <ProductsSortMenu />
        </Suspense>
      </header>

      <div className="flex gap-8 h-full px-4">
        {/* FILTERS */}
        <Suspense>
          <ProductsFilters />
        </Suspense>
        {/* PRODUCT GRID */}
        <main className="grow grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Suspense fallback={<ProductsGridFallback />}>
            <ProductsGrid />
          </Suspense>
        </main>
      </div>
    </div>
  );

}
