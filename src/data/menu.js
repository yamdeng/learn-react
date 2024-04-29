import PolarAreaTest from "../components/chart/PolarAreaTest";
import PluginTest from "../components/chart/PluginTest";

const menu = [
  {
    title: "Chart",
    children: [
      { title: "PolarAreaTest", path: "chart/polar-test", component: PolarAreaTest },
      { title: "PluginTest", path: "chart/plugin-test", component: PluginTest },
    ],
  },
];

export default menu;
