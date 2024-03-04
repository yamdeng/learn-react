import MuiTable from "../components/mui/MuiTable.tsx";
import MuiFormController from "../components/mui/MuiFormController.tsx";
import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "Basic",
    children: [
      {
        title: "MuiTable",
        path: "basic/table",
        component: MuiTable,
      },
      {
        title: "MuiFormController",
        path: "basic/form",
        component: MuiFormController,
      },
    ],
  },
];

export default menu;
