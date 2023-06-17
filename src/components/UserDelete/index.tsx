import { Box, Typography } from "@mui/material";

import { Button, Dialog } from "../../shared";

export default function UserDelete(props: IDelete) {
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
                    Are you sure you want to delete this user?
                    Deleting the user will permanently remove access to this tool.
                    This action cannot be undone.<br />
                    Please confirm your decision to proceed with the deletion of the role.
                </Typography>
                <Box display={'flex'} gap={1} justifyContent={'flex-end'} mt={2}>
                    <Button color={'error'} variant={'contained'} onClick={handleDelete} loading={true}>
                        Confirm
                    </Button>
                    <Button variant={'outlined'} onClick={handleClose}>
                        Cancel
                    </Button>
                </Box>
            </Dialog >
        </Box >
    )
}


interface IDelete {
    deleteOpen: boolean,
    setDeleteOpen: any
}