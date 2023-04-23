import { AdminNavigation } from "../../components"
import { Outlet } from "react-router-dom"

import './index.scss'

export default function Admin() {
    return (
        <div className="Admin_MasterClass">
            <AdminNavigation />
            <Outlet />
        </div>
    )
}