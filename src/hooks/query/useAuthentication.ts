import { useMutation } from "@tanstack/react-query";

import { apiEndPoint } from "../../service/api-endpoint"
import { useAxios } from "../"
//import { apiResponseError } from "../../helper";


const useAuthentication = () => {
    const { axios, axiosPrivate } = useAxios();

    const useSignIn = useMutation(
        (params: any) => axios.post(apiEndPoint.signIn, params.params, params.options)
            .then((e: any) => e?.data?.data)
    )
    const useLogout = useMutation((params: any) => axiosPrivate.post(apiEndPoint.logout, params).then((e: any) => e?.data?.result))

    return {
        useSignIn,
        useLogout
    }
}

export default useAuthentication