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

const endPoint = "http://prometheus.openlabs.io:9090/";
const query = "rate(spring_cloud_gateway_requests_seconds_sum{}[1m])";
const start = -1 * 60 * 60 * 1000;
const end = 0; // now

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDatasourcePrometheusPlugin
);

export default function PluginTest() {
  const options = {
    animation: {
      duration: 0,
    },
    scales: {},
    plugins: {
      "datasource-prometheus": {
        prometheus: {
          endpoint: endPoint,
        },
        // query: ['node_load1', 'node_load5', 'node_load15'],
        query: query,
        // query: customReq,
        timeRange: {
          type: "relative",
          start: start,
          end: end,
          // msUpdateInterval: 2000,
        },
      },
    },
  };
  return (
    <div>
      <Line
        plugins={[ChartDatasourcePrometheusPlugin]}
        options={options}
        data={{ datasets: [] }}
      />
    </div>
  );
}
