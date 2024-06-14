import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByManulList,
  getTestData
} from '../../data/grid/example-data'

export default function HeaderGrouping() {
  const firstGroupChildren = getAgGridColumnListByManulList([
    'sabun',
    'position',
    'name',
    'deptName',
    'sex',
    'createdDate',
    'updatedDate'
  ])

  const secondGroupChildren = getAgGridColumnListByManulList([
    'email',
    'age',
    'jobArea',
    'phone',
    'address1',
    'address2'
  ])

  // 전부다 'open', 'closed'이면 의미가 없음 다른값이 존재해야 함
  secondGroupChildren.forEach(info => {
    info.columnGroupShow = 'open'
  })

  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const [columnInfos] = useState([
    { headerName: 'basicGroup', children: firstGroupChildren },
    { headerName: 'detailGroup', children: secondGroupChildren }
  ])

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
      />
    </div>
  )
}
