import { FunctionComponent } from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

type ButtonProps = AntdButtonProps;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <AntdButton
      type="primary"
      className={`font-bold shadow-lg text-md py-5 px-7 ${className}`}
      {...rest}
    >
      {children}
    </AntdButton>
  );
};
