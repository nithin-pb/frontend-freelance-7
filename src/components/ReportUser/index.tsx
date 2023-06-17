import { Box, Typography } from "@mui/material";
import { Button, TextField } from "../../shared";
import { Formik, Form } from "formik";
import { Download } from "@mui/icons-material";

export default function ReportUser() {
    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
                User Report
            </Typography>
            <Formik onSubmit={() => { }} initialValues={{}}>
                <Form>
                    <TextField ignoreFormik={true} name={'search'} label={'Search for name/username/email'} />
                    <Button startIcon={<Download />} variant={'contained'} sx={{ mt: 2 }}> Download </Button>
                </Form>
            </Formik>
        </Box>
    )
}