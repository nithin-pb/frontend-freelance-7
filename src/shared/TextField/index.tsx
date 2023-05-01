import { FormControl, InputBase, InputBaseProps, InputLabel, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { useField } from "formik";

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


export default function TextField(props: ITextField | any) {
    const { label = '', name = null, helperText = null, ignoreFormik = false, ...otherProps } = { ...props }

    const [field, meta] = useField(name || label);

    const configTextField = {
        error: false,
        helperText: helperText || ''
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }


    return (
        <FormControl fullWidth>
            <InputLabel shrink htmlFor={`${label.replaceAll(' ', '')}`} sx={{ ml: -1.5 }}>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {label}
                </Typography>
            </InputLabel>
            {
                ignoreFormik ?
                    <BootstrapInput fullWidth  {...otherProps} id={`${label.replaceAll(' ', '')}`} /> :
                    <BootstrapInput fullWidth {...field} {...otherProps} id={`${label.replaceAll(' ', '')}`} />
            }

        </FormControl>

    )
}

interface ITextField extends InputBaseProps {
    label: string,
    value?: any,
    type?: string,
    name?: string,
    helperText?: string,
    ignoreFormik?: boolean
}