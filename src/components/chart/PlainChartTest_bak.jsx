import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js";
import "chartjs-adapter-date-fns";
import ChartDatasourcePrometheusPlugin from "chartjs-plugin-datasource-prometheus";

const endPoint = "http://prometheus.openlabs.io:9090/";
const query = "rate(spring_cloud_gateway_requests_seconds_sum{}[1m])";
const querys = ['sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))', `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="user"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="iowait"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode=~".*irq"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode!='idle',mode!='user',mode!='system',mode!='iowait',mode!='irq',mode!='softirq'}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="idle"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`];

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
            legend: {
              labels: {
                generateLabels: (chart) => {
                  return [{text: 'aaa1', datasetIndex: 0}, {text: 'bbb', datasetIndex: 1}, {text: 'ccc', datasetIndex: 2}, {text: 'ddd', datasetIndex: 3}, {text: 'eee', datasetIndex: 4}, {text: 'fff', datasetIndex: 5}, {text: 'ggg3', datasetIndex: 6}]
                }
              },
              onClick: (e, legendItem, legend) => {
                // alert('aaa')
                const index = legendItem.datasetIndex;
                const ci = legend.chart;
                if (ci.isDatasetVisible(index)) {
                    ci.hide(index);
                    legendItem.hidden = true;
                } else {
                    ci.show(index);
                    legendItem.hidden = false;
                }
              }
            },
            "datasource-prometheus": {
              findInLabelMap2: (metric) => {
                return "ccc";
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
