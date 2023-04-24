import { Box, Divider, Grid, Typography } from "@mui/material";
import { TextField } from "../../shared";

export function More() {
    return (
        <Box>
            <Typography>
                Profile info
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
                    <TextField label={'Profile referred By'} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body2'} color={'text.secondary'}>
                        Profile created by
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} color={'text.secondary'}>
                        Jane Doe
                    </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField label={'Password'} />
                </Grid> */}
            </Grid>
        </Box>
    )
}