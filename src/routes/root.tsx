import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, NotFound, Login, Admin, AdminUser, ProfileManagement } from '../pages'
import {
    ProfileManagement as ProfileManagementCmt,
    ProfileUpdate,
    AdminUser as AdminUserCmt,
    UserUpdate
} from '../components'

export default function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Admin />}>
                <Route path='user' element={<AdminUser />} >
                    <Route path="" element={<Navigate to="list" replace />} />
                    <Route path='list' element={<AdminUserCmt />} />
                    <Route path=':id' element={<UserUpdate />} />
                </Route>
                <Route path='profile' element={<ProfileManagement />}>
                    <Route path="" element={<Navigate to="list" replace />} />
                    <Route path='list' element={<ProfileManagementCmt />} />
                    <Route path=':id' element={<ProfileUpdate />} />
                </Route>
                <Route path='reports' element={<AdminUser />} />
                <Route path='download-center' element={<AdminUser />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
