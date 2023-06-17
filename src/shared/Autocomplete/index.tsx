import { FormControl, InputLabel, Autocomplete as MuiAutocomplete, TextField, Typography, styled } from '@mui/material'
//import { TextField } from '..'


export default function Autocomplete(props: any) {
    const { label, options, ...otherProps }: { label: string, options: any[] } = { ...props }
    return (
        <FormControl fullWidth>
            <InputLabel shrink htmlFor={`${label.replaceAll(' ', '')}`} sx={{ ml: -1.5 }}>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {label}
                </Typography>
            </InputLabel >
            <MuiAutocomplete
                sx={{ mt: 2 }}
                options={options || []}
                {...otherProps}
                renderInput={(params) => <LocalTextField {...params} />}
            />
        </FormControl>
    )
}


function LocalTextField(props: any) {
    const { label, ...otherProps }: { label: string } = { ...props }
    return (
        <ValidationTextField {...otherProps} name={props.name} size='small' />
    )
}

const ValidationTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: 8,
        background: '#fcfcfb',
        fontSize: 14,
        borderColor: '#ced4da'
    }
});