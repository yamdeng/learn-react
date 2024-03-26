import MuiTable from "../components/mui/MuiTable.tsx";
import MuiFormController from "../components/mui/MuiFormController.tsx";
import MuiAutoComplete from "../components/mui/MuiAutoComplete.tsx";
import MuiAutoCompletemMultiple from "../components/mui/MuiAutoCompletemMultiple.tsx"
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
      {
        title: "MuiAutoComplete",
        path: "basic/auto-complete",
        component: MuiAutoComplete,
      },
      {
        title: "MuiAutoCompletemMultiple",
        path: "basic/auto-complete-multiple",
        component: MuiAutoCompletemMultiple,
      },
    ],
  },
];

export default menu;
