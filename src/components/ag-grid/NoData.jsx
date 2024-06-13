import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex } from '../../data/grid/example-data';

export default function NoData() {
  
  const [rowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       rowData={rowData}
       columnDefs={columnInfos}
       overlayNoRowsTemplate='No Data Korean Air Table'
   />
  </div>;
}
