import { Box, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material"
import { Link } from "react-router-dom";

export function GridFrameworkComponentEditProfile(props: any) {
    return (
        <Box >
            <Link to={`/dashboard/profile/${props.value}`}>
                <IconButton size={'small'} sx={{ ml: 1 }} >
                    <Edit fontSize="small" />
                </IconButton>
            </Link>
        </Box>
    )
}