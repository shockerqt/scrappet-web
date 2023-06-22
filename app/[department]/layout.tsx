import Image from 'next/image';
import ProductsFilters from './products-filters';
import ProductsPagination from './products-pagination';
import ProductsSort from './products-sort';


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
      <header className="flex gap-2 lg:gap-8 items-center my-4 py-2 px-4 justify-between sticky top-20 md:top-24  backdrop-blur-md bg-neutral-100/90 dark:bg-black/90">
        {/* FILTERS MOBILE */}
        <div className="basis-60 grow lg:grow-0">
          <button className="lg:hidden bg-primary-200 dark:bg-primary-700 w-20 py-1 rounded-md">Filtrar</button>
        </div>
        {/* PAGINATION */}
        <nav className="">
          <ProductsPagination />
        </nav>
        {/* ORDER MOBILE */}
        <div className="basis-60 grow text-right md:hidden">
          <button className=" bg-primary-200 dark:bg-primary-700 w-20 py-1 rounded-md">Ordenar</button>
        </div>
        {/* ORDER */}
        <nav className="justify-end basis-60 grow gap-4 hidden md:flex">
          <ProductsSort />
        </nav>
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
