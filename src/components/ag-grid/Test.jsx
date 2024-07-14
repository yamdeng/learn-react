import { useState, useCallback, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import create from 'zustand'

const useStore = create(set => ({
  loading: false,
  rowData: [],
  totalRecords: 0,
  currentPage: 1,
  pageSize: 10,
  setLoading: loading => set({ loading }),
  setRowData: data => set({ rowData: data }),
  setTotalRecords: total => set({ totalRecords: total }),
  setCurrentPage: page => set({ currentPage: page })
}))

export default function DirectTest() {
  const {
    loading,
    rowData,
    totalRecords,
    currentPage,
    pageSize,
    setLoading,
    setRowData,
    setTotalRecords,
    setCurrentPage
  } = useStore()

  const fetchPageData = page => {
    setLoading(true)
    fetch(`http://localhost:3000/data?page=${page}&size=${pageSize}`)
      .then(response => response.json())
      .then(result => {
        setRowData(result.rows)
        setTotalRecords(result.total)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPageData(currentPage)
  }, [currentPage])

  const columns = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' }
  ]

  const totalPages = Math.ceil(totalRecords / pageSize)

  return (
    <div className='App'>
      {loading && <div className='loading-bar'>Loading...</div>}
      <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columns} />
      </div>
      <div className='pagination'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  )
}
