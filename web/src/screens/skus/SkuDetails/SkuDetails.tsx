import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { treatPriceInfo } from "@utils/treatPriceInfo";
import { Divider } from "@components/atoms/Divider";
import { Sidebar } from "@components/atoms/Sidebar";
import { DeleteButton } from "@components/atoms/DeleteButton";
import { DetailHeader } from "@components/atoms/DetailHeader";
import { useDeleteSku } from "@application/api/skus/hooks/useDeleteSku";
import { useFindSku } from "@application/api/skus/hooks/useFindSku";
import { UpdateButton } from "@components/atoms/UpdateButton/UpdateButton";
import { SkuForm } from "@components/organisms/SkuForm";

export const SkuDetails: FunctionComponent = () => {
  const navigate = useNavigate();
  const { productId = "", skuId = "" } = useParams();

  const { data: sku, refetch: refetchSku } = useFindSku({ productId, skuId });
  const { mutate: deleteSku } = useDeleteSku();

  const [isUpdateSkuFormOpen, setIsUpdateSkuFormOpen] = useState(false);
  const [needsToRefetchSku, setNeedsToRefetchSku] = useState(false);

  useEffect(() => {
    console.log({ needsToRefetchSku });
    if (needsToRefetchSku === true) {
      setNeedsToRefetchSku(false);
      refetchSku();
    }
  }, [needsToRefetchSku, refetchSku]);

  const handleDeleteSku = () => {
    deleteSku({ productId, skuId });
    navigate(-1);
  };

  return (
    sku && (
      <main className="mx-7 mb-7">
        <DetailHeader name={sku.identifier} code={sku._id} />

        <Divider />

        <div className="flex gap-x-8 mb-3 items-center">
          <DeleteButton
            popUpTitle="Tem certeza que quer apagar esse SKU?"
            popUpDescription="Esse SKU será apagado para sempre. Essa ação é irreversível."
            okText="Deletar"
            onConfirm={() => handleDeleteSku()}
          />

          <UpdateButton onClick={() => setIsUpdateSkuFormOpen(true)} />
        </div>

        <div className="grid gap-y-4 mt-10">
          {sku.price && (
            <div>
              <h5 className="font-bold">Preço</h5>
              <p className="text-xl font-bold text-blue-600">
                {treatPriceInfo(sku.price)}
              </p>
            </div>
          )}

          {sku.ean && (
            <div>
              <h5 className="font-bold">EAN</h5>
              <p>{sku.ean}</p>
            </div>
          )}

          {sku.description && (
            <div>
              <h5 className="font-bold">Descrição</h5>
              <p>{sku.description}</p>
            </div>
          )}
        </div>
        <Sidebar
          title="Editar SKU"
          isOpen={isUpdateSkuFormOpen}
          onClose={() => setIsUpdateSkuFormOpen(false)}
        >
          <SkuForm
            productId={productId}
            sku={sku}
            onSubmit={() => {
              setIsUpdateSkuFormOpen(false);
              setNeedsToRefetchSku(true);
            }}
          />
        </Sidebar>
      </main>
    )
  );
};
