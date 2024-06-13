import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';

import { getAgGridColumnListByListIndex } from '../../data/grid/example-data';

const LoadingComponent = (props) => {
  const { loadingMessage } = props
  return (
      <div className="ag-overlay-loading-center" role="presentation">
          <div
              role="presentation"
              style={{
                  height: 100,
                  width: 100,
                  background:
                      'url(https://www.ag-grid.com/images/ag-grid-loading-spinner.svg) center / contain no-repeat',
                  margin: '0 auto',
              }}
          ></div>
          <div aria-live="polite" aria-atomic="true">              
              {loadingMessage}
          </div>
      </div>
  );
};

export default function Loading() {
  
  const gridRef = useRef(null);
  const [rowData] = useState([]);
  const defaultColumnInfos = getAgGridColumnListByListIndex(8);
  const [columnInfos] = useState(defaultColumnInfos);

  const showLoading = () => {
    gridRef.current.api.showLoadingOverlay();
  };

  const hideLoading = () => {
    gridRef.current.api.hideOverlay();
  }

  const loadingOverlayComponent = useMemo(() => { return LoadingComponent }, []);
  const loadingOverlayComponentParams = useMemo(() => {
      return {
          loadingMessage: 'One moment please...',
      }
  }, []);

  useEffect(() => {    
    setTimeout(() => {
      showLoading();
      setTimeout(() => {
        hideLoading();
      }, 3000)
    }, (2000));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="ag-theme-quartz" style={{height: 500}}>
    <AgGridReact
       ref={gridRef}
       rowData={rowData}
       columnDefs={columnInfos}
       loadingOverlayComponent={loadingOverlayComponent}
       loadingOverlayComponentParams={loadingOverlayComponentParams}
       reactiveCustomComponents
   />
  </div>;
}
