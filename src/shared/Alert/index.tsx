import { AlertTitle, Alert as MuiAlert } from "@mui/material";


export default function Alert(props: IAlertProps) {
    const { isSuccess, isError, successMessage, errorMessage, error } = { ...props }
    if (isError) {
        return (
            <MuiAlert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage?.message || 'unknown error'}
            </MuiAlert>
        )
    }

    if (isSuccess) {
        return (
            <MuiAlert severity="success">
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
    errorMessage?: any,
    error?: any
}