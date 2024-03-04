import { ReactNode, FunctionComponent, ReactElement, JSX } from "react";

export interface MenuChild {
  title: string;
  path: string;
  component:
    | ReactNode
    | FunctionComponent
    | ReactElement
    | JSX.Element
    | (() => JSX.Element);
}

export interface Menu {
  title: string;
  children: MenuChild[];
}
