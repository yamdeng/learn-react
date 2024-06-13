import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex, getTestData } from '../../data/grid/example-data';

export default function TableHeight() {
  
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  // ** width, height div style을 따라감
  return <div className="ag-theme-quartz" style={{height: 1500}}>
    <AgGridReact
       rowData={rowData}
       columnDefs={columnInfos}
   />
  </div>;
}
