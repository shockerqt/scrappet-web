import Link from 'next/link';

export default function ProductsFilters() {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Categorías</h2>
      <ul>
        {Array.from(Array(9).keys()).map(i => (
          <li key={i}>
            <Link href="#" className="px-3 py-0.5 my-2 flex bg-primary-200 dark:bg-primary-700 rounded-lg justify-between">
              <span>Alimentos</span>
              <span className="text-black/50 dark:text-white/50">92</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
