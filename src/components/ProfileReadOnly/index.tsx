import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useProfile } from "../../hooks/query";
import { TitleWidget } from "..";
import { Personal } from './Personal'
import { Contact } from './Contact'
import { ProfileInfo } from './ProfileInfo'
import { ProfileImages } from './ProfileImages'
import { Template } from './Template'
import { Preview } from "./Preview";
import { SocialMedia } from "./SocialMedia";

export default function ProfileReadOnly(props: any) {
    const { useListProfileByUsername } = useProfile()
    const { isSuccess, data, isError, error, isLoading } = useListProfileByUsername
    const { id } = useParams()

    useEffect(() => {
        const fetchResult = async () => {
            const response = await useListProfileByUsername.mutateAsync(id)
        }

        if (id) {
            fetchResult().then()
        }
    }, [])
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`${id || 'Unknown Profile'}`} description={'Profile details and associations'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                    <Grid item md={6}>
                        <Box>
                            <Personal data={data?.[0]} />
                        </Box>
                        <Box mt={3}>
                            <Contact data={data?.[0]} />
                        </Box>
                        <Box mt={3}>
                            <SocialMedia data={data?.[0]} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
                            <Box>
                                <ProfileImages data={data?.[0]} />
                            </Box>
                            <Box mt={3}>
                                <ProfileInfo data={data?.[0]} />
                            </Box>
                            <Box mt={3}>
                                <Template data={data?.[0]} />
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Preview data={data?.[0]} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}