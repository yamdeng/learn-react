import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import ChartDatasourcePrometheusPlugin from "chartjs-plugin-datasource-prometheus";

const endPoint = "http://prometheus.openlabs.io:9090/";
const query = "rate(spring_cloud_gateway_requests_seconds_sum{}[1m])";
const start = -1 * 60 * 60 * 1000;
const end = 0; // now

export default function PlainChartTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstance = useRef<any>(null);

  useEffect(() => {
    if (canvasRef && canvasRef.current && !canvasInstance.current) {
      canvasInstance.current = new Chart(canvasRef.current, {
        type: "line",
        plugins: [ChartDatasourcePrometheusPlugin],
        options: {
          animation: {
            duration: 0,
          },
          scales: {},
          plugins: {
            legend: {
              position: "bottom",
              title: {
                display: true,
                text: "Number of Days",
                font: {
                  size: 14,
                  weight: "bold",
                },
                padding: 20,
                color: "green",
              },
            },
            "datasource-prometheus": {
              findInLabelMap: (metric: any) => {
                return "ccc";
              },
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
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
