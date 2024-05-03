import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js";
import "chartjs-adapter-date-fns";
import ChartDatasourcePrometheusPlugin from "chartjs-plugin-datasource-prometheus";

const endPoint = "http://prometheus.openlabs.io:9090";

function convertQueryFunction(sql, label) {
  return function customReq(start, end, step) {
    const url = `${endPoint}/api/v1/query_range?query=${encodeURIComponent(
      sql
    )}&start=${start.getTime() / 1000}&end=${end.getTime() / 1000}&step=${step}`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        // debugger
        response.data.result[0].metric = {name: label}
        return response["data"]
      });
  }
}

const query = "rate(spring_cloud_gateway_requests_seconds_sum{}[1m])";
const queryStringList = ['sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))', `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="user"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="iowait"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode=~".*irq"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode!='idle',mode!='user',mode!='system',mode!='iowait',mode!='irq',mode!='softirq'}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="idle"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`];

const querys = queryStringList.map((sql, index) => convertQueryFunction(sql, 'label' + (index+1)))

const start = -1 * 60 * 60 * 1000;
const end = 0; // now

export default function PlainChartTest() {
  const canvasRef = useRef();
  const canvasInstance = useRef();

  useEffect(() => {
    if (canvasRef && canvasRef.current && !canvasInstance.current) {
      canvasInstance.current = new ChartJS(canvasRef.current, {
        type: "line",
        plugins: [ChartDatasourcePrometheusPlugin],
        options: {
          animation: {
            duration: 0,
          },
          scales: {},
          plugins: {
            "datasource-prometheus": {
              findInLabelMap: (metric) => {
                return metric.labels.name;
              },
              prometheus: {
                endpoint: endPoint,
              },
              // query: ['node_load1', 'node_load5', 'node_load15'],
              query: querys,
              // query: customReq,
              timeRange: {
                type: "relative",
                start: start,
                end: end,
                step: 30,
                // msUpdateInterval: 2000,
              },
            },
          },
        },
      });
    }
  }, []);
  return (
    <div style={{width: 1000, height: 1000}}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
