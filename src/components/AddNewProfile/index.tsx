import { useState } from "react";
import { Box, Grid, } from "@mui/material";
import { Add } from "@mui/icons-material";

import { BasicForm } from "./Form";
import { Button, Dialog } from "../../shared";

export default function AddNewProfile() {
    const [socialMediaCreate, setSocialMediaCreate] = useState(false)

    const handleToggle = (e: any) => {
        setSocialMediaCreate((state: boolean) => !state)
    }

    return (
        <Box>
            <Button variant={'contained'} startIcon={<Add />} onClick={handleToggle}>
                Add New Profile
            </Button>

            <Dialog maxWidth={'lg'} open={socialMediaCreate} title={'Add New Profile'} handleClose={handleToggle} height={'auto'}>
                <Grid container>
                    <Grid item xs={12}>
                        <BasicForm onClose={handleToggle} />
                    </Grid>
                </Grid>
            </Dialog>
        </Box>
    )
}