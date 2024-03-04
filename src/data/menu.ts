import Box from "../components/example/Box.tsx";
import Grid from "../components/example/Grid.tsx";
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
    ],
  },
];

export default menu;
