import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { Button, Dialog } from "../../shared";

export default function ProfileDelete() {
    const [deleteOpen, setDeleteOpen] = useState(false)


    const handleToggle = (e: any) => {
        setDeleteOpen((active: any) => !active)
    }
    return (
        <Box>
            <Dialog title={'Confirm Delete'} handleClose={handleToggle} open={deleteOpen}>
                <Typography>
                    Are you sure you want proceed with this profile deletion?
                    This action cannot be undone.
                </Typography>
                <Box display={'flex'} gap={1} justifyContent={'flex-end'}>
                    <Button color={'danger'} onClick={handleToggle}>
                        Confirm
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}