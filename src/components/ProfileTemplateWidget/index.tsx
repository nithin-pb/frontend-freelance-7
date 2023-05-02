import { Box, Paper } from "@mui/material";

export default function ProfileTemplateWidget(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    return (
        <Paper sx={{ borderRadius: 3, overflow: 'hidden' }} variant={'outlined'}>
            <Box sx={{ background: '#e9e9e9', minHeight: 500 }}>

            </Box>
        </Paper>
    )
}