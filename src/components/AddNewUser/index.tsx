import { Box } from "@mui/material";
import { Button } from "../../shared";
import { Add } from "@mui/icons-material";

export default function AddNewUser() {
    return (
        <Box>
            <Button variant={'contained'} startIcon={<Add />}>
                Add New User
            </Button>
        </Box>
    )
}