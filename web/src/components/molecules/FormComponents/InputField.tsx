/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, InputProps } from "@components/atoms/Input";
import { FunctionComponent } from "react";
import { Controller, ControllerProps } from "react-hook-form";

type InputFieldProps = InputProps & {
  controllerProps: Omit<ControllerProps<any>, "render">;
};

export const InputField: FunctionComponent<InputFieldProps> = ({
  controllerProps,
  ...inputProps
}) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <Input {...inputProps} {...{ ...field, ref: null }} />
      )}
    />
  );
};
