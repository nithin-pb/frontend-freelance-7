import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useProfileTheme } from "../../hooks";
import { themeList } from '../ProfileThemes/profile-theme-list'
import { Button } from "../../shared";
import './index.scss'

export default function ProfileTemplate() {

    const { setActiveTheme } = useProfileTheme()

    const handleThemeUpdate = (e: any) => {
        setActiveTheme(e)
    }

    return (
        <Box className={'ProfileTemplate-Wrapper'}>
            <Grid container spacing={2}>
                {
                    themeList.map((e: any) => <TemplatePreview {...e} key={e.name} onClick={handleThemeUpdate} />)
                }
            </Grid>
        </Box>
    )
}


function TemplatePreview(props: any) {
    const { name, component: ThemeCmt, onClick }: { name: string, component: any, onClick: any } = { ...props }
    const { activeTheme } = useProfileTheme()

    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Paper variant={'outlined'} sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }} className="template-individual">
                <ThemeCmt />
                <Box className={'template-controls'}>
                    <Divider />
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <Button sx={{ mt: 1, ml: 1 }} variant={'contained'} onClick={() => onClick(name)}>
                                Apply
                            </Button>
                            <Typography variant="h6" sx={{ mt: 1 }}>
                                {name}
                            </Typography>
                        </Box>
                        <Box>
                            {activeTheme === name && <CheckCircleIcon color={'success'} sx={{ mt: 1 }} />}
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}