import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../data/grid/example-data'

function CustomTooltip(params) {
  return (
    <div className='custom-tooltip'>
      <div>
        <b>Custom Tooltip</b>
      </div>
      <div>{params.value}</div>
    </div>
  )
}

export default function ToolTip() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(12)
  defaultColumnInfos[0].tooltipField = 'deptName' // 툴팁의 키값을 정의
  defaultColumnInfos[0].headerTooltip = '헤더 툴팁2'
  defaultColumnInfos[1].tooltipValueGetter = params => {
    console.log(params)
    return 'Create any fixed message, e.g. This is the Athlete’s Age '
  }

  defaultColumnInfos[2].tooltipValueGetter = params => {
    console.log(params)
    return '333'
  }
  defaultColumnInfos[2].tooltipComponent = CustomTooltip
  const [columnInfos] = useState(defaultColumnInfos)

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
        tooltipShowDelay={100}
        tooltipHideDelay={1000}
        tooltipMouseTrack={true}
        enableBrowserTooltips={false}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
      />
    </div>
  )
}
