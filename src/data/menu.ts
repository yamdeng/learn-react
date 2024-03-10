import ExampleBasicFormOne from "../components/example/ExampleBasicFormOne.tsx";
import ExampleBasicFormTwo from "../components/example/ExampleBasicFormTwo.tsx";
import ExambleFormList from "../components/example/ExambleFormList.tsx";
import ExampleFormTable from "../components/example/ExampleFormTable.tsx";
import ExampleFormNestedTable from "../components/example/ExampleFormNestedTable.tsx";

import ExampleMuiTest from "../components/example/mui/ExampleMuiTest.tsx";
import { Menu } from "../types/index.ts";

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
      {
        title: "ExambleFormList",
        path: "example/list",
        component: ExambleFormList,
      },
      {
        title: "ExampleFormTable",
        path: "example/table",
        component: ExampleFormTable,
      },
      {
        title: "ExampleFormNestedTable",
        path: "example/table-nested",
        component: ExampleFormNestedTable,
      },
    ],
  },
  {
    title: "example-material",
    children: [
      {
        title: "ExampleMuiTest",
        path: "example-mui/test",
        component: ExampleMuiTest,
      },
    ],
  },
];

export default menu;
