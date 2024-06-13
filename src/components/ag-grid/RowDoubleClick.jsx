import { useState, useEffect, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex, getTestData } from '../../data/grid/example-data';

export default function RowDoubleClick() {
  
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    console.log(selectedRows)
  }, []);

  const onRowDoubleClicked = (event) => {
    // event.data
    console.log(event.data);
  };

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       ref={gridRef}
       rowData={rowData}
       columnDefs={columnInfos}
       rowSelection={"multiple"}
       rowMultiSelectWithClick={true}
       onSelectionChanged={onSelectionChanged}
       onRowDoubleClicked={onRowDoubleClicked}
   />
  </div>;
}
