import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import { themeList } from '../ProfileThemes/profile-theme-list'
import { Button } from "../../shared";
import './index.scss'

export default function ProfileTemplate() {
    return (
        <Box className={'ProfileTemplate-Wrapper'}>
            <Grid container spacing={2}>
                {
                    themeList.map((e: any) => <TemplatePreview {...e} key={e.name} />)
                }
            </Grid>
        </Box>
    )
}


function TemplatePreview(props: any) {
    const { name, component: ThemeCmt }: { name: string, component: any } = { ...props }
    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Paper variant={'outlined'} sx={{ borderRadius: 2, overflow: 'hidden' }} className="template-individual">
                <ThemeCmt />
                <Box className={'template-controls'}>
                    <Divider />
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Button sx={{ mt: 1, ml: 1 }} variant={'contained'}>
                            Apply
                        </Button>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            {name}
                        </Typography>
                    </Box>

                </Box>
            </Paper>
        </Grid>
    )
}