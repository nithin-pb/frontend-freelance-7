import { Box } from "@mui/material";

import {
    ProfileManagement as ProfileManagementCmpt,
    ProfileUpdate
} from '../../components'
import { Outlet } from "react-router-dom";


export default function ProfileManagement() {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}