import ExampleBasicFormOne from "../components/example/ExampleBasicFormOne.tsx";
import ExampleBasicFormTwo from "../components/example/ExampleBasicFormTwo.tsx";
import { Menu } from "../types/index.ts";

// ExambleFormList.tsx : example/list
// ExampleFormTable.tsx : example/table
// ExampleFormNestedTable.tsx : example/table-nested

const menu: Menu[] = [
  {
    title: "example",
    children: [
      {
        title: "ExampleBasicFormOne",
        path: "example/basic-one-column",
        component: ExampleBasicFormOne,
      },
      {
        title: "ExampleBasicFormTwo",
        path: "example/basic-two-column",
        component: ExampleBasicFormTwo,
      },
    ],
  },
];

export default menu;
