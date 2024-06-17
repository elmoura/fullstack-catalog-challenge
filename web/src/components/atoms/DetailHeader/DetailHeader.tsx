import { FunctionComponent } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  code: string;
};

export const DetailHeader: FunctionComponent<Props> = ({ name, code }) => {
  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate(-1);
  };

  return (
    <header className="flex items-center mt-1">
      <ArrowLeft
        role="button"
        onClick={() => handleBackArrowClick()}
        className="w-6 h-6"
      />
      <div className="pl-6">
        <h2 className="text-3xl font-bold mt-4">{name}</h2>
        <p className="italic font-semibold text-gray-700">Codigo: {code}</p>
      </div>
    </header>
  );
};
