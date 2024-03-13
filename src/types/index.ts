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

export interface BasicRowInfo {
  id: string;
  depth: number;
  category: string;
  type: string;
  name: string;
}

export interface DragBasicRowInfo extends BasicRowInfo {}
