import { Drawer } from "antd";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  title?: string;
  onClose?: () => void;
  isOpen?: boolean;
  children: ReactNode;
};

export const Sidebar: FunctionComponent<Props> = ({
  title,
  isOpen = false,
  onClose,
  children,
}) => {
  return (
    <Drawer title={title} open={isOpen} onClose={onClose}>
      {children}
    </Drawer>
  );
};
