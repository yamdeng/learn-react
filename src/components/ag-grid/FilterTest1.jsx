import { useState, useCallback, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'

const HighlightedCellRenderer = ({ value, filterText }) => {
  console.log('HighlightedCellRenderer call!!!')
  if (!filterText) {
    return <span>{value}</span>
  }

  const regex = new RegExp(`(${filterText})`, 'gi')
  const applyValueString = value + ''
  const parts = applyValueString.split(regex)

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  )
}

export default function FilterTest1() {
  const [rowData, setRowData] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    // 데이터를 가져오는 함수 (모킹된 데이터 사용)
    setRowData([
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Mike Johnson', age: 35 },
      { id: 4, name: 'Sara Wilson', age: 28 },
      { id: 5, name: 'Paul Brown', age: 40 }
    ])
  }, [])

  const columns = [
    {
      headerName: 'ID',
      field: 'id',
      filter: true,
      cellRenderer: params => (
        <HighlightedCellRenderer value={params.value} filterText={filterText} />
      )
    },
    {
      headerName: 'Name',
      field: 'name',
      filter: 'agTextColumnFilter',
      cellRenderer: params => (
        <HighlightedCellRenderer value={params.value} filterText={filterText} />
      )
    },
    {
      headerName: 'Age',
      field: 'age',
      filter: 'agNumberColumnFilter',
      cellRenderer: params => (
        <HighlightedCellRenderer value={params.value} filterText={filterText} />
      )
    }
  ]

  const onFilterChanged = useCallback(params => {
    // const allColumns = params.columnApi.getAllColumns()
    const allColumns = params.columnApi.getAllGridColumns()
    const filterValues = allColumns.map(col => {
      const filterComponent = params.api.getFilterInstance(col.getColId())
      if (filterComponent && filterComponent.getModel()) {
        return filterComponent.getModel().filter
      }
      return null
    })
    setFilterText(filterValues.find(val => val) || '')
  }, [])

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        onFilterChanged={onFilterChanged}
      />
    </div>
  )
}
