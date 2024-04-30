import PolarAreaTest from "../components/chart/PolarAreaTest";
import PluginTest from "../components/chart/PluginTest";
import PluginExample from "../components/chart/PluginExample";
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
        title: "PluginExample",
        path: "chart/plugin-example",
        component: PluginExample,
      },
      {
        title: "PlainChartTest",
        path: "chart/plain-chart",
        component: PlainChartTest,
      },
    ],
  },
];

export default menu;
