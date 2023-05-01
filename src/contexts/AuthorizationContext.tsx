import { createContext } from "react";


const AuthorizationContext = createContext<IAuthorizationContext>({
    authorization: {
        authorized: false,
        accessToken: null
    },
    setAuthorization: (e: any) => { }
});



interface IAuthorizationContext {
    authorization: {
        authorized: boolean,
        accessToken: null | string | number
    },
    setAuthorization: (e: any) => any
}
export default AuthorizationContext;