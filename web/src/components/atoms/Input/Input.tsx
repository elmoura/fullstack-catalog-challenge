import { Input as AntdInput, InputProps as AntdInputProps } from "antd";
import { FunctionComponent } from "react";

export type InputProps = AntdInputProps & {
  label?: string;
};

export const Input: FunctionComponent<InputProps> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <>
      <div>
        {label && <label className="font-semibold">{label}</label>}
        <AntdInput
          className={`hover:border-blue-700 active:border-blue-700 border-2 shadow-xs mt-1 ${className}`}
          {...rest}
        ></AntdInput>
      </div>
    </>
  );
};
