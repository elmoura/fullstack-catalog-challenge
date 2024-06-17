import { NotePencil } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

type Props = {
  onClick: () => void;
};

export const UpdateButton: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center text-blue-600"
      onClick={onClick}
    >
      <NotePencil className="h-6 w-6" />
      <p className="font-semibold ml-1">Editar</p>
    </button>
  );
};
