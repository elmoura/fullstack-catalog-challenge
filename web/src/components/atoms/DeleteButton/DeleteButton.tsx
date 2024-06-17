import { PopConfirm } from "@components/atoms/PopConfirm";
import { Trash } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

type Props = {
  popUpTitle: string;
  popUpDescription?: string;
  okText: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const DeleteButton: FunctionComponent<Props> = ({
  popUpTitle,
  popUpDescription,
  ...rest
}) => {
  return (
    <PopConfirm title={popUpTitle} description={popUpDescription} {...rest}>
      <button className="flex w-fit items-center justify-center text-blue-600">
        <Trash className="w-6 h-6" />
        <p className="font-semibold ml-1">Deletar</p>
      </button>
    </PopConfirm>
  );
};
