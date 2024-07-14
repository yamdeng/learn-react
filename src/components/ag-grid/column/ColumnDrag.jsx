import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../../data/grid/example-data'

export default function ColumnDrag() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const [columnInfos] = useState(defaultColumnInfos)

  const onColumnMoved = params => {
    console.log('Column moved', params)
    // 여기에 컬럼 이동 후의 로직을 추가하세요.
  }

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        onColumnMoved={onColumnMoved}
        suppressMovableColumns={true}
      />
    </div>
  )
}
