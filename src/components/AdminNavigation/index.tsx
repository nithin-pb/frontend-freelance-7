import { NavLink } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { SupervisedUserCircleOutlined, AdminPanelSettingsOutlined, AssessmentOutlined, DownloadForOfflineOutlined, SecurityOutlined } from '@mui/icons-material'

import "./index.scss"

const navigationMenuItems = [
    {
        name: 'Profile Management',
        link: '/dashboard/profile',
        icon: <AdminPanelSettingsOutlined />
    },
    {
        name: 'User Management',
        link: '/dashboard/user',
        icon: <SupervisedUserCircleOutlined />
    },
    {
        name: 'Roles & Permissions',
        link: '/dashboard/roles',
        icon: <SecurityOutlined />
    },
    {
        name: 'Reports',
        link: '/dashboard/reports',
        icon: <AssessmentOutlined />
    },
    // {
    //     name: 'Download Center',
    //     link: '/dashboard/download-center',
    //     icon: <DownloadForOfflineOutlined />
    // },
]


export default function AdminNavigation() {
    return (

        <nav>
            <div className="navigation-icon">
                CompanyName
            </div>
            <ul>
                {
                    navigationMenuItems.map((e: any) => {
                        return (
                            <li key={e.name}>
                                <NavLink to={e.link}>
                                    <Box display={'flex'} alignItems={'center'} gap={1}>
                                        {e.icon}
                                        <Typography color={'inherit'}>
                                            {e.name}
                                        </Typography>
                                    </Box>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}