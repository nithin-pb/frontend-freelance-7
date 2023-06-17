import { Box, Stack, Paper } from "@mui/material";
import { TitleWidget } from "..";
import ReportUser from "../ReportUser";
import ReportCustomer from "../ReportCustomer";

export default function Reports() {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Manage Reports`} description={'Mange reports for your profiles and users'} />

            <Stack direction={'row'} spacing={2} mt={3} ml={2} maxWidth={600}>
                <Paper sx={{ borderRadius: 3, p: 2 }} variant={'outlined'}>
                    <ReportUser />
                </Paper>
                <Paper sx={{ borderRadius: 3, p: 2 }} variant={'outlined'}>
                    <ReportCustomer />
                </Paper>
            </Stack>
        </Box >
    )
}