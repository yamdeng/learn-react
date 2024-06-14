import { useState, useEffect, useRef, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'

import { getTestData } from '../../data/grid/example-data'

export default function RowCheckBoxSingleSelect() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])

  const [columnInfos] = useState([
    // the name column header always has a checkbox in the header
    {
      field: 'name',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true
    },
    // the country column header only has checkbox if it is the first column
    {
      field: 'sabun',
      headerCheckboxSelection: params => {
        const displayedColumns = params.api.getAllDisplayedColumns()
        return displayedColumns[0] === params.column
      }
    }
  ])

  const isRowSelectable = useCallback(params => {
    // row data
    console.log(params.data)
    return true
  }, [])

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()
    console.log(selectedRows)
  }, [])

  useEffect(() => {
    setRowData(getTestData())
  }, [])

  // rowSelection={"multiple"}로 지정시 all checkbox가 표시됨
  // suppressRowClickSelection : true일 경우 체크박스로만 클릭을 할 수 있음

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnInfos}
        onSelectionChanged={onSelectionChanged}
        rowSelection={'single'}
        suppressRowClickSelection={true}
        isRowSelectable={isRowSelectable}
      />
    </div>
  )
}
