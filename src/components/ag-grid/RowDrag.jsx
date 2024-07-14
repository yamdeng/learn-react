import { useState, useEffect, useRef, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../data/grid/example-data'

export default function RowDrag() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  defaultColumnInfos[0].rowDrag = true
  defaultColumnInfos[1].filter = true
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  const onRowDragEnter = useCallback(e => {
    console.log('onRowDragEnter', e)
  }, [])

  const onRowDragEnd = useCallback(e => {
    console.log('onRowDragEnd', e)
  }, [])

  const onRowDragMove = useCallback(e => {
    console.log('onRowDragMove', e)
    // 여기어서 unmanage 처리를 함
  }, [])

  const onRowDragLeave = useCallback(e => {
    console.log('onRowDragLeave', e)
  }, [])

  const onSortChanged = useCallback(event => {
    console.log(`onSortChanged`)
    console.log(`event.columns.length : ${event.columns.length}`)
    console.log(`event.columns[0].colId ${event.columns[0].colId}`)
    console.log(`event.columns[0].sort ${event.columns[0].sort}`)
  }, [])

  const onFilterChanged = useCallback(() => {
    console.log(`onFilterChanged`)
  }, [])

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        rowDragManaged={true}
        suppressMoveWhenRowDragging={true}
        onRowDragEnter={onRowDragEnter}
        onRowDragEnd={onRowDragEnd}
        onRowDragMove={onRowDragMove}
        onRowDragLeave={onRowDragLeave}
        onSortChanged={onSortChanged}
        onFilterChanged={onFilterChanged}
        suppressMultiSort={true}
      />
    </div>
  )
}
