import { Box, Divider, Stack, Typography } from "@mui/material";
import { TextField } from "../../shared";

export function NewRoleForm() {
    return (
        <Stack spacing={3}>
            <Box>
                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Typography >
                        Role Details
                    </Typography>
                </Box>
                <Divider sx={{ mt: 1 }} />
            </Box>
            <TextField label={'Name'} name={'name'} />
            <TextField label={'Description'} name={'description'} multiline minRows={3} />
        </Stack>
    )
}