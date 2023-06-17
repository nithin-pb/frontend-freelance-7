import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthorization } from "../hooks";

export function ProtectedRoute(props: IProtectedRoute) {
    const { children } = { ...props }
    const location = useLocation();
    const { authorization } = useAuthorization()
    const { authorized, accessToken } = authorization
    const loginRedirect = !authorized && !accessToken
    if (loginRedirect) {
        return (
            <Navigate
                to={'/login'}
                state={{ from: location }} />
        )
    }
    return children ? children : <Outlet />;
}

interface IProtectedRoute {
    children?: any
}