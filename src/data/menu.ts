import MuiTable from "../components/mui/MuiTable.tsx";
import MuiFormController from "../components/mui/MuiFormController.tsx";
import MuiAutoComplete from "../components/mui/MuiAutoComplete.tsx";
import MuiAutoCompletemMultiple from "../components/mui/MuiAutoCompletemMultiple.tsx";
import MuiAccordion from "../components/mui/MuiAccordion.tsx";
import MuiGridBasic from "../components/mui/MuiGridBasic.tsx";
import MuiGridBasicAdvance from "../components/mui/MuiGridBasicAdvance.tsx";
import MuiAccordionWithGrid from "../components/mui/MuiAccordionWithGrid.tsx";
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
      {
        title: "MuiAccordion",
        path: "basic/accordion",
        component: MuiAccordion,
      },
      {
        title: "MuiGridBasic",
        path: "basic/grid-basic",
        component: MuiGridBasic,
      },
      {
        title: "MuiGridBasicAdvance",
        path: "basic/grid-advance",
        component: MuiGridBasicAdvance,
      },
      {
        title: "MuiAccordionWithGrid",
        path: "basic/accordion-with-grid",
        component: MuiAccordionWithGrid,
      },
    ],
  },
];

export default menu;
