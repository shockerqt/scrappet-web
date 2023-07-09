import Link from 'next/link';

export default function ProductsPagination() {
  return (
    <>
      <div className='flex gap-2 font-medium'>
        <Link className='px-2' href={{ query: { name: 'test' } }}>
          &lt;
        </Link>
        <span>6</span>
        <span className='text-neutral-400 dark:text-neutral-500'>/</span>
        <span className='text-neutral-400 dark:text-neutral-500'>20</span>
        <Link className='px-2' href={{ query: { name: 'test' } }}>
          &gt;
        </Link>
      </div>
    </>
  );
}
