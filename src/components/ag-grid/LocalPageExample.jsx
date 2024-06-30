import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getPageData
} from '../../data/grid/example-data'

export default function LocalPageExample() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    const data = getPageData(7, 10)
    setRowData(data)
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
      />
    </div>
  )
}
