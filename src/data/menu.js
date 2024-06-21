import CreateTest from "../components/zustand/CreateTest";
import CreateStoreTest from "../components/zustand/CreateStoreTest";
import UseShallowTest from "../components/zustand/UseShallowTest";
import MergeTest from "../components/zustand/MergeTest";

const menu = [
  {
    title: "Zustand-basic",
    children: [
      { title: "CreateTest", path: "zustand/create", component: CreateTest },
      {
        title: "CreateStoreTest",
        path: "zustand/createStore",
        component: CreateStoreTest,
      },
      {
        title: "UseShallowTest",
        path: "zustand/shallow",
        component: UseShallowTest,
      },
      {
        title: "MergeTest",
        path: "zustand/merge",
        component: MergeTest,
      },
    ],
  },
];

export default menu;
