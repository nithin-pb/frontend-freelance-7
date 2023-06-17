import { Box, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material"
import { Link } from "react-router-dom";

export function GridFrameworkComponentEdit(props: any) {
    return (
        <Box >
            <Link to={`/dashboard/roles/edit/${props.value}`}>
                <IconButton size={'small'} sx={{ ml: 1 }} >
                    <Edit fontSize="small" />
                </IconButton>
            </Link>
        </Box>
    )
}