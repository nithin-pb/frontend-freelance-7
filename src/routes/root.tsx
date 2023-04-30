import { Navigate, Route, Routes } from "react-router-dom";

import {
    HomePage,
    NotFound,
    Login,
    Admin,
    AdminUser,
    ProfileManagement,
    DownloadCenter
} from '../pages'
import {
    ProfileManagement as ProfileManagementCmt,
    ProfileUpdate,
    ProfileReadOnly,
    AdminUser as AdminUserCmt,
    UserUpdate
} from '../components'

export default function RootRoute() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Admin />}>
                <Route path="/dashboard" element={<Navigate to="profile" replace />} />
                <Route path='user' element={<AdminUser />} >
                    <Route path="" element={<Navigate to="list" replace />} />

                    <Route path='list' element={<AdminUserCmt />} />
                    <Route path=':id' element={<UserUpdate />} />
                </Route>
                <Route path='profile' element={<ProfileManagement />}>
                    <Route path="" element={<Navigate to="list" replace />} />
                    <Route path='list/:id' element={<ProfileReadOnly />} />
                    <Route path='list' element={<ProfileManagementCmt />} />
                    <Route path=':id' element={<ProfileUpdate />} />
                </Route>
                <Route path='reports' element={<AdminUser />} />
                <Route path='download-center' element={<DownloadCenter />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
