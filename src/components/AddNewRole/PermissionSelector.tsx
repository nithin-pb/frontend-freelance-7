import { useEffect, useState } from "react";
import { Box, Checkbox, Divider, Typography, Paper } from "@mui/material";

import { useRoles } from "../../hooks/query";
import { AccordionSummary, AccordionDetails, AccordionWrapper } from "../../shared";
import { permissions } from "./permissions";

export function PermissionSelector() {
    const [permissionBlock, setPermissionBlock] = useState([])

    useEffect(() => {

        const tempPermission = Object.entries(permissions).reduce((acc: any, curr: any) => {
            const tempKey = {
                name: curr[0],
                values: curr[1].map((e: any) => {
                    return ({
                        key: e,
                        value: false
                    })
                })
            }
            acc.push(tempKey)
            return acc
        }, [])
        setPermissionBlock(tempPermission)
    }, [])


    const onPermissionChange = (event: any, permissionName: any) => {
        setPermissionBlock((current: any) => {
            return current.map((e: any) => {
                if (e.name !== permissionName) {
                    return e
                }
                const newPermissions = e.values.map((inner: any) => {
                    if (inner.key === event.target.name) {
                        return {
                            key: inner.key,
                            value: event.target.checked
                        }
                    }
                    return inner
                })
                return ({
                    name: permissionName,
                    values: newPermissions
                })

            })
        })
    }

    return (
        <Box mt={2}>
            <Box>
                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Typography >
                        Role Details
                    </Typography>
                </Box>
                <Divider sx={{ mt: 1 }} />
            </Box>
            <Box mt={3}>
                {
                    permissionBlock.map((e: any, index: number) => {
                        return (
                            <AccordionWrapper
                                sx={{
                                    borderTopRightRadius: index === 0 ? '10px' : 0,
                                    borderTopLeftRadius: index === 0 ? '10px' : 0,
                                    borderBottomLeftRadius: index === (permissionBlock.length - 1) ? '10px' : 0,
                                    borderBottomRightRadius: index === (permissionBlock.length - 1) ? '10px' : 0,
                                    overflow: 'hidden'
                                }}
                                key={e.name}>
                                <AccordionSummary>
                                    <Box display={'flex'} alignItems={'center'} width={'100%'}>
                                        <Typography sx={{ minWidth: '100px' }}>
                                            {e.name}
                                        </Typography>
                                        <Paper variant={'outlined'} sx={{ p: '0px 16px' }}>
                                            <Typography>
                                                Selected {e.values.filter((value: any) => value.value === true).length} of {e.values.length}
                                            </Typography>
                                        </Paper>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box>
                                        {
                                            e.values.map((permission: any) => {
                                                return (
                                                    <Box key={permission.key} display={'flex'} alignItems={'center'}>
                                                        <Checkbox
                                                            checked={permission.value}
                                                            onChange={(event: any) => onPermissionChange(event, e.name)}
                                                            name={permission.key} />
                                                        <Typography>
                                                            {permission.key}
                                                        </Typography>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </AccordionDetails>
                            </AccordionWrapper>
                        )
                    })
                }
            </Box>
            <Divider sx={{ mt: 3 }} />
        </Box >
    )
}