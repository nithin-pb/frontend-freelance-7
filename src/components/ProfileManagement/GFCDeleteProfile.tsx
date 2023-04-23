import { Box, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material"

export function GridFrameworkComponentDeleteProfile() {
    return (
        <Box>
            <IconButton size={'small'}>
                <DeleteOutline />
            </IconButton>
        </Box>
    )
}