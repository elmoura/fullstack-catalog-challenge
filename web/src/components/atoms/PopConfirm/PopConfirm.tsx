import { FunctionComponent } from "react";
import {
  Popconfirm as AntDPopConfirm,
  PopconfirmProps as AntdPopconfirmProps,
} from "antd";

export type PopConfirmProps = AntdPopconfirmProps;

export const PopConfirm: FunctionComponent<PopConfirmProps> = ({
  children,
  ...rest
}) => {
  return (
    <AntDPopConfirm {...rest} overlayInnerStyle={{}} placement="bottomLeft">
      {children}
    </AntDPopConfirm>
  );
};
