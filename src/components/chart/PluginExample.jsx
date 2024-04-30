import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import ChartDatasourcePrometheusPlugin from "chartjs-plugin-datasource-prometheus";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PluginExample() {
  return (
    <div>
      <Line
        plugins={[ChartDatasourcePrometheusPlugin]}
        options={{
          responsive: false,
          plugins: {
            legend: false,
            title: {
              display: false,
              text: "Chart.js Bar Chart",
            },
            "datasource-prometheus": {
              prometheus: {
                endpoint: "https://prometheus.demo.do.prometheus.io",
                baseURL: "/api/v1", // default value
              },
              query: "sum by (job) (go_gc_duration_seconds)",
              timeRange: {
                type: "relative",
                // from 1 hours ago to now
                start: -1 * 60 * 60 * 1000,
                end: 0,
              },
            },
          },
        }}
        data={{ datasets: [] }}
      />
    </div>
  );
}
