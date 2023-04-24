import { useEffect, useState } from "react";
import { Box, Typography, Divider, Collapse, Paper, IconButton as MuiIconButton, Dialog } from "@mui/material";
import { Language, LinkedIn, Instagram, Facebook, Twitter, KeyboardArrowDown, Add, Save, DeleteOutline } from "@mui/icons-material"

import { TextField, IconButton, Button } from "../../shared";
//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'

export function SocialMediaCmpt() {
    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <Typography >
                    Social Profile Info
                </Typography>

            </Box>
            <Divider sx={{ mt: 1 }} />
            <SocialMediaAndWebsite />
            <Box sx={{ mt: 1 }}>
                <Typography color={'text.secondary'}>
                    Create new social media from below
                </Typography>
                <Button variant={'outlined'} startIcon={<Add />} sx={{ mt: 1 }}>New social media</Button>
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
                <SocialMedia icon={<Language sx={{ color: 'red' }} />} name={'Websites'} />
                <SocialMedia icon={<Twitter sx={{ color: '#008eff' }} />} name={'Twitter'} />
                <SocialMedia icon={<Instagram sx={{ color: '#ff00db' }} />} name={'Instagram'} />
                <SocialMedia icon={<Facebook sx={{ color: '#008eff' }} />} name={'Facebook'} />
                <SocialMedia icon={<LinkedIn sx={{ color: '#007bff' }} />} name={'LinkedIn'} />
                <SocialMedia icon={<img src={skypeIcon} style={{ width: 16, marginLeft: 2 }} />} name={'Skype'} />
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
            <Box display={'flex'} alignItems={'center'} mt={2} gap={1}>
                <Box sx={{ width: 20 }}>
                    {icon}
                </Box>
                <Typography sx={{ width: 80 }}>
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