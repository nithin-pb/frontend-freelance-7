import { useEffect, useState } from "react";
import { Box, Typography, Divider, Collapse, IconButton as MuiIconButton, Paper, TextField } from "@mui/material";
import { Language, Twitter, Instagram, Facebook, LinkedIn, DeleteOutline, KeyboardArrowDown } from "@mui/icons-material";

import { IconButton } from "../../shared";
import AddNewSocialMedia from "../AddNewSocialMedia";

//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'

export function SocialMedia() {
    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <Typography >
                    Social Profile Info
                </Typography>

            </Box>
            <Divider sx={{ mt: 1 }} />
            <SocialMediaAndWebsite />
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
                <SocialMediaCmt icon={<Language sx={{ color: 'red' }} />} name={'Websites'} />
                <SocialMediaCmt icon={<Twitter sx={{ color: '#008eff' }} />} name={'Twitter'} />
                <SocialMediaCmt icon={<Instagram sx={{ color: '#ff00db' }} />} name={'Instagram'} />
                <SocialMediaCmt icon={<Facebook sx={{ color: '#008eff' }} />} name={'Facebook'} />
                <SocialMediaCmt icon={<LinkedIn sx={{ color: '#007bff' }} />} name={'LinkedIn'} />
                <SocialMediaCmt icon={<img src={skypeIcon} style={{ width: 16, marginLeft: 2 }} />} name={'Skype'} />
            </Box>
        </Box>
    )
}

function SocialMediaCmt(props: any) {
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
                </Paper>
            </Collapse>
        </Box>

    )
}