import { Box, Divider, Grid, Typography } from "@mui/material";


export function ProfileInfo(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    return (
        <Box>
            <Typography>
                Profile Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Property name={'Bio'} value={data?.bio} />
                <Property name={'Username'} value={data?.user_name} />
                <Property name={'Password'} value={'****************'} />
                <Property name={'Invite'} value={data?.invite} />
                <Property name={'URL'} value={data?.url} />
                <Property name={'Unique Id'} value={data?.unique_id} />
                <Property name={'Profile Referred By'} value={data?.refferdBy} />
                <Property name={'Profile Created By'} value={data?.createdBy} />
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
            {
                value ? <Typography variant="body1" >{value}</Typography>
                    : <Typography variant="body1" color={'text.secondary'}>Unknown </Typography>
            }
        </Grid>
    )
}