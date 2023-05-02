import { Box, Divider, Grid, Typography } from "@mui/material";


export function Contact(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    return (
        <Box>
            <Typography>
                Contact Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Property name={'Phone'} value={data?.phone} gridProperty={6} />
                <Property name={'Email'} value={data?.email} gridProperty={6} />
                <Property name={'Address'} value={data?.address} />
            </Grid>
        </Box>
    )
}


function Property(props: any) {
    const { name, value, gridProperty = 12 }: { name: string, value: any, gridProperty: 6 | 12 } = { ...props }
    return (
        <Grid item xs={gridProperty}>
            <Typography variant="body2" color={'text.secondary'} sx={{ fontWeight: 600 }}>
                {name}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {value}
            </Typography>
        </Grid>
    )
}