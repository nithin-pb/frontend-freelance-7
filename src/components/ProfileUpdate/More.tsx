import { Box, Divider, Grid, Typography } from "@mui/material";
import { TextField } from "../../shared";

export function More() {
    return (
        <Box>
            <Typography>
                Profile Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={12}>
                    <TextField label={'Bio'} multiline minRows={5} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Username'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Password'} disabled value={"********************"} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Profile Referred By'} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body2'} color={'text.secondary'}>
                        Profile Created By
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} color={'text.secondary'}>
                        Jane Doe
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
        </Box>
    )
}