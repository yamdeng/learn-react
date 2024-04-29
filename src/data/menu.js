import PolarAreaTest from "../components/chart/PolarAreaTest";
import PluginTest from "../components/chart/PluginTest";
import PlainChartTest from "../components/chart/PlainChartTest";

const menu = [
  {
    title: "Chart",
    children: [
      {
        title: "PolarAreaTest",
        path: "chart/polar-test",
        component: PolarAreaTest,
      },
      { title: "PluginTest", path: "chart/plugin-test", component: PluginTest },
      {
        title: "PlainChartTest",
        path: "chart/plain-chart",
        component: PlainChartTest,
      },
    ],
  },
];

export default menu;
