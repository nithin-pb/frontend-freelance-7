import { Box, Grid, Typography, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Formik, Form, useField } from "formik";

import { Autocomplete, Button, TextField } from "../../shared";
import { TitleWidget } from "..";
import { KeyboardArrowLeft, Update } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRoles, useUser } from "../../hooks/query";

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    gender: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: ''
}

export default function UserUpdate() {
    const [userData, setUserData] = useState(INITIAL_VALUES)
    const { useUpdateUser, useListUserById } = useUser()
    const { mutateAsync: mutateAsyncList } = useListUserById()
    const { id } = useParams()
    const data = {
        name: 'test'
    }

    const handleUpdate = () => {

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    id: id
                }

                await mutateAsyncList(params)
            } catch (e) {
                console.log(e)
            }
        }
        if (id) {
            fetchData().then()
        }
    }, [id])

    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`User Details - ${data?.name || 'unknown profile'}`} description={'Manage individual user details'} />
            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 600 }} spacing={3}>
                    <Grid item xl={12}>
                        <Formik initialValues={userData} onSubmit={handleUpdate} enableReinitialize={true}>
                            <Form >
                                <Typography>
                                    Basic information
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                    <Grid item xs={6}>
                                        <TextField label={'First Name'} value={''} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Last Name'} value={''} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Email'} value={''} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Gender />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <RoleSelect />
                                    </Grid>
                                </Grid>
                                <Box mt={2}>
                                    <Button variant={'contained'} startIcon={<Update />}>
                                        Update Details
                                    </Button>
                                </Box>
                            </Form>
                        </Formik>
                        <PasswordReset />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}


function PasswordReset() {
    const { useUserPasswordReset } = useUser()
    const { mutateAsync } = useUserPasswordReset()

    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        currentPassword: '',
        currentPasswordConfirm: '',

    })

    const handleUpdate = async () => {
        try {
            const params = {
                ...passwordData
            }
            await mutateAsync(params)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box mt={3}>
            <Formik initialValues={passwordData} onSubmit={handleUpdate}>
                <Form >
                    <Typography>
                        Password Configuration
                    </Typography>
                    <Divider sx={{ mt: 1 }} />
                    <Grid container spacing={3} sx={{ mt: 0.5 }}>
                        <Grid item xs={6}>
                            <TextField label={'New Password'} type={'password'} name={'oldPassword'} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label={'Confirm Password'} type={'password'} name={'currentPassword'} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label={'Current Password'} type={'password'} name={'currentPasswordConfirm'} />
                        </Grid>
                    </Grid>
                    <Box mt={2} gap={2} display={'flex'}>
                        <Link to={'/dashboard/user/list'}>
                            <Button variant={'contained'} startIcon={<KeyboardArrowLeft />}>
                                Back
                            </Button>
                        </Link>

                        <Button variant={'contained'} startIcon={<Update />}>
                            Update Password
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </Box>
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