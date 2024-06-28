import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestManyData
} from '../../data/grid/example-data'

export default function PaginationEvent() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestManyData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  const onPaginationChanged = params => {
    console.log(params)
  }

  // paginationAutoPageSize : pageSize 콤보박스가 있고 없고의 setting을 하는 것임
  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        paginationAutoPageSize={false}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30]}
        pagination={true}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        onPaginationChanged={onPaginationChanged}
      />
    </div>
  )
}
