import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ProductsFiltersProps {
  className: string;
}

export default function ProductsSort() {
  return (
    <>
      {/* ORDER MOBILE BUTTON */}
      <div className="basis-60 grow justify flex justify-end text-xs sm:text-sm">
        <button className="flex items-center gap-1 justify-center border border-neutral-400 w-20 md:w-24 py-2 rounded-md">
          <Bars3BottomRightIcon className="h-4" /> Ordenar
        </button>
      </div>
      {/* ORDER */}
      <nav className="justify-end basis-60 grow gap-4 hidden">
        <h2 className="text-lg font-semibold">Ordenar</h2>
        <menu>
          <li>
            <Link href="#" className="px-3 py-0.5 flex bg-primary-200 dark:bg-primary-700 rounded-lg justify-between">
            Alimentos
            </Link>
          </li>
        </menu>
      </nav>
    </>
  );
}

