import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import { GridToolBox } from './GridToolBox'
import { autoSizeColumnsBasedOnData, buildGridDefinitions, autoSizeGridColumns, paginationChangeControl } from "./utls";
import { IDataGrid } from "../../interfaces";
import { defaultColDef } from "./defaultColDef";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './index.scss'
import { Divider } from '@mui/material';

export default function DataGrid(props: IDataGrid) {
    const { height = '100%', gridData, fixedColumns, disableTopToolBox = false, extraComponents, rowSelection } = { ...props }
    const [gridApi, setGridApi] = useState<any>(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState<any>(null);
    const [columnData, setColumn] = useState<any>(null);
    const [paginationControls, setPaginationControls] = useState({ currentPage: 0, totalPage: 0 })


    const onGridReady = (params: any) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        makeRowColumnData()
    }

    const onGridSizeChanged = () => {
        // autoSizeColumnsBasedOnData(gridApi, gridColumnApi)
        // autoSizeGridColumns(gridApi, gridColumnApi)
    }

    const onPaginationChanged = () => {
        paginationChangeControl(gridApi, setPaginationControls)
    };

    const makeRowColumnData = () => {
        const { rows, columns } = buildGridDefinitions(gridData)
        setRowData(rows)
        setColumn(columns)
    }

    useEffect(() => {
        if (gridApi) {
            makeRowColumnData()
            //onGridSizeChanged()
        }
    }, [gridData])

    return (
        <div style={{ height: '100%' }} >
            {/* <Divider /> */}
            <GridToolBox gridApi={gridApi} gridColumnApi={gridColumnApi} totalPage={0} currentPage={0} extraComponents={extraComponents} />
            <Divider />
            <div className={'ag-theme-alpine ag-theme-custom-react GridWrapper'}
                style={{ height: `calc(${height} - 179px)` }}
                id={'grid-wrapper'}>
                <AgGridReact
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    onGridSizeChanged={onGridSizeChanged}
                    onPaginationChanged={onPaginationChanged}
                    onRowDataChanged={onGridSizeChanged}
                    pagination={true}
                    animateRows={true}
                    rowSelection={rowSelection}
                    paginationAutoPageSize={true}
                    suppressPaginationPanel={true}
                    suppressFieldDotNotation={true}
                    enableCellTextSelection={true}
                    columnDefs={fixedColumns ? fixedColumns : columnData}
                    rowData={rowData}>
                </AgGridReact>
            </div>
        </div>
    )
}