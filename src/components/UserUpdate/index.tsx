import { Box, Grid, Typography, Divider } from "@mui/material";
import { Formik, Form } from "formik";

import { Button, TextField } from "../../shared";
import { TitleWidget } from "..";
import { Update } from "@mui/icons-material";

export default function UserUpdate() {

    const data = {
        name: 'test'
    }

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`User Details - ${data?.name || 'unknown profile'}`} description={'Manage individual user details'} />

            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 600 }} spacing={3}>
                    <Grid item xl={12}>
                        <Formik initialValues={[]} onSubmit={() => { }}>
                            <Form >
                                <Typography>
                                    Basic information
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                    <Grid item xs={6}>
                                        <TextField label={'First Name'} value={'Jane'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Last Name'} value={'Doe'} />
                                    </Grid>
                                </Grid>
                                <Box mt={2}>
                                    <Button variant={'contained'} startIcon={<Update />}>
                                        Update Details
                                    </Button>
                                </Box>
                            </Form>
                        </Formik>
                        <Box mt={3}>
                            <Formik initialValues={[]} onSubmit={() => { }}>
                                <Form >
                                    <Typography>
                                        Password Configuration
                                    </Typography>
                                    <Divider sx={{ mt: 1 }} />
                                    <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                        <Grid item xs={6}>
                                            <TextField label={'New Password'} type={'password'} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField label={'Confirm Password'} type={'password'} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField label={'Current Password'} type={'password'} />
                                        </Grid>
                                    </Grid>
                                    <Box mt={2}>
                                        <Button variant={'contained'} startIcon={<Update />}>
                                            Update Password
                                        </Button>
                                    </Box>
                                </Form>
                            </Formik>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}