import BasicFormExample from "../components/example/BasicFormExample.tsx";
import ListFormExample from "../components/example/ListFormExample.tsx";
import TableFormExample from "../components/example/TableFormExample.tsx";
import NestedTableFormExample from "../components/example/NestedTableFormExample.tsx";
import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "example",
    children: [
      {
        title: "BasicFormExample",
        path: "example/basic",
        component: BasicFormExample,
      },
      {
        title: "ListFormExample",
        path: "example/list",
        component: ListFormExample,
      },
      {
        title: "TableFormExample",
        path: "example/table",
        component: TableFormExample,
      },
      {
        title: "NestedTableFormExample",
        path: "example/nested-table",
        component: NestedTableFormExample,
      },
    ],
  },
];

export default menu;
