import { Box, Divider, Paper, Typography } from "@mui/material";
import { Button } from "../../../shared";
import { EmailOutlined, LocalPhoneOutlined, LocationOnOutlined } from "@mui/icons-material";

export default function Earth() {
    return (
        <Box
            display={'flex'}
            height={'100%'}
            flexDirection={'column'}
            alignItems={'center'}
            sx={{
                p: 3,
                backgroundSize: 'cover',
                background: 'url("https://wallpapertag.com/wallpaper/full/c/8/7/509852-winter-snow-scenes-wallpaper-1920x1200-for-mobile.jpg")'
            }}
        >
            <Box display={'flex'} justifyContent={'space-between'}>
                <Paper variant="outlined" sx={{ borderRadius: '50%', height: 100, width: 100, overflow: 'hidden' }}>
                    <img src={imageLink} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Paper>
            </Box>
            <Box mt={2}>
                <Typography variant="h6" sx={{ fontWeight: 600 }} align={'center'}>
                    Jane Doe
                </Typography>
                <Typography color={'text.primary'} sx={{ ml: '-2px' }} align={'center'}>
                    HR Manager @ Amazon.com
                </Typography>
            </Box>
            <Box mt={2} >
                <Button sx={{ borderRadius: 30, background: '#006aff' }} variant={'contained'}>
                    Share
                </Button>
                <Button sx={{ borderRadius: 30, ml: 1, background: '#006aff' }} variant={'contained'} >
                    Download
                </Button>
            </Box>

            <Box mt={2} width={'100%'} >
                <Divider sx={{ mb: 2 }} />
                <Property name={'Email'} icon={EmailOutlined} value={'test@testoutline.com'} />
                <Property name={'Phone'} icon={LocalPhoneOutlined} value={'+(91)-985652235'} />
                <Property name={'Address'} icon={LocationOnOutlined} value={'test test\ntest\ntest, 685552'} />
            </Box>
        </Box>
    )
}


function Property(props: any) {
    const { name, value, icon: Icon }: { name: string, value: any, icon: any } = { ...props }
    return (
        <Box display={'flex'} gap={0.5} mb={1}>
            <Icon sx={{ mt: 0.5 }} />
            <Typography sx={{ whiteSpace: 'pre-line' }}>
                {value}
            </Typography>
        </Box>
    )
}

const imageLink = "https://top10tale.com/wp-content/uploads/2017/03/beautiful-face-1-1.jpg"