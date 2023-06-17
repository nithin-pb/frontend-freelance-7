import { Box, Divider, Grid, Typography } from "@mui/material";


import { TextField, PhoneInputLocal } from "../../shared";

export function Address() {
    return (
        <Box>
            <Typography>
                Contact Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={6}>
                    <PhoneInputLocal label={'Phone'} name={"phone"} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label={'Email'} name={"email"} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Address Line'} multiline rows={4} name={"address"} />
                </Grid>
            </Grid>
        </Box>
    )
}

