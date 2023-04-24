import { Box, Grid, Typography, Divider } from "@mui/material";
import { Form, Formik } from 'formik'

import { TitleWidget, ProfileTemplateWidget } from "..";
import { Template } from './Template';
import { Address } from './Address'
import { Personal } from './Personal'
import { SocialMediaCmpt } from './SocialMedia'
import { More } from './More'
import { Button } from '../../shared'

export default function ProfileUpdate() {
    const data = {
        name: 'test'
    }
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Profile Details - ${data?.name || 'unknown profile'}`} description={'Manage individual profile details'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                    <Grid item md={6}>
                        <Formik initialValues={[]} onSubmit={() => { }}>
                            <Form >
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
                                <Box sx={{ py: 2 }}>
                                    <Button variant={'contained'}>
                                        Update All Details
                                    </Button>
                                </Box>
                                <Divider />
                            </Form>
                        </Formik>
                    </Grid>
                    <Grid item md={6}>
                        <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
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
            </Box >
        </Box >
    )
}



