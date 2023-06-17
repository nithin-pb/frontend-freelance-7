import { useEffect, useState } from "react";
import { Box, Typography, Collapse, Paper, IconButton as MuiIconButton, Divider } from "@mui/material";
import { Language, LinkedIn, Instagram, Facebook, Twitter, KeyboardArrowDown, Add, Save, DeleteOutline, InsertLink } from "@mui/icons-material"
import { v4 as uuid } from "uuid";

import { TextField, IconButton, Button } from "../../shared";
import { AddNewSocialMedia } from "..";
//@ts-ignore
import skypeIcon from '../../assets/icons/skype.png'

const defaultSocialMedias = [
    {
        name: 'Facebook',
        icon: <Facebook sx={{ color: '#008eff' }} />
    },
    {
        name: 'Websites',
        icon: <Language sx={{ color: 'red' }} />
    },
    {
        name: 'Twitter',
        icon: <Twitter sx={{ color: '#008eff' }} />
    },
    {
        name: 'Instagram',
        icon: <Instagram sx={{ color: '#ff00db' }} />
    },
    {
        name: 'LinkedIn',
        icon: <LinkedIn sx={{ color: '#007bff' }} />
    },
    {
        name: 'Skype',
        icon: <img src={skypeIcon} style={{ width: 16, marginLeft: 2 }} />
    }
]
export function SocialMediaCmpt(props: any) {
    //@ts-ignore
    const { socialMediaState, setSocialMediaState, socialMediaApiResponse } = { ...props }
    const [socialMediaList, setSocialMediaList] = useState(defaultSocialMedias)

    const handleSocialMediaAdd = (e: any) => {
        setSocialMediaList((socialMediaList) => [...socialMediaList, { name: e, icon: <InsertLink /> }])
        setSocialMediaState((current: any) => ({ ...current, [e]: [] }))
    }

    useEffect(() => {

        const newSList = socialMediaApiResponse.reduce((acc: any, curr: any) => {
            const ids = curr['account_id'].map((e: any) => ({
                id: uuid(),
                name: e
            }))
            acc[curr['media_name']] = ids
            return acc
        }, {})
        setSocialMediaState(newSList)

        const missingMedias = defaultSocialMedias.reduce((acc: any, curr: any) => {
            acc[curr.name.toLowerCase()] = curr
            return acc
        }, {})

        const sList = [...socialMediaApiResponse].map((e: any) => {
            const socialMediaName = e.media_name || e.name
            const isExist = defaultSocialMedias.find((locale: any) => locale.name.toLowerCase() === socialMediaName.toLowerCase())
            if (!isExist) {
                return ({ name: socialMediaName, icon: <InsertLink /> })
            }

            delete missingMedias[socialMediaName.toLowerCase()]
            return { ...isExist, name: socialMediaName }
        })
        //@ts-ignore
        sList.push(...Object.values(missingMedias))
        setSocialMediaList(sList)
    }, [socialMediaApiResponse])

    return (
        <Box mt={-0.5}>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <Typography >
                    Social Profile Info
                </Typography>

            </Box>
            <Divider sx={{ mt: 1 }} />
            <SocialMediaAndWebsite
                state={socialMediaState}
                setState={setSocialMediaState}
                socialMediaList={socialMediaList}
            />
            <Box sx={{ mt: 1 }}>
                <Typography color={'text.secondary'}>
                    Create new social media from below
                </Typography>
                <AddNewSocialMedia onSubmit={handleSocialMediaAdd} />
            </Box>
        </Box>
    )
}


function SocialMediaAndWebsite(props: any) {
    //@ts-ignore
    const { state, setState, socialMediaList } = { ...props }



    const handleAddButton = (socialMedia: string) => {
        setState((oldData: any) => {
            const newId = uuid()
            return { ...oldData, [socialMedia]: [...oldData[socialMedia], { id: newId, name: '' }] }
        })
    }

    const handleDelete = (socialMedia: string, id: any) => {
        setState((oldData: any) => {
            return { ...oldData, [socialMedia]: oldData[socialMedia].filter((e: any) => e.id !== id) }
        })
    }

    const handleValueUpdate = (socialMedia: string, id: any, value: any) => {
        setState((oldData: any) => {
            return {
                ...oldData, [socialMedia]: oldData[socialMedia].map((e: any) => {
                    if (e.id === id) {
                        e.name = value
                        return e
                    }
                    return e
                })
            }
        })
    }

    return (
        <Box>
            <Box>
                {
                    socialMediaList.map((e: any) => {
                        return (
                            <SocialMedia
                                key={e.name}
                                icon={e.icon}
                                onValueUpdate={handleValueUpdate}
                                name={e.name}
                                onAdd={handleAddButton}
                                onDelete={handleDelete}
                                data={state} />
                        )
                    })
                }
            </Box>
        </Box>
    )
}



function SocialMedia(props: any) {
    //@ts-ignore
    const { icon, name, data = [], onDelete, onAdd, onValueUpdate }: { icon: any, name: string, data: any } = { ...props }
    const [open, setOpen] = useState(false)


    const handleValueUpdate = (e: any, name: string, id: any) => {
        onValueUpdate(name, id, e.target.value)
    }
    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} mt={2} gap={1}>
                <Box sx={{ width: 20, mt: 0.5 }}>
                    {icon}
                </Box>
                <Typography sx={{ width: 100 }}>
                    {name}
                </Typography>
                <MuiIconButton size={'small'} onClick={() => setOpen((e: any) => !e)}>
                    <KeyboardArrowDown />
                </MuiIconButton>
            </Box>
            <Collapse in={open}>
                <Paper variant={'outlined'} sx={{ borderRadius: 2.5, p: 2, mt: 1, }} >
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: data[name]?.length === 0 ? 0 : 8 }}>
                        {data[name]?.length !== 0 && <Typography> Edit or Add {name}</Typography>}
                        {data[name]?.length === 0 && <Typography> No {name} found</Typography>}
                        {data[name]?.map((e: any) => (
                            <li key={e.id}>
                                <Box display={'flex'} gap={1} alignItems={'center'}>
                                    <TextField
                                        label={''}
                                        ignoreFormik={true}
                                        name={`${name}-${e.id}`}
                                        value={e.name || ''}
                                        onChange={(event: any) => handleValueUpdate(event, name, e.id)} />
                                    <IconButton sx={{ mt: 1.8 }} onClick={() => onDelete(name, e.id)}>
                                        <DeleteOutline />
                                    </IconButton>
                                </Box>
                            </li>
                        ))}
                    </ul>
                    <Box display={'flex'} gap={1}>
                        <Button startIcon={<Add />} size={'small'} sx={{ mt: 1 }} onClick={() => onAdd(name)} variant={'outlined'}>
                            Add {name}
                        </Button>
                    </Box>

                </Paper>
            </Collapse>
        </Box>
    )
}
