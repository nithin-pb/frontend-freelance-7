import { useState } from "react";
import { Share, SaveAlt } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";

import { IconButton } from "../../shared";
import { ProfileShare } from ".."

export function ProfileImages(props: any) {
    //@ts-ignore
    const { data } = { ...props }

    const [shareOpen, setShareOpen] = useState(false)

    const handleShareToggle = () => {
        setShareOpen((current: boolean) => !current)
    }



    return (
        <Box sx={{ pt: 2, mb: 3 }}>
            <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, mt: 0 }}>
                <ProfileShare open={shareOpen} onClose={handleShareToggle} data={data} />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <ImageUpload source={data?.profie_logo} alt={'profile_logo'} />
                    <ImageUpload source={data?.profile_image} alt={'profile_image'} />
                    <ImageUpload source={data?.qr_code} alt={'qr_code'} />
                    <Stack spacing={2}>
                        <IconButton onClick={handleShareToggle}>
                            <Share />
                        </IconButton>
                        <IconButton>
                            <SaveAlt />
                        </IconButton>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    )
}


function ImageUpload(props: any) {
    const { source, alt }: { source: string, alt: string } = { ...props }
    return (
        <Paper variant={'outlined'} sx={{ borderRadius: 3, width: 100, height: 100, overflow: 'hidden', position: 'relative' }}>
            <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
                alt={alt}
                src={source} />
        </Paper>
    )
}