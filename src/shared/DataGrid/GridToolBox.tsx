import React, { useState } from 'react';
import { ClickAwayListener, IconButton, Pagination, Stack } from "@mui/material";
import { SaveOutlined, SettingsOutlined } from "@mui/icons-material";
import { IGridToolBox } from "../../interfaces";


export function GridToolBox(props: IGridToolBox) {
    const { gridApi, totalPage, currentPage, gridColumnApi } = { ...props }
    const [anchorEl, setAnchorEl] = useState(null)
    const gotoPageNumber = (pageNumber: number) => {
        gridApi.paginationGoToPage(pageNumber - 1);
    }

    const onBtnExport = () => {
        gridApi.exportDataAsCsv({ fileName: new Date().getTime() });
    };

    return (
        <Stack className={'grid-toolbox'}
            spacing={1}
            justifyContent={'space-between'}
            direction={'row'}
            sx={{ pr: 2 }}
            alignItems={'center'}>
            <GlobalSearchBox
                onSearchChange={(e: any) => {
                    gridApi.setQuickFilter(e);
                }} />
            <Stack direction={'row'} spacing={2}>
                {totalPage ? <Pagination count={totalPage}
                    style={{ paddingTop: 2, flexWrap: "nowrap" }}
                    onChange={(e, value) => gotoPageNumber(value)}
                    shape="rounded"
                    page={currentPage}
                    size={'small'} /> : null}
                <IconButton onClick={onBtnExport}>
                    <SaveOutlined fontSize={'small'} color={'action'} />
                </IconButton>
            </Stack>
        </Stack>
    )
}


function GlobalSearchBox({ onSearchChange }: { onSearchChange: any }) {
    return <input className={'global-search-input'} placeholder={'Search here'}
        onChange={(e) => onSearchChange(e.target.value)} />
}