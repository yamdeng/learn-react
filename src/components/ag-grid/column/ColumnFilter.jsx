import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../../data/grid/example-data'

export default function ColumnFilter() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  defaultColumnInfos[1].filter = true
  // defaultColumnInfos[1].floatingFilter = true
  // defaultColumnInfos[1].suppressFiltersToolPanel = true
  // defaultColumnInfos[1].suppressHeaderFilterButton = true
  // defaultColumnInfos[1].suppressFloatingFilterButton = true
  defaultColumnInfos[1].unSortIcon = true // sort 아이콘이 보이게끔
  defaultColumnInfos[2].sortable = false

  defaultColumnInfos[1].getQuickFilterText = params => {
    debugger
    return 'Value is <b>' + params.value + '</b>'
  }

  // defaultColumnInfos[1].valueGetter = params => {
  //   return 'Value is <b>' + params.value + '</b>'
  // }

  // defaultColumnInfos[1].cellRenderer = params => {
  //   return 'Value is <b>' + params.value + '</b>'
  // }

  // defaultColumnInfos[1].suppressColumnsToolPanel = true
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  const resetFilter = () => {
    const api = gridRef.current
    // api.api.onFilterChanged()
    api.api.setFilterModel(null)
    // debugger
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <div style={{ padding: 20 }}>
        <button onClick={resetFilter}>reset filter</button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        suppressMenuHide={true} // 헤더에 필터 버튼 보이게끔
      />
    </div>
  )
}
