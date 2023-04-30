import { Box, IconButton } from "@mui/material";
import { EditAttributes, Edit } from "@mui/icons-material"
import { Link } from "react-router-dom";

export function GridFrameworkComponentEditUser(props: any) {
    return (
        <Box >
            <Link to={`/dashboard/user/${props.value}`}>
                <IconButton size={'small'} sx={{ ml: 1 }}>
                    <Edit fontSize="small" />
                </IconButton>
            </Link>

        </Box>
    )
}