import React from "react";
import { Input } from "@material-ui/core";
import MaterialUiPasswordInput from "material-ui-password-field";

export const StandartInput = ({ field, ...props }: any) => {
  return <Input {...field} {...props} />;
};

export const PasswordInput = ({ field, ...props }: any) => {
  return <MaterialUiPasswordInput {...field} {...props} />;
};
