import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

import { ProfileDelete } from "..";

export function GridFrameworkComponentDeleteProfile() {
    const [deleteOpen, setDeleteOpen] = useState(false)


    const handleDeleteOpen = () => {
        setDeleteOpen(true)
    }

    return (
        <Box>
            <ProfileDelete deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
            <IconButton size={'small'} sx={{ ml: 1 }} onClick={handleDeleteOpen}>
                <DeleteOutline fontSize="small" />
            </IconButton>
        </Box>
    )
}