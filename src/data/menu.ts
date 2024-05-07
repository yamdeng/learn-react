import Box from "../components/example/Box.tsx";
import Grid from "../components/example/Grid.tsx";
import PlainChartTest from "../components/chart/PlainChartTest.tsx";
import GatewayChartCheck from "../components/chart/GatewayChartCheck.tsx";
import PerformanceCheck from "../components/chart/PerformanceCheck.tsx";
import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "Container",
    children: [
      {
        title: "Box",
        path: "layout/box",
        component: Box,
      },
      { title: "Grid", path: "layout/grid", component: Grid },
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
    ],
  },
];

export default menu;
