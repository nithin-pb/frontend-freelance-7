import { FormControl, InputBase, InputLabel, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2)
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 14,
        borderRadius: 8,
        width: '100%',
        padding: '8px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 1)} 0 0 0 0.05rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));


export default function TextField(props: ITextField) {
    const { label, ...otherProps } = { ...props }
    return (
        <FormControl fullWidth>
            <InputLabel shrink htmlFor={`${label.replaceAll(' ', '')}`} sx={{ ml: -1.5 }}>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {label}
                </Typography>
            </InputLabel>
            <BootstrapInput fullWidth {...otherProps} id={`${label.replaceAll(' ', '')}`} />
        </FormControl>

    )
}

interface ITextField {
    label: string,
    value?: any,
    type?: string
}