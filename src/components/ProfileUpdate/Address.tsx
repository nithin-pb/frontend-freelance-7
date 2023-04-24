import { Box, Divider, Grid, Typography } from "@mui/material";

import { TextField } from "../../shared";

export function Address() {
    return (
        <Box>
            <Typography>
                Contact Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={6}>
                    <TextField label={'Phone'} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'Email'} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'Address Line 1'} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'Address Line 2'} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'State'} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'Zip code'} />
                </Grid>
            </Grid>
        </Box>
    )
}