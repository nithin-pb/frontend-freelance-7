import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function GridFrameworkComponentProfileName(props: any) {
    return (
        <Box>
            <Link to={props.data.id}>
                {props.value}
            </Link>
        </Box>
    )
}