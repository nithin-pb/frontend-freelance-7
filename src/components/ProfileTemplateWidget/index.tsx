import { Box, Paper } from "@mui/material";
import { themeList } from '../ProfileThemes/profile-theme-list'

export default function ProfileTemplateWidget(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    const Component = themeList.find((e: any) => e.name === 'Earth')?.['component'] || TestUrl
    return (
        <Paper sx={{ borderRadius: 3, overflow: 'hidden' }} variant={'outlined'}>
            <Box sx={{ background: '#e9e9e9' }}>
                <Component />
            </Box>
        </Paper>
    )
}


function TestUrl() {
    return (
        <div>
            test
        </div>
    )
}