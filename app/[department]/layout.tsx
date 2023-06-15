import ProductsHeader from './products-header';
import './styles.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <div className="max-w-screen-xl m-auto department-container-grid px-4">
      <ProductsHeader />
      <aside>
        aside
      </aside>
      {children}
    </div>
  );

}
