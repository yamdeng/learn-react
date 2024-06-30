import { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex } from '../../data/grid/example-data';
import PromiseData from '../../data/grid/example-data-promise';

export default function PromiseExample() {
  
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  useEffect(() => {
    // success case 1
    // PromiseData.getPromiseTestData()
    //   .then(data => {
    //     setRowData(data)
    //   })

    // success case 2
    async function asyncData() {
      const data = await PromiseData.getPromiseTestData();
      setRowData(data);
    }
    asyncData();
  }, [])


  const onGridReady = () => {
    console.log('onGridReady call');
  }

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       ref={gridRef}
       rowData={rowData}
       columnDefs={columnInfos}
       onGridReady={onGridReady}
   />
  </div>;
}
