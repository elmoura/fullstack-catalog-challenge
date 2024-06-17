import { Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "@components/atoms/Sidebar";
import { FALLBACK_PRODUCT_IMAGE_URL } from "@src/main";
import { Divider } from "@components/atoms/Divider";
import { DetailHeader } from "@components/atoms/DetailHeader/DetailHeader";
import { DeleteButton } from "@components/atoms/DeleteButton";
import { UpdateButton } from "@components/atoms/UpdateButton/UpdateButton";
import { ProductForm } from "@components/organisms/ProductForm";
import { useFindProduct } from "@application/api/products/hooks/useFindProduct";
import { useFindSkus } from "@application/api/skus/hooks/useFindSkus";
import { useDeleteProduct } from "@application/api/products/hooks/useDeleteProduct";
import { Button } from "@components/atoms/Button";
import { SkuList } from "@components/molecules/SkuList/SkuList";
import { SkuForm } from "@components/organisms/SkuForm";

export const ProductDetails: FunctionComponent = () => {
  const { productId = "" } = useParams();
  const navigate = useNavigate();

  const { data: product, refetch: refetchProduct } = useFindProduct({
    productId,
  });
  const { data: skus, refetch: refetchSkus } = useFindSkus({ productId });
  const { mutate: deleteProduct } = useDeleteProduct({ productId });

  const [isCreateSkuFormOpen, setIsCreateSkuFormOpen] = useState(false);
  const [isUpdateProductFormOpen, setIsUpdateProductFormOpen] = useState(false);

  const [needsToRefetchProduct, setNeedsToRefetchProduct] = useState(false);
  const [needsToRefetchSkus, setNeedsToRefetchSkus] = useState(false);

  useEffect(() => {
    if (needsToRefetchProduct) {
      refetchProduct();
      setNeedsToRefetchProduct(false);
    }
  }, [needsToRefetchProduct, refetchProduct]);

  useEffect(() => {
    if (needsToRefetchSkus) {
      refetchSkus();
      setNeedsToRefetchSkus(false);
    }
  }, [needsToRefetchSkus, refetchSkus]);

  const handleDeleteProduct = () => {
    deleteProduct({ productId });
    setTimeout(() => navigate(-1), 130);
  };

  return (
    product && (
      <main className="mx-7 mb-7">
        <DetailHeader name={product.name} code={product._id} />

        <Divider className="" />

        <article>
          <section className="flex gap-x-8 mb-3 items-center w-fit">
            <DeleteButton
              popUpTitle="Tem certeza que quer apagar esse produto?"
              popUpDescription="Esse produto e todos os SKUs associados serão apagados. Essa ação é irreversível."
              okText="Apagar"
              onConfirm={() => handleDeleteProduct()}
            />

            <UpdateButton onClick={() => setIsUpdateProductFormOpen(true)} />
          </section>

          <section className="flex justify-between mt-10">
            <div className="w-full lg:w-8/12">
              <h5 className="font-bold">Preço</h5>
              <p className="text-xl font-bold text-blue-600">
                R${product.price.toFixed(2)}
              </p>
              <h5 className="font-bold pt-4">Descrição</h5>
              <p className="font-thin">{product.description}</p>
            </div>

            <div className="">
              <Image
                className="rounded"
                width={400}
                src={product.imageUrl}
                fallback={FALLBACK_PRODUCT_IMAGE_URL}
              />
            </div>
          </section>
        </article>

        <section className="mt-4">
          <h3 className="text-lg font-bold">SKUs</h3>

          <Button onClick={() => setIsCreateSkuFormOpen(true)} className="my-3">
            Criar SKU
          </Button>

          {skus && skus.length > 0 && <SkuList skus={skus} />}
        </section>

        {isCreateSkuFormOpen && (
          <Sidebar
            title="Criar SKU"
            isOpen={isCreateSkuFormOpen}
            onClose={() => setIsCreateSkuFormOpen(false)}
          >
            <SkuForm
              productId={productId}
              onSubmit={() => {
                setIsCreateSkuFormOpen(false);
                setNeedsToRefetchSkus(true);
              }}
            />
          </Sidebar>
        )}

        {isUpdateProductFormOpen && (
          <Sidebar
            title="Atualizar produto"
            isOpen={isUpdateProductFormOpen}
            onClose={() => setIsUpdateProductFormOpen(false)}
          >
            <ProductForm
              product={product}
              onSubmit={() => {
                setIsUpdateProductFormOpen(false);
                setNeedsToRefetchProduct(true);
              }}
            />
          </Sidebar>
        )}
      </main>
    )
  );
};
