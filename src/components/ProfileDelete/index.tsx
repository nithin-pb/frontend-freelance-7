import { Box, Divider, Typography, CircularProgress } from "@mui/material";

import { Button, Dialog } from "../../shared";

export default function ProfileDelete(props: IProfileDelete) {
    const { deleteOpen, setDeleteOpen } = { ...props }


    const handleClose = () => {
        setDeleteOpen((active: any) => !active)
    }
    const handleDelete = () => {
        handleClose()
    }

    return (
        <Box>
            <Dialog title={'Confirm Delete'} handleClose={handleDelete} open={deleteOpen}>
                <Typography>
                    Disabling your profile will disable the user from accessing the content.
                    Are you sure you want to proceed with this action?
                    <br />
                    Remember, once you delete your profile, the shared links no longer work.
                </Typography>
                <Box display={'flex'} gap={1} justifyContent={'flex-end'} mt={2}>
                    <Button color={'error'} variant={'contained'} onClick={handleDelete} loading={true}>
                        Confirm
                    </Button>
                    <Button variant={'outlined'} onClick={handleClose}>
                        Cancel
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}


interface IProfileDelete {
    deleteOpen: boolean,
    setDeleteOpen: any
}