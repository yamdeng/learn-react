import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

import ChartDatasourcePrometheusPlugin from "chartjs-plugin-datasource-prometheus";

const endPoint = "http://prometheus.openlabs.io:9090/";
const query = "rate(spring_cloud_gateway_requests_seconds_sum{}[1m])";
const start = -1 * 60 * 60 * 1000;
const end = 0; // now

export default function ChartComponent(props: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstance = useRef<any>(null);
  const { chartOption, width, height } = props;

  useEffect(() => {
    if (chartOption && canvasRef && canvasRef.current) {
      // 최초 생성
      if (!canvasInstance.current) {
        canvasInstance.current = new Chart(canvasRef.current, {
          type: "line",
          plugins: [ChartDatasourcePrometheusPlugin],
          options: {
            layout: {
              padding: 10,
            },
            responsive: false,
            maintainAspectRatio: false,
            animation: {
              duration: 0,
            },
            scales: {},
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                align: "start",
                fullSize: true,
              },
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
                  step: 30,
                  // msUpdateInterval: 2000,
                },
              },
            },
          },
        });
      } else {
        // 수정
        canvasInstance.current.options.plugins["datasource-prometheus"].query =
          chartOption.sql;
        canvasInstance.current.update();
      }
    }
    return () => {
      if (canvasInstance && canvasInstance.current) {
        // debugger;
        // debugger;
        // canvasInstance.current.destroy();
      }
    };
  }, [chartOption]);

  return (
    <div
      style={{
        border: "0px solid black",
        width: width ?? 320,
        height: height ?? 300,
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          border: "0px solid black",
          width: 305,
          height: 300,
        }}
      ></canvas>
    </div>
  );
}
