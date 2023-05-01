import { Box, Grid, Typography, Divider } from "@mui/material";
import { Form, Formik } from 'formik'

import { TitleWidget, ProfileTemplateWidget } from "..";
import { Template } from './Template';
import { Address } from './Address'
import { Personal } from './Personal'
import { SocialMediaCmpt } from './SocialMedia'
import { More } from './More'
import { ProfileImages } from './ProfileImages'

import { Button } from '../../shared'
import { KeyboardArrowLeft, Update } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProfileUpdate() {
    const data = {
        name: 'test'
    }
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Update Profile - ${data?.name || 'unknown profile'}`} description={'Manage individual profile details'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Formik initialValues={[]} onSubmit={() => { }}>
                    <Form >
                        <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                            {/* <Grid item xs={12}>
                                <Hero />
                            </Grid> */}
                            <Grid item md={6}>
                                <Box >
                                    <Personal />
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Address />
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <SocialMediaCmpt />
                                </Box>
                                <Divider sx={{ mt: 2 }} />
                                <Box sx={{ py: 2 }} gap={1} display={'flex'}>
                                    <Link to={'/dashboard/profile'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <Button variant={'contained'} startIcon={<KeyboardArrowLeft />}>
                                            Back
                                        </Button>
                                    </Link>
                                    <Button variant={'contained'} startIcon={<Update />}>
                                        Update All Details
                                    </Button>

                                </Box>
                                <Divider />

                            </Grid>
                            <Grid item md={6}>
                                <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
                                    <ProfileImages />
                                    <Box >
                                        <More />
                                    </Box>
                                    <Box sx={{ mt: 3 }}>
                                        <Typography>
                                            Profile Templates
                                        </Typography>
                                        <Divider sx={{ mt: 1 }} />
                                        <Template />

                                    </Box>
                                    <Box sx={{ mt: 3 }}>
                                        <Typography>
                                            Preview
                                        </Typography>
                                        <Divider sx={{ mt: 1, mb: 3 }} />
                                        <ProfileTemplateWidget />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Box >
        </Box >
    )
}



