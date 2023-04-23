import { Box, Divider, Grid, Paper } from "@mui/material";
import { Button } from "../../shared";
import './index.scss'

export default function ProfileTemplate() {
    return (
        <Box className={'ProfileTemplate-Wrapper'}>
            <Grid container spacing={2}>
                {
                    Array.from(Array(20).keys()).map((e: any) => <TemplatePreview {...e} />)
                }
            </Grid>
        </Box>
    )
}


function TemplatePreview() {
    return (
        <Grid item xl={2}>
            <Paper variant={'outlined'} sx={{ borderRadius: 2 }} className="template-individual">

                <Box className={'template-controls'}>
                    <Divider />
                    <Button sx={{ mt: 1, ml: 1 }}>
                        Apply
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}