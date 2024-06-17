import { Divider as AntDivider } from "antd";
import { FunctionComponent } from "react";

type Props = {
  className?: string;
};

export const Divider: FunctionComponent<Props> = ({ className }) => {
  return <AntDivider className={`bg-gray-200 ${className}`} />;
};
