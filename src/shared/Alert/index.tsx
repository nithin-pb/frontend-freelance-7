import { AlertTitle, Alert as MuiAlert } from "@mui/material";
import { apiErrorResponse } from '../../utilities'

export default function Alert(props: IAlertProps) {
    const { isSuccess, isError, successMessage, error } = { ...props }
    if (isError) {
        return (
            <MuiAlert severity="error" sx={{ borderRadius: 2 }}>
                <AlertTitle>{apiErrorResponse(error).error || 'ERROR'}</AlertTitle>
                {apiErrorResponse(error).error || 'unknown error'}
            </MuiAlert>
        )
    }

    if (isSuccess) {
        return (
            <MuiAlert severity="success" sx={{ borderRadius: 2 }}>
                <AlertTitle>Error</AlertTitle>
                {successMessage}
            </MuiAlert>
        )
    }

    return null
}



interface IAlertProps {
    isSuccess?: boolean,
    isError?: boolean,
    successMessage?: string,
    error?: any
}