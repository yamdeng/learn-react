import ExampleBasicFormOne from "../components/example/ExampleBasicFormOne.tsx";
import ExampleBasicFormTwo from "../components/example/ExampleBasicFormTwo.tsx";
import ExampleFormList from "../components/example/ExampleFormList.tsx";
import ExampleFormTable from "../components/example/ExampleFormTable.tsx";
import ExampleFormNestedTable from "../components/example/ExampleFormNestedTable.tsx";

import ExampleMuiTest from "../components/example/mui/ExampleMuiTest.tsx";
import ExampleMuiBasicFormOne from "../components/example/mui/ExampleMuiBasicFormOne.tsx";
import ExampleMuiBasicFormTwo from "../components/example/mui/ExampleMuiBasicFormTwo.tsx";
import ExampleMuiBasicFormTable from "../components/example/mui/ExampleMuiBasicFormTable.tsx";
import ExampleMuiBasicFormNestedTable from "../components/example/mui/ExampleMuiBasicFormNestedTable.tsx";
import ExampleMuiFormModalPage from "../components/example/mui/ExampleMuiFormModalPage.tsx";

import HookFormHtml from "../components/hook-form/HookFormHtml.tsx";
import HookFormHtmlArray from "../components/hook-form/HookFormHtmlArray.tsx";
import HookFormHtmlArrayYup from "../components/hook-form/HookFormHtmlArrayYup.tsx";
import HookFormHtmlTotal from "../components/hook-form/HookFormHtmlTotal.tsx";
import HookFormHtmlYup from "../components/hook-form/HookFormHtmlYup.tsx";
import HookFormMui from "../components/hook-form/HookFormMui.tsx";
import HookFormMuiArray from "../components/hook-form/HookFormMuiArray.tsx";
import HookFormMuiArrayYup from "../components/hook-form/HookFormMuiArrayYup.tsx";
import HookFormMuiTotal from "../components/hook-form/HookFormMuiTotal.tsx";
import HookFormMuiYup from "../components/hook-form/HookFormMuiYup.tsx";

import { Menu } from "../types/index.ts";

const menu: Menu[] = [
  {
    title: "example",
    children: [
      {
        title: "ExampleBasicFormOne",
        path: "example/basic-one-column",
        component: ExampleBasicFormOne,
      },
      {
        title: "ExampleBasicFormTwo",
        path: "example/basic-two-column",
        component: ExampleBasicFormTwo,
      },
      {
        title: "ExampleFormList",
        path: "example/list",
        component: ExampleFormList,
      },
      {
        title: "ExampleFormTable",
        path: "example/table",
        component: ExampleFormTable,
      },
      {
        title: "ExampleFormNestedTable",
        path: "example/table-nested",
        component: ExampleFormNestedTable,
      },
    ],
  },
  {
    title: "example-material",
    children: [
      {
        title: "ExampleMuiTest",
        path: "example-mui/test",
        component: ExampleMuiTest,
      },
      {
        title: "ExampleMuiBasicFormOne",
        path: "example-mui/basic-one-column",
        component: ExampleMuiBasicFormOne,
      },
      {
        title: "ExampleMuiBasicFormTwo",
        path: "example-mui/basic-two-column",
        component: ExampleMuiBasicFormTwo,
      },
      {
        title: "ExampleMuiBasicFormTable",
        path: "example-mui/table",
        component: ExampleMuiBasicFormTable,
      },
      {
        title: "ExampleMuiBasicFormNestedTable",
        path: "example-mui/table-nested",
        component: ExampleMuiBasicFormNestedTable,
      },
      {
        title: "ExampleMuiFormModalPage",
        path: "example-mui/modal",
        component: ExampleMuiFormModalPage,
      },
    ],
  },
  {
    title: "hook-form",
    children: [
      {
        title: "HookFormHtml",
        path: "hook-form/html",
        component: HookFormHtml,
      },
      {
        title: "HookFormMui",
        path: "hook-form/mui",
        component: HookFormMui,
      },
      {
        title: "HookFormHtmlYup",
        path: "hook-form/html-yup",
        component: HookFormHtmlYup,
      },
      {
        title: "HookFormMuiYup",
        path: "hook-form/mui-yup",
        component: HookFormMuiYup,
      },
      {
        title: "HookFormHtmlArray",
        path: "hook-form/html-array",
        component: HookFormHtmlArray,
      },
      {
        title: "HookFormMuiArray",
        path: "hook-form/html-mui",
        component: HookFormMuiArray,
      },
      {
        title: "HookFormHtmlArrayYup",
        path: "hook-form/html-array-yup",
        component: HookFormHtmlArrayYup,
      },
      {
        title: "HookFormMuiArrayYup",
        path: "hook-form/mui-array-yup",
        component: HookFormMuiArrayYup,
      },
      {
        title: "HookFormHtmlTotal",
        path: "hook-form/html-total",
        component: HookFormHtmlTotal,
      },
      {
        title: "HookFormMuiTotal",
        path: "hook-form/mui-total",
        component: HookFormMuiTotal,
      },
    ],
  },
];

export default menu;
