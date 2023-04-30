import { Box, Divider, Grid, Typography } from "@mui/material";


export function ProfileInfo() {
    return (
        <Box>
            <Typography>
                Profile Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Property name={'Bio'} value={'n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum m…'} />
                <Property name={'Username'} value={'randomfishjumps'} />
                <Property name={'Password'} value={'****************'} />
                <Property name={'Profile Referred By'} value={'Jane Doe'} />
                <Property name={'Profile Created By'} value={'Jane Doe'} />
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