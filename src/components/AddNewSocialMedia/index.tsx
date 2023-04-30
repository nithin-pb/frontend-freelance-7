import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

import { Button, Dialog, TextField } from "../../shared";

export default function AddNewSocialMedia() {
    const [socialMediaCreate, setSocialMediaCreate] = useState(false)

    const handleToggle = (e: any) => {
        setSocialMediaCreate((state: boolean) => !state)
    }
    return (
        <Box>
            <Button
                variant={'outlined'}
                startIcon={<Add />}
                sx={{ mt: 1 }}
                onClick={handleToggle}
            >
                New social media
            </Button>
            <Dialog maxWidth={'xs'} open={socialMediaCreate} title={'New Social Media'} handleClose={handleToggle} height={'auto'}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField label={'Name'} />
                        <Box mt={2} display={'flex'} justifyContent={'flex-end'} gap={1}>
                            <Button variant={'contained'}>
                                Add
                            </Button>
                            <Button variant={'outlined'} onClick={handleToggle} >
                                Cancel
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Dialog>
        </Box>
    )
}