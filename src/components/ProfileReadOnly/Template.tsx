import { Box, Divider, Grid, Typography } from "@mui/material";
import { useProfileTheme } from "../../hooks";

export function Template(props: any) {
    //@ts-ignore
    const { data } = { ...props }
    const { activeTheme } = useProfileTheme()
    return (
        <Box>
            <Typography>
                Template Info
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Property name={'Active Profile Template'} value={activeTheme || data?.active_template || 'Earth'} />
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