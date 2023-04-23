import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AdminUser() {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}