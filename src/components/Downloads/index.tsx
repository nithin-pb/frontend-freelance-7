import { Box } from "@mui/material";
import { TitleWidget } from "..";

export default function Downloads() {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Manage Downloads`} description={'Mange downloads for your profiles'} />
        </Box>
    )
}