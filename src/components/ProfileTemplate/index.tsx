import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

//@ts-ignore

import templateExample from '../../assets/images/template-example.png'
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
            <Paper variant={'outlined'} sx={{ borderRadius: 2, overflow: 'hidden' }} className="template-individual">
                <img src={templateExample} style={{ width: '100%', imageRendering: 'auto' }} />
                {/* <Box className={'template-title'}>
                    <Typography variant={'h6'} color={'text.secondary'}>
                        Cool Jazz
                    </Typography>
                </Box> */}
                <Box className={'template-controls'}>
                    <Divider />
                    <Button sx={{ mt: 1, ml: 1 }} variant={'contained'}>
                        Apply
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}