function buildGridDefinitions(gridData: any[]) {
    if (!Array.isArray(gridData)) throw new Error('data not compatible with grid')
    if (gridData.length <= 0) return {rows: [], columns: []}
    const headers: any = {}

    gridData.forEach((e: any) => {
        Object.keys(e).forEach((key: string | number) => {
            if (!headers[key]) headers[key] = 'key'
        })
    })

    const columns = Object.keys(headers).map((headerName: string | number) => {
        return (
            {
                field: headerName,
                resizable: true,
                sortable: true,
            }
        )
    })

    return {
        rows: gridData,
        columns: columns
    }
}

function autoSizeColumnsBasedOnData(gridApi: any, gridColumnApi: any) {
    let allColumnIds: any = [];
    gridColumnApi.getAllColumns().forEach(function ({colId}: { colId: number | string }) {
        allColumnIds.push(colId);
    });
    gridColumnApi.autoSizeColumns(allColumnIds, false);
}


function autoSizeGridColumns(gridApi: any, gridColumnApi: any) {
    let gridWidth = document.getElementById('force-query-grid-wrapper')?.offsetWidth || 0;
    let columnsToShow = [];
    let columnsToHide = [];
    let totalColsWidth = 0;

    let allColumns = gridColumnApi.getAllColumns();
    for (const {actualWidth, colId} of allColumns) {
        totalColsWidth += actualWidth;
        if (totalColsWidth > gridWidth) {
            columnsToHide.push(colId);
        } else {
            columnsToShow.push(colId);
        }
    }

    if (totalColsWidth < gridWidth) {
        gridColumnApi.setColumnsVisible(columnsToShow, true);
        gridColumnApi.setColumnsVisible(columnsToHide, false);
        gridApi.sizeColumnsToFit();
    }
}

function paginationChangeControl(gridApi: any, setPaginationControls: any) {
    if (gridApi) {
        setPaginationControls({
            currentPage: gridApi.paginationGetCurrentPage() + 1,
            totalPage: gridApi.paginationGetTotalPages()
        })
    }
}

export {buildGridDefinitions, autoSizeColumnsBasedOnData, autoSizeGridColumns, paginationChangeControl}