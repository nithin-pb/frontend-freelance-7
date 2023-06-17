import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

import { UserDelete } from "..";

export function GridFrameworkComponentDelete() {
    const [deleteOpen, setDeleteOpen] = useState(false)


    const handleDeleteOpen = () => {
        setDeleteOpen(true)
    }

    return (
        <Box>
            <UserDelete deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
            <IconButton size={'small'} sx={{ ml: 1 }} onClick={handleDeleteOpen}>
                <DeleteOutline fontSize="small" />
            </IconButton>
        </Box>
    )
}