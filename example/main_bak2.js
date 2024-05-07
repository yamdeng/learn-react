const form = document.querySelector("form#refresh-form");
const endpointInput = document.querySelector(
  "form#refresh-form input#endpoint"
);
const queryInput = document.querySelector("form#refresh-form input#query");
const btn = document.querySelector("form#refresh-form button");
const ctx = document.querySelector("#myChart canvas").getContext("2d");

endpointInput.value = "http://prometheus.openlabs.io:9090/";

queryInput.value = `100 - ((node_filesystem_avail_bytes{instance=~"192\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.168\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.87\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.106:9100", job=~"node",device!~'rootfs'} * 100) / node_filesystem_size_bytes{instance=~"192\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.168\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.87\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\.106:9100", job=~"node",device!~'rootfs'})`;

// queryInput.value = 'rate(spring_cloud_gateway_requests_seconds_sum{}[1m])';
// queryInput.value = 'go_memstats_heap_objects';
// queryInput.value = 'node_load1';

// // absolute
// const start = new Date(new Date().getTime() - (60 * 60 * 1000));
// const end = new Date();

// relative
const start = -1 * 60 * 60 * 1000; // 1시간 before
// const start = -48 * 60 * 60 * 1000; // 2day before
const end = 0; // now
// const start = 1714572370210;
// const end = 1714615570210;

console.log('222')

const query1 = 'irate(node_network_receive_bytes_total{instance=~"192\\\\\\\\.168\\\\\\\\.87\\\\\\\\.108:9100", job=~"node"}[1m0s])*8'
const query2 = 'irate(node_network_transmit_bytes_total{instance=~"192\\\\\\\\.168\\\\\\\\.87\\\\\\\\.108:9100", job=~"node"}[1m0s])*8'

const querys = ['sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))', `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="user"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="iowait"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode=~".*irq"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode!='idle',mode!='user',mode!='system',mode!='iowait',mode!='irq',mode!='softirq'}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="idle"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`, `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`]
// const querys = ['sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="system"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))', `sum by(instance) (irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node", mode="user"}[1m0s])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=~"192\\\\.168\\\\.87\\\\.108:9100", job=~"node"}[1m0s])))`]

// false, true, "before", "middle" or "after"

const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDatasourcePrometheusPlugin],
  options: {
    legend : {
      display: false
    },
    animation: {
      duration: 0,
    },
    scales: {
      // x: {
      //   afterTickToLabelConversion: function (scaleInstance) {
      //     const ticks = scaleInstance.ticks;
      //     ticks.offsetAfterAutoskip = true;

      //     // const newTicks = ticks.map((tick) => {
      //     //   return {
      //     //     // 원본 x축 값을 이용하여 각 x축 값들이 어떻게 표시될지 수정할 수 있습니다.
      //     //   };
      //     // });
  
      //     scaleInstance.ticks = ticks;
      //     // scaleInstance.ticks에 새로운 ticks를 재할당해줘야 적용이 됩니다!
      //   },
  
      // }
      // y: [
      //     {title: 'aaa1'},
      //     {title: 'aaa2'},
      //     {title: 'aaa3'},
      //     {title: 'aaa4'},
      //     {title: 'aaa5'},
      //     {title: 'aaa6'},
      //     {title: 'aaa7'},
      // ]
    },
    plugins: {
      legend : {
        display: true,
        labels: {
          generateLabels: (chart) => {
            return [{text: 'aaa1', datasetIndex: 0}, {text: 'bbb', datasetIndex: 1}, {text: 'ccc', datasetIndex: 2}, {text: 'ddd', datasetIndex: 3}, {text: 'eee', datasetIndex: 4}, {text: 'fff', datasetIndex: 5}, {text: 'ggg3', datasetIndex: 6}]
          }
        },
        onClick: (e, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          debugger
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
        prometheus: {
          endpoint: endpointInput.value,
        },
        query: querys,
        // query: [query1, query2],
        // query: queryInput.value,
        // query: customReq,
        timeRange: {
          type: "relative",
          start: start,
          end: end,
          step: 15,
          // msUpdateInterval: 2000,
        },
        fillGaps: false,
        findInLabelMap2: (metrics) => {
          return 'kkk'
        },
        dataSetHook3: (beforeDataSets) => {
          beforeDataSets[0].label = '111'
          beforeDataSets[1].label = '222'
          beforeDataSets[2].label = '333'
          beforeDataSets[3].label = '444'
          beforeDataSets[4].label = '555'
          beforeDataSets[5].label = '666'
          beforeDataSets[6].label = '777'
          return beforeDataSets
        }
      },
    },    
  },
});

function customReq(start, end, step) {
  const url = `https://prometheus.demo.do.prometheus.io/api/v1/query_range?query=${encodeURIComponent(
    queryInput.value
  )}&start=${start.getTime() / 1000}&end=${end.getTime() / 1000}&step=${step}`;
  const proxiedUrl = `https://cors-anywhere-chartjs-demo.herokuapp.com/${url}`;
  return fetch(proxiedUrl)
    .then((response) => response.json())
    .then((response) => response["data"]);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  myChart.options.plugins["datasource-prometheus"].prometheus.endpoint =
    endpointInput.value;
  myChart.options.plugins["datasource-prometheus"].query = queryInput.value;
  myChart.update();
});
