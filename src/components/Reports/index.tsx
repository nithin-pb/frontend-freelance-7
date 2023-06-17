import { Box } from "@mui/material";
import { TitleWidget } from "..";

export default function Reports() {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Manage Reports`} description={'Mange reports for your profiles and users'} />
        </Box>
    )
}