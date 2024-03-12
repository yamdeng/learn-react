import { createContext } from "react";

export const FieldListTypeContext = createContext<{ ioType: string }>({
  ioType: "I",
});
