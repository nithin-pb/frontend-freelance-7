import { Box } from "@mui/material";
import { Button } from "../../shared";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";

export function Action() {
    return (
        <Box mt={2} display={'flex'} justifyContent={'flex-start'} gap={1}>
            <Link to={'/dashboard/roles/list'}>
                <Button variant={'outlined'} startIcon={<KeyboardArrowLeft />}>
                    Back
                </Button>
            </Link>
            <Button variant={'contained'} type={'submit'}>
                Create
            </Button>
        </Box>
    )
}