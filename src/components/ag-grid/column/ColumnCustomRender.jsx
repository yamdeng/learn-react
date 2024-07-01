import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../../data/grid/example-data'

const CustomCellComponent = function (props) {
  console.log(props)

  const { changeName } = props

  const clickLabel = () => {
    changeName()
  }

  // row data
  // const data = props.data

  return <span onClick={clickLabel}>custom cell</span>
}

export default function ColumnCustomRender() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const [name, setName] = useState('aaa')
  const changeName = () => {
    setName('yamdeng')
  }
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  defaultColumnInfos[1].cellRenderer = CustomCellComponent
  defaultColumnInfos[1].cellRendererParams = {
    changeName: changeName
  }
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <p>{name}</p>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
      />
    </div>
  )
}
