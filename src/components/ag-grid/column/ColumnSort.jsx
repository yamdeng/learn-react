import { useState, useEffect, useRef, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'

import {
  getTestData,
  getAgGridColumnListByListIndex
} from '../../../data/grid/example-data'

export default function BasicDataMapping() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  // 별도로 sortable을 지정 : 기본값을 false로 정의하는게 좋아보임
  defaultColumnInfos.forEach(info => {
    // if (info.field === 'sabun') {
    //   info.sortable = true;
    // }

    info.sortable = true
  })
  const [columnInfos] = useState(defaultColumnInfos)

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  const onGridReady = () => {
    console.log('onGridReady call')
  }

  const defaultColDef = useMemo(() => {
    return {
      sortable: false
    }
  }, [])

  const onSortChanged = params => {
    // single sort
    const singleSortColumns = params.columns
      .filter(info => info.sort)
      .map(info => {
        return {
          field: info.colId,
          sortType: info.sort
        }
      })

    // multiple sort
    const columnInfos = params.columnApi.getColumns()
    const multipleSortColumns = columnInfos
      .filter(info => info.sort)
      .map(info => {
        return {
          field: info.colId,
          sortType: info.sort
        }
      })

    console.log(`singleSortColumns : ${JSON.stringify(singleSortColumns)}`)
    console.log(`multipleSortColumns : ${JSON.stringify(multipleSortColumns)}`)

    // TODO: 로딩바 적용
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnInfos}
        onGridReady={onGridReady}
        onSortChanged={onSortChanged}
        multiSortKey={'ctrl'}
      />
    </div>
  )
}
