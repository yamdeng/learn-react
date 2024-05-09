import MuiTable from "../components/mui/MuiTable.tsx";
import MuiFormController from "../components/mui/MuiFormController.tsx";
import MuiAutoComplete from "../components/mui/MuiAutoComplete.tsx";
import MuiAutoCompletemMultiple from "../components/mui/MuiAutoCompletemMultiple.tsx";
import MuiAccordion from "../components/mui/MuiAccordion.tsx";
import MuiGridBasic from "../components/mui/MuiGridBasic.tsx";
import MuiGridBasicAdvance from "../components/mui/MuiGridBasicAdvance.tsx";
import MuiAccordionWithGrid from "../components/mui/MuiAccordionWithGrid.tsx";
// ** chart 화면
import PlainChartTest from "../components/chart/PlainChartTest.tsx";
import GatewayChartCheck from "../components/chart/GatewayChartCheck.tsx";
import PerformanceCheck from "../components/chart/PerformanceCheck.tsx";
import MuiAccordionWithChart from "../components/chart/MuiAccordionWithChart.tsx";
import MuiSelectMultiple from "../components/mui/MuiSelectMultiple.tsx";
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
      {
        title: "MuiSelectMultiple",
        path: "basic/select-multiple",
        component: MuiSelectMultiple,
      },
    ],
  },
  {
    title: "Chart",
    children: [
      {
        title: "PlainChartTest",
        path: "layout/chart",
        component: PlainChartTest,
      },
      {
        title: "GatewayChartCheck",
        path: "chart/fico-gateway",
        component: GatewayChartCheck,
      },
      {
        title: "PerformanceCheck",
        path: "chart/performance",
        component: PerformanceCheck,
      },
      {
        title: "MuiAccordionWithChart",
        path: "chart/MuiAccordionWithChart",
        component: MuiAccordionWithChart,
      },
    ],
  },
];

export default menu;
