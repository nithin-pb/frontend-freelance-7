import { useMutation, useQuery } from "@tanstack/react-query";

import { apiEndPoint } from "../../service/api-endpoint"
import { useAxios } from "../"
//import { apiResponseError } from "../../helper";


const useProfile = () => {
    const { axios, axiosPrivate } = useAxios();

    const useCreateProfile = useMutation(
        (params: any) => axios.post(apiEndPoint.profile.create, params)
            .then((e: any) => e?.data?.data)
    )
    const useCreateSocialMedia = useMutation(
        (params: any) => axiosPrivate.post(apiEndPoint.socialMedia.create, params)
            .then((e: any) => e?.data?.data))

    const useListProfile = () => useQuery(['profileList'],
        (params: any) => axiosPrivate.get(apiEndPoint.profile.list, params)
            .then((e: any) => e?.data?.data))

    const useListProfileByEmail = useMutation(
        (email: any) => axiosPrivate.get(`${apiEndPoint.profile.list}/${email}`)
            .then((e: any) => e?.data?.data))
    return {
        useCreateProfile,
        useCreateSocialMedia,
        useListProfile,
        useListProfileByEmail,
    }
}

export default useProfile