import { Box, IconButton } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material"

export function GridFrameworkComponentDeleteUser() {
    return (
        <Box>
            <IconButton size={'small'}>
                <DeleteOutline fontSize="small" />
            </IconButton>
        </Box>
    )
}