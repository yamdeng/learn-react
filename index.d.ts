import { ChartType } from "chart.js";

declare module "chart.js" {
  interface PluginOptionsByType {
    "datasource-prometheus"?: any | null | undefined;
  }
}
