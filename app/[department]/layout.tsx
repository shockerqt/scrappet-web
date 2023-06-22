import Image from 'next/image';
import ProductsFilters from './products-filters';
import ProductsPagination from './products-pagination';
import ProductsSort from './products-sort';
import { FunnelIcon } from '@heroicons/react/24/outline';


export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="grid grid-cols-1 grid-rows-1 px-4">
        <Image className="m-auto object-cover rounded-3xl h-24" src="/cats.jpg" alt="" width={1024} height={572} />
      </div>
      <header className="flex gap-2 lg:gap-8 items-center my-4 py-2 px-4 justify-between sticky top-16 md:top-24  backdrop-blur-md bg-neutral-100/90 dark:bg-black/90">
        {/* FILTERS MOBILE BUTTON */}
        <div className="basis-60 grow lg:grow-0 text-xs sm:text-sm">
          <button className="flex items-center gap-1 justify-center lg:hidden border border-neutral-400 w-20 md:w-24 py-2 rounded-md"><FunnelIcon className="h-4" /> Filtrar</button>
        </div>
        {/* PAGINATION */}
        <nav className="">
          <ProductsPagination />
        </nav>
        <ProductsSort />
      </header>
      <div className="flex gap-8 px-4 h-full">
        {/* FILTERS */}
        <aside className="hidden lg:block basis-60 shrink-0">
          <ProductsFilters />
        </aside>
        {/* PRODUCT GRID */}
        <main className="grow grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {children}
        </main>
      </div>
    </div>
  );

}
