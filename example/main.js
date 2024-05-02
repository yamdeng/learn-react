const form = document.querySelector("form#refresh-form");
const endpointInput = document.querySelector(
  "form#refresh-form input#endpoint"
);
const queryInput = document.querySelector("form#refresh-form input#query");
const btn = document.querySelector("form#refresh-form button");
const ctx = document.querySelector("#myChart canvas").getContext("2d");

endpointInput.value = "http://prometheus.openlabs.io:9090/";

queryInput.value = 'rate(spring_cloud_gateway_requests_seconds_sum{instance=~"(192\\\\.168\\\\.87\\\\.108:18080|192\\\\.168\\\\.87\\\\.108:19080)", outcome="SUCCESSFUL", routeId=~"fico-admin-route", job=~"gateway"}[1m])'

// queryInput.value = 'rate(spring_cloud_gateway_requests_seconds_sum{}[1m])';

// queryInput.value =
//   'spring_cloud_gateway_requests_seconds_sum{instance=~"192\\\\\\\\.168\\\\\\\\.87\\\\\\\\.108:18080", routeId=~"fico-admin-route", job=~"gateway"}/spring_cloud_gateway_requests_seconds_count{instance=~"192\\\\\\\\.168\\\\\\\\.87\\\\\\\\.108:18080", routeId=~"fico-admin-route", job=~"gateway"}';
// queryInput.value = 'go_memstats_heap_objects';
// queryInput.value = 'node_load1';

// // absolute
// const start = new Date(new Date().getTime() - (60 * 60 * 1000));
// const end = new Date();

// relative
// const start = -1 * 60 * 60 * 1000; 1시간 before
const start = (-0.2) * 60 * 60 * 1000;
const end = 0; // now
// const start = 1714572370210;
// const end = 1714615570210;

const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDatasourcePrometheusPlugin],
  options: {
    animation: {
      duration: 0,
    },
    scales: {
    },
    plugins: {
      "datasource-prometheus": {
        prometheus: {
          endpoint: endpointInput.value,
        },
        // query: ['node_load1', 'node_load5', 'node_load15'],
        query: queryInput.value,
        // query: customReq,
        timeRange: {
          type: "relative",
          start: start,
          end: end,
          // msUpdateInterval: 2000,
        },
        findInLabelMap: (metrics) => {
          return metrics.labels.instance + '/' + metrics.labels.httpMethod + '/' + metrics.labels.httpStatusCode
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
