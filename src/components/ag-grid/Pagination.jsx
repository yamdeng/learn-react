import { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex, getTestData } from '../../data/grid/example-data';

export default function Pagination() {
  
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call');
  }

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       ref={gridRef}
       paginationAutoPageSize={true}
       pagination={true}
       rowData={rowData}
       columnDefs={columnInfos}
       onGridReady={onGridReady}
   />
  </div>;
}
