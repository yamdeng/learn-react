import { useState, useEffect, useRef, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../data/grid/example-data'

export default function CSVExport() {
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

  const onBtnExport = useCallback(() => {
    // '', '\t', '|'
    const optionParam = {
      columnSeparator: '|',
      suppressQuotes: true, // true인 경우 ""이 제거됨
      skipColumnGroupHeaders: false,
      skipColumnHeaders: false,
      allColumns: false // column에 설정된 hide는 기본적으로 무시되어서 처리됨
    }
    gridRef.current.api.exportDataAsCsv(optionParam)
  }, [])

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <div>
        <button onClick={onBtnExport}>download csv</button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        suppressExcelExport={true}
        onGridReady={onGridReady}
      />
    </div>
  )
}
