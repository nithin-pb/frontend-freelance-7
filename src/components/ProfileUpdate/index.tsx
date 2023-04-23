import { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider, Collapse, Paper, IconButton as MuiIconButton, Dialog } from "@mui/material";
import { Language, LinkedIn, Instagram, Facebook, Twitter, KeyboardArrowDown, Add, Save, DeleteOutline, Edit } from "@mui/icons-material"
import { Form, Formik } from 'formik'
//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'
import { TitleWidget, ProfileTemplateWidget } from "..";
import { Template } from './Template';
import { TextField, Button, IconButton } from '../../shared'

export default function ProfileUpdate() {
    const data = {
        name: 'test'
    }
    return (
        <Box style={{ height: '100vh', flex: 1, width: 'calc(100vw - 250px)' }}>
            <TitleWidget title={`Profile Details - ${data?.name || 'unknown profile'}`} description={'Manage individual profile details'} />

            <Box p={2} height={'calc(100vh - 79px)'} overflow={'auto'}>
                <Grid container style={{ maxWidth: 1000 }} spacing={3}>
                    <Grid item xl={6}>
                        <Formik initialValues={[]} onSubmit={() => { }}>
                            <Form >
                                <Typography>
                                    Basic information
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <Grid container spacing={3} sx={{ mt: 0.5 }}>
                                    <Grid item xs={6}>
                                        <TextField label={'Name'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Company Name'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Designation'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Phone'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label={'Email'} />
                                    </Grid>
                                </Grid>
                                <Typography sx={{ mt: 3 }}>
                                    Social Media & Websites
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <SocialMediaAndWebsite />
                            </Form>
                        </Formik>
                    </Grid>
                    <Grid item xl={6}>
                        <Box mt={0} sx={{ borderLeft: '1px solid #0000001f', pl: 3, height: '100%' }}>
                            <Box mb={2}>
                                <Typography>
                                    Profile Templates
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <Template />
                            </Box>
                            <Box>
                                <Typography>
                                    Preview
                                </Typography>
                                <Divider sx={{ mt: 1, mb: 3 }} />
                                <ProfileTemplateWidget />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}



function SocialMediaAndWebsite() {
    const initialValues = {
        website: [],
        skype: [],
        linkedIn: [],
        instagram: [],
        facebook: [],
        twitter: [],
    }
    const [websiteAndSocialMedia, setWebsiteAndSocialMedia] = useState<any>(initialValues)
    return (
        <Box>
            <Box>
                <SocialMedia icon={<Language />} name={'Websites'} />
                <SocialMedia icon={<Twitter />} name={'Twitter'} />
                <SocialMedia icon={<Instagram />} name={'Instagram'} />
                <SocialMedia icon={<Facebook />} name={'Facebook'} />
                <SocialMedia icon={<LinkedIn />} name={'LinkedIn'} />
                <SocialMedia icon={<img src={skypeIcon} style={{ width: 18 }} />} name={'Skype'} />
            </Box>

        </Box>
    )
}



function SocialMedia(props: any) {
    const { icon, name, data = [] }: { icon: any, name: string, data: any } = { ...props }
    const [open, setOpen] = useState(false)
    const [socialMedia, setSocialMedia] = useState(data || [])


    const handleAddButton = () => {
        setSocialMedia((oldData: any) => {
            const newId = oldData.reduce((acc: any, curr: any) => {
                if (acc > curr.id) return acc
                acc = curr.id
                return acc
            }, 0) + 1
            return [...oldData, { id: newId, name: '' }]
        })
    }

    const handleDelete = (id: any) => {
        setSocialMedia((oldData: any) => {
            return oldData.filter((e: any) => e.id !== id)
        })
    }

    useEffect(() => {
        setSocialMedia([...data].map((e: any, index: number) => ({ id: index, name: e })))
    }, [])

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} mt={2} gap={0.5}>
                {icon}
                <Typography>
                    {name}
                </Typography>
                <MuiIconButton size={'small'} onClick={() => setOpen((e: any) => !e)}>
                    <KeyboardArrowDown />
                </MuiIconButton>
            </Box>
            <Collapse in={open}>
                <Paper variant={'outlined'} sx={{ borderRadius: 2.5, p: 2, mt: 1, }} >
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: socialMedia.length === 0 ? 0 : 8 }}>
                        {socialMedia.length !== 0 && <Typography> Edit or Add {name}</Typography>}
                        {socialMedia.length === 0 && <Typography> No {name} found</Typography>}
                        {socialMedia.map((e: any) => (
                            <li key={e.id}>
                                <Box display={'flex'} gap={1} alignItems={'center'}>
                                    <TextField label={''} value={e.name} />
                                    <IconButton sx={{ mt: 1.8 }} onClick={() => handleDelete(e.id)}>
                                        <DeleteOutline />
                                    </IconButton>
                                </Box>
                            </li>
                        ))}
                    </ul>
                    <Box display={'flex'} gap={1}>
                        <Button startIcon={<Save />} size={'small'} sx={{ mt: 1 }}>
                            Save
                        </Button>
                        <Button startIcon={<Add />} size={'small'} sx={{ mt: 1 }} onClick={handleAddButton}>
                            Add {name}
                        </Button>
                    </Box>

                </Paper>
            </Collapse>
        </Box>

    )
}