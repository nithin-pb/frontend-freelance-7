import { Box, Divider, Dialog as MuiDialog, Typography } from "@mui/material"
import { DialogProps } from "@mui/material"
import { IconButton } from ".."
import { CloseOutlined } from "@mui/icons-material"

export default function Dialog(props: IDialog) {
    const { title, handleClose, children, height = '100px' } = { ...props }
    return (
        <MuiDialog PaperProps={{ sx: { borderRadius: 4 } }} {...props} fullWidth>
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1000, right: 0, background: 'white', overflow: 'hidden' }}>
                    <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'space-between'} sx={{ p: 2 }}>
                        <Typography sx={{ fontSize: 18, fontWeight: 600 }} variant={'body1'}>
                            {title}
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseOutlined />
                        </IconButton>
                    </Box>
                    <Divider />
                </Box>
                <Box p={2} height={height} overflow={'auto'}>
                    {children}
                </Box>
            </Box>
        </MuiDialog>
    )
}

interface IDialog extends DialogProps {
    title: string,
    children: any,
    handleClose: (e: any) => void
    [x: string]: any,
    height?: string | number
}