import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import _ from 'lodash'

import {
  getAgGridColumnListByListIndex,
  getTestData
} from '../../data/grid/example-data'

const CustomComponent = function (props) {
  console.log(props)

  const [localExpanded, setLocalExpanded] = useState(false)

  const clickLocal = () => {
    setLocalExpanded(true)
  }
  // const [ascSort, setAscSort] = useState('inactive')
  // const [descSort, setDescSort] = useState('inactive')
  // const [noSort, setNoSort] = useState('inactive')
  // const refButton = useRef(null)

  // const onMenuClicked = () => {
  //   props.showColumnMenu(refButton.current)
  // }

  // const onSortChanged = () => {
  //   setAscSort(props.column.isSortAscending() ? 'active' : 'inactive')
  //   setDescSort(props.column.isSortDescending() ? 'active' : 'inactive')
  //   setNoSort(
  //     !props.column.isSortAscending() && !props.column.isSortDescending()
  //       ? 'active'
  //       : 'inactive'
  //   )
  // }

  // const onSortRequested = (order, event) => {
  //   props.setSort(order, event.shiftKey)
  // }

  // useEffect(() => {
  //   props.column.addEventListener('sortChanged', onSortChanged)
  //   onSortChanged()
  // }, [])

  // let menu = null
  // if (props.enableMenu) {
  //   menu = (
  //     <div
  //       ref={refButton}
  //       className='customHeaderMenuButton'
  //       onClick={() => onMenuClicked()}
  //     >
  //       <i className={`fa ${props.menuIcon}`}></i>
  //     </div>
  //   )
  // }

  // let sort = null
  // if (props.enableSorting) {
  //   sort = (
  //     <div style={{ display: 'inline-block' }}>
  //       <div
  //         onClick={event => onSortRequested('asc', event)}
  //         onTouchEnd={event => onSortRequested('asc', event)}
  //         className={`customSortDownLabel ${ascSort}`}
  //       >
  //         <i className='fa fa-long-arrow-alt-down'></i>
  //       </div>
  //       <div
  //         onClick={event => onSortRequested('desc', event)}
  //         onTouchEnd={event => onSortRequested('desc', event)}
  //         className={`customSortUpLabel ${descSort}`}
  //       >
  //         <i className='fa fa-long-arrow-alt-up'></i>
  //       </div>
  //       <div
  //         onClick={event => onSortRequested('', event)}
  //         onTouchEnd={event => onSortRequested('', event)}
  //         className={`customSortRemoveLabel ${noSort}`}
  //       >
  //         <i className='fa fa-times'></i>
  //       </div>
  //     </div>
  //   )
  // }

  // headerExpanded: expanded,
  //   clickCustomHeader: toggleExpaned
  const { headerExpanded, clickCustomHeader } = props

  console.log(`props.headerExpanded : ${props.headerExpanded}`)

  const clickHeader = () => {
    setLocalExpanded(true)
    // clickCustomHeader()
  }

  return (
    <div className='ag-cell-label-container' role='presentation'>
      <span className='ag-header-icon ag-header-cell-menu-button'></span>
      <span className='ag-header-icon ag-header-cell-filter-button'></span>
      <div className='ag-header-cell-label' role='presentation'>
        <span className='ag-header-icon ag-sort-order'></span>
        <span className='ag-header-icon ag-sort-ascending-icon'></span>
        <span className='ag-header-icon ag-sort-descending-icon'></span>
        <span className='ag-header-icon ag-sort-none-icon'></span>
        <span className='ag-header-cell-text' role='columnheader'></span>
        {/* <span onClick={clickHeader}> custom2 {headerExpanded + ''}</span> */}
        <span onClick={clickHeader}> custom2 {localExpanded + ''}</span>
        <span className='ag-header-icon ag-filter-icon'></span>
      </div>
    </div>
  )
}

export default function HeaderCustomComponent() {
  console.log('HeaderCustomComponent render!!!')
  const gridRef = useRef()
  const [rowData, setRowData] = useState([])
  const [expanded, setExpanded] = useState(false)
  const defaultColumnInfos = getAgGridColumnListByListIndex(8)
  const toggleExpaned = () => {
    console.log('toggleExpaned call!!!')
    setExpanded(true)
  }
  defaultColumnInfos[1].headerComponent = CustomComponent
  defaultColumnInfos[1].headerComponentParams = {
    customProps1: 'aaa',
    headerExpanded: expanded,
    clickCustomHeader: toggleExpaned
  }

  const applyColumnInfos = _.cloneDeep(defaultColumnInfos)

  const [columnInfos] = useState(applyColumnInfos)

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
