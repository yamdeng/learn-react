import { ReactNode } from "react";

export const getErrorMessageByFieldState = function (
  fieldState: any
): ReactNode {
  return fieldState.error?.message ? (
    <span className="error_message">{fieldState.error?.message}</span>
  ) : null;
};
