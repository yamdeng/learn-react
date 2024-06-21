import CreateTest from "../components/zustand/CreateTest";
import CreateStoreTest from "../components/zustand/CreateStoreTest";

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
    ],
  },
];

export default menu;
