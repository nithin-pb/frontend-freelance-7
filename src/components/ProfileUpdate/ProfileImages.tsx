import { useState } from "react";
import { Share, SaveAlt, Update } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";
import { IconButton } from "../../shared";
import { ProfileShare, ProfileImagePreviewAndUpdate } from ".."

//@ts-ignore
import noImageFound from '../../assets/images/no-image.jpg'

export function ProfileImages(props: any) {
    //@ts-ignore
    const { data } = { ...props }
    const [shareOpen, setShareOpen] = useState(false)
    const [imageUploadOption, setImageUploadOption] = useState<null | string>(null)

    const handleShareToggle = () => {
        setShareOpen((current: boolean) => !current)
    }


    const handleImageUpload = (e: string) => {
        setImageUploadOption(e)
    }

    const handleUploadClose = () => {
        setImageUploadOption(null)
    }


    return (
        <Box sx={{ pt: 2, mb: 3 }}>
            <ProfileShare open={shareOpen} onClose={handleShareToggle} data={data} />
            {
                Boolean(imageUploadOption) && <ProfileImagePreviewAndUpdate
                    data={data}
                    type={imageUploadOption}
                    open={Boolean(imageUploadOption)}
                    onClose={handleUploadClose}
                />
            }
            <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, mt: 0 }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <ImageUpload
                        source={data?.profie_logo || noImageFound}
                        alt={'logo_image'}
                        onClick={(e: any) => handleImageUpload('logo')}
                    />
                    <ImageUpload
                        source={data?.profile_image || noImageFound}
                        alt={'profile_image'}
                        onClick={(e: any) => handleImageUpload('profile')}
                    />
                    <ImageUpload source={data?.qr_code || noImageFound} nonEditable={true} alt={'qr_code'} />
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
    const { source, nonEditable = false, alt = "", onClick }: { source: string, nonEditable: boolean, alt: string, onClick: any } = { ...props }
    return (
        <Paper variant={'outlined'}
            onClick={onClick}
            sx={{ borderRadius: 3, width: 100, height: 100, overflow: 'hidden', position: 'relative' }}>
            <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
                alt={alt}
                src={source} />
            {!nonEditable && <ImageEdit />}
        </Paper>
    )
}

function ImageEdit() {
    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "radial-gradient(#00000063, #000000c9)",
            display: 'grid',
            placeItems: 'center',
            color: 'white',
            opacity: 0,
            transition: '0.3s',
            '&:hover': {
                opacity: 1,
                transition: '0.3s',
            }
        }}>
            <IconButton>
                <Update sx={{ color: 'white' }} />
            </IconButton>
        </Box>
    )
}