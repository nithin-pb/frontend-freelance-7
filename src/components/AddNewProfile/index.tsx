import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Button } from "../../shared";

export default function AddNewProfile() {
    return (
        <Box>
            <Button variant={'contained'} startIcon={<Add />}>
                Add New Profile
            </Button>
        </Box>
    )
}