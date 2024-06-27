import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../data/grid/example-data'
import common from '../../utils/common'

export default function RowSpan() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  defaultColumnInfos[2].rowSpan = params => {
    const rowspanCount = params.data.rowSpanGroupCount
      ? params.data.rowSpanGroupCount
      : 1
    return rowspanCount
  }
  defaultColumnInfos[2].cellClassRules = {
    'cell-span': params =>
      params.data.rowSpanGroupCount && params.data.rowSpanGroupCount > 1
  }
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    // rowSpan: params => params.data.country === 'Russia' ? 2 : 1
    const data = getTestData()
    common.applyGroupingRowSpanByPageSize(data, 'position', 100)
    setRowData(data)
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  // paginationAutoPageSize : pageSize 콤보박스가 있고 없고의 setting을 하는 것임
  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        paginationAutoPageSize={false}
        pagination={true}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        suppressRowTransform={true}
      />
    </div>
  )
}
