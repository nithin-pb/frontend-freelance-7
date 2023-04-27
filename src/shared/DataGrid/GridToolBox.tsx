import React, { useState } from 'react';
import { ClickAwayListener, Divider, Box, Pagination, Stack } from "@mui/material";
import { SaveOutlined, Search } from "@mui/icons-material";
import { IGridToolBox } from "../../interfaces";
import Button from '../Button';


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
            direction={'row'}
            sx={{ pr: 2 }}
            alignItems={'center'}>
            <Button
                onClick={onBtnExport}
                sx={{ ml: 1 }}
                startIcon={<SaveOutlined
                    fontSize={'small'}
                    color={'action'} />}
                variant={"outlined"}>
                Save
            </Button>
            <Divider orientation={'vertical'} flexItem sx={{ ml: 2 }} />

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
                {/* <IconButton onClick={onBtnExport}>
                    <SaveOutlined fontSize={'small'} color={'action'} />
                </IconButton> */}
            </Stack>
        </Stack >
    )
}


function GlobalSearchBox({ onSearchChange }: { onSearchChange: any }) {
    return (
        <Box display={'flex'} alignItems={'center'} sx={{ ml: 2 }}>
            <Search color={'action'} />
            <input className={'global-search-input'} placeholder={'Search here'}
                onChange={(e) => onSearchChange(e.target.value)} />
        </Box>
    )
}