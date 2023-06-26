import ProductsMenuProvider from './products-menu-context';

export default function Layout({ children }: React.PropsWithChildren) {

  return (
    <ProductsMenuProvider>
      {children}
    </ProductsMenuProvider>
  );
}
