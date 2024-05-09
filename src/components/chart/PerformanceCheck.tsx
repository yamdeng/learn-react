import { useState } from "react";
import chartConfig, { getChartInfos } from "./performenceConfig";
import ChartComponent from "./ChartComponent";

const kindList = chartConfig.map((info) => info.kind);

export default function PerformanceCheck() {
  const [selectedKind, setSelectedKind] = useState<string>("");

  const [chartList, setChartList] = useState<any[]>([]);

  // 대분류 변경
  const changeKind = (event: any) => {
    const value = event.target.value;
    setSelectedKind(value);
  };

  // 차트 refresh
  const refresh = () => {
    setChartList(getChartInfos(selectedKind));
  };

  return (
    <>
      <h2>PerformanceCheck Test</h2>
      <div style={{ marginBottom: 10 }}>
        <select
          value={selectedKind}
          style={{ width: 200, padding: 7 }}
          onChange={changeKind}
        >
          <option key={""} value={""}>
            선택해주세요
          </option>
          {kindList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button style={{ padding: 7 }} onClick={refresh}>
          refresh
        </button>
      </div>
      {chartList.map((chartOption) => {
        return (
          <ChartComponent chartOption={chartOption} width={250} height={250} />
        );
      })}
    </>
  );
}
