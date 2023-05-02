import { Box, Divider, Grid, Typography } from "@mui/material";

import { TextField } from "../../shared";

export function Personal() {
    return (
        <Box>
            <Typography>
                Personal Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={12}>
                    <TextField label={'Name'} name={"name"} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Company Name'} name={"company_name"} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Designation'} name={"designation"} />
                </Grid>
            </Grid>
        </Box>
    )
}