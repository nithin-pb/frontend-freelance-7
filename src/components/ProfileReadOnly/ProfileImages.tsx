import { Share, SaveAlt } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";
import { IconButton } from "../../shared";

export function ProfileImages(props: any) {
    //@ts-ignore
    const { data } = { ...props }
    return (
        <Box sx={{ pt: 2, mb: 3 }}>
            <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, mt: 0 }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <img
                        style={{ height: 100, width: 'auto' }}
                        alt={'profile_logo'}
                        src={data?.profie_logo} />
                    <ImageUpload source={data?.profile_image} />
                    <ImageUpload source={data?.qrCode} />
                    <Stack spacing={2}>
                        <IconButton>
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
    const { source }: { source: string } = { ...props }
    return (
        <Paper variant={'outlined'} sx={{ borderRadius: 3, width: 100, height: 100, overflow: 'hidden', position: 'relative' }}>
            <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
                alt={'image-alt'}
                src={source} />
        </Paper>
    )
}