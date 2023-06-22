import Link from 'next/link';

export default function ProductsFilters() {
  return (
    <>
      <h2 className="text-lg font-semibold">Ordenar</h2>
      <ul>
        <li>
          <Link href="#" className="px-3 py-0.5 flex bg-[#EDBFBF] dark:bg-[#A14F4F] rounded-lg justify-between">
            Alimentos
          </Link>
        </li>
      </ul>
    </>
  );
}

