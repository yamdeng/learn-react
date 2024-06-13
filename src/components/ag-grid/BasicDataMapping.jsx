import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex, getTestData } from '../../data/grid/example-data';

export default function BasicDataMapping() {
  
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       rowData={rowData}
       columnDefs={columnInfos}
   />
  </div>;
}
