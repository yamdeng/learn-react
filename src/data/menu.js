import Box from "../components/example/Box";
import Grid from "../components/example/Grid";

const menu = [
  {
    title: "Container",
    children: [
      { title: "Box", path: "layout/box", component: Box },
      { title: "Grid", path: "layout/grid", component: Grid },
    ],
  },
];

export default menu;
