import { Navigate, Route, Routes } from "react-router-dom";

import {
    NotFound,
    Login,
    Admin,
    AdminUser,
    ProfileManagement,
    DownloadCenter,
    Role,
    Reports
} from '../pages'
import {
    ProfileManagement as ProfileManagementCmt,
    ProfileUpdate,
    ProfileReadOnly,
    AdminUser as AdminUserCmt,
    UserUpdate,
    RoleList,
    AddNewRole,
    RoleUpdate,
    AddNewUser,
    Reports as ReportsCmt
} from '../components'
import { ProtectedRoute } from "./protected-route";

export default function RootRoute() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path='/' element={<ProtectedRoute />} >
                <Route path='dashboard' element={<Admin />}>
                    <Route path="" element={<Navigate to="profile" replace />} />
                    <Route path='user' element={<AdminUser />} >
                        <Route path="" element={<Navigate to="list" replace />} />
                        <Route path="new" element={<AddNewUser />} />
                        <Route path='list' element={<AdminUserCmt />} />
                        <Route path=':id' element={<UserUpdate />} />
                    </Route>
                    <Route path='profile' element={<ProfileManagement />}>
                        <Route path="" element={<Navigate to="list" replace />} />
                        <Route path='list/:id' element={<ProfileReadOnly />} />
                        <Route path='list' element={<ProfileManagementCmt />} />
                        <Route path=':id' element={<ProfileUpdate />} />
                    </Route>
                    <Route path='reports' element={<Reports />} >
                        <Route path='' element={<ReportsCmt />} />
                    </Route>
                    <Route path='roles' element={<Role />} >
                        <Route path="" element={<Navigate to="list" replace />} />
                        <Route path='list' element={<RoleList />} />
                        <Route path='new' element={<AddNewRole />} />
                        <Route path='edit/:id' element={<RoleUpdate />} />
                    </Route>
                    <Route path='download-center' element={<DownloadCenter />} />
                </Route>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
