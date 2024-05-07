/* Request Processing Time */
// fico-admin-route
const RPTficoAdminRouteSQL =
  'spring_cloud_gateway_requests_seconds_sum{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", routeId=~"fico-admin-route", job=~"gateway"}/spring_cloud_gateway_requests_seconds_count{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", routeId=~"fico-admin-route", job=~"gateway"}';

// fico-admin-swagger-config-route
const RPTficoAdminSwaggerConfigRouteSQL =
  'spring_cloud_gateway_requests_seconds_sum{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", routeId=~"fico-admin-swagger-config-route", job=~"gateway"}/spring_cloud_gateway_requests_seconds_count{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", routeId=~"fico-admin-swagger-config-route", job=~"gateway"}';

/* Successful API Calls */
// fico-admin
const SACficoAdminRoute =
  'rate(spring_cloud_gateway_requests_seconds_sum{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", outcome="SUCCESSFUL", routeId=~"fico-admin-route", job=~"gateway"}[1m])';

// fico-app-example-swagger-route
const SACficoAppExampleSwaggerRoute =
  'rate(spring_cloud_gateway_requests_seconds_sum{instance=~"(192.168.87.108:18080|192.168.87.108:19080)", outcome!="SUCCESSFUL", routeId=~"fico-app-example-swagger-route", job=~"gateway"}[1m])';

const chartConfig = [
  {
    kind: "Request Processing Time",
    chartInfos: [
      {
        name: "fico-admin-route",
        sql: [RPTficoAdminRouteSQL],
      },
      {
        name: "fico-admin-swagger-config-route",
        sql: [RPTficoAdminSwaggerConfigRouteSQL],
      },
    ],
  },
  {
    kind: "Successful API Calls",
    sqlInfos: [
      {
        name: "fico-admin-route",
        sql: [SACficoAdminRoute],
      },
      {
        name: "fico-admin-route",
        sql: [SACficoAppExampleSwaggerRoute],
      },
    ],
  },
];

export default chartConfig;
