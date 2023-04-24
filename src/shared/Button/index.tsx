import { Button as MuiButton, styled } from '@mui/material'

const BootstrapButton = styled(MuiButton)({
    textTransform: 'none',
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    lineHeight: 1.5,
});


export default function Button(props: any) {
    return (<BootstrapButton {...props} disableElevation />)
}