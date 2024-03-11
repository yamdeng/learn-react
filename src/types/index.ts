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

export type BasicInfo = {
  id: string;
  name: string;
  age: number | null;
  email: string;
  password: string;
  "confirm-password": string;
  sex?: string;
  job?: string;
  useAlarm: boolean;
  description?: string;
  inputList?: any;
};

export type NestedFormInfo = {
  name: string;
  length: number | null;
  dataType: string;
  requireYn: string;
  description?: string | undefined;
  checkedAlarm: boolean;
};

export type ArrayInfo = {
  id: string;
  name: string;
  age: number | null;
  email: string;
  inputList: NestedFormInfo[];
};

export type FinalFormInput = {
  name: string;
  email: string;
};
