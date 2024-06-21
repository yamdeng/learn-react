import FirstStoreExample from "../components/zustand/FirstStoreExample";
import DocExample1 from "../components/zustand/DocExample1";
import CreateTest from "../components/zustand/CreateTest";
import CreateStoreTest from "../components/zustand/CreateStoreTest";

const menu = [
  {
    title: "Zustand-basic",
    children: [
      {
        title: "first store",
        path: "zustand/first",
        component: FirstStoreExample,
      },
      { title: "DocExample1", path: "zustand/example", component: DocExample1 },
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
