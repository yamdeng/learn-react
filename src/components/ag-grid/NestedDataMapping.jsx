import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByManulList, getTestData } from '../../data/grid/example-data';

export default function NestedDataMapping() {
  
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByManulList(['id', 'sabun', 'name', 'addressInfo.name', 'addressInfo.zipCode', 'airlineInfo.name']);
  const [columnInfos] = useState(defaultColumnInfos);

  useEffect(() => {
    const resultData = getTestData()
    setRowData(resultData)
  }, [])

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       rowData={rowData}
       columnDefs={columnInfos}
   />
  </div>;
}
