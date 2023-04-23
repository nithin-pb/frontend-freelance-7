import { useState } from "react"
import { Box, Typography, IconButton, Dialog, DialogTitle, Divider } from "@mui/material"
import { Edit, CloseOutlined } from "@mui/icons-material"

import { ProfileTemplate } from '..'

export function Template() {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen((e: boolean) => !e)
    }

    return (
        <Box mt={2} display={'flex'} alignItems={'flex-end'}>
            <Box>
                <Typography variant={'body2'} gutterBottom color={'text.secondary'}>
                    Active Profile Template
                </Typography>
                <Typography sx={{ fontWeight: 600 }} variant={'h6'} component={'div'}>
                    CoolJazz
                </Typography>
            </Box>
            <IconButton sx={{ ml: 1 }} onClick={handleToggle}>
                <Edit />
            </IconButton>
            <Dialog open={open} onClose={handleToggle} maxWidth={'xl'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
                <Box sx={{ position: 'relative' }}>
                    <Box sx={{ position: 'sticky', top: 0, zIndex: 1000, right: 0, background: 'white', overflow: 'hidden' }}>
                        <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'space-between'} sx={{ p: 2 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 600 }} variant={'body1'}>
                                Select template
                            </Typography>
                            <IconButton onClick={handleToggle}>
                                <CloseOutlined />
                            </IconButton>
                        </Box>
                        <Divider />
                    </Box>
                    <Box p={2} pb={4} height={'80vh'} overflow={'auto'}>
                        <ProfileTemplate />
                    </Box>
                </Box>
            </Dialog>
        </Box>
    )
}