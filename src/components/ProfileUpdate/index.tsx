// @ts-nocheck
import { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { Form, Formik } from 'formik'
import { KeyboardArrowLeft, Update } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";

import { useProfile } from "../../hooks/query";
import { TitleWidget, ProfileTemplateWidget } from "..";
import { Template } from './Template';
import { Address } from './Address'
import { Personal } from './Personal'
import { SocialMediaCmpt } from './SocialMedia'
import { More } from './More'
import { ProfileImages } from './ProfileImages'

import { Button } from '../../shared'


const INITIAL_VALUES = {
    "name": "",
    "user_name": "",
    "company_name": "",
    "email": "",
    "designation": "",
    "phone": "",
    "websites": "",
    "address": "",
    "password": "",
    "bio": "",
    "invite": "",
    "refferdBy": "",
    "profile_image": "",
    "profie_logo": "",
    "updatedAt": "",
    "createdAt": "",
    "updatedBy": "",
    "qrCode": "",
}

export default function ProfileUpdate() {
    const [socialMediaState, setSocialMediaState] = useState({})
    const { useUpdateProfile } = useProfile()
    const [socialMediaList, setSocialMediaList] = useState([])
    const [formValue, setFormValue] = useState(INITIAL_VALUES)

    const { useListProfileByUsername } = useProfile()
    const { isSuccess, data, isError, error, isLoading } = useListProfileByUsername
    const { id } = useParams()



    const handleUpdate = async (e: any) => {
        const params = {
            "name": e.name,
            "phone": e.phone,
            "email": e.email,
            "address": e.address,
            "companyName": e.company_name,
            "designation": e.designation,
            "websites": e.websites,
            "bio": e.bio,
            "invite": e.invite,
            "refferdBy": e.refferdBy,
            "userName": e.params
        }
        const response = await useUpdateProfile.mutateAsync(params)
    }

    useEffect(() => {
        const fetchResult = async () => {
            const response = await useListProfileByUsername.mutateAsync(id)
            setFormValue(response?.[0])

            const ssmd = response[0]?.socialMedia.reduce((acc: any, curr: any) => {
                const ids = curr['account_id'].map((e: any) => ({
                    id: new Date().getTime(),
                    name: e
                }))
                acc[curr['media_name']] = ids
                return acc
            }, {})
            setSocialMediaState(ssmd)

        }

        if (id) {
            fetchResult().then()
        }
    }, [])



    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Update Profile - ${id || 'unknown profile'}`} description={'Manage individual profile details'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Formik initialValues={formValue} onSubmit={handleUpdate} enableReinitialize={true}>
                    <Form >
                        <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                            <Grid item md={6}>
                                <Box >
                                    <Personal />
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Address />
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <SocialMediaCmpt
                                        socialMediaState={socialMediaState}
                                        setSocialMediaState={setSocialMediaState}
                                    />
                                </Box>
                                <Divider sx={{ mt: 2 }} />
                                <Box sx={{ py: 2 }} gap={1} display={'flex'}>
                                    <Link to={'/dashboard/profile'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <Button variant={'contained'} startIcon={<KeyboardArrowLeft />}>
                                            Back
                                        </Button>
                                    </Link>
                                    <Button variant={'contained'} startIcon={<Update />} type={'submit'}>
                                        Update All Details
                                    </Button>
                                </Box>
                                <Divider />
                            </Grid>
                            <Grid item md={6}>
                                <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
                                    <ProfileImages data={data?.[0]} />
                                    <Box >
                                        <More profileCreatedBy={data?.[0]?.profile_created_by} />
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
                                        <ProfileTemplateWidget data={data?.[0]} />
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



