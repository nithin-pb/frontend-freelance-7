import { Box, Paper, Stack, Typography } from "@mui/material";
import { EmailOutlined, MessageOutlined, WhatsApp } from "@mui/icons-material";

import { Dialog } from "../../shared";
import './index.scss'

export default function ProfileShare(props: IProfileShare) {
    const { open, onClose, data } = { ...props }

    const message = `${data.invite} \n${data.url}`
    return (
        <Box>
            <Dialog title={'Share profile with others'} handleClose={onClose} open={open}>
                <Paper elevation={0} sx={{ borderRadius: 2, p: 2 }} >
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {message}
                    </Typography>
                </Paper>
                <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, mt: 2 }}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <a href={`whatsapp://send/?text=${message}`}>
                            <WhatsApp sx={{ fontSize: 32, color: '#075e54' }} />
                        </a>
                        <a href={`sms:444?body=${message}`}>
                            <MessageOutlined sx={{ fontSize: 32, color: '#0456ec' }} />
                        </a>
                        <a href={`mailto:?body=${message}`}>
                            <EmailOutlined sx={{ fontSize: 32, color: '#b70646' }} />
                        </a>
                    </Stack>
                </Paper>
            </Dialog>
        </Box>
    )
}


interface IProfileShare {
    open: boolean,
    onClose: any,
    data: any
}