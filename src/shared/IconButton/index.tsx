import { IconButton as MuiIconButton, styled } from "@mui/material"

const BootstrapButton = styled(MuiIconButton)({
    textTransform: 'none',
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    border: '1px solid #ced4da',
    lineHeight: 1.5,
});

export default function IconButton(props: any) {
    return (
        <BootstrapButton {...props} />
    )
}