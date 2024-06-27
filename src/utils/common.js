function applyGroupingRowSpanByPageSize(data, columnName, pageSize) {
  let applyRowIndex = 0
  let rowSpanGroupCount = 1
  let diffValue = ''

  for (let index = 0; index < data.length; index++) {
    const dataInfo = data[index]
    const currentValue = dataInfo[columnName]
    if (index !== 0 && index % pageSize === 0) {
      data[applyRowIndex].rowSpanGroupCount = rowSpanGroupCount
      rowSpanGroupCount = 1
      applyRowIndex = index
    } else {
      if (diffValue === currentValue) {
        rowSpanGroupCount++
      } else {
        data[applyRowIndex].rowSpanGroupCount = rowSpanGroupCount
        rowSpanGroupCount = 1
        applyRowIndex = index
      }
    }
    diffValue = currentValue
  }
}

export default {
  applyGroupingRowSpanByPageSize
}
