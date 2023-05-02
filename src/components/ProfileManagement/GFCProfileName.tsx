import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function GridFrameworkComponentProfileName(props: any) {
    return (
        <Box>
            <Link to={props.data.user_name}>
                {props.value}
            </Link>
        </Box>
    )
}