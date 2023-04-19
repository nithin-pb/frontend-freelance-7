import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

import "./index.scss"

const navigationMenuItems = [
    {
        name: 'Profile Management',
        link: '/admin/profile',
        icon: ''
    },
    {
        name: 'User Management',
        link: '/admin/user',
        icon: ''
    },
    {
        name: 'Reports',
        link: '/admin/reports',
        icon: ''
    },
    {
        name: 'Download Center',
        link: '/admin/download-center',
        icon: ''
    },
]


export default function AdminNavigation() {
    return (
        <nav>
            <div className="navigation-icon">
            </div>
            <ul>
                {
                    navigationMenuItems.map((e: any) => {
                        return (
                            <li>
                                <Link to={e.link}>
                                    <Typography>
                                        {e.name}
                                    </Typography>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}