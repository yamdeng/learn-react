import Box from "../components/example/Box";
import Box2 from "../components/example/Box2";
import Box3 from "../components/example/Box3";
import Box4 from "../components/example/Box4";
import Grid from "../components/example/Grid";

const menu = [
  {
    title: "Container",
    children: [
      { title: "Box", path: "layout/box", component: Box },
      { title: "Box2", path: "layout/box2", component: Box2 },
      { title: "Box3", path: "layout/box3", component: Box3 },
      { title: "Box4", path: "layout/box4", component: Box4 },
      { title: "Grid", path: "layout/grid", component: Grid },
    ],
  },
];

export default menu;
