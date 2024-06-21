import CreateTest from "../components/zustand/CreateTest";
import CreateStoreTest from "../components/zustand/CreateStoreTest";
import CreateStoreTest2 from "../components/zustand/CreateStoreTest2";
import UseShallowTest from "../components/zustand/UseShallowTest";
import MergeTest from "../components/zustand/MergeTest";
import MultipleStoreTest from "../components/zustand/MultipleStoreTest";

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
        title: "CreateStoreTest2",
        path: "zustand/createStoreManual",
        component: CreateStoreTest2,
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
      {
        title: "MultipleStoreTest",
        path: "zustand/multiple-store",
        component: MultipleStoreTest,
      },
    ],
  },
];

export default menu;
