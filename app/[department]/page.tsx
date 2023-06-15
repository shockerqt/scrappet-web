export default async function Products() {
  const sleep = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  void await sleep();
  const items = Array.from(Array(9).keys());
  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-10">
      {items.map(i => (
        <div key={i}>
          <div className="rounded-lg bg-white h-60 mb-1">
          </div>
          <h3 className="font-medium text-sm">Acana Bountiful Catch Gatos</h3>
          <p className="text-neutral-500 text-sm">Kitten</p>
          <p className="text-lg font-extrabold">$35.990</p>
        </div>
      ))}
    </main>
  );
}
