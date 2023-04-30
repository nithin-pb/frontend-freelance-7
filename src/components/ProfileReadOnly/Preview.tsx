import { Box, Divider, Typography } from "@mui/material";
import { ProfileTemplateWidget } from "..";

export function Preview() {
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