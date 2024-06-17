import { FunctionComponent, useState } from "react";
import { useProductsList } from "@application/api/products/hooks/useProductsList";
import { ProductList } from "@components/molecules/ProductList";
import { Divider } from "@components/atoms/Divider";
import { Button } from "@components/atoms/Button";
import { Sidebar } from "@components/atoms/Sidebar";
import { ProductForm } from "@components/organisms/ProductForm";
import { IProduct } from "@core/products/entities/Product";

export const Catalog: FunctionComponent = () => {
  const { data, isLoading } = useProductsList();
  const [isFormOpen, setIsFormOpen] = useState(false);

  console.log({ data, isLoading });

  const handleCreateProductClick = () => setIsFormOpen(true);

  const onCreatedProduct = (product: IProduct) => {
    setIsFormOpen(false);
    data?.push(product);
  };

  return (
    <div className="w-full min-h-svh h-full flex flex-col items-center bg-slate-50">
      <main className="py-5 w-[70%] bg-slate flex-col">
        <h1 className="font-bold text-4xl py-3 text-center">
          Lista de produtos
        </h1>

        <Divider />

        <div className="flex w-full justify-center">
          <Button onClick={handleCreateProductClick} className="mb-6">
            Criar produto
          </Button>
        </div>

        {isFormOpen && (
          <Sidebar
            isOpen={isFormOpen}
            title="Criar produto"
            onClose={() => setIsFormOpen(false)}
          >
            <ProductForm onSubmit={onCreatedProduct} />
          </Sidebar>
        )}

        <section>
          {!isLoading && data && <ProductList products={data} />}
        </section>
      </main>
    </div>
  );
};
