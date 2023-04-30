import { Box, Divider, Grid, Typography } from "@mui/material";


export function Personal() {
    return (
        <Box>
            <Typography>
                Personal Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Property name={'Name'} value={'Test Profile'} />
                <Property name={'Company Name'} value={'Amazon'} />
                <Property name={'Designation'} value={'Software Engineer'} />
            </Grid>
        </Box>
    )
}


function Property(props: any) {
    const { name, value }: { name: string, value: any } = { ...props }
    return (
        <Grid item xs={12}>
            <Typography variant="body2" color={'text.secondary'} sx={{ fontWeight: 600 }}>
                {name}
            </Typography>
            <Typography variant="body1" >
                {value}
            </Typography>
        </Grid>
    )
}