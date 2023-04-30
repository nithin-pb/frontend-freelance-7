import { Share, SaveAlt } from "@mui/icons-material";
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
                    <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, width: 100, height: 100 }} />
                    <Paper variant={'outlined'} sx={{ borderRadius: 3, p: 2, width: 100, height: 100 }} />
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