// import { useEffect, useRef } from "react";

export default function GatewayChartCheck() {
  return (
    <>
      <h2>Fico Gateway Test</h2>
      <div style={{ marginBottom: 10 }}>
        <select name="job" id="job" style={{ width: 200, padding: 7 }}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select
          name="job2"
          id="job2"
          style={{ marginLeft: 10, width: 200, padding: 7 }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>{" "}
        <button style={{ padding: 7 }}>refresh</button>
      </div>
      <div style={{ border: "1px solid black", width: 700, height: 700 }}></div>
    </>
  );
}
