import { useState } from "react";
import chartConfig, { getChartOption, getChartInfos } from "./chartConfig";
import ChartComponent from "./ChartComponent";

const kindList = chartConfig.map((info) => info.kind);
const defaultChartOption =
  getChartOption("Request Processing Time", "fico-admin-route") || [];

const defaultSelectOptions = getChartInfos("Request Processing Time");

export default function GatewayChartCheck() {
  const [selectedKind, setSelectedKind] = useState<string>(
    "Request Processing Time"
  );
  const [selectedDetail, setSelectedDetail] =
    useState<string>("fico-admin-route");

  const [chartOption, setChartOption] = useState<any>(defaultChartOption);

  const [chartSelectOptions, setChartSelectOptions] =
    useState<any[]>(defaultSelectOptions);

  // 대분류 변경
  const changeKind = (event: any) => {
    const value = event.target.value;
    setSelectedDetail("");
    setSelectedKind(value);
    setChartSelectOptions(getChartInfos(value));
  };

  // 상세 변경
  const changeDetail = (event: any) => {
    const value = event.target.value;
    const chartOption = getChartOption(selectedKind, value);
    setSelectedDetail(value);
    setChartOption(chartOption);
  };

  // 차트 refresh
  const refresh = () => {
    console.log(JSON.stringify(chartOption));
  };

  return (
    <>
      <h2>Fico Gateway Test</h2>
      <div style={{ marginBottom: 10 }}>
        <select
          value={selectedKind}
          style={{ width: 200, padding: 7 }}
          onChange={changeKind}
        >
          {kindList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={selectedDetail}
          style={{ marginLeft: 10, width: 200, padding: 7 }}
          onChange={changeDetail}
        >
          <option key={""} value={""}>
            선택해주세요
          </option>
          {chartSelectOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>{" "}
        <button style={{ padding: 7 }} onClick={refresh}>
          refresh
        </button>
      </div>
      <ChartComponent />
    </>
  );
}
