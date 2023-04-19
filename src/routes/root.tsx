import { Route, Routes } from "react-router-dom";
import { HomePage, NotFound, Login, Admin } from '../pages'

export default function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
