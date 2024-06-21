import CreateTest from "../components/zustand/CreateTest";
import CreateStoreTest from "../components/zustand/CreateStoreTest";
import UseShallowTest from "../components/zustand/UseShallowTest";

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
    ],
  },
];

export default menu;
