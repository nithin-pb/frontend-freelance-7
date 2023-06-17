import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading(props: ILoading) {
    const { loading } = { ...props }
    if (!loading) return null
    return (
        <Box display={'flex'} alignItems={'center'} gap={1} ml={2}>
            <CircularProgress size={16} />
            <Typography> We are loading the data for you. Sit tight!</Typography>
        </Box>
    )
}

interface ILoading {
    loading: boolean
}