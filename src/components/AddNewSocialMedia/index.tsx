import { useState } from "react";
import { Add, Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import { Button, Dialog, IconButton, TextField } from "../../shared";
import { Form, Formik } from "formik";

export default function AddNewSocialMedia(props: any) {
    //@ts-ignore
    const { onSubmit } = { ...props }

    const [socialMediaCreate, setSocialMediaCreate] = useState(false)

    const handleToggle = () => {
        setSocialMediaCreate((state: boolean) => !state)
    }

    const handleSubmit = (e: any) => {
        onSubmit(e.socialMedia)
        handleToggle()
    }


    return (
        <Box>
            <Button
                variant={'outlined'}
                startIcon={<Add />}
                sx={{ mt: 1 }}
                onClick={handleToggle}
            >
                New social media
            </Button>
            <Dialog maxWidth={'xs'} open={socialMediaCreate} title={'New Social Media'} handleClose={handleToggle} height={'auto'}>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}>
                    <Form>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography>
                                    Name the social media
                                </Typography>
                                <TextField label={''} name={'socialMedia'} />
                                {/* <Divider sx={{ mt: 3, mb: 2 }} />
                        <Box>
                            <Typography >
                                Provide links to the social media
                            </Typography>
                            <NewSocialMediaValues />
                        </Box> */}
                                <Divider sx={{ ml: -2, mr: -2, mt: 3 }} />
                                <Box mt={2} display={'flex'} justifyContent={'flex-end'} gap={1}>
                                    <Button variant={'contained'} type={'submit'}>
                                        Add
                                    </Button>
                                    <Button variant={'outlined'} onClick={handleToggle} >
                                        Cancel
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>

            </Dialog>
        </Box>
    )
}



function NewSocialMediaValues() {
    const [values, setValues] = useState<any[]>([])

    const handleAdd = () => {
        setValues((current: any) => {
            const id = uuidv4()
            return ([...current, { id: id, value: '' }])
        })
    }

    const handleChange = (id: string, event: any) => {
        setValues((current: any) => {
            return current.map((singleItem: any) => {
                if (current.id === id) {
                    return ({
                        id,
                        value: event.target.value
                    })
                }
                return singleItem
            })

        })
    }

    const handleRemove = (id: string) => {
        setValues((current: any) => {
            return current.filter((singleItem: any) => singleItem.id !== id)
        })
    }

    return (
        <Box>
            {
                values.map((value) => {
                    return (
                        <Box key={value.id} display={'flex'} alignItems={'center'} gap={2} >
                            <TextField label={''} />
                            <IconButton onClick={() => handleRemove(value.id)} sx={{ mt: 1.5 }}>
                                <DeleteOutline />
                            </IconButton>
                        </Box>
                    )
                })
            }
            <Box mt={values.length < 1 ? 1 : 2}>
                <Button onClick={handleAdd} startIcon={<Add />} variant={'outlined'}>
                    Add
                </Button>
            </Box>
        </Box>
    )
}