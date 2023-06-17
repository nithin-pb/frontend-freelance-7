import { Box, Grid, Typography, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Formik, Form, useField } from "formik";
import { Link } from "react-router-dom";
import { Add, KeyboardArrowLeft } from "@mui/icons-material";

import { Button, TextField, Autocomplete } from "../../shared";
import { TitleWidget } from "..";
import { useUser, useRoles } from "../../hooks/query";
import { userCreateValidation } from '../../validations'
import { useEffect, useState } from "react";

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    gender: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: ''
}

export default function AddNewUser() {
    const { useCreateUser } = useUser()
    const { data, isLoading, isError, isSuccess, error } = useCreateUser()

    const handleSubmit = (e: any) => {
        try {
            console.log(e)
        } catch (e) {
            console.error(e)
        }
    }


    const handleGenderChange = (e: any, value: string) => {
        console.log(value)
    }

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Create User`} description={'Create new user'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 600 }} spacing={3}>
                    <Grid item xl={12}>
                        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={userCreateValidation}>
                            {({ isValid }) => (
                                <Form>
                                    <Typography>
                                        Basic information
                                    </Typography>
                                    <Divider sx={{ mt: 1 }} />
                                    <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                        <Grid item xs={6}>
                                            <TextField label={'First Name'} name={'firstName'} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField label={'Last Name'} name={'lastName'} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField label={'Email'} name={'email'} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Gender />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <RoleSelect />
                                        </Grid>
                                    </Grid>
                                    <Box mt={3}>
                                        <Typography>
                                            Password Configuration
                                        </Typography>
                                        <Divider sx={{ mt: 1 }} />
                                        <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                            <Grid item xs={6}>
                                                <TextField label={'New Password'} type={'password'} name={'password'} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField label={'Confirm Password'} type={'password'} name={'confirmPassword'} />
                                            </Grid>
                                        </Grid>
                                        <Box mt={3} gap={2} display={'flex'}>
                                            <Link to={'/dashboard/user/list'}>
                                                <Button variant={'contained'} startIcon={<KeyboardArrowLeft />}>
                                                    Back
                                                </Button>
                                            </Link>
                                            <Button variant={'contained'} startIcon={<Add />} type={'submit'} disabled={!isValid}>
                                                Create
                                            </Button>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Box >
        </Box >
    )
}


function Gender() {
    const [field, meta] = useField('gender')


    const handleGenderChange = (e: any, value: string) => {
        field.onChange(({
            target: {
                name: 'gender',
                value: value
            }
        }))
    }

    const configTextField = {
        error: false,
        helperText: ''
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }


    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                onChange={handleGenderChange}
                row
                value={field.value}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    )
}


function RoleSelect() {
    const [options, setOptions] = useState<any[]>([])
    const { useListRoles } = useRoles()
    const { isLoading, isSuccess, isError, error, data = [] } = useListRoles()
    const [field, meta] = useField('role')

    useEffect(() => {
        if (isSuccess) {
            setOptions(data.map((e: any) => e.Name))
        }
    }, [isSuccess])


    const handleChange = (event: any, value: string) => {
        field.onChange({
            target: {
                name: 'role',
                value: value
            }
        })
    }

    return (
        <Autocomplete options={options} label={'Role'} onChange={handleChange} loading={isLoading} value={field.value} />
    )
}