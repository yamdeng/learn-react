import { useState, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'

export default function DirectTest() {
  const [rowData, setRowData] = useState()
  const [columnDefs] = useState([
    {
      headerName: 'Name & Country',
      children: [{ field: 'athlete' }, { field: 'country' }]
    },
    {
      headerName: 'Sports Results',
      children: [
        { columnGroupShow: 'closed', field: 'total' },
        { columnGroupShow: 'closed', field: 'gold' },
        { columnGroupShow: 'closed', field: 'silver' },
        { columnGroupShow: 'closed', field: 'bronze' }
      ]
    }
  ])

  // eslint-disable-next-line no-unused-vars
  const onGridReady = useCallback(params => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then(data => setRowData(data))
  }, [])

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
      />
    </div>
  )
}
