import { Box, Divider, Typography } from "@mui/material";
import { ProfileTemplateWidget } from "..";

export function Preview(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography>
                Preview
            </Typography>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <ProfileTemplateWidget />
        </Box>
    )
}