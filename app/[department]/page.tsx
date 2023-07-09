interface PageProps {
  params: {
    department: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())
//   const departments = [
//     { department: 'gatos' },
//     { department: 'perros' },
//   ];

//   return departments;
// }

import { Bars3BottomRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Suspense } from 'react';
import ProductsFiltersMenu from './products-filters-menu';
import ProductsGrid from './products-grid';
import ProductsGridFallback from './products-grid-fallback';
import ProductsMenu from './products-menu';
import ProductsPagination from './products-pagination';
import ProductsSortMenu from './products-sort-menu';
import ProductsToggleButton from './products-toggle-button';

export default function Page({ params, searchParams }: PageProps) {
  // console.log(params, searchParams);

  return (
    <>
      {/* THE IMAGE BLOCK */}
      <div className='col-span-2 grid grid-cols-1 grid-rows-1 px-4'>
        <Image
          className='m-auto h-20 rounded-3xl object-cover'
          src='/cats.jpg'
          alt=''
          width={1024}
          height={572}
        />
      </div>

      {/* PAGINATION + SORT BUTTON + FILTER BUTTON */}
      <header className='sticky top-16 flex items-center justify-between gap-2 bg-neutral-100/70 px-4 py-2 backdrop-blur transition-colors dark:bg-black/80 lg:col-span-1 lg:gap-8'>
        {/* FILTERS MOBILE BUTTON */}
        <div className='grow basis-60 text-xs sm:text-sm lg:grow-0 lg:pr-8'>
          <ProductsToggleButton
            menu='filters'
            className='container-border-color secondary-button  flex w-20 items-center justify-center gap-1 rounded border py-2 sm:w-24 lg:hidden'
          >
            <FunnelIcon height='1em' /> Filtrar
          </ProductsToggleButton>
        </div>

        {/* PAGINATION */}
        <nav className='text-sm sm:text-base'>
          <Suspense fallback={<div>Loading</div>}>
            <ProductsPagination />
          </Suspense>
        </nav>

        {/* SORT MOBILE BUTTON */}
        <div className='justify flex grow basis-60 justify-end text-xs sm:text-sm'>
          <ProductsToggleButton
            menu='sort'
            className='container-border-color secondary-button flex w-20 items-center justify-center gap-1 rounded border py-2 sm:w-24'
          >
            <Bars3BottomRightIcon height='1em' /> Ordenar
          </ProductsToggleButton>
        </div>

        {/* MENUS */}
        <Suspense>
          <ProductsMenu
            sortMenu={<ProductsSortMenu />}
            filtersMenu={<ProductsFiltersMenu />}
          />
        </Suspense>
      </header>

      {/* FILTERS AND PRODUCT GRID */}
      <div className='flex items-start gap-8 overflow-x-clip p-4'>
        {/* FILTERS */}
        <menu className='bottom-0 top-0 hidden shrink-0 basis-60 lg:block'>
          <Suspense>
            <ProductsFiltersMenu />
          </Suspense>
        </menu>

        {/* PRODUCT GRID */}
        <main className='grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
          <Suspense fallback={<ProductsGridFallback />}>
            <ProductsGrid />
          </Suspense>
        </main>
      </div>
    </>
  );
}
