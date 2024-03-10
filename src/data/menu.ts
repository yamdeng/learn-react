import ExampleBasicFormOne from "../components/example/ExampleBasicFormOne.tsx";
import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "example",
    children: [
      {
        title: "BasicFormExample",
        path: "example/basic-one-column",
        component: ExampleBasicFormOne,
      },
    ],
  },
];

export default menu;
