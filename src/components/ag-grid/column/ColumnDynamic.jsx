import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import _ from 'lodash'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../../data/grid/example-data'

export default function ColumnDynamic() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const [columnInfos, setColumnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  const changeColumnDef = () => {
    defaultColumnInfos[1].hide = true
    defaultColumnInfos[2].width = 1000
    const applyColumnInfos = _.cloneDeep(defaultColumnInfos)
    setColumnInfos(applyColumnInfos)
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <div>
        <button onClick={changeColumnDef}>change column def</button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
      />
    </div>
  )
}
