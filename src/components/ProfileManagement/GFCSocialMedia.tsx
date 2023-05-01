import { useState } from "react";
import { Box, Popover, Typography } from "@mui/material";

export function GridFrameworkComponentSocialMedia(props: IGFCSocialMedia) {
    const { icon, value } = { ...props }
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box mt={1}
            onMouseLeave={handlePopoverClose}
            onMouseEnter={handlePopoverOpen}>
            <Box display={'flex'} alignItems={'center'} mt={1} gap={0.5}>
                {icon}
                {
                    Array.isArray(value) ?
                        <Typography>
                            {value.length}
                        </Typography> :
                        <Typography>
                            {value}
                        </Typography>
                }
            </Box>
            <PopOver
                onMouseEnter={handlePopoverOpen}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                data={value}
                icon={icon}
            />
        </Box >
    )
}


function PopOver(props: IPopOver) {
    const { open, anchorEl, onClose, data, icon, onMouseEnter } = { ...props }
    return (
        <Popover
            onMouseLeave={onClose}
            onMouseEnter={onMouseEnter}
            sx={{
                pointerEvents: 'none',
                zIndex: 1000
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                elevation: 0,
                variant: 'outlined',
                sx: { borderRadius: 2, p: 2, pt: 1, pb: 1 }
            }}
            onClose={onClose}
            disableRestoreFocus
        >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }} >
                {
                    data.map((e: string) => (
                        <li key={e}>
                            <Box display={'flex'} alignItems={'center'} gap={0.5}>
                                {icon}
                                <Typography sx={{ p: 1 }}>
                                    <a href={e} target="_blank" rel="noreferrer">
                                        {e}
                                    </a>
                                </Typography>
                            </Box>
                        </li>
                    ))
                }

            </ul>

        </Popover>
    )
}

interface IGFCSocialMedia {
    icon: any,
    value: string[] | string | any
}

interface IPopOver {
    open: boolean,
    anchorEl: any,
    onClose: any,
    data: any,
    icon: any,
    onMouseEnter?: any
}