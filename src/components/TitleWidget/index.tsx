import { Box, Typography } from "@mui/material";

export default function TitleWidget(props: any) {
    const { title, description }: { title: string, description: string } = { ...props }
    return (
        <Box p={2}>
            <Typography variant={'h5'} sx={{ fontWeight: 600 }}>
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </Box>
    )
}