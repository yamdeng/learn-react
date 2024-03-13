import SingleTarget from "../components/drag/single-target/SingleTarget";
import CopyOrMove from "../components/drag/copy/CopyOrMove";
import CustomDragLayer from "../components/drag/custom-drag-layer/CustomDragLayer";
import DropEffect from "../components/drag/drop-effect/DropEffect";
import FileDrag from "../components/drag/file-drag/FileDrag";
import HtmlDrag from "../components/drag/html-drag/HtmlDrag";
import WithIframe from "../components/drag/iframe/WithIframe";
import MultipleTarget from "../components/drag/multiple-target/MultipleTarget";
import Native from "../components/drag/native/Native";
import NestDragSource from "../components/drag/nest-drag-source/NestDragSource";
import NestDragTarget from "../components/drag/nest-drag-target/NestDragTarget";
import Preview from "../components/drag/preview/Preview";
import Tutorial from "../components/drag/tutorial/Tutorial";
import SortBasic from "../components/drag/sort-basic/SortBasic";
import SortCancel from "../components/drag/sort-cancel/SortCancel";
import SortStress from "../components/drag/sort-stress/SortStress";
import StressTest from "../components/drag/stress-test/StressTest";
import ExampleHtmlTable from "../components/example/ExampleHtmlTable.tsx";
import ExampleMuiTable from "../components/example/ExampleMuiTable.tsx";
import DndHtmlOneTableSort from "../components/custom/DndHtmlOneTableSort.tsx";
import DndHtmlTwoTableSortDrop from "../components/custom/DndHtmlTwoTableSortDrop.tsx";
import DndMuiOneTableSort from "../components/custom/DndMuiOneTableSort.tsx";
import DndMuiTwoTableSortDrop from "../components/custom/DndMuiTwoTableSortDrop.tsx";
import DndHtmlMetaDrop from "../components/custom/DndHtmlMetaDrop.tsx";
import DndMuiMetaDrop from "../components/custom/DndMuiMetaDrop.tsx";
import DndHtmlNestedFinal from "../components/custom/DndHtmlNestedFinal.tsx";
import DndMuiNestedFinal from "../components/custom/DndMuiNestedFinal.tsx";

import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "Basic",
    children: [
      {
        title: "SingleTarget",
        path: "darg/single-target",
        component: SingleTarget,
      },
      {
        title: "CopyOrMove",
        path: "darg/copy",
        component: CopyOrMove,
      },
      {
        title: "StressTest",
        path: "darg/stress-test",
        component: StressTest,
      },
      {
        title: "DropEffect",
        path: "darg/drop-effect",
        component: DropEffect,
      },
      {
        title: "FileDrag",
        path: "darg/file-drag",
        component: FileDrag,
      },
      {
        title: "HtmlDrag",
        path: "darg/html-drag",
        component: HtmlDrag,
      },
      {
        title: "WithIframe",
        path: "darg/iframe",
        component: WithIframe,
      },
    ],
  },
  {
    title: "LevelUp",
    children: [
      {
        title: "MultipleTarget",
        path: "darg/multiple-target",
        component: MultipleTarget,
      },
      {
        title: "Native",
        path: "darg/native",
        component: Native,
      },
      {
        title: "CustomDragLayer",
        path: "darg/custom-drag-layer",
        component: CustomDragLayer,
      },
      {
        title: "NestDragSource",
        path: "darg/nest-drag-source",
        component: NestDragSource,
      },
      {
        title: "NestDragTarget",
        path: "darg/nest-drag-target",
        component: NestDragTarget,
      },
      {
        title: "Preview",
        path: "darg/preview",
        component: Preview,
      },
      {
        title: "SortBasic",
        path: "darg/sort-basic",
        component: SortBasic,
      },
      {
        title: "SortCancel",
        path: "darg/sort-cancel",
        component: SortCancel,
      },
      {
        title: "SortStress",
        path: "darg/sort-stress",
        component: SortStress,
      },
      {
        title: "Tutorial",
        path: "darg/tutorial",
        component: Tutorial,
      },
    ],
  },
  {
    title: "Example",
    children: [
      {
        title: "html-table",
        path: "example/html-table",
        component: ExampleHtmlTable,
      },
      {
        title: "mui-table",
        path: "example/mui-table",
        component: ExampleMuiTable,
      },
    ],
  },
  {
    title: "Custom",
    children: [
      {
        title: "html-one-table-sort",
        path: "custom/html-one-table-sort",
        component: DndHtmlOneTableSort,
      },
      {
        title: "html-two-table-sort",
        path: "custom/html-two-table-sort",
        component: DndHtmlTwoTableSortDrop,
      },
      {
        title: "mui-one-table-sort",
        path: "custom/mui-one-table-sort",
        component: DndMuiOneTableSort,
      },
      {
        title: "mui-two-table-sort",
        path: "custom/mui-two-table-sort",
        component: DndMuiTwoTableSortDrop,
      },
      {
        title: "html-meta-drop",
        path: "custom/html-meta-drop",
        component: DndHtmlMetaDrop,
      },
      {
        title: "mui-meta-drop",
        path: "custom/mui-meta-drop",
        component: DndMuiMetaDrop,
      },

      {
        title: "html-nested-dnd",
        path: "custom/html-nested-dnd",
        component: DndHtmlNestedFinal,
      },
      {
        title: "mui-nested-dnd",
        path: "custom/mui-nested-dnd",
        component: DndMuiNestedFinal,
      },
    ],
  },
];

export default menu;
