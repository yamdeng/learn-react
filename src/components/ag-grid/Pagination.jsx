import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import { getAgGridColumnListByListIndex, getTestData } from '../../data/grid/example-data'

export default function Pagination() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  // paginationAutoPageSize : pageSize 콤보박스가 있고 없고의 setting을 하는 것임
  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        paginationAutoPageSize={true}
        pagination={true}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
      />
    </div>
  )
}
