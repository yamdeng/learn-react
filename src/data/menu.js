import FirstStoreExample from "../components/zustand/FirstStoreExample";
import DocExample1 from "../components/zustand/DocExample1";

const menu = [
  {
    title: "Zustand",
    children: [
      { title: "first store", path: "zustand/first", component: FirstStoreExample },
      { title: "DocExample1", path: "zustand/example", component: DocExample1 }
    ],
  },
];

export default menu;
