export default async function Products() {
  const sleep = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  // void await sleep();
  const items = Array.from(Array(12).keys());
  return (
    <>
      {items.map(i => (
        <div className="flex gap-4 items-center sm:block" key={i}>
          <div className="rounded-lg bg-white mb-1 h-32 aspect-square sm:h-60 sm:aspect-auto">
          </div>
          <div>

            <h3 className="font-medium text-sm">Acana Bountiful Catch Gatos</h3>
            <p className="text-neutral-500 text-sm">Kitten</p>
            <p className="text-lg font-extrabold">$35.990</p>
          </div>
        </div>
      ))}
    </>
  );
}
