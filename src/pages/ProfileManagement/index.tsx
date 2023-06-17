import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function ProfileManagement() {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}