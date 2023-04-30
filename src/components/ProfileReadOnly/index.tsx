import { Box, Grid } from "@mui/material";

import { TitleWidget } from "..";
import { Personal } from './Personal'
import { Contact } from './Contact'
import { ProfileInfo } from './ProfileInfo'
import { ProfileImages } from './ProfileImages'
import { Template } from './Template'
import { Preview } from "./Preview";
import { SocialMedia } from "./SocialMedia";

export default function ProfileReadOnly(props: any) {
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`${props.data?.name || 'Unknown Profile'}`} description={'Profile details and associations'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                    <Grid item md={6}>
                        <Box>
                            <Personal />
                        </Box>
                        <Box mt={3}>
                            <Contact />
                        </Box>
                        <Box mt={3}>
                            <SocialMedia />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
                            <Box>
                                <ProfileImages />
                            </Box>
                            <Box mt={3}>
                                <ProfileInfo />
                            </Box>
                            <Box mt={3}>
                                <Template />
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Preview />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}