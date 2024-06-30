import AgDirectTest from '../components/ag-grid/DirectTest'
import AgNoData from '../components/ag-grid/NoData'
import AgLoading from '../components/ag-grid/Loading'
import AgBasicDataMapping from '../components/ag-grid/BasicDataMapping'
import AgNestedDataMapping from '../components/ag-grid/NestedDataMapping'
import AgTableWidth from '../components/ag-grid/TableWidth'
import AgTableHeight from '../components/ag-grid/TableHeight'
import AgRowSingleClick from '../components/ag-grid/RowSingleClick'
import AgRowDoubleClick from '../components/ag-grid/RowDoubleClick'
import AgPagination from '../components/ag-grid/Pagination'
import AgPaginationEvent from '../components/ag-grid/PaginationEvent'
import AgHeaderGrouping from '../components/ag-grid/HeaderGrouping'
import AgCSVExport from '../components/ag-grid/CSVExport'
import AgRowCheckBoxSingleSelect from '../components/ag-grid/RowCheckBoxSingleSelect'
import AgRowCheckBoxMultipleSelect from '../components/ag-grid/RowCheckBoxMultipleSelect'
import AgNewRowAdd from '../components/ag-grid/NewRowAdd'
import AgGridEdit from '../components/ag-grid/GridEdit'
import AgGridBatchEdit from '../components/ag-grid/GridBatchEdit'
import AgHeaderCustomComponent from '../components/ag-grid/HeaderCustomComponent'
import AgToolTip from '../components/ag-grid/ToolTip'
import AgInfiniteScroll from '../components/ag-grid/InfiniteScroll'
import AgInfiniteScrollByServer from '../components/ag-grid/InfiniteScrollByServer'

import AgColumnSort from '../components/ag-grid/column/ColumnSort'
import AgColumnFilter from '../components/ag-grid/column/ColumnFilter'
import AgColumnWidth from '../components/ag-grid/column/ColumnWidth'
import AgColumnHieght from '../components/ag-grid/column/ColumnHieght'
import AgColumnHeadAlign from '../components/ag-grid/column/ColumnHeadAlign'
import AgColumnBodyAlign from '../components/ag-grid/column/ColumnBodyAlign'
import AgColumnLock from '../components/ag-grid/column/ColumnLock'
import AgColumnCustomRender from '../components/ag-grid/column/ColumnCustomRender'
import AgColumnCustomRenderWithHandle from '../components/ag-grid/column/ColumnCustomRenderWithHandle'
import AgColumnDynamic from '../components/ag-grid/column/ColumnDynamic'

import AgTreeTable from '../components/ag-grid/TreeTable'
import AgRowSpan from '../components/ag-grid/RowSpan'
import AgColsPan from '../components/ag-grid/ColsPan'
import PromiseExample from '../components/ag-grid/PromiseExample'
import LocalPageExample from '../components/ag-grid/LocalPageExample'
import AgTableStyleOverride from '../components/ag-grid/TableStyleOverride'

const menu = [
  {
    title: 'ag-grid',
    children: [
      {
        title: 'AgDirectTest',
        path: 'ag-grid/AgDirectTest',
        component: AgDirectTest
      },
      { title: 'AgNoData', path: 'ag-grid/AgNoData', component: AgNoData },
      { title: 'AgLoading', path: 'ag-grid/AgLoading', component: AgLoading },
      {
        title: 'AgBasicDataMapping',
        path: 'ag-grid/AgBasicDataMapping',
        component: AgBasicDataMapping
      },
      {
        title: 'AgNestedDataMapping',
        path: 'ag-grid/AgNestedDataMapping',
        component: AgNestedDataMapping
      },
      {
        title: 'AgTableWidth',
        path: 'ag-grid/AgTableWidth',
        component: AgTableWidth
      },
      {
        title: 'AgTableHeight',
        path: 'ag-grid/AgTableHeight',
        component: AgTableHeight
      },
      {
        title: 'AgRowSingleClick',
        path: 'ag-grid/AgRowSingleClick',
        component: AgRowSingleClick
      },
      {
        title: 'AgRowDoubleClick',
        path: 'ag-grid/AgRowDoubleClick',
        component: AgRowDoubleClick
      },
      {
        title: 'AgPagination',
        path: 'ag-grid/AgPagination',
        component: AgPagination
      },
      {
        title: 'AgPaginationEvent',
        path: 'ag-grid/AgPaginationEvent',
        component: AgPaginationEvent
      },
      {
        title: 'AgHeaderGrouping',
        path: 'ag-grid/AgHeaderGrouping',
        component: AgHeaderGrouping
      },
      {
        title: 'AgToolTip',
        path: 'ag-grid/AgToolTip',
        component: AgToolTip
      },
      {
        title: 'AgCSVExport',
        path: 'ag-grid/AgCSVExport',
        component: AgCSVExport
      },
      {
        title: 'AgRowCheckBoxSingleSelect',
        path: 'ag-grid/AgRowCheckBoxSingleSelect',
        component: AgRowCheckBoxSingleSelect
      },
      {
        title: 'AgRowCheckBoxMultipleSelect',
        path: 'ag-grid/AgRowCheckBoxMultipleSelect',
        component: AgRowCheckBoxMultipleSelect
      },
      {
        title: 'AgNewRowAdd',
        path: 'ag-grid/AgNewRowAdd',
        component: AgNewRowAdd
      },
      {
        title: 'AgGridEdit',
        path: 'ag-grid/AgGridEdit',
        component: AgGridEdit
      },
      {
        title: 'AgGridBatchEdit',
        path: 'ag-grid/AgGridBatchEdit',
        component: AgGridBatchEdit
      },
      {
        title: 'HeaderCustomComponent',
        path: 'ag-grid/AgHeaderCustomComponent',
        component: AgHeaderCustomComponent
      },
      {
        title: 'AgInfiniteScroll',
        path: 'ag-grid/AgInfiniteScroll',
        component: AgInfiniteScroll
      },
      {
        title: 'AgInfiniteScrollByServer',
        path: 'ag-grid/AgInfiniteScrollByServer',
        component: AgInfiniteScrollByServer
      },
      {
        title: 'AgColumnSort',
        path: 'ag-grid/column/AgColumnSort',
        component: AgColumnSort
      },
      {
        title: 'AgColumnFilter',
        path: 'ag-grid/column/AgColumnFilter',
        component: AgColumnFilter
      },
      {
        title: 'AgColumnWidth',
        path: 'ag-grid/column/AgColumnWidth',
        component: AgColumnWidth
      },
      {
        title: 'AgColumnHieght',
        path: 'ag-grid/column/AgColumnHieght',
        component: AgColumnHieght
      },
      {
        title: 'AgColumnHeadAlign',
        path: 'ag-grid/column/AgColumnHeadAlign',
        component: AgColumnHeadAlign
      },
      {
        title: 'AgColumnBodyAlign',
        path: 'ag-grid/column/AgColumnBodyAlign',
        component: AgColumnBodyAlign
      },
      {
        title: 'AgColumnLock',
        path: 'ag-grid/column/AgColumnLock',
        component: AgColumnLock
      },
      {
        title: 'AgColumnCustomRender',
        path: 'ag-grid/column/AgColumnCustomRender',
        component: AgColumnCustomRender
      },
      {
        title: 'AgColumnCustomRenderWithHandle',
        path: 'ag-grid/column/AgColumnCustomRenderWithHandle',
        component: AgColumnCustomRenderWithHandle
      },
      {
        title: 'AgColumnDynamic',
        path: 'ag-grid/column/AgColumnDynamic',
        component: AgColumnDynamic
      },

      {
        title: 'AgTreeTable',
        path: 'ag-grid/AgTreeTable',
        component: AgTreeTable
      },
      { title: 'AgRowSpan', path: 'ag-grid/AgRowSpan', component: AgRowSpan },
      { title: 'AgColsPan', path: 'ag-grid/AgColsPan', component: AgColsPan },
      {
        title: 'AgTableStyleOverride',
        path: 'ag-grid/AgTableStyleOverride',
        component: AgTableStyleOverride
      },
      {
        title: 'PromiseExample',
        path: 'ag-grid/PromiseExample',
        component: PromiseExample
      },
      {
        title: 'LocalPageExample',
        path: 'ag-grid/LocalPageExample',
        component: LocalPageExample
      }
    ]
  }
]

export default menu
