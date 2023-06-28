interface PageProps {
  params: {
    department: string;
  },
  searchParams: { [key: string]: string | string[] | undefined }
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
      <div className="grid grid-cols-1 grid-rows-1 px-4 col-span-2">
        <Image className="m-auto object-cover rounded-3xl h-20" src="/cats.jpg" alt="" width={1024} height={572} />
      </div>

      {/* PAGINATION + SORT BUTTON + FILTER BUTTON */}
      <header className="flex px-4 py-2 gap-2 lg:gap-8 lg:col-span-1 sticky backdrop-blur top-16 bg-neutral-100/70 dark:bg-black/80 items-center justify-between transition-colors">
        {/* FILTERS MOBILE BUTTON */}
        <div className="basis-60 grow lg:grow-0 lg:pr-8 text-xs sm:text-sm">
          <ProductsToggleButton
            menu="filters"
            className="flex lg:hidden items-center gap-1 justify-center border container-border-color w-20 sm:w-24 py-2 rounded secondary-button"
          >
            <FunnelIcon height="1em" /> Filtrar
          </ProductsToggleButton>
        </div>

        {/* PAGINATION */}
        <nav className="text-sm sm:text-base">
          <Suspense fallback={<div>Loading</div>}>
            <ProductsPagination />
          </Suspense>
        </nav>

        {/* SORT MOBILE BUTTON */}
        <div className="basis-60 grow justify flex justify-end text-xs sm:text-sm">
          <ProductsToggleButton
            menu="sort"
            className="flex items-center gap-1 justify-center border container-border-color w-20 sm:w-24 py-2 rounded secondary-button"
          >
            <Bars3BottomRightIcon height="1em" /> Ordenar
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
      <div className="flex p-4 gap-8 items-start overflow-x-clip">

        {/* FILTERS */}
        <menu className="hidden lg:block top-0 bottom-0 basis-60 shrink-0">
          <Suspense>
            <ProductsFiltersMenu />
          </Suspense>
        </menu>

        {/* PRODUCT GRID */}
        <main className="grid flex-1 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Suspense fallback={<ProductsGridFallback />}>
            <ProductsGrid />
          </Suspense>
        </main>
      </div>

    </>
  );

}
