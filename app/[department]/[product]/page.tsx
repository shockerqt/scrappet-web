export default async function Product() {
  const sleep = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  // void await sleep();
  const items = Array.from(Array(12).keys());
  return (
    <>
      {items.map((i) => (
        <div className='flex items-center gap-4 sm:block' key={i}>
          <div className='mb-1 aspect-square h-32 rounded-lg bg-white sm:aspect-auto sm:h-60'></div>
          <div>
            <h3 className='text-sm font-medium'>Acana Bountiful Catch Gatos</h3>
            <p className='text-lg font-extrabold'>$35.990</p>
          </div>
        </div>
      ))}
    </>
  );
}
