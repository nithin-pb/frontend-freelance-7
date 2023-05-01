import { Share, SaveAlt, Update } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";
import { IconButton } from "../../shared";

export function ProfileImages() {
    return (
        <Box sx={{ pt: 2, mb: 3 }}>
            <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, mt: 0 }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <img
                        style={{ height: 100, width: 'auto' }}
                        src="https://th.bing.com/th/id/R.d968aaa271651e20446d370a31a1d022?rik=BgBZFAA%2bxdC%2bdQ&riu=http%3a%2f%2fwww.vectorico.com%2fwp-content%2fuploads%2f2018%2f11%2famazon-icon.png&ehk=B5cicXKWS9wGMbenFo9JkqbXaVoLi%2fhRSnlBtQJyvm4%3d&risl=&pid=ImgRaw&r=0" />
                    {/* <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, width: 100, height: 100 }} />
                    <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, width: 100, height: 100 }} /> */}
                    <ImageUpload source={'https://cdn.fstoppers.com/styles/full/s3/media/2017/09/10/1_use_psychology_to_take_better_photographs.jpeg'} />
                    <ImageUpload source={'https://th.bing.com/th/id/OIP.7xGQKpUtezOy0cDWXQExxQHaHa?pid=ImgDet&rs=1'} nonEditable={true} />
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
    const { source, nonEditable = false }: { source: string, nonEditable: boolean } = { ...props }
    return (
        <Paper variant={'outlined'} sx={{ borderRadius: 3, width: 100, height: 100, overflow: 'hidden', position: 'relative' }}>
            <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
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